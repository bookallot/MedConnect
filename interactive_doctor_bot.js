/* ==========================================================================
   HealthConnect India: Human-Tone Clinical Calling Agent & Tele-Triage System
   - Natural, empathetic bedside doctor voice in English (IN), Hindi & Assamese
   - Clinical symptom understanding & health issue clarification
   - Locality & neighborhood inquiry with live 3D map street fly-to
   - Nearby doctor clinics, polyclinics & hospital recommendations
   - Natural verbal guidance on dietary changes, home solutions & exact medicine doses
   - Interactive in-call microphone listening, transcript & neighborhood quick chips
   ========================================================================== */

const cityNeighborhoods = {
  "guwahati": [
    { name: "Bhangagarh", clinic: "Gauhati Medical College & Hospital (GMCH) / Agilus Diagnostics", hospId: "guw-gmch", lat: 26.1555, lng: 91.7709, address: "Bhangagarh, GS Road", desc: "Apex Tertiary Care, OPD & 24x7 Emergency" },
    { name: "Ulubari", clinic: "Apollo Clinic Ulubari (Multi-Specialty OPD)", hospId: "guw-apollo-clinic", lat: 26.1705, lng: 91.7562, address: "GS Road, Ulubari Crossing", desc: "Senior Consultant Physicians & Diagnostic Lab" },
    { name: "Dispur / Ganeshguri", clinic: "GNRC Hospital & Dispur Diagnostic Centre", hospId: "guw-gnrc-dispur", lat: 26.1418, lng: 91.7891, address: "GS Road, Dispur Secretariat", desc: "Stroke Ready Neurology, Cardiology & Trauma" },
    { name: "Beltola", clinic: "Sri Sankaradeva Nethralaya (SSN Eye Care)", hospId: "guw-ssn", lat: 26.1162, lng: 91.7981, address: "Basistha Road, Beltola", desc: "Premier Eye Care & Cornea Institute" },
    { name: "Gopinath Nagar", clinic: "Dr. B. Borooah Cancer Institute (BBCI)", hospId: "guw-bbci", lat: 26.1652, lng: 91.7468, address: "AK Azad Road, Gopinath Nagar", desc: "Tata Memorial Grant-in-Aid Cancer Centre" },
    { name: "Boragaon", clinic: "Apollo Hospitals Guwahati (NH-37)", hospId: "guw-apollo", lat: 26.1385, lng: 91.7056, address: "Paschim Boragaon, NH-37", desc: "Quaternary Trauma & Super-Specialty Hospital" },
    { name: "Amingaon / North Guwahati", clinic: "Narayana Superspeciality / AIIMS Guwahati", hospId: "guw-narayana", lat: 26.2163, lng: 91.6885, address: "Amingaon Medical Corridor", desc: "Cardiac Sciences, Oncology & National Institute" },
    { name: "Rehabari", clinic: "Arya Hospital & Community Nursing Home", hospId: "guw-arya-nursing", lat: 26.1738, lng: 91.7482, address: "Rehabari, Bilpar", desc: "Maternity, General Surgery & 24x7 Care" }
  ],
  "new-delhi": [
    { name: "Ansari Nagar / AIIMS", clinic: "AIIMS Delhi & Safdarjung Hospital", hospId: "del-aiims", lat: 28.5678, lng: 77.2096, address: "Ansari Nagar East, Ring Road", desc: "Apex National Medical Institute & Level 1 Trauma" },
    { name: "Saket", clinic: "Max Super Speciality Hospital Saket", hospId: "del-max-saket", lat: 28.5284, lng: 77.2117, address: "Press Enclave Road, Saket", desc: "Comprehensive Oncology & Quaternary Care" },
    { name: "Panchsheel Park", clinic: "Max Multi Speciality Clinic", hospId: "del-max-clinic", lat: 28.5432, lng: 77.2185, address: "N-110, Panchsheel Park", desc: "Executive Outpatient Doctor Chambers" },
    { name: "Old Rajinder Nagar", clinic: "Sir Ganga Ram Hospital", hospId: "del-gangaram", lat: 28.6395, lng: 77.1915, address: "Sir Ganga Ram Hospital Marg", desc: "Multi-Organ Transplant Hub & Dialysis" },
    { name: "Hauz Khas", clinic: "Mahajan Imaging & Labs", hospId: "del-mahajan-imaging", lat: 28.5492, lng: 77.2001, address: "K-18, Hauz Khas Enclave", desc: "High Resolution 3T MRI & Dual Source CT" },
    { name: "Rohini", clinic: "Dr. Lal PathLabs NRL & Rajiv Gandhi Cancer Institute", hospId: "del-rgcirc-cancer", lat: 28.7118, lng: 77.1172, address: "Sector 5 & 18, Rohini", desc: "National Reference Lab & Dedicated Cancer Care" },
    { name: "Connaught Place", clinic: "Apollo Pharmacy 24x7 & Central Clinic", hospId: "del-apollo-pharm-cp", lat: 28.6329, lng: 77.2195, address: "Block L, Connaught Place", desc: "Critical Medicines & Emergency Outpatient" },
    { name: "Lajpat Nagar", clinic: "Moolchand Medcity & Nursing Home", hospId: "del-moolchand-nursing", lat: 28.5661, lng: 77.2348, address: "Near Moolchand Metro", desc: "Maternity, IVF & Multi-Specialty Care" }
  ],
  "mumbai": [
    { name: "Parel", clinic: "Tata Memorial Hospital / KEM Hospital / Apex Kidney Care", hospId: "bom-tmh", lat: 19.0130, lng: 72.8447, address: "Dr. E Borges Road, Parel", desc: "Apex Cancer & Municipal Teaching Hub" },
    { name: "Andheri West", clinic: "Kokilaben Dhirubhai Ambani Hospital / Suburban Diagnostics", hospId: "bom-kokilaben", lat: 19.1311, lng: 72.8252, address: "Four Bungalows, Andheri West", desc: "Full-Time Specialist Quaternary Hospital" },
    { name: "Bandra", clinic: "Wellness Forever 24x7 / Lilavati Care", hospId: "bom-wellness-forever", lat: 19.0596, lng: 72.8295, address: "Hill Road, Bandra West", desc: "Critical Care Pharmacy & Medical Hub" },
    { name: "Mahim", clinic: "P.D. Hinduja Hospital & Medical Research Centre", hospId: "bom-hinduja", lat: 19.0345, lng: 72.8423, address: "Veer Savarkar Marg, Mahim", desc: "Pioneer Cardiac & Neuro Sciences" },
    { name: "Colaba", clinic: "Apollo Clinic Colaba", hospId: "bom-apollo-clinic", lat: 18.9180, lng: 72.8285, address: "Colaba Causeway", desc: "Primary & Family Doctor Chambers" },
    { name: "Breach Candy", clinic: "Breach Candy Hospital & Nursing Home", hospId: "bom-breach-candy", lat: 18.9719, lng: 72.8048, address: "60-A, Bhulabhai Desai Road", desc: "High-Risk Obstetrics & Critical Care" }
  ],
  "kolkata": [
    { name: "Bhowanipore", clinic: "IPGMER & SSKM Hospital / Bangur Neuro", hospId: "ccu-sskm", lat: 22.5397, lng: 88.3411, address: "244, AJC Bose Road", desc: "State Apex Teaching & Level 1 Trauma" },
    { name: "Salt Lake", clinic: "Apollo Clinic Salt Lake / Suraksha Diagnostics", hospId: "ccu-apollo-clinic", lat: 22.5890, lng: 88.4075, address: "Sector 1 & 3, Salt Lake", desc: "Polyclinic & Flagship Reference Lab" },
    { name: "Phoolbagan / EM Bypass", clinic: "Apollo Multispeciality Hospitals Kolkata", hospId: "ccu-apollo", lat: 22.5731, lng: 88.4021, address: "58, Canal Circular Road", desc: "Comprehensive Oncology & CyberKnife" },
    { name: "Anandapur", clinic: "Fortis Hospital Anandapur", hospId: "ccu-fortis", lat: 22.5152, lng: 88.4111, address: "730, Anandapur, EM Bypass", desc: "Cardiac & Nephro-Urology Super Specialty" },
    { name: "Park Street / Loudon St", clinic: "Belle Vue Clinic & Frank Ross 24x7", hospId: "ccu-belle-vue", lat: 22.5429, lng: 88.3529, address: "Loudon Street & Park Street", desc: "Historic Multi-Specialty Nursing Home" },
    { name: "Newtown", clinic: "Chittaranjan National Cancer Institute (CNCI)", hospId: "ccu-cnci-cancer", lat: 22.5830, lng: 88.4735, address: "Action Area 1, Newtown", desc: "Autonomous Central Cancer Hospital" }
  ],
  "pune": [
    { name: "Sassoon Road / Station", clinic: "Ruby Hall Clinic & Jehangir Hospital", hospId: "pnq-rubyhall", lat: 18.5293, lng: 73.8770, address: "Sassoon Road, Sangamvadi", desc: "Multi-Organ Transplant & Level 1 Trauma" },
    { name: "Shivajinagar", clinic: "Hardikar Hospital & Sancheti Clinic", hospId: "pnq-hardikar-nursing", lat: 18.5312, lng: 73.8488, address: "University Road, Shivajinagar", desc: "Renowned Orthopedic, Spine & Fracture Hub" },
    { name: "Deccan / FC Road", clinic: "AG Diagnostics & Star Imaging & Research", hospId: "pnq-ag-diag", lat: 18.5185, lng: 73.8375, address: "Bhandarkar Road / FC Road", desc: "NABL Pathology & 3T MRI Imaging" },
    { name: "Ghole Road", clinic: "National Institute of Ophthalmology (NIO)", hospId: "pnq-nio-eye", lat: 18.5280, lng: 73.8450, address: "Off Ghole Road, Shivajinagar", desc: "Premier Eye Care, Lasik & Cornea Surgery" }
  ],
  "hyderabad": [
    { name: "Jubilee Hills", clinic: "Apollo Hospitals Jubilee Hills", hospId: "hyd-apollo", lat: 17.4151, lng: 78.4123, address: "Road No 72, Film Nagar", desc: "Flagship Quaternary Super-Specialty" },
    { name: "Banjara Hills", clinic: "L.V. Prasad Eye Institute (LVPEI) & MedPlus 24x7", hospId: "hyd-lvpei-eye", lat: 17.4285, lng: 78.4280, address: "Road No 2 & 12, Banjara Hills", desc: "WHO Collaborating Apex Eye Institute" },
    { name: "Punjagutta / Somajiguda", clinic: "Nizam's Institute of Medical Sciences (NIMS)", hospId: "hyd-nims", lat: 17.4218, lng: 78.4520, address: "Punjagutta Road, Somajiguda", desc: "State Apex Autonomous Super Specialty" },
    { name: "Secunderabad", clinic: "Yashoda Hospitals Secunderabad", hospId: "hyd-yashoda-sec", lat: 17.4289, lng: 78.4553, address: "Alexander Road, Secunderabad", desc: "Heart-Lung Transplant & Pulmonology" },
    { name: "Kondapur / Hitec City", clinic: "Apollo Clinic Kondapur", hospId: "hyd-apollo-clinic-kondapur", lat: 17.4640, lng: 78.3610, address: "Main Road, Kondapur", desc: "Multi-Speciality Doctor Consultation Chambers" },
    { name: "Himayatnagar", clinic: "Vijaya Diagnostic Centre Flagship", hospId: "hyd-vijaya-diag", lat: 17.3995, lng: 78.4870, address: "Street No 19, Himayatnagar", desc: "NABL & CAP Accredited Pathology Pioneer" }
  ],
  "bengaluru": [
    { name: "Indiranagar", clinic: "Apollo Clinic Indiranagar & NephroPlus Dialysis", hospId: "blr-apollo-clinic-indiranagar", lat: 12.9730, lng: 77.6400, address: "100 Feet Road & CMH Road", desc: "Consultant Physician OPD & Dialysis" },
    { name: "Lakkasandra / Hosur Rd", clinic: "National Institute of Mental Health & Neurosciences (NIMHANS)", hospId: "blr-nimhans", lat: 12.9396, lng: 77.5988, address: "Hosur Road, Lakkasandra", desc: "Institute of National Importance (Apex Neuro)" },
    { name: "Bommasandra", clinic: "Narayana Health City", hospId: "blr-narayana", lat: 12.8228, lng: 77.6922, address: "258/A, Bommasandra Industrial Area", desc: "Cardiac & Multi-Organ Quaternary Campus" },
    { name: "Shivajinagar / MG Road", clinic: "Neuberg Anand Reference Lab / St. Martha's", hospId: "blr-neuberg-anand", lat: 12.9820, lng: 77.6040, address: "Bowring Road & MG Road", desc: "Premier Pathology & Community Hospital" }
  ]
};

