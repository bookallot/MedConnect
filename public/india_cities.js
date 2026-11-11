const majorIndianCities = [
  // Assam Cities (Operational First Market)
  {
    id: "guwahati",
    name: "Guwahati",
    state: "Assam",
    stateCode: "AS",
    lat: 26.1445,
    lng: 91.7362,
    healthcareCount: 248,
    categoriesCount: {
      government_hospitals: 12,
      private_hospitals: 38,
      diagnostic_centres: 48,
      doctor_clinics: 72,
      radiology_centres: 15,
      dialysis_centres: 12,
      blood_banks: 10,
      pharmacies: 61,
      nursing_homes: 14,
      specialist_centres: 22,
      home_healthcare: 8,
      emergency_services: 18
    },
    isOperational: true,
    description: "Apex healthcare capital of Northeast India, housing AIIMS Guwahati, GMCH, and Apollo."
  },
  {
    id: "north-guwahati",
    name: "North Guwahati",
    state: "Assam",
    stateCode: "AS",
    lat: 26.1950,
    lng: 91.7150,
    healthcareCount: 42,
    categoriesCount: {
      government_hospitals: 2,
      private_hospitals: 6,
      diagnostic_centres: 8,
      doctor_clinics: 14,
      dialysis_centres: 2,
      blood_banks: 2,
      pharmacies: 12
    },
    isOperational: true,
    description: "Hub across the Brahmaputra housing Narayana Super Speciality and IIT Guwahati Health Centre."
  },
  {
    id: "dibrugarh",
    name: "Dibrugarh",
    state: "Assam",
    stateCode: "AS",
    lat: 27.4728,
    lng: 94.9120,
    healthcareCount: 165,
    categoriesCount: {
      government_hospitals: 8,
      private_hospitals: 24,
      diagnostic_centres: 32,
      doctor_clinics: 48,
      radiology_centres: 10,
      dialysis_centres: 8,
      blood_banks: 6,
      pharmacies: 45
    },
    isOperational: true,
    description: "Upper Assam apex medical zone anchored by Assam Medical College & Hospital (AMCH)."
  },
  {
    id: "silchar",
    name: "Silchar",
    state: "Assam",
    stateCode: "AS",
    lat: 24.8333,
    lng: 92.7789,
    healthcareCount: 138,
    categoriesCount: {
      government_hospitals: 6,
      private_hospitals: 18,
      diagnostic_centres: 26,
      doctor_clinics: 42,
      radiology_centres: 8,
      dialysis_centres: 6,
      blood_banks: 5,
      pharmacies: 38
    },
    isOperational: true,
    description: "Barak Valley tertiary medical hub featuring Silchar Medical College & Hospital (SMCH)."
  },
  {
    id: "jorhat",
    name: "Jorhat",
    state: "Assam",
    stateCode: "AS",
    lat: 26.7509,
    lng: 94.2037,
    healthcareCount: 120,
    categoriesCount: {
      government_hospitals: 5,
      private_hospitals: 16,
      diagnostic_centres: 22,
      doctor_clinics: 36,
      dialysis_centres: 5,
      blood_banks: 4,
      pharmacies: 32
    },
    isOperational: true,
    description: "Central Upper Assam medical seat housing Jorhat Medical College (JMCH)."
  },
  {
    id: "tezpur",
    name: "Tezpur",
    state: "Assam",
    stateCode: "AS",
    lat: 26.6528,
    lng: 92.7926,
    healthcareCount: 98,
    categoriesCount: {
      government_hospitals: 5,
      private_hospitals: 12,
      diagnostic_centres: 18,
      doctor_clinics: 28,
      blood_banks: 3,
      pharmacies: 26
    },
    isOperational: true,
    description: "North Bank regional hub with Tezpur Medical College (TMCH) & LGBRIMH."
  },
  {
    id: "nagaon",
    name: "Nagaon",
    state: "Assam",
    stateCode: "AS",
    lat: 26.3466,
    lng: 92.6840,
    healthcareCount: 92,
    categoriesCount: {
      government_hospitals: 4,
      private_hospitals: 12,
      diagnostic_centres: 16,
      doctor_clinics: 26,
      pharmacies: 28
    },
    isOperational: true,
    description: "Central Assam medical junction with Nagaon Medical College (NMCH)."
  },
  {
    id: "tinsukia",
    name: "Tinsukia",
    state: "Assam",
    stateCode: "AS",
    lat: 27.4922,
    lng: 95.3468,
    healthcareCount: 84,
    categoriesCount: {
      government_hospitals: 4,
      private_hospitals: 10,
      diagnostic_centres: 14,
      doctor_clinics: 24,
      pharmacies: 26
    },
    isOperational: true,
    description: "Industrial tea belt healthcare hub with Civil Hospital & trauma care units."
  },
  {
    id: "dhubri",
    name: "Dhubri",
    state: "Assam",
    stateCode: "AS",
    lat: 26.0207,
    lng: 89.9744,
    healthcareCount: 76,
    categoriesCount: {
      government_hospitals: 3,
      private_hospitals: 8,
      diagnostic_centres: 12,
      doctor_clinics: 22,
      pharmacies: 24
    },
    isOperational: true,
    description: "Western frontier medical center anchored by Dhubri Medical College."
  },
  {
    id: "nalbari",
    name: "Nalbari",
    state: "Assam",
    stateCode: "AS",
    lat: 26.4447,
    lng: 91.4402,
    healthcareCount: 68,
    categoriesCount: {
      government_hospitals: 3,
      private_hospitals: 8,
      diagnostic_centres: 11,
      doctor_clinics: 20,
      pharmacies: 20
    },
    isOperational: true,
    description: "Lower Assam seat with Nalbari Medical College (NMCH) & maternity units."
  },

  // Major National Metros & Regional Hubs
  {
    id: "new-delhi",
    name: "New Delhi",
    state: "Delhi",
    stateCode: "DL",
    lat: 28.6139,
    lng: 77.2090,
    healthcareCount: 1420,
    categoriesCount: {
      government_hospitals: 68,
      private_hospitals: 240,
      diagnostic_centres: 310,
      doctor_clinics: 420,
      radiology_centres: 85,
      dialysis_centres: 62,
      blood_banks: 45,
      pharmacies: 380
    },
    isOperational: false,
    description: "National Capital Region medical hub, AIIMS New Delhi, Safdarjung, Max, and Apollo."
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    stateCode: "MH",
    lat: 19.0760,
    lng: 72.8777,
    healthcareCount: 1280,
    categoriesCount: {
      government_hospitals: 52,
      private_hospitals: 210,
      diagnostic_centres: 280,
      doctor_clinics: 390,
      radiology_centres: 75,
      dialysis_centres: 54,
      blood_banks: 42,
      pharmacies: 340
    },
    isOperational: false,
    description: "Western financial & cancer care hub (Tata Memorial Hospital, KEM, Hinduja, Lilavati)."
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    stateCode: "KA",
    lat: 12.9716,
    lng: 77.5946,
    healthcareCount: 1150,
    categoriesCount: {
      government_hospitals: 42,
      private_hospitals: 195,
      diagnostic_centres: 250,
      doctor_clinics: 360,
      radiology_centres: 68,
      dialysis_centres: 48,
      blood_banks: 36,
      pharmacies: 310
    },
    isOperational: false,
    description: "India's HealthTech capital with NIMHANS, Narayana Health City, and Manipal."
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    stateCode: "TG",
    lat: 17.3850,
    lng: 78.4867,
    healthcareCount: 980,
    categoriesCount: {
      government_hospitals: 38,
      private_hospitals: 170,
      diagnostic_centres: 210,
      doctor_clinics: 310,
      radiology_centres: 55,
      dialysis_centres: 42,
      blood_banks: 32,
      pharmacies: 260
    },
    isOperational: false,
    description: "Pharma and super-specialty corridor (Apollo Health City, Yashoda, KIMS)."
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    stateCode: "TN",
    lat: 13.0827,
    lng: 80.2707,
    healthcareCount: 1040,
    categoriesCount: {
      government_hospitals: 44,
      private_hospitals: 180,
      diagnostic_centres: 230,
      doctor_clinics: 340,
      radiology_centres: 60,
      dialysis_centres: 46,
      blood_banks: 35,
      pharmacies: 280
    },
    isOperational: false,
    description: "Medical tourism capital with Apollo Main, MMC, Shankara Nethralaya, MIOT."
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    stateCode: "WB",
    lat: 22.5726,
    lng: 88.3639,
    healthcareCount: 890,
    categoriesCount: {
      government_hospitals: 40,
      private_hospitals: 145,
      diagnostic_centres: 190,
      doctor_clinics: 280,
      radiology_centres: 50,
      dialysis_centres: 38,
      blood_banks: 30,
      pharmacies: 240
    },
    isOperational: false,
    description: "Eastern medical hub (SSKM, Medical College Kolkata, AMRI, Fortis, Tata Medical Center)."
  },
  {
    id: "pune",
    name: "Pune",
    state: "Maharashtra",
    stateCode: "MH",
    lat: 18.5204,
    lng: 73.8567,
    healthcareCount: 680,
    categoriesCount: {
      government_hospitals: 26,
      private_hospitals: 110,
      diagnostic_centres: 150,
      doctor_clinics: 220,
      pharmacies: 180
    },
    isOperational: false,
    description: "Leading medical education & vaccine manufacturing center (Sassoon, Ruby Hall, Jehangir)."
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    stateCode: "RJ",
    lat: 26.9124,
    lng: 75.7873,
    healthcareCount: 540,
    categoriesCount: {
      government_hospitals: 24,
      private_hospitals: 90,
      diagnostic_centres: 120,
      doctor_clinics: 180,
      pharmacies: 150
    },
    isOperational: false,
    description: "Northwest medical hub featuring SMS Hospital and Eternal Heart Care."
  },
  {
    id: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    stateCode: "UP",
    lat: 26.8467,
    lng: 80.9462,
    healthcareCount: 620,
    categoriesCount: {
      government_hospitals: 28,
      private_hospitals: 105,
      diagnostic_centres: 135,
      doctor_clinics: 195,
      pharmacies: 165
    },
    isOperational: false,
    description: "Central UP apex medical seat with KGMU and SGPGI."
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    stateCode: "GJ",
    lat: 23.0225,
    lng: 72.5714,
    healthcareCount: 710,
    categoriesCount: {
      government_hospitals: 30,
      private_hospitals: 120,
      diagnostic_centres: 160,
      doctor_clinics: 230,
      pharmacies: 190
    },
    isOperational: false,
    description: "Western healthcare cluster with Civil Hospital, UN Mehta Heart Institute, and Zydus."
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    stateCode: "CH",
    lat: 30.7333,
    lng: 76.7794,
    healthcareCount: 410,
    categoriesCount: {
      government_hospitals: 18,
      private_hospitals: 65,
      diagnostic_centres: 90,
      doctor_clinics: 140,
      pharmacies: 110
    },
    isOperational: false,
    description: "Northern tertiary healthcare landmark anchored by PGIMER Chandigarh."
  },
  {
    id: "bhubaneswar",
    name: "Bhubaneswar",
    state: "Orissa",
    stateCode: "OR",
    lat: 20.2961,
    lng: 85.8245,
    healthcareCount: 460,
    categoriesCount: {
      government_hospitals: 19,
      private_hospitals: 75,
      diagnostic_centres: 100,
      doctor_clinics: 150,
      pharmacies: 120
    },
    isOperational: false,
    description: "Odisha capital medical cluster featuring AIIMS Bhubaneswar, SCB Cuttack, and KIMS."
  },
  {
    id: "patna",
    name: "Patna",
    state: "Bihar",
    stateCode: "BR",
    lat: 25.5941,
    lng: 85.1376,
    healthcareCount: 480,
    categoriesCount: {
      government_hospitals: 22,
      private_hospitals: 80,
      diagnostic_centres: 110,
      doctor_clinics: 160,
      pharmacies: 130
    },
    isOperational: false,
    description: "Eastern medical center featuring AIIMS Patna, PMCH, and Paras HMRI."
  },
  {
    id: "kochi",
    name: "Kochi",
    state: "Kerala",
    stateCode: "KL",
    lat: 9.9312,
    lng: 76.2673,
    healthcareCount: 520,
    categoriesCount: {
      government_hospitals: 20,
      private_hospitals: 88,
      diagnostic_centres: 115,
      doctor_clinics: 170,
      pharmacies: 140
    },
    isOperational: false,
    description: "Southern medical hub with Amrita Institute of Medical Sciences and Aster Medcity."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { majorIndianCities };
}
