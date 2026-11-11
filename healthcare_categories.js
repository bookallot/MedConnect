const healthcareCategories = [
  { id: "all", name: "All Healthcare", icon: "🏥", slug: "all" },
  { id: "government_hospitals", name: "Government Hospitals", icon: "🏛️", slug: "government-hospitals" },
  { id: "private_hospitals", name: "Private Hospitals", icon: "🏥", slug: "private-hospitals" },
  { id: "diagnostic_centres", name: "Diagnostic Centres", icon: "🔬", slug: "diagnostic-centres" },
  { id: "doctor_clinics", name: "Doctor Clinics", icon: "👨‍⚕️", slug: "doctor-clinics" },
  { id: "radiology_centres", name: "Radiology Centres", icon: "🩻", slug: "radiology-centres" },
  { id: "dialysis_centres", name: "Dialysis Centres", icon: "🩺", slug: "dialysis-centres" },
  { id: "blood_banks", name: "Blood Banks", icon: "🩸", slug: "blood-banks" },
  { id: "pharmacies", name: "Pharmacies", icon: "💊", slug: "pharmacies" },
  { id: "nursing_homes", name: "Nursing Homes", icon: "🛏️", slug: "nursing-homes" },
  { id: "specialist_centres", name: "Specialist Centres", icon: "👁️", slug: "specialist-centres" },
  { id: "home_healthcare", name: "Home Healthcare", icon: "🏠", slug: "home-healthcare" },
  { id: "emergency_services", name: "Emergency Services", icon: "🚨", slug: "emergency-services" },
  { id: "other_services", name: "Other Healthcare Services", icon: "✨", slug: "other-services" }
];

if (typeof module !== 'undefined') {
  module.exports = { healthcareCategories };
}
