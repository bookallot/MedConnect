const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Load Datasets
const indiaStatesGeo = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'india_states_enriched.geojson'), 'utf8'));
const assamDistrictsGeo = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'assam_enriched.geojson'), 'utf8'));
const { majorIndianCities } = require('./public/india_cities.js');
const { healthcareCategories } = require('./public/healthcare_categories.js');
const { nationalHospitalDirectory } = require('./public/national_hospitals.js');

// In-Memory Consultations & Tele-Triage Store
let consultations = [];

// 1. GET /api/india/overview - India-wide Health Overview
app.get('/api/india/overview', (req, res) => {
  const totalFacilities = indiaStatesGeo.features.reduce((sum, f) => sum + (f.properties.facilities || 0), 0);
  const totalCities = majorIndianCities.length;
  const totalStates = indiaStatesGeo.features.length;

  res.json({
    brand: "HealthConnect India",
    tagline: "Find Healthcare. Closer to You.",
    initialMarket: "Assam",
    totalFacilities,
    totalCitiesCovered: totalCities,
    totalStatesCovered: totalStates,
    verifiedFacilitiesCount: nationalHospitalDirectory.length,
    categoriesCount: healthcareCategories.length,
    activeConsultationsCount: consultations.length,
    operationalStatus: {
      activeState: "Assam",
      activeCities: ["Guwahati", "Delhi", "Mumbai", "Kolkata", "Pune", "Hyderabad", "Bengaluru"],
      expansionPipelines: ["Meghalaya", "Arunachal Pradesh", "West Bengal", "Maharashtra", "Telangana", "Delhi NCR"]
    }
  });
});

// 2. GET /api/states - All Indian States
app.get('/api/states', (req, res) => {
  const list = indiaStatesGeo.features.map(f => ({
    id: f.id,
    name: f.properties.NAME_1,
    code: f.properties.stateCode,
    facilities: f.properties.facilities,
    cities: f.properties.cities,
    isOperational: f.properties.isOperational,
    hq: f.properties.hq
  })).sort((a, b) => b.facilities - a.facilities);

  res.json({ count: list.length, states: list });
});

// 3. GET /api/states/:stateName/cities
app.get('/api/states/:stateName/cities', (req, res) => {
  const stateQuery = req.params.stateName.toLowerCase();
  const matched = majorIndianCities.filter(c => c.state.toLowerCase() === stateQuery || (c.stateCode && c.stateCode.toLowerCase() === stateQuery));
  res.json({ state: req.params.stateName, count: matched.length, cities: matched });
});

// 4. GET /api/cities - All Major Cities
app.get('/api/cities', (req, res) => {
  res.json({ count: majorIndianCities.length, cities: majorIndianCities });
});

// 5. GET /api/cities/:cityId - Single City Details & Verified Facilities
app.get('/api/cities/:cityId', (req, res) => {
  const param = req.params.cityId.toLowerCase();
  const city = majorIndianCities.find(c => 
    c.id.toLowerCase() === param || 
    c.name.toLowerCase() === param ||
    (c.id === 'new-delhi' && param === 'delhi')
  );
  
  if (!city) {
    return res.status(404).json({ error: "City not found" });
  }

  // Filter national directory for this city
  const cityInstitutions = nationalHospitalDirectory.filter(h => 
    h.cityId.toLowerCase() === city.id.toLowerCase() || 
    h.cityName.toLowerCase() === city.name.toLowerCase() ||
    (city.id === 'new-delhi' && (h.cityId === 'new-delhi' || h.cityName.toLowerCase().includes('delhi')))
  );

  res.json({
    city,
    verifiedFacilities: cityInstitutions,
    count: cityInstitutions.length
  });
});

// 6. GET /api/healthcare/categories
app.get('/api/healthcare/categories', (req, res) => {
  res.json(healthcareCategories);
});

