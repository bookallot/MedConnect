// Clinical MBBS Knowledge Base for Assam & Northeast Indian Health Profile
const ClinicalGuidelines = {
  // Fever / Infection / Flu / Dengue / Malaria
  fever: {
    condition: "Acute Febrile Illness / Viral Syndrome",
    urgency: "MODERATE",
    prescription: [
      { name: "Tab. Paracetamol 650 mg (Calpol / Dolo 650)", dosage: "1 tablet SOS after food (Max 3 times daily)", duration: "3-5 days" },
      { name: "Oral Rehydration Salts (ORS Electral)", dosage: "1 sachet in 1 Litre boiled & cooled water, sip throughout the day", duration: "As needed" },
      { name: "Tab. Pantoprazole 40 mg (Pan-40)", dosage: "1 tablet once daily before breakfast", duration: "5 days" }
    ],
    diagnostics: [
      "Complete Blood Count (CBC) with Platelet count",
      "Dengue NS1 Antigen & IgM/IgG Serology",
      "Malaria Antigen (Pv / Pf Rapid Test)",
      "Urine Routine & Microscopic Examination"
    ],
    diet: [
      "Light, high-protein khichdi with boiled vegetables",
      "Fresh coconut water, clear chicken or veg broth for electrolyte balance",
      "Strictly avoid oily, spicy street foods and cold refrigerated drinks",
      "Drink at least 2.5 - 3 Litres of clean lukewarm water daily"
    ],
    emergencyWarning: "Rush to GMCH or nearest emergency room if high fever exceeds 103°F, severe persistent vomiting, or petechial rash/bleeding occurs."
  },

  // Headache / Migraine / Tension Cephalea
  headache: {
    condition: "Primary Headache Syndrome / Cephalea",
    urgency: "ROUTINE",
    prescription: [
      { name: "Tab. Naproxen 250 mg + Domperidone 10 mg (Napra-D)", dosage: "1 tablet SOS after meals", duration: "3 days" },
      { name: "Tab. Magnesium Glycinate 250 mg", dosage: "1 tablet at bedtime", duration: "10 days" }
    ],
    diagnostics: [
      "Blood Pressure monitoring (morning & evening for 3 days)",
      "Refraction & Eye checkup (at Sri Sankaradeva Nethralaya)",
      "Non-contrast CT Brain (only if persistent thunderclap headache or focal neurological signs)"
    ],
    diet: [
      "Warm ginger-tulsi infusion to relieve vascular tension",
      "Adequate hydration; avoid skipping meals or irregular sleep schedules",
      "Limit high caffeine and fermented processed foods"
    ],
    emergencyWarning: "Seek immediate emergency evaluation if headache is accompanied by neck stiffness, vision blackout, facial deviation, or limb weakness."
  },

  // Chest Pain / Cardiac / Breathlessness
  chestpain: {
    condition: "Suspected Acute Coronary Syndrome / Angina",
    urgency: "CRITICAL_EMERGENCY",
    prescription: [
      { name: "Tab. Aspirin 300 mg (Soluble/Chewable)", dosage: "Immediate STAT dose chewable", duration: "Single dose" },
      { name: "Tab. Sorbitrate 5 mg (Isosorbide Dinitrate)", dosage: "1 tablet sublingually under tongue (Only if SBP > 100 mmHg)", duration: "Emergency SOS" }
    ],
    diagnostics: [
      "Immediate 12-Lead Electrocardiogram (ECG STAT)",
      "Serum Troponin-I / Troponin-T High Sensitivity Quantitative",
      "Echocardiography (2D Echo) with Doppler"
    ],
    diet: [
      "Do NOT ingest heavy solid meals immediately during acute episodes",
      "Long term: Strictly salt-restricted diet (< 2g/day), zero trans-fats, heart-healthy steamed meals"
    ],
    emergencyWarning: "🚨 CRITICAL TRIAGE ALERT: Immediate ambulance transport to GMCH Emergency or Apollo Hospital Cath Lab. Do not drive yourself."
  },

  // Stomach Pain / Acidity / Gastritis / Indigestion
  acidity: {
    condition: "Gastroesophageal Reflux Disease (GERD) / Acute Gastritis",
    urgency: "ROUTINE",
    prescription: [
      { name: "Cap. Rabeprazole 20 mg + Levosulpiride 75 mg (Razo-L)", dosage: "1 capsule empty stomach in morning", duration: "7 days" },
      { name: "Gel. Sucralfate + Oxetacaine (Mucaine Gel)", dosage: "10 ml 15 mins before lunch and dinner", duration: "5 days" }
    ],
    diagnostics: [
      "Ultrasound Whole Abdomen (fasting)",
      "Stool Routine & Occult Blood",
      "Upper GI Endoscopy (if symptoms persist > 2 weeks)"
    ],
    diet: [
      "Small, frequent meals; avoid keeping stomach completely empty for > 4 hours",
      "Avoid excess chillies, mustard oil, black tea on empty stomach, and tobacco/tamul",
      "Incorporate curd, tender coconut water, and papaya"
    ],
    emergencyWarning: "If pain radiates to back or accompanies vomiting coffee-ground blood or black tarry stools, report to emergency immediately."
  },

  // Diabetes / Sugar
  diabetes: {
    condition: "Type 2 Diabetes Mellitus / Glycemic Dysregulation",
    urgency: "ROUTINE",
    prescription: [
      { name: "Tab. Metformin 500 mg SR", dosage: "1 tablet with dinner (Under doctor prescription)", duration: "Regular" },
      { name: "Cap. Methylcobalamin + Alpha Lipoic Acid", dosage: "1 capsule daily after lunch", duration: "1 month" }
    ],
    diagnostics: [
      "Fasting Blood Sugar (FBS) & Post Prandial (PPBS)",
      "Glycated Hemoglobin (HbA1c)",
      "Lipid Profile & Serum Creatinine with eGFR"
    ],
    diet: [
      "Low glycemic index foods: brown rice or multigrain roti instead of refined maida",
      "Include local green saag (paleng, dhekia), methi seeds soaked in water",
      "Strictly avoid sweets, sweetened milk teas, sugary sodas, and potatoes"
    ],
    emergencyWarning: "Watch for hypoglycemia symptoms: cold sweating, tremors, confusion. Keep glucose tablets or sweet fruit juice handy."
  },

  // Default / General Consultation
  general: {
    condition: "General Clinical Health Evaluation",
    urgency: "ROUTINE",
    prescription: [
      { name: "Multivitamin + Zinc Supplement (Becozinc / Supradyn)", dosage: "1 tablet once daily after lunch", duration: "15 days" },
      { name: "Steam Inhalation / Saline gargles", dosage: "Twice daily if respiratory throat irritation", duration: "5 days" }
    ],
    diagnostics: [
      "Comprehensive Health Screening (CBC, LFT, KFT, Blood Sugar)",
      "Vital signs monitoring (Blood pressure, Pulse, SpO2)"
    ],
    diet: [
      "Balanced home-cooked meal with local seasonal greens, lentils (dal), and adequate hydration",
      "Adequate 7-8 hours sleep and 30 minutes light aerobic walking"
    ],
    emergencyWarning: "Consult an in-person physician if symptoms worsen or do not show improvement within 48 hours."
  }
};

function analyzeClinicalIssue(symptomsText) {
  const text = (symptomsText || "").toLowerCase();
  
  if (/chest|heart|angina|pulse|breathing|breathless|দুখ|বুকুৰ বিষ|छाती/i.test(text)) {
    return ClinicalGuidelines.chestpain;
  }
  if (/fever|temperature|shivering|chills|dengue|malaria|জ্বৰ|बुखार/i.test(text)) {
    return ClinicalGuidelines.fever;
  }
  if (/head|headache|migraine|dizzy|giddiness|মূৰৰ বিষ|सिर दर्द/i.test(text)) {
    return ClinicalGuidelines.headache;
  }
  if (/stomach|abdomen|acidity|gas|vomit|nausea|loose|পেটৰ বিষ|पेट/i.test(text)) {
    return ClinicalGuidelines.acidity;
  }
  if (/sugar|diabetes|diabetic|glucose|মধুমেহ|शुगर/i.test(text)) {
    return ClinicalGuidelines.diabetes;
  }

  return ClinicalGuidelines.general;
}

if (typeof module !== 'undefined') {
  module.exports = { analyzeClinicalIssue, ClinicalGuidelines };
}
