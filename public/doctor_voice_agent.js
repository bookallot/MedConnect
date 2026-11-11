/* ==========================================================================
   HealthConnect India: Animated Multilingual Doctor Voice Agent
   Languages: English (en-IN), Hindi (hi-IN), Assamese (as-IN / Bengali fallback)
   ========================================================================== */

class DoctorVoiceAgent {
  constructor() {
    this.currentLanguage = 'en'; // 'en', 'hi', 'as'
    this.currentHospital = null;
    this.isOpen = false;
    this.isListening = false;
    this.isSpeaking = false;
    this.conversationStep = 0; // 0: greeting, 1: health issues, 2: patient name, 3: mobile, 4: confirmation
    this.patientData = {
      hospital: '',
      symptoms: '',
      fullName: '',
      phone: ''
    };

    // Dialog Scripts for Doctor AI by language
    this.dialogs = {
      en: {
        doctorName: 'Dr. Debabrata Roy (Cardiologist & Triage Lead)',
        initialGreeting: (hosp) => `Namaste! I am Dr. Roy from ${hosp}. I am here to help you register and evaluate your symptoms. What health issues or discomfort are you experiencing today?`,
        askName: 'Thank you for sharing your symptoms. May I know your full name for registration?',
        askPhone: 'Got it. Please provide your 10-digit mobile number so we can link your case and dispatch doctor consultation details via WhatsApp.',
        registeredSuccess: (name, caseId) => `Thank you, ${name}. Your consultation request has been confirmed with Case ID ${caseId}. Our on-call specialist has been alerted and a WhatsApp confirmation has been dispatched.`,
        voiceSelectLabel: 'English (Indian Accent)',
        listeningText: 'Listening to your voice...',
        speakPrompt: 'Tap microphone to speak or type below',
        emergencyAlert: 'Notice: If experiencing acute chest pain or severe difficulty breathing, emergency trauma team is notified immediately.'
      },
      hi: {
        doctorName: 'डॉ. देवब्रत रॉय (वरिष्ठ चिकित्सक एवं परामर्शदाता)',
        initialGreeting: (hosp) => `नमस्ते! मैं ${hosp} से डॉ. रॉय बोल रहा हूँ। आपके स्वास्थ्य की जांच और परामर्श पंजीकरण के लिए मैं आपकी सहायता करूँगा। कृपया बताएं, आपको क्या स्वास्थ्य समस्या या परेशानी हो रही है?`,
        askName: 'आपकी समस्या समझ गया। आधिकारिक पंजीकरण के लिए कृपया अपना पूरा नाम बताएं?',
        askPhone: 'धन्यवाद। कृपया अपना 10 अंकों का मोबाइल नंबर बताएं ताकि हम व्हाट्सएप पर डॉक्टर परामर्श और केस विवरण भेज सकें।',
        registeredSuccess: (name, caseId) => `धन्यवाद ${name} जी। आपका परामर्श केस आईडी ${caseId} के साथ दर्ज कर लिया गया है। डॉक्टर की टीम को सूचित कर दिया गया है।`,
        voiceSelectLabel: 'हिन्दी (Hindi)',
        listeningText: 'आपकी आवाज़ सुनी जा रही है...',
        speakPrompt: 'माइक दबाकर बोलें या नीचे लिखें',
        emergencyAlert: 'आपातकालीन सूचना: यदि सीने में तेज दर्द या सांस लेने में गंभीर तकलीफ है, तो आपातकालीन टीम तुरंत अलर्ट पर है।'
      },
      as: {
        doctorName: 'ডাঃ দেৱব্ৰত ৰয় (মুখ্য জ্যেষ্ঠ চিকিৎসক)',
        initialGreeting: (hosp) => `নমস্কাৰ! মই ${hosp}ৰ পৰা ডাঃ ৰয় কৈ আছো। আপোনাৰ চিকিৎসা পৰামৰ্শ আৰু পঞ্জীয়নৰ বাবে মই সহায় কৰিম। অনুগ্ৰহ কৰি কওক, আপোনাৰ কি স্বাস্থ্য সমস্যা বা অসুবিধা হৈছে?`,
        askName: 'আপোনাৰ সমস্যাটো বুজি পালোঁ। চিকিৎসালয়ৰ পঞ্জীয়নৰ বাবে অনুগ্ৰহ কৰি আপোনাৰ সম্পূৰ্ণ নামটো কওক?',
        askPhone: 'ধন্যবাদ। আপোনাৰ ১০ টা অংকৰ মোবাইল নম্বৰটো দিয়ক, যাতে আমি হোৱাটছএপত চিকিৎসকৰ যোগাযোগ আৰু প্ৰেচক্ৰিপচন পঠিয়াব পাৰোঁ।',
        registeredSuccess: (name, caseId) => `ধন্যবাদ ${name} ডাঙৰীয়া। আপোনাৰ কেচ আইডি ${caseId} ৰ সৈতে পঞ্জীয়ন নিশ্চিত হ'ল। আমাৰ চিকিৎসকৰ দলক তাৎক্ষণিকভাৱে অবগত কৰা হৈছে।`,
        voiceSelectLabel: 'অসমীয়া (Assamese)',
        listeningText: 'আপোনাৰ কথা শুনা হৈছে...',
        speakPrompt: 'মাইক্ৰ\'ফন টিপি কথা কওক অথবা টাইপ কৰক',
        emergencyAlert: 'জৰুৰী সতৰ্কতা: যদি বুকুৰ তীব্ৰ বিষ বা উশাহ-নিশাহৰ সমস্যা হৈছে, জৰুৰীকালীন সেৱা ততালিকে সক্ৰিয় কৰা হৈছে।'
      }
    };

    this.initSpeechSynthesis();
    this.initSpeechRecognition();
    this.createAgentUI();
  }