// 7. GET /api/healthcare/search - Live Discovery Autocomplete & Multi-Category Search
app.get('/api/healthcare/search', (req, res) => {
  const { query, city, state, categories } = req.query;
  const q = (query || "").trim().toLowerCase();

  const cityMatches = majorIndianCities.filter(c => 
    c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q)
  );

  const stateMatches = indiaStatesGeo.features.filter(f => 
    f.properties.NAME_1.toLowerCase().includes(q)
  ).map(f => ({
    name: f.properties.NAME_1,
    code: f.properties.stateCode,
    facilities: f.properties.facilities,
    cities: f.properties.cities
  }));

  let matchedInstitutions = [...nationalHospitalDirectory];

  // Filter by City if specified
  if (city) {
    const cityLower = city.toLowerCase();
    matchedInstitutions = matchedInstitutions.filter(h =>
      h.cityId.toLowerCase() === cityLower ||
      h.cityName.toLowerCase() === cityLower ||
      (cityLower === 'delhi' && h.cityName.toLowerCase().includes('delhi'))
    );
  }

  // Filter by State if specified
  if (state) {
    const stateLower = state.toLowerCase();
    matchedInstitutions = matchedInstitutions.filter(h =>
      h.stateName.toLowerCase() === stateLower
    );
  }

  // Filter by Categories
  if (categories) {
    const catList = categories.split(',').map(s => s.trim().toLowerCase());
    if (!catList.includes('all')) {
      matchedInstitutions = matchedInstitutions.filter(h => {
        return catList.some(cat => {
          const normCat = cat.replace(/-/g, '_');
          if (h.category === normCat || h.category === cat) return true;
          if (cat === 'emergency_services' && h.emergency24x7) return true;
          if (cat === 'blood_banks' && h.bloodBank) return true;
          return false;
        });
      });
    }
  }

  // Text Query filtering
  if (q) {
    matchedInstitutions = matchedInstitutions.filter(h =>
      h.name.toLowerCase().includes(q) ||
      h.cityName.toLowerCase().includes(q) ||
      h.address.toLowerCase().includes(q) ||
      h.type.toLowerCase().includes(q) ||
      (h.specialties && h.specialties.some(s => s.toLowerCase().includes(q))) ||
      (h.facilities && h.facilities.some(f => f.toLowerCase().includes(q)))
    );
  }

  res.json({
    query: req.query.query || '',
    suggestions: {
      cities: cityMatches.slice(0, 6),
      states: stateMatches.slice(0, 4)
    },
    institutions: matchedInstitutions,
    count: matchedInstitutions.length
  });
});

// 8. POST /api/consultations/request - Receives Clinical Reports from Interactive Bot & Triggers Doctor Call
app.post('/api/consultations/request', (req, res) => {
  const {
    fullName,
    age,
    phone,
    chiefComplaint,
    city,
    district,
    preferredLanguage,
    isEmergency,
    illnessAssessment,
    triageLevel,
    prescription,
    diagnostics,
    dietAdvice,
    assignedHospital
  } = req.body;

  const caseId = req.body.caseId || `CAS-2026-IN-${String(consultations.length + 101).padStart(3, '0')}`;
  
  const newConsult = {
    caseId,
    fullName: fullName || "Registered Patient",
    age: age || "Adult",
    phone: phone || "+91-9876543210",
    chiefComplaint: chiefComplaint || "Clinical Evaluation",
    illnessAssessment: illnessAssessment || "General Clinical Health Evaluation",
    triageLevel: triageLevel || (isEmergency ? "CRITICAL_EMERGENCY" : "STANDARD_TRIAGE"),
    city: city || "Guwahati",
    district: district || "Kamrup Metropolitan",
    preferredLanguage: preferredLanguage || "en",
    isEmergency: Boolean(isEmergency),
    status: isEmergency ? "EMERGENCY_DISPATCH_TRIGGERED" : "DOCTOR_CALL_ESTABLISHED",
    doctorAssigned: "Dr. Debabrata Roy, MBBS, MD (AMC/04882)",
    assignedHospital: assignedHospital || "Gauhati Medical College and Hospital (GMCH)",
    prescription: prescription || [],
    diagnostics: diagnostics || [],
    dietAdvice: dietAdvice || [],
    callInitiated: true,
    timestamp: new Date().toISOString()
  };

  consultations.unshift(newConsult);
  console.log(`[Tele-Triage Log] New Case ${caseId} received from ${newConsult.fullName} in ${newConsult.city}. Doctor call initiated.`);
  res.json({ success: true, consultation: newConsult });
});

// 9. GET /api/consultations - List Active Tele-Triage Consultations
app.get('/api/consultations', (req, res) => {
  res.json({
    totalCount: consultations.length,
    activeCases: consultations
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`================================================================`);
  console.log(`  HealthConnect India - 3D Emerald Glass Discovery Server`);
  console.log(`  Live URL: http://localhost:${PORT}`);
  console.log(`  National Directory Loaded: ${nationalHospitalDirectory.length} verified facilities across India`);
  console.log(`  Interactive Doctor Tele-Triage: ACTIVE`);
  console.log(`================================================================`);
});