class InteractiveDoctorBot {
  constructor() {
    this.currentLanguage = 'en'; // 'en', 'hi', 'as'
    this.isOpen = false;
    this.isListening = false;
    this.isSpeaking = false;
    this.isRinging = false;
    this.inCall = false;
    this.callTimerInterval = null;
    this.callSeconds = 0;
    this.ringAudioContext = null;
    this.ringInterval = null;

    // State Machine
    this.step = 0;

    this.patientRecord = {
      fullName: 'Gaurab',
      age: '29',
      city: 'Guwahati',
      neighborhood: 'Bhangagarh',
      phone: '7086343142',
      symptoms: '',
      duration: '3 days',
      caseId: '',
      hospitalName: 'Gauhati Medical College and Hospital (GMCH)',
      recommendedClinic: null,
      triageLevel: 'STANDARD_TRIAGE',
      illnessAssessment: 'Clinical Evaluation',
      clinicalPlan: null
    };

    this.initAudioSynthesizer();
    this.initSpeechRecognition();
    this.buildBotInterface();
    this.initVisitorWelcome();
  }

  initAudioSynthesizer() {
    this.synth = window.speechSynthesis;
    this.availableVoices = [];
    if (this.synth) {
      const load = () => { this.availableVoices = this.synth.getVoices(); };
      load();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = load;
      }
    }
  }

  getSweetWelcomeVoice(lang = 'en') {
    if (!this.availableVoices || this.availableVoices.length === 0) {
      this.availableVoices = this.synth ? this.synth.getVoices() : [];
    }
    const voices = this.availableVoices;
    if (lang === 'hi') {
      const v = voices.find(x => x.lang.includes('hi') || x.name.includes('हिन्दी'));
      if (v) return v;
    } else if (lang === 'as') {
      const v = voices.find(x => x.lang.includes('as') || x.lang.includes('bn') || x.lang.includes('hi-IN'));
      if (v) return v;
    }

    // Preference for sweet, melodious, friendly voices
    const sweetNames = [
      'Google UK English Female',
      'Google US English',
      'Microsoft Hazel',
      'Microsoft Susan',
      'Microsoft Zira',
      'Microsoft Jenny',
      'Samantha',
      'Victoria',
      'Karen',
      'Microsoft Heera'
    ];
    for (const name of sweetNames) {
      const match = voices.find(v => v.name.includes(name));
      if (match) return match;
    }
    const anyFemale = voices.find(v => v.name.toLowerCase().includes('female') && v.lang.startsWith('en'));
    if (anyFemale) return anyFemale;
    return this.getDoctorVoice(lang);
  }

  speakSweetWelcome(customText) {
    if (!this.synth) return;
    this.synth.cancel();

    const welcomePhrases = {
      en: "Hey there, What are you looking for? How may I help you?",
      hi: "नमस्ते! आप क्या ढूँढ रहे हैं? मैं आपकी कैसे मदद करूँ?",
      as: "নমস্কাৰ! আপুনি কি বিচাৰিছে? মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ?"
    };

    const phrase = customText || welcomePhrases[this.currentLanguage] || welcomePhrases.en;
    const cleanText = phrase.replace(/<[^>]*>/g, '').replace(/👋|🚨|●|★|🛏|📞|📍|👨‍⚕️|💊|🔬|🥗/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);

    const voice = this.getSweetWelcomeVoice(this.currentLanguage);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = this.currentLanguage === 'hi' ? 'hi-IN' : (this.currentLanguage === 'as' ? 'bn-IN' : 'en-GB');
    }

    // Sweet, charming, cheerful, reassuring tone
    utterance.pitch = 1.15; // slightly higher pitch for sweet welcoming tone
    utterance.rate = 0.94;  // relaxed, comfortable tempo
    utterance.volume = 1.0;

    utterance.onstart = () => {
      this.hasWelcomedWithVoice = true;
      this.setSpeaking(true);
      const pill = document.getElementById('docWelcomePill');
      if (pill) pill.classList.add('speaking');
    };
    utterance.onend = () => {
      this.setSpeaking(false);
      const pill = document.getElementById('docWelcomePill');
      if (pill) pill.classList.remove('speaking');
    };
    utterance.onerror = () => {
      this.setSpeaking(false);
      const pill = document.getElementById('docWelcomePill');
      if (pill) pill.classList.remove('speaking');
    };

    try {
      this.synth.speak(utterance);
    } catch (e) {
      console.warn("Speech playback error:", e);
    }
  }

  initVisitorWelcome() {
    this.hasWelcomedWithVoice = false;

    // 1. Show floating animated greeting pill after 700ms
    setTimeout(() => {
      const pill = document.getElementById('docWelcomePill');
      if (pill) pill.classList.add('active');
    }, 700);

    // 2. Open chat window after 1200ms
    setTimeout(() => {
      this.toggleWindow(true);
    }, 1200);

    // 3. Browser policy: first user gesture triggers the sweet voice reliably
    const triggerAudioOnFirstGesture = () => {
      if (!this.hasWelcomedWithVoice) {
        this.speakSweetWelcome();
      }
      window.removeEventListener('pointerdown', triggerAudioOnFirstGesture);
      window.removeEventListener('touchstart', triggerAudioOnFirstGesture);
      window.removeEventListener('keydown', triggerAudioOnFirstGesture);
    };

    window.addEventListener('pointerdown', triggerAudioOnFirstGesture, { once: true });
    window.addEventListener('touchstart', triggerAudioOnFirstGesture, { once: true });
    window.addEventListener('keydown', triggerAudioOnFirstGesture, { once: true });

    // Try playing automatically if browser permissions allow
    setTimeout(() => {
      if (!this.hasWelcomedWithVoice) {
        this.speakSweetWelcome();
      }
    }, 1500);
  }

  handleWelcomePillClick() {
    this.toggleWindow(true);
    this.speakSweetWelcome();
  }

  handleWelcomeOption(opt) {
    if (opt === 'hospital') {
      this.addUserMessage("Looking for top verified hospitals nearby");
      const reply = "We have mapped 98 verified tertiary care hospitals, multi-specialty centers, and medical colleges across Guwahati, Delhi, Mumbai, Kolkata, Pune, Hyderabad, and Bengaluru. Which city would you like to explore?";
      this.addBotMessage(reply);
      this.speakSweetWelcome(reply);
      const bar = document.getElementById('cityPillsDock');
      if (bar) {
        bar.style.boxShadow = '0 0 25px rgba(85, 220, 203, 0.8)';
        setTimeout(() => bar.style.boxShadow = '', 2500);
      }
    } else if (opt === 'doctor') {
      this.addUserMessage("I want to consult the doctor");
      const reply = "I am ready to examine your case. What symptoms or medical trouble are you currently experiencing? You can type them or click the microphone to speak.";
      this.addBotMessage(reply);
      this.speakSweetWelcome(reply);
      this.highlightField('fieldSymptoms');
    } else if (opt === 'emergency') {
      this.addUserMessage("I need 24x7 emergency medical care");
      const reply = "Emergency triage active. 24x7 trauma centers like GMCH, AIIMS, and Apollo are standing by with ICU beds. Are you in Guwahati or another city?";
      this.addBotMessage(reply);
      this.speakSweetWelcome(reply);
      if (typeof filterCategory === 'function') {
        filterCategory('trauma-emergency');
      }
    } else if (opt === 'rx') {
      this.addUserMessage("Need medicine dosage and prescription review");
      const reply = "Please tell me what condition you are treating (e.g. fever, headache, acidity, blood pressure), and I will generate a clinical care plan with verified dosages and diet guidelines.";
      this.addBotMessage(reply);
      this.speakSweetWelcome(reply);
    }
  }

  getDoctorVoice(lang) {
    if (!this.availableVoices || this.availableVoices.length === 0) {
      this.availableVoices = this.synth ? this.synth.getVoices() : [];
    }
    if (lang === 'hi') {
      const v = this.availableVoices.find(x => x.lang.includes('hi'));
      if (v) return v;
    } else if (lang === 'as') {
      const v = this.availableVoices.find(x => x.lang.includes('as') || x.lang.includes('bn') || x.lang.includes('hi-IN'));
      if (v) return v;
    }
    const enIn = this.availableVoices.find(x => x.lang === 'en-IN' && (x.name.includes('Male') || x.name.includes('Ravi') || x.name.includes('Prabhat') || x.name.includes('Natural')));
    if (enIn) return enIn;
    return this.availableVoices.find(x => x.lang === 'en-IN') || this.availableVoices[0];
  }

  initSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      this.recognition = new SpeechRec();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.updateMicVisuals(true);
      };

      this.recognition.onresult = (e) => {
        const text = e.results[0][0].transcript;
        if (this.inCall) {
          this.handleInCallPatientSpeech(text);
        } else {
          this.handleUserInput(text);
        }
      };

      this.recognition.onerror = () => {
        this.isListening = false;
        this.updateMicVisuals(false);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.updateMicVisuals(false);
      };
    }
  }

  // Realistic Dual-Frequency Telecom Ringtone
  startPhoneRingtone() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ringAudioContext = new AudioCtx();
      this.isRinging = true;

      const playRingBurst = () => {
        if (!this.isRinging || !this.ringAudioContext) return;
        const now = this.ringAudioContext.currentTime;
        const osc1 = this.ringAudioContext.createOscillator();
        const osc2 = this.ringAudioContext.createOscillator();
        const gain = this.ringAudioContext.createGain();

        // 400Hz + 450Hz Indian telecom standard
        osc1.frequency.setValueAtTime(400, now);
        osc2.frequency.setValueAtTime(450, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
        gain.gain.setValueAtTime(0.2, now + 1.25);
        gain.gain.linearRampToValueAtTime(0, now + 1.35);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ringAudioContext.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 1.4);
        osc2.stop(now + 1.4);
      };

      playRingBurst();
      this.ringInterval = setInterval(() => {
        if (this.isRinging) playRingBurst();
      }, 3000);
    } catch (e) {
      console.warn("AudioContext ringtone warning:", e);
    }
  }

  stopPhoneRingtone() {
    this.isRinging = false;
    if (this.ringInterval) {
      clearInterval(this.ringInterval);
      this.ringInterval = null;
    }
    if (this.ringAudioContext) {
      try { this.ringAudioContext.close(); } catch(e){}
      this.ringAudioContext = null;
    }
  }

  buildBotInterface() {
    const css = document.createElement('style');
    css.innerHTML = `
      /* Live Left Telemetry Overlay */
      .live-intake-card {
        position: fixed;
        top: 76px;
        left: 20px;
        width: 320px;
        background: rgba(11, 41, 34, 0.94);
        backdrop-filter: blur(25px);
        border: 1px solid rgba(85, 220, 203, 0.35);
        border-radius: 18px;
        padding: 14px 16px;
        box-shadow: 0 16px 45px rgba(0, 0, 0, 0.7);
        z-index: 800;
        display: none;
        flex-direction: column;
        gap: 7px;
        animation: cardFlyIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .live-intake-card.active { display: flex; }
      @keyframes cardFlyIn {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .tele-row {
        background: rgba(6, 28, 24, 0.75);
        border: 1px solid rgba(85, 220, 203, 0.15);
        border-radius: 8px;
        padding: 6px 10px;
        display: flex;
        flex-direction: column;
        transition: all 0.3s;
      }
      .tele-row.highlight {
        border-color: #20b982;
        background: rgba(32, 185, 130, 0.22);
        box-shadow: 0 0 16px rgba(32, 185, 130, 0.5);
      }
      .tele-lbl {
        font-size: 9.5px;
        color: #8ce8c2;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 0.05em;
      }
      .tele-val {
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        margin-top: 2px;
      }

      /* Chatbot Window (Right-side Docking) */
      .doctor-chat-window {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 440px;
        max-width: 92vw;
        height: 640px;
        background: rgba(11, 41, 34, 0.96);
        backdrop-filter: blur(28px);
        border: 1px solid rgba(85, 220, 203, 0.4);
        border-radius: 24px;
        box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 30px rgba(32, 185, 130, 0.2);
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 10000;
        animation: botSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .doctor-chat-window.active { display: flex; }
      @keyframes botSlideUp {
        from { opacity: 0; transform: translateY(40px) scale(0.96); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }

      .doctor-chat-header {
        padding: 12px 18px;
        background: linear-gradient(180deg, rgba(6, 28, 24, 0.98), rgba(11, 41, 34, 0.9));
        border-bottom: 1px solid rgba(85, 220, 203, 0.2);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .doctor-avatar-wrap {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #061c18;
        border: 2px solid var(--turquoise);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow: 0 0 16px rgba(85, 220, 203, 0.45);
      }
      .doc-wave {
        display: flex;
        align-items: flex-end;
        gap: 2.5px;
        height: 12px;
      }
      .doc-wave-bar {
        width: 2.5px;
        height: 4px;
        background: var(--mint);
        border-radius: 2px;
        transition: height 0.15s ease;
      }
      .doc-wave.speaking .doc-wave-bar:nth-child(1) { animation: wavePulse 0.4s infinite alternate; }
      .doc-wave.speaking .doc-wave-bar:nth-child(2) { animation: wavePulse 0.6s infinite alternate 0.1s; }
      .doc-wave.speaking .doc-wave-bar:nth-child(3) { animation: wavePulse 0.5s infinite alternate 0.2s; }
      .doc-wave.speaking .doc-wave-bar:nth-child(4) { animation: wavePulse 0.45s infinite alternate 0.15s; }
      @keyframes wavePulse {
        0% { height: 4px; }
        100% { height: 14px; }
      }

      /* Language Select */
      .doc-lang-bar {
        display: flex;
        background: rgba(6, 28, 24, 0.85);
        border-bottom: 1px solid rgba(85, 220, 203, 0.15);
        padding: 5px 12px;
        gap: 6px;
      }
      .doc-lang-btn {
        flex: 1;
        background: none;
        border: 1px solid transparent;
        color: var(--muted);
        padding: 4px 8px;
        border-radius: 9999px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
        text-align: center;
      }
      .doc-lang-btn:hover { color: #fff; background: rgba(85, 220, 203, 0.1); }
      .doc-lang-btn.active {
        background: rgba(32, 185, 130, 0.25);
        border-color: var(--mint);
        color: #fff;
      }

      /* Conversation Invite Starter Pills */
      .invite-pills-wrap {
        padding: 10px 14px 6px;
        background: rgba(6, 28, 24, 0.6);
        border-bottom: 1px solid rgba(85, 220, 203, 0.1);
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .invite-pill-lbl {
        font-size: 10px;
        text-transform: uppercase;
        font-weight: 800;
        color: var(--mint);
        letter-spacing: 0.05em;
      }
      .invite-chips-scroll {
        display: flex;
        gap: 6px;
        overflow-x: auto;
        padding-bottom: 4px;
        scrollbar-width: none;
      }
      .invite-chips-scroll::-webkit-scrollbar { display: none; }
      .invite-chip {
        background: rgba(11, 41, 34, 0.85);
        border: 1px solid rgba(85, 220, 203, 0.28);
        color: #fff;
        padding: 5px 11px;
        border-radius: 9999px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.2s;
      }
      .invite-chip:hover {
        background: rgba(32, 185, 130, 0.3);
        border-color: var(--mint);
        transform: translateY(-1px);
      }

      /* Messages Stream */
      .doctor-messages-box {
        flex: 1;
        overflow-y: auto;
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .doc-msg {
        display: flex;
        flex-direction: column;
        max-width: 86%;
        animation: msgPop 0.25s ease-out;
      }
      @keyframes msgPop {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .doc-msg.bot { align-self: flex-start; }
      .doc-msg.user { align-self: flex-end; }
      .doc-bubble {
        padding: 10px 14px;
        border-radius: 14px;
        font-size: 12.8px;
        line-height: 1.45;
      }
      .doc-msg.bot .doc-bubble {
        background: rgba(6, 28, 24, 0.85);
        border: 1px solid rgba(85, 220, 203, 0.25);
        color: #f4fff9;
        border-bottom-left-radius: 4px;
      }
      .doc-msg.user .doc-bubble {
        background: linear-gradient(135deg, #10b981, #0d9488);
        color: #ffffff;
        font-weight: 600;
        border-bottom-right-radius: 4px;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
      }

      /* Clinical Illness Report Card */
      .clinical-rx-card {
        background: rgba(6, 28, 24, 0.95);
        border: 1px solid rgba(85, 220, 203, 0.4);
        border-radius: 14px;
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 4px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      }
      .rx-section-title {
        font-size: 10.5px;
        text-transform: uppercase;
        font-weight: 800;
        color: var(--mint);
        letter-spacing: 0.05em;
      }
      .rx-item {
        background: rgba(11, 41, 34, 0.6);
        border-left: 2px solid var(--turquoise);
        padding: 5px 8px;
        border-radius: 0 6px 6px 0;
        font-size: 11.5px;
        color: #e2e8f0;
        margin-top: 2px;
      }

      /* Transmit progress bar */
      .transmit-bar-box {
        background: rgba(0, 0, 0, 0.5);
        border-radius: 6px;
        height: 6px;
        overflow: hidden;
        margin-top: 6px;
      }
      .transmit-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #20b982, #55dccb);
        width: 0%;
        transition: width 1.2s ease-in-out;
      }

      /* Input Footer */
      .doctor-input-footer {
        padding: 12px 14px;
        background: rgba(6, 28, 24, 0.9);
        border-top: 1px solid rgba(85, 220, 203, 0.15);
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .doc-text-input {
        flex: 1;
        background: rgba(11, 41, 34, 0.8);
        border: 1px solid rgba(85, 220, 203, 0.3);
        border-radius: 9999px;
        padding: 9px 16px;
        color: #fff;
        font-size: 13px;
        outline: none;
      }
      .doc-text-input:focus { border-color: var(--mint); }
      .doc-mic-btn {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: rgba(32, 185, 130, 0.2);
        border: 1px solid rgba(85, 220, 203, 0.4);
        color: var(--mint);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
      }
      .doc-mic-btn:hover { background: rgba(32, 185, 130, 0.35); transform: scale(1.05); }
      .doc-mic-btn.active {
        background: #ef4444;
        color: #fff;
        border-color: #fca5a5;
        animation: pulseMic 1.2s infinite;
      }
      @keyframes pulseMic {
        0% { transform: scale(1); box-shadow: 0 0 10px #ef4444; }
        100% { transform: scale(1.15); box-shadow: 0 0 20px #ef4444; }
      }

      /* Animated Floating Welcome Pill */
      .doctor-welcome-pill {
        position: fixed;
        bottom: 96px;
        right: 24px;
        background: rgba(11, 41, 34, 0.95);
        backdrop-filter: blur(20px);
        border: 1.5px solid rgba(85, 220, 203, 0.45);
        border-radius: 18px;
        padding: 10px 14px;
        display: none;
        align-items: center;
        gap: 12px;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.75), 0 0 20px rgba(32, 185, 130, 0.3);
        z-index: 9998;
        max-width: 360px;
        animation: welcomePop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
      }
      .doctor-welcome-pill:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 45px rgba(0, 0, 0, 0.85), 0 0 25px rgba(85, 220, 203, 0.5);
      }
      .doctor-welcome-pill.active { display: flex; }
      .doctor-welcome-pill.speaking {
        border-color: #8ce8c2;
        box-shadow: 0 0 25px rgba(85, 220, 203, 0.7);
      }
      @keyframes welcomePop {
        from { opacity: 0; transform: translateY(15px) scale(0.92); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      .welcome-wave-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #20b982;
        box-shadow: 0 0 10px #20b982;
        animation: pulseDot 1.4s infinite;
        flex-shrink: 0;
      }
      @keyframes pulseDot {
        0% { transform: scale(0.9); opacity: 0.8; }
        50% { transform: scale(1.3); opacity: 1; box-shadow: 0 0 16px #55dccb; }
        100% { transform: scale(0.9); opacity: 0.8; }
      }
      .welcome-text-wrap {
        display: flex;
        flex-direction: column;
        gap: 2px;
        text-align: left;
      }
      .welcome-heading {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        color: var(--mint);
        letter-spacing: 0.05em;
      }
      .welcome-sub {
        font-size: 12px;
        color: #ffffff;
        font-weight: 600;
        line-height: 1.35;
      }
      .welcome-listen-btn {
        background: linear-gradient(135deg, var(--emerald), var(--turquoise));
        border: none;
        border-radius: 9999px;
        color: #061c18;
        padding: 6px 12px;
        font-size: 11px;
        font-weight: 800;
        cursor: pointer;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 4px;
        transition: transform 0.2s, box-shadow 0.2s;
        flex-shrink: 0;
      }
      .welcome-listen-btn:hover {
        transform: scale(1.08);
        box-shadow: 0 0 14px rgba(85, 220, 203, 0.8);
      }
      .welcome-quick-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 10px;
      }
      .welcome-chip-btn {
        background: rgba(32, 185, 130, 0.2);
        border: 1px solid rgba(85, 220, 203, 0.4);
        color: #f4fff9;
        padding: 6px 12px;
        border-radius: 9999px;
        font-size: 11.5px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s;
      }
      .welcome-chip-btn:hover {
        background: rgba(32, 185, 130, 0.4);
        border-color: #8ce8c2;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(85, 220, 203, 0.3);
      }

      /* Floating Bubble */
      .doctor-floating-bubble {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--emerald), var(--turquoise));
        color: #061c18;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(85, 220, 203, 0.5);
        border: 2px solid #ffffff;
        z-index: 9999;
        transition: transform 0.25s;
      }
      .doctor-floating-bubble:hover { transform: scale(1.08); }

      /* ========================================================
         HUMAN-TONE TELEPHONE CALL SCREEN (Doctor Calling Patient)
         ======================================================== */
      .telephone-call-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(6, 28, 24, 0.92);
        backdrop-filter: blur(24px);
        z-index: 20000;
        display: none;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
      }
      .telephone-call-overlay.active { display: flex; }
      @keyframes fadeIn {
        from { opacity: 0; } to { opacity: 1; }
      }
      .phone-card {
        width: 480px;
        max-width: 94vw;
        max-height: 92vh;
        overflow-y: auto;
        background: rgba(11, 41, 34, 0.98);
        border: 2px solid rgba(85, 220, 203, 0.5);
        border-radius: 28px;
        padding: 26px 22px;
        box-shadow: 0 25px 70px rgba(0, 0, 0, 0.95), 0 0 40px rgba(32, 185, 130, 0.35);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: relative;
      }
      .caller-avatar-ring {
        width: 86px;
        height: 86px;
        border-radius: 50%;
        background: radial-gradient(circle, #20b982, #0b2922);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-bottom: 12px;
        border: 3px solid #fff;
        box-shadow: 0 0 30px rgba(85, 220, 203, 0.8);
      }
      .caller-avatar-ring.ringing {
        animation: ringPulse 1.4s infinite ease-out;
      }
      @keyframes ringPulse {
        0% { box-shadow: 0 0 0 0 rgba(85, 220, 203, 0.8); }
        70% { box-shadow: 0 0 0 25px rgba(85, 220, 203, 0); }
        100% { box-shadow: 0 0 0 0 rgba(85, 220, 203, 0); }
      }
      .phone-btn-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        margin-top: 18px;
        width: 100%;
      }
      .call-action-circle {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .call-action-circle:hover { transform: scale(1.12); }
      .btn-answer {
        background: linear-gradient(135deg, #10b981, #059669);
        color: #fff;
        box-shadow: 0 0 25px rgba(16, 185, 129, 0.7);
      }
      .btn-decline {
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: #fff;
        box-shadow: 0 0 25px rgba(239, 68, 68, 0.7);
      }
      .call-timer {
        font-family: monospace;
        font-size: 14px;
        color: var(--mint);
        margin-top: 4px;
        font-weight: 700;
      }

      /* In-Call Live Transcript & Human Advice Panel */
      .in-call-transcript-box {
        width: 100%;
        background: rgba(6, 28, 24, 0.85);
        border: 1px solid rgba(85, 220, 203, 0.3);
        border-radius: 14px;
        padding: 12px 14px;
        margin-top: 14px;
        text-align: left;
        font-size: 12.5px;
        line-height: 1.5;
        color: #e2e8f0;
        max-height: 160px;
        overflow-y: auto;
      }
      .in-call-neighbor-dock {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 12px;
        gap: 6px;
      }
      .neighbor-pills {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        justify-content: center;
      }
      .neighbor-pill-btn {
        background: rgba(32, 185, 130, 0.15);
        border: 1px solid rgba(85, 220, 203, 0.35);
        color: #fff;
        padding: 4px 10px;
        border-radius: 9999px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .neighbor-pill-btn:hover {
        background: rgba(32, 185, 130, 0.35);
        border-color: var(--mint);
        transform: translateY(-1px);
      }
      .neighbor-pill-btn.active {
        background: linear-gradient(135deg, var(--emerald), var(--turquoise));
        color: #061c18;
        font-weight: 800;
      }
      .clinic-suggestion-card {
        width: 100%;
        background: rgba(22, 66, 55, 0.9);
        border: 1px solid var(--mint);
        border-radius: 12px;
        padding: 10px 12px;
        margin-top: 10px;
        text-align: left;
      }
    `;
    document.head.appendChild(css);

    // 1. Live Left Telemetry Overlay
    const intakeCard = document.createElement('div');
    intakeCard.className = 'live-intake-card';
    intakeCard.id = 'liveIntakeCard';
    intakeCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
        <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; background: rgba(32,185,130,0.25); color: #8ce8c2; padding: 2px 8px; border-radius: 6px;">Live Tele-Triage Sync</span>
        <span style="font-size: 11px; color: #20b982; font-weight: 700;">● Active</span>
      </div>
      
      <div class="tele-row" id="fieldHosp">
        <span class="tele-lbl">Nearest Doctor Clinic / Hospital</span>
        <span class="tele-val" id="valHosp">Gauhati Medical College (GMCH)</span>
      </div>

      <div class="tele-row" id="fieldCity">
        <span class="tele-lbl">City & Neighborhood</span>
        <span class="tele-val" id="valCity">Guwahati • Bhangagarh</span>
      </div>

      <div class="tele-row" id="fieldSymptoms">
        <span class="tele-lbl">Chief Complaint</span>
        <span class="tele-val" id="valSymptoms">Listening for clinical input...</span>
      </div>

      <div class="tele-row" id="fieldName">
        <span class="tele-lbl">Patient Name & Age</span>
        <span class="tele-val" id="valName">Gaurab (29)</span>
      </div>

      <div class="tele-row" id="fieldPhone">
        <span class="tele-lbl">Direct Phone</span>
        <span class="tele-val" id="valPhone">7086343142</span>
      </div>

      <div class="tele-row" id="fieldTriage">
        <span class="tele-lbl">Triage Classification</span>
        <span class="tele-val" id="valTriage" style="color: #38bdf8;">Standard Medical Review</span>
      </div>
    `;
    document.body.appendChild(intakeCard);

    // 2. Chatbot Window (Right-side) & Floating Bubble & Welcome Pill
    const botContainer = document.createElement('div');
    botContainer.innerHTML = `
      <!-- Animated Floating Welcome Pill -->
      <div class="doctor-welcome-pill" id="docWelcomePill" onclick="window.interactiveDoctorBot.handleWelcomePillClick()">
        <span class="welcome-wave-dot"></span>
        <div class="welcome-text-wrap">
          <div class="welcome-heading">👋 Dr. Debabrata Roy (Chief Medical AI)</div>
          <div class="welcome-sub">"Hey there, What are you looking for? How may I help you?"</div>
        </div>
        <button class="welcome-listen-btn" id="welcomeListenBtn" title="Listen in sweet voice" onclick="event.stopPropagation(); window.interactiveDoctorBot.speakSweetWelcome();">
          🔊 Listen
        </button>
      </div>

      <div class="doctor-floating-bubble" id="docBubble" title="Consult Verified MBBS Doctor">
        <span style="font-size: 28px;">👨‍⚕️</span>
      </div>

      <div class="doctor-chat-window" id="docWindow">
        <div class="doctor-chat-header">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div class="doctor-avatar-wrap">
              <svg viewBox="0 0 100 100" width="36" height="36">
                <circle cx="50" cy="38" r="22" fill="#fed7aa" />
                <path d="M28 32 Q50 16 72 32 Q74 20 50 18 Q26 20 28 32" fill="#334155" />
                <circle cx="42" cy="38" r="3" fill="#1e293b" />
                <circle cx="58" cy="38" r="3" fill="#1e293b" />
                <path id="docBotMouth" d="M43 48 Q50 52 57 48" stroke="#be123c" stroke-width="2.5" fill="none" stroke-linecap="round" />
                <path d="M20 90 L32 58 L68 58 L80 90 Z" fill="#ffffff" />
                <path d="M38 58 L50 78 L62 58" fill="#0284c7" />
                <path d="M36 60 Q34 78 48 82 Q50 82 52 82 Q66 78 64 60" stroke="#475569" stroke-width="3" fill="none" />
                <circle cx="50" cy="84" r="4" fill="#94a3b8" />
              </svg>
            </div>
            <div>
              <div id="botDocName" style="font-size: 13.5px; font-weight: 800; color: #fff;">Dr. Debabrata Roy, MBBS, MD</div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px;">
                <div class="doc-wave" id="botWave">
                  <div class="doc-wave-bar"></div>
                  <div class="doc-wave-bar"></div>
                  <div class="doc-wave-bar"></div>
                  <div class="doc-wave-bar"></div>
                </div>
                <span id="botSubtitle" style="font-size: 11px; color: var(--mint);">Chief Medical Officer (AMC/04882)</span>
              </div>
            </div>
          </div>
          <button style="background: none; border: none; color: #94a3b8; font-size: 22px; cursor: pointer;" id="botCloseBtn">✕</button>
        </div>

        <!-- Trilingual Switcher -->
        <div class="doc-lang-bar">
          <button class="doc-lang-btn active" data-lang="en">English (IN)</button>
          <button class="doc-lang-btn" data-lang="hi">हिन्दी (Hindi)</button>
          <button class="doc-lang-btn" data-lang="as">অসমীয়া (Assamese)</button>
        </div>

        <!-- Invite Conversation Starter Questions -->
        <div class="invite-pills-wrap" id="invitePillsWrap">
          <span class="invite-pill-lbl">Quick Consultation Topics (Click to Start)</span>
          <div class="invite-chips-scroll">
            <div class="invite-chip" onclick="window.interactiveDoctorBot.selectInviteTopic('fever')">🤒 Severe Fever & Body Pain (3 days)</div>
            <div class="invite-chip" onclick="window.interactiveDoctorBot.selectInviteTopic('chest')">💔 Chest Pressure & Breathing Trouble</div>
            <div class="invite-chip" onclick="window.interactiveDoctorBot.selectInviteTopic('acidity')">🩺 Acidity & Severe Gastric Pain</div>
            <div class="invite-chip" onclick="window.interactiveDoctorBot.selectInviteTopic('diabetes')">🩸 Diabetes & BP Medicine Review</div>
            <div class="invite-chip" onclick="window.interactiveDoctorBot.selectInviteTopic('pediatric')">👶 Child Pediatric Fever & Cough</div>
            <div class="invite-chip" onclick="window.interactiveDoctorBot.selectInviteTopic('diagnostic')">🧪 Blood Test & 3T MRI Lab Booking</div>
          </div>
        </div>

        <!-- Messages Box -->
        <div class="doctor-messages-box" id="botMessages"></div>

        <!-- Input Footer -->
        <div class="doctor-input-footer">
          <input type="text" class="doc-text-input" id="botTextInput" placeholder="Type your answer or health trouble..." />
          <button class="doc-mic-btn" id="botMicBtn" title="Speak into microphone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(botContainer);

    // 3. Human-Tone Doctor Telephone Call Simulation Overlay
    const phoneOverlay = document.createElement('div');
    phoneOverlay.className = 'telephone-call-overlay';
    phoneOverlay.id = 'telephoneCallOverlay';
    phoneOverlay.innerHTML = `
      <div class="phone-card">
        <div class="caller-avatar-ring ringing" id="callerRing">
          <span style="font-size: 42px;">👨‍⚕️</span>
        </div>

        <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--turquoise); font-weight: 800;" id="phoneCallStatus">
          📞 Incoming Tele-Triage Call
        </div>
        <div style="font-size: 19px; font-weight: 900; color: #fff; margin-top: 3px;">Dr. Debabrata Roy, MBBS, MD</div>
        <div style="font-size: 12px; color: var(--muted); margin-top: 1px;" id="phoneHospitalTag">Chief Medical Officer • HealthConnect Hub</div>
        <div class="call-timer" id="callDurationTimer" style="display: none;">00:00</div>

        <!-- Ringing Buttons -->
        <div class="phone-btn-row" id="phoneRingActions">
          <button class="call-action-circle btn-decline" onclick="window.interactiveDoctorBot.declineDoctorCall()" title="Decline Call">
            ✕
          </button>
          <button class="call-action-circle btn-answer" onclick="window.interactiveDoctorBot.answerDoctorCall()" title="Answer Doctor Call">
            📞
          </button>
        </div>

        <!-- In-Call Panel (Transcript, Neighborhoods & Medical Advice) -->
        <div id="inCallDetails" style="display: none; width: 100%; margin-top: 14px;">
          
          <!-- Live Doctor Speech Subtitle Box -->
          <div class="in-call-transcript-box" id="inCallSpeechBox">
            <span style="color: var(--mint); font-weight: 700;">Dr. Debabrata Roy:</span> 
            <span id="inCallDoctorSpeechText">Connecting audio line...</span>
          </div>

          <!-- Neighborhood Selector for Nearby Clinic Recommendations -->
          <div class="in-call-neighbor-dock">
            <span style="font-size: 10.5px; color: var(--mint); font-weight: 800; text-transform: uppercase;">
              📍 Select or Speak Your Locality:
            </span>
            <div class="neighbor-pills" id="neighborPillsDock"></div>
          </div>

          <!-- Recommended Clinic Spotlight Card -->
          <div class="clinic-suggestion-card" id="clinicSuggestionBox" style="display: none;">
            <div style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: #38bdf8;">Nearest Recommended Medical Facility</div>
            <div style="font-size: 13.5px; font-weight: 800; color: #fff; margin-top: 2px;" id="suggClinicName">Gauhati Medical College & Hospital</div>
            <div style="font-size: 11px; color: #e2e8f0; margin-top: 2px;" id="suggClinicAddr">Bhangagarh, GS Road</div>
            <div style="font-size: 11px; color: var(--mint); margin-top: 3px;" id="suggClinicDesc">Apex Tertiary Care, OPD & 24x7 Emergency</div>
          </div>

          <!-- In-Call Actions -->
          <div class="phone-btn-row" style="margin-top: 18px;">
            <button class="call-action-circle" id="inCallMicBtn" onclick="window.interactiveDoctorBot.toggleMic()" style="background: rgba(32, 185, 130, 0.25); border: 1px solid var(--mint); color: #fff; font-size: 20px;" title="Speak to Doctor">
              🎙️
            </button>
            <button class="call-action-circle btn-decline" onclick="window.interactiveDoctorBot.hangupDoctorCall()" title="End Call">
              📵
            </button>
          </div>
        </div>

      </div>
    `;
    document.body.appendChild(phoneOverlay);

    // Event Bindings
    document.getElementById('docBubble').addEventListener('click', () => this.toggleWindow(true));
    document.getElementById('botCloseBtn').addEventListener('click', () => this.toggleWindow(false));

    // Language buttons
    document.querySelectorAll('.doc-lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.doc-lang-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.switchLanguage(e.target.getAttribute('data-lang'));
      });
    });

    // Mic
    document.getElementById('botMicBtn').addEventListener('click', () => this.toggleMic());

    // Enter Key
    document.getElementById('botTextInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = e.target.value.trim();
        if (val) {
          e.target.value = '';
          this.handleUserInput(val);
        }
      }
    });
  }

  toggleWindow(open) {
    this.isOpen = open;
    const win = document.getElementById('docWindow');
    const intake = document.getElementById('liveIntakeCard');
    
    if (this.isOpen) {
      win.classList.add('active');
      intake.classList.add('active');
      if (this.step === 0) {
        this.startConsultationWorkflow();
      }
    } else {
      win.classList.remove('active');
      intake.classList.remove('active');
      if (this.synth) this.synth.cancel();
      this.setSpeaking(false);
    }
  }

  switchLanguage(lang) {
    this.currentLanguage = lang;
    const names = {
      en: { doc: 'Dr. Debabrata Roy, MBBS, MD', sub: 'Chief Medical Officer • Tele-Triage Lead (AMC/04882)' },
      hi: { doc: 'डॉ. देवब्रत रॉय, MBBS, MD', sub: 'मुख्य चिकित्सा अधिकारी • टेली-ट्राइएज प्रमुख (AMC/04882)' },
      as: { doc: 'ডাঃ দেৱব্ৰত ৰয়, MBBS, MD', sub: 'মুখ্য জ্যেষ্ঠ চিকিৎসক • টেলি-ট্ৰায়েজ প্ৰধান (AMC/04882)' }
    };
    document.getElementById('botDocName').textContent = names[lang].doc;
    document.getElementById('botSubtitle').textContent = names[lang].sub;

    const notice = lang === 'hi' 
      ? 'नमस्ते! आप क्या ढूँढ रहे हैं? मैं आपकी कैसे मदद करूँ? कृपया अपनी समस्या बताएं।' 
      : (lang === 'as' ? 'নমস্কাৰ! আপুনি কি বিচাৰিছে? মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ? আপোনাৰ লক্ষণ কওক।' : 'Hey there, What are you looking for? How may I help you?');
    this.addBotMessage(notice);
    this.speakSweetWelcome(notice);
  }

  startConsultationWorkflow(initialHospital) {
    if (initialHospital) {
      this.patientRecord.hospitalName = initialHospital;
      document.getElementById('valHosp').textContent = initialHospital;
      this.highlightField('fieldHosp');
    }

    this.step = 1;
    const greetings = {
      en: `
        <div style="font-size: 13.5px; font-weight: 800; color: #fff; margin-bottom: 4px;">
          👋 Hey there, What are you looking for? How may I help you?
        </div>
        <div style="font-size: 11.5px; color: #a6c6b8; line-height: 1.45;">
          I am Dr. Debabrata Roy (MBBS, MD). I can help you find verified hospitals, emergency beds, check symptoms, or schedule a direct telephone consultation.
        </div>
        <div class="welcome-quick-chips">
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('hospital')">🏥 Find Best Hospital</button>
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('doctor')">👨‍⚕️ Talk to Doctor</button>
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('emergency')">🚨 24x7 Emergency</button>
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('rx')">💊 Medicine & Prescriptions</button>
        </div>
      `,
      hi: `
        <div style="font-size: 13.5px; font-weight: 800; color: #fff; margin-bottom: 4px;">
          👋 नमस्ते! आप क्या ढूँढ रहे हैं? मैं आपकी कैसे मदद करूँ?
        </div>
        <div style="font-size: 11.5px; color: #a6c6b8; line-height: 1.45;">
          मैं डॉ. देवब्रत रॉय (MBBS, MD) बोल रहा हूँ। मैं अस्पताल ढूंढने, आपातकालीन देखभाल, या लक्षणों के विश्लेषण में आपकी सहायता कर सकता हूँ।
        </div>
        <div class="welcome-quick-chips">
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('hospital')">🏥 अस्पताल खोजें</button>
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('doctor')">👨‍⚕️ डॉक्टर से परामर्श</button>
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('emergency')">🚨 आपातकालीन सेवा</button>
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('rx')">💊 दवा व नुस्खा</button>
        </div>
      `,
      as: `
        <div style="font-size: 13.5px; font-weight: 800; color: #fff; margin-bottom: 4px;">
          👋 নমস্কাৰ! আপুনি কি বিচাৰিছে? মই আপোনাক কেনেকৈ সহায় কৰিব পাৰোঁ?
        </div>
        <div style="font-size: 11.5px; color: #a6c6b8; line-height: 1.45;">
          মই ডাঃ দেৱব্ৰত ৰয় (MBBS, MD)। মই আপোনাক চিকিৎসালয় বিচাৰিবলৈ, জৰুৰীকালীন সেৱা অথবা লক্ষণ পৰীক্ষা আৰু ঔষধৰ বাবে সহায় কৰিব পাৰোঁ।
        </div>
        <div class="welcome-quick-chips">
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('hospital')">🏥 চিকিৎসালয় বিচাৰক</button>
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('doctor')">👨‍⚕️ চিকিৎসকৰ সৈতে কথা</button>
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('emergency')">🚨 জৰুৰীকালীন সেৱা</button>
          <button class="welcome-chip-btn" onclick="window.interactiveDoctorBot.handleWelcomeOption('rx')">💊 ঔষধ আৰু নিদান</button>
        </div>
      `
    };

    const g = greetings[this.currentLanguage] || greetings.en;
    this.addBotMessage(g, true);
    this.speakSweetWelcome();
  }

  selectInviteTopic(topicKey) {
    const topicMap = {
      fever: {
        en: 'I have severe fever and body ache for 3 days',
        hi: 'मुझे 3 दिनों से तेज बुखार और बदन दर्द है',
        as: 'মোৰ তিনিদিন ধৰি তীব্ৰ জ্বৰ আৰু গাৰ বিষ হৈ আছে'
      },
      chest: {
        en: 'I feel heavy chest pressure, sweating and breathlessness',
        hi: 'मुझे सीने में भारीपन, पसीना और सांस लेने में तकलीफ हो रही है',
        as: 'মোৰ বুকুত হেঁচা ধৰা আৰু উশাহ-নিশাহত কষ্ট অনুভৱ হৈছে'
      },
      acidity: {
        en: 'Severe acidity, epigastric burning and gastric pain',
        hi: 'पेट में गंभीर जलन, गैस और एसिडिटी की समस्या है',
        as: 'পেটৰ তীব্ৰ গেষ্ট্ৰিক আৰু জ্বলা-পোৰা হৈছে'
      },
      diabetes: {
        en: 'High blood sugar and hypertension prescription review',
        hi: 'डायबिटीज और हाई ब्लड प्रेशर की दवा की जांच करवानी है',
        as: 'মধুমেহ আৰু উচ্চ ৰক্তচাপৰ ঔষধ পৰীক্ষা কৰাব বিচাৰোঁ'
      },
      pediatric: {
        en: 'Child has continuous cough, wheezing and fever',
        hi: 'बच्चे को लगातार खांसी, घरघराहट और बुखार है',
        as: 'শিশুৰ অবিৰত কাহ আৰু জ্বৰ হৈ আছে'
      },
      diagnostic: {
        en: 'Need to book Complete Blood Count and 3T MRI brain scan',
        hi: 'फुल ब्लड टेस्ट और 3T एमआरआई स्कैन बुक करना है',
        as: 'ব্লাড টেষ্ট আৰু এম আৰ আই স্কেন কৰিব লাগিব'
      }
    };

    const text = topicMap[topicKey] ? topicMap[topicKey][this.currentLanguage] : topicMap['fever']['en'];
    this.handleUserInput(text);
  }

  addBotMessage(text, isHtml = false) {
    const box = document.getElementById('botMessages');
    const msg = document.createElement('div');
    msg.className = 'doc-msg bot';
    msg.innerHTML = `<div class="doc-bubble">${isHtml ? text : text}</div>`;
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }

  addUserMessage(text) {
    const box = document.getElementById('botMessages');
    const msg = document.createElement('div');
    msg.className = 'doc-msg user';
    msg.innerHTML = `<div class="doc-bubble">${text}</div>`;
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight;
  }

  highlightField(fieldId) {
    const el = document.getElementById(fieldId);
    if (el) {
      el.classList.add('highlight');
      setTimeout(() => el.classList.remove('highlight'), 2000);
    }
  }

  speak(text) {
    if (!this.synth) return;
    this.synth.cancel();

    // Clean text of emojis & HTML for smooth, natural audio articulation
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/🚨|●|★|🛏|📞|📍|👨‍⚕️|💊|🔬|🥗/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voice = this.getDoctorVoice(this.currentLanguage);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = this.currentLanguage === 'hi' ? 'hi-IN' : (this.currentLanguage === 'as' ? 'bn-IN' : 'en-IN');
    }

    // Natural, warm, reassuring doctor cadence
    utterance.rate = 0.93;
    utterance.pitch = 1.0;

    utterance.onstart = () => this.setSpeaking(true);
    utterance.onend = () => this.setSpeaking(false);
    utterance.onerror = () => this.setSpeaking(false);

    this.synth.speak(utterance);
  }

  setSpeaking(speaking) {
    this.isSpeaking = speaking;
    const wave = document.getElementById('botWave');
    const mouth = document.getElementById('docBotMouth');
    if (speaking) {
      if (wave) wave.classList.add('speaking');
      if (mouth) mouth.setAttribute('d', 'M43 48 Q50 56 57 48');
    } else {
      if (wave) wave.classList.remove('speaking');
      if (mouth) mouth.setAttribute('d', 'M43 48 Q50 52 57 48');
    }
  }

  toggleMic() {
    if (!this.recognition) {
      alert("Microphone recognition not supported in this browser. Please type your message.");
      return;
    }
    if (this.isListening) {
      this.recognition.stop();
    } else {
      const code = this.currentLanguage === 'hi' ? 'hi-IN' : (this.currentLanguage === 'as' ? 'bn-IN' : 'en-IN');
      this.recognition.lang = code;
      try { this.recognition.start(); } catch (e) {}
    }
  }

  updateMicVisuals(listening) {
    const btn = document.getElementById('botMicBtn');
    const callBtn = document.getElementById('inCallMicBtn');
    [btn, callBtn].forEach(b => {
      if (b) {
        if (listening) b.classList.add('active');
        else b.classList.remove('active');
      }
    });
  }

  handleUserInput(text) {
    this.addUserMessage(text);

    if (this.step === 1) {
      // Step 1: Health Symptoms received
      this.patientRecord.symptoms = text;
      document.getElementById('valSymptoms').textContent = text;
      this.highlightField('fieldSymptoms');

      // Detect Emergency in symptoms
      const lower = text.toLowerCase();
      if (lower.includes('chest') || lower.includes('heart') || lower.includes('breathing') || lower.includes('unconscious') || lower.includes('stroke') || lower.includes('bleeding')) {
        this.patientRecord.triageLevel = 'CRITICAL_EMERGENCY';
        document.getElementById('valTriage').innerHTML = '<span style="color: #ef4444; font-weight: 800;">🚨 CRITICAL / URGENT</span>';
      }

      this.step = 2;
      const q = {
        en: 'I understand what you are going through. For the official hospital file and doctor consult, please share the patient\'s full name and age?',
        hi: 'मैं आपकी तकलीफ समझ रहा हूँ। आधिकारिक मेडिकल फाइल और डॉक्टर परामर्श के लिए कृपया मरीज का पूरा नाम और उम्र बताएं?',
        as: 'মই আপোনাৰ সমস্যাটো বুজি পাইছোঁ। চিকিৎসালয়ৰ আনুষ্ঠানিক ফাইলৰ বাবে অনুগ্ৰহ কৰি ৰোগীৰ সম্পূৰ্ণ নাম আৰু বয়স কওক?'
      };
      this.addBotMessage(q[this.currentLanguage]);
      this.speak(q[this.currentLanguage]);

    } else if (this.step === 2) {
      // Step 2: Patient Name & Age received
      this.patientRecord.fullName = text;
      document.getElementById('valName').textContent = text;
      this.highlightField('fieldName');

      this.step = 3;
      const q = {
        en: 'Thank you. Which city are you currently located in? (e.g. Guwahati, Delhi, Mumbai, Kolkata, Pune, Hyderabad, Bengaluru...)',
        hi: 'धन्यवाद। आप वर्तमान में किस शहर में हैं? (जैसे गुवाहाटी, दिल्ली, मुंबई, कोलकाता, पुणे, हैदराबाद, बेंगलुरु...)',
        as: 'ধন্যবাদ। আপুনি বৰ্তমান কোনখন চহৰত আছে? (যেনে গুৱাহাটী, দিল্লী, মুম্বাই, কলকাতা, পুনে, হায়দৰাবাদ...)'
      };
      this.addBotMessage(q[this.currentLanguage]);
      this.speak(q[this.currentLanguage]);

    } else if (this.step === 3) {
      // Step 3: City received -> Trigger Live Map Fly-To
      this.patientRecord.city = text;
      document.getElementById('valCity').textContent = text;
      this.highlightField('fieldCity');
      this.triggerMapReactionForCity(text);

      this.step = 4;
      const q = {
        en: 'Please share your 10-digit mobile number so I can call you on direct telephone right now and dispatch your prescription file.',
        hi: 'कृपया अपना 10 अंकों का मोबाइल नंबर बताएं ताकि मैं अभी आपको सीधे टेलीफोन पर कॉल कर सकूँ और मेडिकल पर्चा भेज सकूँ।',
        as: 'অনুগ্ৰহ কৰি আপোনাৰ ১০ টা অংকৰ মোবাইল নম্বৰ দিয়ক যাতে মই এতিয়াই ফোনত পোনপটীয়াকৈ যোগাযোগ কৰি পৰামৰ্শ দিব পাৰোঁ।'
      };
      this.addBotMessage(q[this.currentLanguage]);
      this.speak(q[this.currentLanguage]);

    } else if (this.step === 4) {
      // Step 4: Mobile Phone Number received
      const cleanPhone = text.replace(/[^0-9]/g, '') || '7086343142';
      this.patientRecord.phone = cleanPhone;
      document.getElementById('valPhone').textContent = cleanPhone;
      this.highlightField('fieldPhone');

      this.step = 5;
      this.generateIllnessReportAndTransmit();

    } else {
      // Follow-up
      const reply = this.currentLanguage === 'hi' 
        ? 'मैं आपकी स्थिति पर नज़र रख रहा हूँ। कृपया डॉक्टर के निर्देशों का पालन करें।'
        : (this.currentLanguage === 'as' ? 'মই আপোনাৰ স্বাস্থ্যৰ বুজ লৈ আছোঁ। নিৰ্দেশনা পালন কৰক।' : 'I am monitoring your condition. Please strictly follow the doctor\'s advice.');
      this.addBotMessage(reply);
      this.speak(reply);
    }
  }

  // Live Map Reaction when city is mentioned
  triggerMapReactionForCity(cityNameInput) {
    const q = cityNameInput.toLowerCase();
    let matchedCityId = 'guwahati';

    if (q.includes('delhi')) matchedCityId = 'new-delhi';
    else if (q.includes('mumbai') || q.includes('bombay')) matchedCityId = 'mumbai';
    else if (q.includes('kolkata') || q.includes('calcutta')) matchedCityId = 'kolkata';
    else if (q.includes('pune')) matchedCityId = 'pune';
    else if (q.includes('hyderabad')) matchedCityId = 'hyderabad';
    else if (q.includes('bengaluru') || q.includes('bangalore')) matchedCityId = 'bengaluru';
    else if (q.includes('assam') || q.includes('guwahati')) matchedCityId = 'guwahati';

    this.patientRecord.cityId = matchedCityId;

    if (window.focusCityLocation) {
      window.focusCityLocation(matchedCityId);
    }

    if (window.nationalHospitalDirectory) {
      const topHosp = window.nationalHospitalDirectory.find(h => 
        (h.cityId === matchedCityId || h.cityName.toLowerCase().includes(matchedCityId)) &&
        (h.category === 'government_hospitals' || h.category === 'private_hospitals')
      );
      if (topHosp) {
        this.patientRecord.hospitalName = topHosp.name;
        document.getElementById('valHosp').textContent = topHosp.name;
        document.getElementById('phoneHospitalTag').textContent = `${topHosp.name} (${topHosp.cityName})`;
        this.highlightField('fieldHosp');
      }
    }
  }

  generateIllnessReportAndTransmit() {
    const caseId = `CAS-2026-IN-${Math.floor(100 + Math.random() * 900)}`;
    this.patientRecord.caseId = caseId;

    const notice = {
      en: 'Formulating comprehensive Clinical Illness Assessment Report...',
      hi: 'आपकी बीमारी का संपूर्ण नैदानिक विश्लेषण और जांच रिपोर्ट तैयार की जा रही है...',
      as: 'আপোনাৰ ৰোগৰ বিশ্লেষণ আৰু পৰীক্ষাগাৰৰ ৰিপৰ্ট প্ৰস্তুত কৰা হৈছে...'
    };
    this.addBotMessage(notice[this.currentLanguage]);
    this.speak(notice[this.currentLanguage]);

    // Analyze symptoms with medical guidelines
    const plan = (typeof analyzeClinicalIssue === 'function') 
      ? analyzeClinicalIssue(this.patientRecord.symptoms)
      : {
          condition: "Acute Febrile Illness / Viral Syndrome",
          urgency: this.patientRecord.triageLevel,
          prescription: [
            { name: "Tab. Paracetamol 650 mg (Calpol / Dolo 650)", dosage: "1 tab SOS after meals (Max 3 daily)", duration: "3-5 days" },
            { name: "Cap. Pantoprazole 40 mg (Pan-40)", dosage: "1 capsule empty stomach once daily", duration: "5 days" },
            { name: "Oral Rehydration Salts (ORS Electral)", dosage: "1 liter dissolved in boiled-cooled water daily", duration: "3 days" }
          ],
          diagnostics: ["Complete Blood Count (CBC) with Platelets", "Dengue NS1 Antigen & Widal Test", "Continuous SpO2 & BP Monitoring"],
          diet: ["Light high-protein khichdi with boiled vegetables", "Tender coconut water and clear broths", "Drink at least 2.5 - 3 liters clean lukewarm water daily"],
          emergencyWarning: "Immediate emergency hospital admission required if high fever exceeds 103°F, severe persistent vomiting or breathlessness occurs."
        };

    this.patientRecord.clinicalPlan = plan;
    this.patientRecord.illnessAssessment = plan.condition;

    // Send to Node.js Backend API
    fetch('/api/consultations/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        caseId,
        fullName: this.patientRecord.fullName,
        age: this.patientRecord.age,
        phone: this.patientRecord.phone,
        chiefComplaint: this.patientRecord.symptoms,
        city: this.patientRecord.city,
        district: 'Metropolitan Clinical Zone',
        preferredLanguage: this.currentLanguage,
        isEmergency: plan.urgency === 'CRITICAL_EMERGENCY',
        illnessAssessment: plan.condition,
        triageLevel: plan.urgency,
        assignedHospital: this.patientRecord.hospitalName,
        prescription: plan.prescription,
        diagnostics: plan.diagnostics,
        dietAdvice: plan.diet
      })
    }).catch(() => {});

    // Render Clinical Report Card in Chat
    setTimeout(() => {
      const medsHtml = plan.prescription.map(m => `
        <div class="rx-item">
          <strong>💊 ${m.name}</strong><br/>
          <span style="font-size: 11px; color: #94a3b8;">• Dosage: ${m.dosage} | Duration: ${m.duration}</span>
        </div>
      `).join('');

      const diagsHtml = plan.diagnostics.map(t => `
        <div class="rx-item">🔬 ${t}</div>
      `).join('');

      const dietHtml = plan.diet.map(item => `
        <div class="rx-item">🥗 ${item}</div>
      `).join('');

      const reportHtml = `
        <div class="clinical-rx-card">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(85,220,203,0.25); padding-bottom: 6px;">
            <strong style="color: var(--mint); font-size: 13px;">Clinical Illness Assessment (${caseId})</strong>
            <span style="font-size: 10px; background: rgba(32,185,130,0.25); color: #8ce8c2; padding: 2px 7px; border-radius: 4px;">Verified MBBS File</span>
          </div>

          <div>
            <div class="rx-section-title">🏥 Clinical Impression & Diagnosis</div>
            <div style="font-size: 13.5px; font-weight: 800; color: #fff; margin-top: 2px;">${plan.condition}</div>
            <div style="font-size: 11px; color: var(--muted); margin-top: 1px;">Patient: ${this.patientRecord.fullName} • Location: ${this.patientRecord.city}</div>
          </div>

          <div>
            <div class="rx-section-title">💊 Suggested Medication Regimen (Rx)</div>
            ${medsHtml}
          </div>

          <div>
            <div class="rx-section-title">🔬 Recommended Diagnostic Protocols</div>
            ${diagsHtml}
          </div>

          <div>
            <div class="rx-section-title">🥗 Dietary & Recovery Guidelines</div>
            ${dietHtml}
          </div>

          <div style="background: rgba(239,68,68,0.15); border: 1px solid #ef4444; border-radius: 8px; padding: 8px; font-size: 11px; color: #fca5a5;">
            ⚠️ <strong>Emergency Advisory:</strong> ${plan.emergencyWarning}
          </div>

          <!-- Sending Animation Banner -->
          <div style="background: rgba(11,41,34,0.9); border: 1px solid rgba(85,220,203,0.3); border-radius: 8px; padding: 10px; margin-top: 6px;" id="transmitBox">
            <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700; color: var(--mint);">
              <span>📤 Transmitting File to Senior Doctor...</span>
              <span id="transmitPct">0%</span>
            </div>
            <div class="transmit-bar-box">
              <div class="transmit-bar-fill" id="transmitFill"></div>
            </div>
            <div style="font-size: 10.5px; color: #94a3b8; margin-top: 6px;" id="transmitSub">Routing case directly to Dr. Debabrata Roy, MBBS, MD</div>
          </div>
        </div>
      `;

      this.addBotMessage(reportHtml, true);

      // Animate progress bar to 100%
      setTimeout(() => {
        const fill = document.getElementById('transmitFill');
        const pct = document.getElementById('transmitPct');
        const sub = document.getElementById('transmitSub');
        if (fill) fill.style.width = '100%';
        if (pct) pct.textContent = '100%';
        if (sub) sub.innerHTML = '✅ <strong>Doctor Notified:</strong> Dr. Debabrata Roy is initiating immediate telephone call to your device.';

        // TRIGGER INCOMING TELEPHONE CALL
        setTimeout(() => {
          this.triggerDoctorPhoneCall();
        }, 1200);

      }, 400);

    }, 800);
  }

  // Trigger Incoming Phone Call Modal with Synthesized Telecom Ringing
  triggerDoctorPhoneCall() {
    const overlay = document.getElementById('telephoneCallOverlay');
    const ring = document.getElementById('callerRing');
    const status = document.getElementById('phoneCallStatus');
    const ringActions = document.getElementById('phoneRingActions');
    const inCallDetails = document.getElementById('inCallDetails');
    const timer = document.getElementById('callDurationTimer');

    overlay.classList.add('active');
    ring.classList.add('ringing');
    status.textContent = '📞 Incoming Tele-Triage Call...';
    ringActions.style.display = 'flex';
    inCallDetails.style.display = 'none';
    timer.style.display = 'none';

    this.startPhoneRingtone();
  }

  // When Patient Answers the Phone Call
  answerDoctorCall() {
    this.stopPhoneRingtone();
    this.inCall = true;

    const ring = document.getElementById('callerRing');
    const status = document.getElementById('phoneCallStatus');
    const ringActions = document.getElementById('phoneRingActions');
    const inCallDetails = document.getElementById('inCallDetails');
    const timer = document.getElementById('callDurationTimer');

    ring.classList.remove('ringing');
    ring.style.boxShadow = '0 0 35px rgba(16, 185, 129, 0.9)';
    status.innerHTML = '🟢 <span style="color: #34d399;">Direct Doctor Audio Line • Connected</span>';
    ringActions.style.display = 'none';
    inCallDetails.style.display = 'block';
    timer.style.display = 'block';

    // Start in-call duration timer
    this.callSeconds = 0;
    this.callTimerInterval = setInterval(() => {
      this.callSeconds++;
      const mins = String(Math.floor(this.callSeconds / 60)).padStart(2, '0');
      const secs = String(this.callSeconds % 60).padStart(2, '0');
      timer.textContent = `${mins}:${secs}`;
    }, 1000);

    // Populate Neighborhood Pills for this city
    this.renderNeighborhoodPills();

    // Natural, Human-Tone Doctor Opening Speech (Empathetic Bedside Manner)
    this.deliverHumanDoctorCallIntro();
  }

  renderNeighborhoodPills() {
    const dock = document.getElementById('neighborPillsDock');
    dock.innerHTML = '';
    const cityId = this.patientRecord.cityId || 'guwahati';
    const list = cityNeighborhoods[cityId] || cityNeighborhoods['guwahati'];

    list.forEach(n => {
      const btn = document.createElement('button');
      btn.className = `neighbor-pill-btn ${this.patientRecord.neighborhood.toLowerCase().includes(n.name.toLowerCase()) ? 'active' : ''}`;
      btn.textContent = `📍 ${n.name}`;
      btn.onclick = () => this.selectNeighborhood(n);
      dock.appendChild(btn);
    });
  }

  deliverHumanDoctorCallIntro() {
    const name = this.patientRecord.fullName || 'Patient';
    const symptoms = this.patientRecord.symptoms || 'fever and malaise';
    const city = this.patientRecord.city || 'Guwahati';

    const speechText = {
      en: `Hello ${name}, this is Dr. Debabrata Roy. First of all, please don't worry. I am looking right at your medical summary, and you are in safe hands. I see you've been dealing with ${symptoms}. Tell me, which specific area or neighborhood of ${city} are you currently staying in, so I can guide you to the nearest doctor clinic or hospital?`,
      hi: `नमस्ते ${name} जी, मैं डॉ. देवब्रत रॉय बोल रहा हूँ। सबसे पहले तो आप बिल्कुल चिंता मत कीजिए, मैं आपकी मेडिकल रिपोर्ट देख रहा हूँ। मैं समझ सकता हूँ कि आप ${symptoms} की वजह से काफी तकलीफ में हैं। मुझे बताएं कि आप ${city} में किस इलाके या कॉलोनी में हैं? ताकि मैं आपके पास के सबसे अच्छे डॉक्टर क्लीनिक और अस्पताल बता सकूँ।`,
      as: `নমস্কাৰ ${name}, মই ডাঃ দেৱব্ৰত ৰয় কৈ আছোঁ। প্ৰথমে কওঁ, একেবাৰেই ভয় বা চিন্তা নকৰিব। মই আপোনাৰ ৰিপৰ্টখন চাই আছোঁ। মই বুজি পাইছোঁ আপোনাৰ ${symptoms} সমস্যাৰ বাবে কষ্ট হৈছে। অনুগ্ৰহ কৰি কওকচোন, আপুনি ${city}ৰ কোনটো অঞ্চল বা এলেকাত আছে, যাতে মই আপোনাৰ ওচৰৰ ডাক্তৰ ক্লিনিক আৰু হাস্পতালৰ বিকল্প দিব পাৰোঁ?`
    };

    const speech = speechText[this.currentLanguage];
    document.getElementById('inCallDoctorSpeechText').textContent = speech;
    this.speak(speech);
  }

  // When patient speaks or selects a neighborhood
  selectNeighborhood(neighborhoodObj) {
    this.patientRecord.neighborhood = neighborhoodObj.name;
    this.patientRecord.recommendedClinic = neighborhoodObj;
    document.getElementById('valCity').textContent = `${this.patientRecord.city} • ${neighborhoodObj.name}`;
    document.getElementById('valHosp').textContent = neighborhoodObj.clinic;
    this.highlightField('fieldCity');
    this.highlightField('fieldHosp');

    // Update active button state
    document.querySelectorAll('.neighbor-pill-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent.includes(neighborhoodObj.name)) btn.classList.add('active');
    });

    // 1. DYNAMIC 3D MAP STREET FLY-TO: Fly map directly to the neighborhood clinic!
    if (window.map) {
      window.map.flyTo({
        center: [neighborhoodObj.lng, neighborhoodObj.lat],
        zoom: 15.6,
        pitch: 58,
        bearing: -14,
        duration: 2200
      });
    }

    // 2. Show clinic recommendation box on phone screen
    const box = document.getElementById('clinicSuggestionBox');
    box.style.display = 'block';
    document.getElementById('suggClinicName').textContent = neighborhoodObj.clinic;
    document.getElementById('suggClinicAddr').textContent = neighborhoodObj.address;
    document.getElementById('suggClinicDesc').textContent = neighborhoodObj.desc;

    // 3. Human doctor responds with comprehensive medical guidance, diet & exact medicine doses
    this.deliverDoctorClinicAndPrescriptionAdvice(neighborhoodObj);
  }

  deliverDoctorClinicAndPrescriptionAdvice(neighborhoodObj) {
    const name = this.patientRecord.fullName || 'Patient';
    const plan = this.patientRecord.clinicalPlan;

    const guidance = {
      en: `Got it ${name}, you are in ${neighborhoodObj.name}. I have marked the closest verified facility on your live map, which is ${neighborhoodObj.clinic} located at ${neighborhoodObj.address}. They have senior outpatient doctors and full emergency coverage.

Now, regarding your treatment and medicines:
For immediate relief, take Tablet Paracetamol 650 mg only after food, maximum 3 times a day if your temperature or pain crosses 100 degrees Fahrenheit. For your stomach, take Capsule Pantoprazole 40 mg first thing in the morning on an empty stomach with a glass of lukewarm water.

For your diet: please strictly stay away from oily, heavy, or spicy curries for the next few days. Eat warm moong dal khichdi, boiled vegetables, and drink plenty of fresh coconut water or ORS to maintain your electrolytes. Put a damp cloth on your forehead if the fever spikes, check your temperature every four hours, and get complete bed rest. If you experience any breathlessness, report to ${neighborhoodObj.clinic} immediately. How are you feeling right now?`,

      hi: `बहुत बढ़िया ${name} जी, आप ${neighborhoodObj.name} में हैं। मैंने लाइव मैप पर आपके सबसे नजदीकी केंद्र ${neighborhoodObj.clinic} को मार्क कर दिया है, जो ${neighborhoodObj.address} पर स्थित है। यहाँ अनुभवी डॉक्टरों की ओपीडी और इमरजेंसी दोनों उपलब्ध हैं।

अब दवाइयों और देखभाल की बात करते हैं:
आराम के लिए, आप टैबलेट पैरासिटामोल 650 mg खाना खाने के बाद ही लें, दिन में अधिकतम 3 बार जब बुखार या बदन दर्द 100 डिग्री से ऊपर हो। पेट की सुरक्षा के लिए, कैप्सूल पैंटोप्राजोल 40 mg सुबह खाली पेट हल्के गुनगुने पानी के साथ लें।

खान-पान में: अगले 3 दिनों तक तेल, मसालेदार और तली-भुनी चीजों से बिल्कुल परहेज करें। सादा मूंग दाल की खिचड़ी, उबली सब्जियां और पर्याप्त मात्रा में नारियल पानी या ओआरएस का घोल पिएं। माथे पर ताजे पानी की पट्टी रखें, हर 4 घंटे में तापमान नापें और पूरा आराम करें। यदि सांस लेने में तकलीफ हो, तो तुरंत ${neighborhoodObj.clinic} की इमरजेंसी में जाएं। आप अभी कैसा महसूस कर रहे हैं?`,

      as: `মই বুজি পালোঁ ${name}, আপুনি ${neighborhoodObj.name}ত আছে। মই লাইভ মেপত আপোনাৰ ওচৰৰ চিকিৎসা কেন্দ্ৰটো দেখুৱাই দিছোঁ। আপোনাৰ ওচৰতে ${neighborhoodObj.clinic} আছে, যি ${neighborhoodObj.address}ত অৱস্থিত। ইয়াত অভিজ্ঞ চিকিৎসক আৰু জৰুৰীকালীন ব্যৱস্থা আছে।

এতিয়া ঔষধ আৰু খাদ্যৰ বিষয়ে শুনক:
প্ৰাথমিক উপশমৰ বাবে, টেবলেট পেৰাচিটামল ৬৫০ mg খাদ্য খোৱাৰ পিছতহে খাব, দিনত সৰ্বাধিক ৩ বাৰ যদি জ্বৰ বা গাৰ বিষ ১০০ ডিগ্ৰীৰ বেছি হয়। পেটৰ গেছৰ বাবে কেপচুল পেনটোপ্ৰাজল ৪০ mg পুৱা খালী পেটত এগিলাচ কুহুমীয়া পানীৰে খাব।

খাদ্যৰ ক্ষেত্ৰত: অহা তিনিদিন তেল, জ্বলা আৰু মছলাযুক্ত আঞ্জা একেবাৰেই নাখাব। পাতল মগু দাইলৰ খিচিৰি, উতলোৱা শাক-পাচলি আৰু নাৰিকলৰ পানী বা অ' আৰ এছ খাব। কপালত তিতা কাপোৰৰ পটি দিব, প্ৰতি চাৰি ঘণ্টাত জ্বৰ জুখিব আৰু সম্পূৰ্ণ বিশ্ৰাম লব। উশাহ লবলৈ কষ্ট পালে পলম নকৰি ${neighborhoodObj.clinic}ৰ জৰুৰীকালীন বিভাগত যোগাযোগ কৰক। আপুনি এতিয়া কেনে পাইছে?`
    };

    const text = guidance[this.currentLanguage];
    document.getElementById('inCallDoctorSpeechText').textContent = text;
    this.speak(text);
  }

  // Handle in-call patient microphone speech
  handleInCallPatientSpeech(text) {
    const lower = text.toLowerCase();
    const cityId = this.patientRecord.cityId || 'guwahati';
    const list = cityNeighborhoods[cityId] || cityNeighborhoods['guwahati'];

    // Try finding matching neighborhood from patient speech
    const matched = list.find(n => lower.includes(n.name.toLowerCase()));
    if (matched) {
      this.selectNeighborhood(matched);
      return;
    }

    // Conversational doctor reply during call
    const replies = {
      en: `I hear you, ${this.patientRecord.fullName}. Please do not exert yourself. Follow the khichdi diet, stay well hydrated with coconut water, and take the Paracetamol 650 mg after food as explained. I am registering your file with ${this.patientRecord.hospitalName}.`,
      hi: `जी ${this.patientRecord.fullName} जी, मैं आपकी बात समझ गया। आप बिल्कुल तनाव न लें। हल्का भोजन लें, ओआरएस पानी पिएं और जैसा बताया गया है दवा समय पर लें। हमने आपकी फाइल अस्पताल में दर्ज कर दी है।`,
      as: `মই আপোনাৰ কথা বুজি পাইছোঁ ${this.patientRecord.fullName}। আপুনি চিন্তা নকৰিব। পাতল খাদ্য খাওক, পানী বেছিকৈ খাওক আৰু বুজাই দিয়া মতে ঔষধ সময়মতে খাওক। মই চিকিৎসালয়ত আপোনাৰ তথ্য পঞ্জীয়ন কৰিছোঁ।`
    };

    const rep = replies[this.currentLanguage];
    document.getElementById('inCallDoctorSpeechText').textContent = rep;
    this.speak(rep);
  }

  hangupDoctorCall() {
    this.stopPhoneRingtone();
    if (this.callTimerInterval) clearInterval(this.callTimerInterval);
    if (this.synth) this.synth.cancel();

    this.inCall = false;
    const overlay = document.getElementById('telephoneCallOverlay');
    overlay.classList.remove('active');

    const duration = document.getElementById('callDurationTimer').textContent;
    const endText = {
      en: `Telephone consultation concluded (${duration}). Prescription and neighborhood clinic referral recorded in HealthConnect central registry.`,
      hi: `टेलीफोन परामर्श समाप्त (${duration})। प्रिस्क्रिप्शन और नजदीकी क्लीनिक रेफरल हेल्थकनेक्ट रजिस्ट्री में सुरक्षित कर दिया गया है।`,
      as: `টেলিফোন পৰামৰ্শ সমাপ্ত হ'ল (${duration})। প্ৰেচক্ৰিপচন আৰু ওচৰৰ ক্লিনিকৰ তথ্য কেন্দ্ৰীয় ৰেকৰ্ডত সংৰক্ষিত কৰা হ'ল।`
    };

    this.addBotMessage(`📵 <strong>${endText[this.currentLanguage]}</strong>`);
    this.speak(endText[this.currentLanguage]);
  }

  declineDoctorCall() {
    this.stopPhoneRingtone();
    if (this.synth) this.synth.cancel();
    this.inCall = false;
    const overlay = document.getElementById('telephoneCallOverlay');
    overlay.classList.remove('active');
    this.addBotMessage("Call declined. You can resume consultation or tap the call button at any time.");
  }
}

// Global hooks
window.triggerDoctorAgentForHospital = function(hospitalName) {
  if (!window.interactiveDoctorBot) {
    window.interactiveDoctorBot = new InteractiveDoctorBot();
  }
  window.interactiveDoctorBot.toggleWindow(true);
  window.interactiveDoctorBot.startConsultationWorkflow(hospitalName);
};

window.addEventListener('DOMContentLoaded', () => {
  window.interactiveDoctorBot = new InteractiveDoctorBot();
});