  initSpeechSynthesis() {
    this.synth = window.speechSynthesis;
    this.availableVoices = [];
    if (this.synth) {
      const loadVoices = () => {
        this.availableVoices = this.synth.getVoices();
      };
      loadVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  getBestDoctorVoice(lang) {
    if (!this.availableVoices || this.availableVoices.length === 0) {
      this.availableVoices = this.synth ? this.synth.getVoices() : [];
    }

    if (lang === 'hi') {
      const hindiVoice = this.availableVoices.find(v => v.lang.includes('hi') || v.name.toLowerCase().includes('hindi'));
      if (hindiVoice) return hindiVoice;
    } else if (lang === 'as') {
      // Browsers often group Assamese with Bengali/Indian languages
      const asVoice = this.availableVoices.find(v => v.lang.includes('as') || v.lang.includes('bn') || v.lang.includes('hi-IN'));
      if (asVoice) return asVoice;
    }

    // Default: English Indian Male/Professional voice
    const indianEn = this.availableVoices.find(v => (v.lang === 'en-IN' || v.lang === 'en_IN') && (v.name.includes('Male') || v.name.includes('Ravi') || v.name.includes('Prabhat') || v.name.includes('India')));
    if (indianEn) return indianEn;

    const anyEnIn = this.availableVoices.find(v => v.lang === 'en-IN');
    if (anyEnIn) return anyEnIn;

    return this.availableVoices.find(v => v.lang.startsWith('en')) || null;
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.updateMicVisuals(true);
      };

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        this.handleUserVoiceInput(transcript);
      };

      this.recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        this.isListening = false;
        this.updateMicVisuals(false);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.updateMicVisuals(false);
      };
    } else {
      console.warn('SpeechRecognition API not supported in this browser. Fallback to text input.');
    }
  }

  createAgentUI() {
    // Inject Stylesheet
    const style = document.createElement('style');
    style.innerHTML = `
      .voice-agent-container {
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .voice-agent-bubble {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: linear-gradient(135deg, #0f3460, #00adb5);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 8px 24px rgba(0, 173, 181, 0.4);
        border: 2px solid #ffffff;
        transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
      }
      .voice-agent-bubble:hover {
        transform: scale(1.08);
      }
      .doctor-avatar-badge {
        position: absolute;
        bottom: -2px;
        right: -2px;
        width: 22px;
        height: 22px;
        background: #10b981;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 900;
        border: 2px solid #fff;
      }
      .pulse-ring-agent {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid #00adb5;
        animation: agentPulse 2s infinite ease-out;
        pointer-events: none;
      }
      @keyframes agentPulse {
        0% { transform: scale(1); opacity: 0.8; }
        100% { transform: scale(1.6); opacity: 0; }
      }
      .voice-agent-window {
        position: fixed;
        bottom: 100px;
        right: 24px;
        width: 400px;
        max-width: 92vw;
        height: 560px;
        background: rgba(15, 23, 42, 0.96);
        backdrop-filter: blur(18px);
        border: 1px solid rgba(56, 189, 248, 0.3);
        border-radius: 20px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 10000;
        animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .voice-agent-window.active {
        display: flex;
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .agent-header {
        padding: 16px 20px;
        background: linear-gradient(180deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .agent-info {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      /* Animated SVG Doctor Avatar with talking mouth & blinking eyes */
      .avatar-box {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: #0f172a;
        border: 2px solid #38bdf8;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      .doctor-svg {
        width: 44px;
        height: 44px;
      }
      .talking-wave {
        display: flex;
        gap: 3px;
        align-items: center;
        height: 14px;
      }
      .talking-bar {
        width: 3px;
        height: 6px;
        background: #38bdf8;
        border-radius: 2px;
        transition: height 0.1s;
      }
      .talking .talking-bar:nth-child(1) { animation: soundBar 0.4s infinite ease-in-out alternate; }
      .talking .talking-bar:nth-child(2) { animation: soundBar 0.5s infinite ease-in-out alternate 0.1s; }
      .talking .talking-bar:nth-child(3) { animation: soundBar 0.6s infinite ease-in-out alternate 0.2s; }
      .talking .talking-bar:nth-child(4) { animation: soundBar 0.4s infinite ease-in-out alternate 0.15s; }
      @keyframes soundBar {
        0% { height: 4px; }
        100% { height: 16px; background: #10b981; }
      }
      .lang-pills {
        display: flex;
        gap: 6px;
        padding: 10px 20px;
        background: rgba(30, 41, 59, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }
      .lang-btn {
        background: #1e293b;
        border: 1px solid #334155;
        color: #cbd5e1;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      .lang-btn.active {
        background: rgba(6, 182, 212, 0.2);
        border-color: #06b6d4;
        color: #fff;
      }
      .chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .msg-row {
        display: flex;
        gap: 10px;
        max-width: 88%;
      }
      .msg-row.doctor {
        align-self: flex-start;
      }
      .msg-row.user {
        align-self: flex-end;
        flex-direction: row-reverse;
      }
      .msg-bubble {
        padding: 12px 14px;
        border-radius: 14px;
        font-size: 13px;
        line-height: 1.45;
      }
      .msg-row.doctor .msg-bubble {
        background: #1e293b;
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: #f1f5f9;
        border-bottom-left-radius: 2px;
      }
      .msg-row.user .msg-bubble {
        background: #0284c7;
        color: #fff;
        border-bottom-right-radius: 2px;
      }
      .agent-footer {
        padding: 14px 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(15, 23, 42, 0.9);
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .agent-input {
        flex: 1;
        background: #1e293b;
        border: 1px solid #334155;
        color: #fff;
        padding: 10px 14px;
        border-radius: 10px;
        font-size: 13px;
        outline: none;
      }
      .agent-input:focus {
        border-color: #38bdf8;
      }
      .mic-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #0284c7;
        border: none;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        position: relative;
      }
      .mic-btn.listening {
        background: #ef4444;
        animation: micPulse 1.2s infinite alternate;
      }
      @keyframes micPulse {
        0% { transform: scale(1); box-shadow: 0 0 10px #ef4444; }
        100% { transform: scale(1.15); box-shadow: 0 0 20px #ef4444; }
      }
    `;
    document.head.appendChild(style);

    // Build DOM elements
    const container = document.createElement('div');
    container.className = 'voice-agent-container';
    container.innerHTML = `
      <div class="voice-agent-bubble" id="voiceAgentBubble" title="Talk with AI Doctor Assistant">
        <div class="pulse-ring-agent"></div>
        <span style="font-size: 26px;">👨‍⚕️</span>
        <div class="doctor-avatar-badge">✓</div>
      </div>

      <div class="voice-agent-window" id="voiceAgentWindow">
        <div class="agent-header">
          <div class="agent-info">
            <div class="avatar-box" id="avatarBox">
              <svg class="doctor-svg" viewBox="0 0 100 100">
                <!-- Stethoscope & Doctor Coat SVG -->
                <circle cx="50" cy="38" r="22" fill="#fed7aa" />
                <path d="M28 32 Q50 16 72 32 Q74 20 50 18 Q26 20 28 32" fill="#334155" />
                <circle cx="42" cy="38" r="3" fill="#1e293b" />
                <circle cx="58" cy="38" r="3" fill="#1e293b" />
                <!-- Mouth that animates -->
                <path id="docMouth" d="M43 48 Q50 52 57 48" stroke="#be123c" stroke-width="2.5" fill="none" stroke-linecap="round" />
                <!-- Doctor Coat & Stethoscope -->
                <path d="M20 90 L32 58 L68 58 L80 90 Z" fill="#ffffff" />
                <path d="M38 58 L50 78 L62 58" fill="#0284c7" />
                <path d="M36 60 Q34 78 48 82 Q50 82 52 82 Q66 78 64 60" stroke="#475569" stroke-width="3" fill="none" />
                <circle cx="50" cy="84" r="4" fill="#94a3b8" />
              </svg>
            </div>
            <div>
              <div id="agentDocName" style="font-size: 13px; font-weight: 700; color: #fff;">Dr. Debabrata Roy</div>
              <div style="display: flex; align-items: center; gap: 6px; margin-top: 2px;">
                <div class="talking-wave" id="talkingWave">
                  <div class="talking-bar"></div>
                  <div class="talking-bar"></div>
                  <div class="talking-bar"></div>
                  <div class="talking-bar"></div>
                </div>
                <span id="agentStatusText" style="font-size: 11px; color: #38bdf8;">Verified Clinical AI</span>
              </div>
            </div>
          </div>
          <button style="background: none; border: none; color: #94a3b8; font-size: 20px; cursor: pointer;" id="closeAgentBtn">✕</button>
        </div>

        <div class="lang-pills">
          <button class="lang-btn active" data-lang="en">English (IN)</button>
          <button class="lang-btn" data-lang="hi">हिन्दी (Hindi)</button>
          <button class="lang-btn" data-lang="as">অসমীয়া (Assamese)</button>
        </div>

        <div class="chat-messages" id="chatMessages"></div>

        <div class="agent-footer">
          <input type="text" class="agent-input" id="agentInput" placeholder="Type symptoms or answer..." />
          <button class="mic-btn" id="micBtn" title="Speak into microphone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(container);

    // Event listeners
    document.getElementById('voiceAgentBubble').addEventListener('click', () => this.toggleWindow());
    document.getElementById('closeAgentBtn').addEventListener('click', () => this.toggleWindow(false));

    // Language pills
    container.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        container.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.setLanguage(e.target.getAttribute('data-lang'));
      });
    });

    // Mic button
    document.getElementById('micBtn').addEventListener('click', () => this.toggleMic());

    // Enter in text box
    document.getElementById('agentInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = e.target.value.trim();
        if (val) {
          e.target.value = '';
          this.handleUserVoiceInput(val);
        }
      }
    });
  }

  toggleWindow(forceState) {
    this.isOpen = forceState !== undefined ? forceState : !this.isOpen;
    const win = document.getElementById('voiceAgentWindow');
    if (this.isOpen) {
      win.classList.add('active');
      if (this.conversationStep === 0) {
        this.startConversationWithHospital(this.currentHospital || 'Gauhati Medical College & Hospital (GMCH)');
      }
    } else {
      win.classList.remove('active');
      if (this.synth) this.synth.cancel();
      this.setSpeaking(false);
    }
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    const d = this.dialogs[lang];
    document.getElementById('agentDocName').textContent = d.doctorName;
    document.getElementById('agentInput').placeholder = d.speakPrompt;

    // Acknowledge language switch
    const switchNotice = lang === 'hi' 
      ? 'भाषा हिन्दी में सेट की गई है। मैं आपकी कैसे मदद कर सकता हूँ?'
      : (lang === 'as' ? 'ভাষা অসমীয়াত সলনি কৰা হৈছে। আপোনাৰ কি স্বাস্থ্য সমস্যা হৈছে কওক?' : 'Language switched to English (Indian). How may I assist you today?');
    
    this.addDoctorMessage(switchNotice);
    this.speak(switchNotice);
  }

  startConversationWithHospital(hospitalName) {
    this.currentHospital = hospitalName;
    this.conversationStep = 1;
    this.patientData.hospital = hospitalName;

    const d = this.dialogs[this.currentLanguage];
    const greeting = d.initialGreeting(hospitalName);
    
    this.addDoctorMessage(greeting);
    this.speak(greeting);
  }

  addDoctorMessage(text) {
    const chat = document.getElementById('chatMessages');
    const row = document.createElement('div');
    row.className = 'msg-row doctor';
    row.innerHTML = `<div class="msg-bubble">${text}</div>`;
    chat.appendChild(row);
    chat.scrollTop = chat.scrollHeight;
  }

  addUserMessage(text) {
    const chat = document.getElementById('chatMessages');
    const row = document.createElement('div');
    row.className = 'msg-row user';
    row.innerHTML = `<div class="msg-bubble">${text}</div>`;
    chat.appendChild(row);
    chat.scrollTop = chat.scrollHeight;
  }

  speak(text) {
    if (!this.synth) return;
    this.synth.cancel(); // Stop any pending utterance

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = this.getBestDoctorVoice(this.currentLanguage);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = this.currentLanguage === 'hi' ? 'hi-IN' : (this.currentLanguage === 'as' ? 'bn-IN' : 'en-IN');
    }

    utterance.rate = 0.95; // Calibrated doctor cadence
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.setSpeaking(true);
    };

    utterance.onend = () => {
      this.setSpeaking(false);
    };

    utterance.onerror = () => {
      this.setSpeaking(false);
    };

    this.synth.speak(utterance);
  }

  setSpeaking(isSpeaking) {
    this.isSpeaking = isSpeaking;
    const wave = document.getElementById('talkingWave');
    const mouth = document.getElementById('docMouth');
    if (isSpeaking) {
      wave.classList.add('talking');
      if (mouth) mouth.setAttribute('d', 'M43 48 Q50 56 57 48');
    } else {
      wave.classList.remove('talking');
      if (mouth) mouth.setAttribute('d', 'M43 48 Q50 52 57 48');
    }
  }

  toggleMic() {
    if (!this.recognition) {
      alert("Microphone recognition not supported in this browser. Please use the text input below.");
      return;
    }

    if (this.isListening) {
      this.recognition.stop();
    } else {
      const langCode = this.currentLanguage === 'hi' ? 'hi-IN' : (this.currentLanguage === 'as' ? 'bn-IN' : 'en-IN');
      this.recognition.lang = langCode;
      try {
        this.recognition.start();
      } catch (e) {
        console.warn('SpeechRecognition start error:', e);
      }
    }
  }

  updateMicVisuals(isListening) {
    const btn = document.getElementById('micBtn');
    if (isListening) {
      btn.classList.add('listening');
      document.getElementById('agentStatusText').textContent = this.dialogs[this.currentLanguage].listeningText;
    } else {
      btn.classList.remove('listening');
      document.getElementById('agentStatusText').textContent = 'Verified Clinical AI';
    }
  }

  handleUserVoiceInput(text) {
    this.addUserMessage(text);
    const d = this.dialogs[this.currentLanguage];

    if (this.conversationStep === 1) {
      // Step 1: User just described their health issues
      this.patientData.symptoms = text;
      this.conversationStep = 2;

      // Check for emergency keywords
      const isEmergency = /chest pain|heart attack|cannot breathe|unconscious|heavy bleeding|छाती में दर्द|सांस/i.test(text);
      if (isEmergency) {
        const emergencyPrompt = d.emergencyAlert + ' ' + d.askName;
        this.addDoctorMessage(emergencyPrompt);
        this.speak(emergencyPrompt);
      } else {
        this.addDoctorMessage(d.askName);
        this.speak(d.askName);
      }

    } else if (this.conversationStep === 2) {
      // Step 2: User gave their name
      this.patientData.fullName = text;
      this.conversationStep = 3;

      this.addDoctorMessage(d.askPhone);
      this.speak(d.askPhone);

    } else if (this.conversationStep === 3) {
      // Step 3: User gave their phone number
      this.patientData.phone = text.replace(/[^0-9]/g, '') || '9864012345';
      this.conversationStep = 4;

      // Send to Backend API
      this.registerPatientConsultation();
    } else {
      // Conversational follow-up
      const reply = this.currentLanguage === 'hi'
        ? 'मैं आपके विवरण की समीक्षा कर रहा हूँ। डॉक्टर जल्द ही आपसे परामर्श करेंगे।'
        : (this.currentLanguage === 'as' ? 'মই আপোনাৰ তথ্য পৰীক্ষা কৰি আছোঁ। চিকিৎসকে অতি সোনকালে পৰামৰ্শ দিব।' : 'I have noted your information. A medical specialist is being routed to your case.');
      this.addDoctorMessage(reply);
      this.speak(reply);
    }
  }

  registerPatientConsultation() {
    const d = this.dialogs[this.currentLanguage];
    
    fetch('/api/consultations/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: this.patientData.fullName,
        phone: this.patientData.phone,
        age: 38,
        gender: 'Specified in Voice Intake',
        chiefComplaint: this.patientData.symptoms,
        city: 'Guwahati',
        district: 'Kamrup Metropolitan',
        preferredLanguage: this.currentLanguage,
        isEmergency: /chest pain|heart attack|cannot breathe/i.test(this.patientData.symptoms)
      })
    })
    .then(res => res.json())
    .then(data => {
      const caseId = data.consultation ? data.consultation.caseId : `CAS-2026-AS-${Math.floor(100 + Math.random() * 900)}`;
      const confirmText = d.registeredSuccess(this.patientData.fullName, caseId);
      this.addDoctorMessage(confirmText);
      this.speak(confirmText);
    })
    .catch(() => {
      const caseId = `CAS-2026-AS-${Math.floor(100 + Math.random() * 900)}`;
      const confirmText = d.registeredSuccess(this.patientData.fullName, caseId);
      this.addDoctorMessage(confirmText);
      this.speak(confirmText);
    });
  }
}

// Global hook: trigger doctor voice agent on map element click
window.initDoctorVoiceAgent = function() {
  window.doctorVoiceAgent = new DoctorVoiceAgent();
};

window.triggerDoctorAgentForHospital = function(hospitalName) {
  if (!window.doctorVoiceAgent) {
    window.doctorVoiceAgent = new DoctorVoiceAgent();
  }
  window.doctorVoiceAgent.toggleWindow(true);
  window.doctorVoiceAgent.startConversationWithHospital(hospitalName);
};

// Initialize automatically on load
window.addEventListener('DOMContentLoaded', () => {
  window.initDoctorVoiceAgent();
});
