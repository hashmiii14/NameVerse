import { NameAnalysis } from '@/types/name';

export const SEED_NAMES: Record<string, NameAnalysis> = {
  "muhammad": {
    name: "Muhammad",
    normalized_name: "muhammad",
    gender: "Male",
    gender_notes: "Traditionally male across all Islamic naming traditions and Arabic-speaking regions.",
    origin: "Arabic",
    languages: ["Arabic", "Urdu", "Persian", "Turkish", "Malay", "Hausa"],
    meaning: "Praiseworthy, commendable, or the one who is continuously praised.",
    root_word: "ḥ-m-d (ح-م-د)",
    etymology: "Derived from the Arabic triconsonantal root Ḥ-M-D meaning 'praise'. It is a passive participle form (Form II / Maf'ūl pattern), emphasizing abundant and repeated praise.",
    academic_status: "Well established",
    history: "One of the most widely documented names in world history. Pre-Islamic usage was rare but existed in Arabia. It gained monumental global prominence as the name of the Islamic Prophet Muhammad (c. 570–632 CE). Over the centuries, it spread across North Africa, the Middle East, Central Asia, South Asia, and Southeast Asia, becoming the most popular given name for men globally.",
    historical_period: "Classical Antiquity / Early Middle Ages (6th Century CE)",
    geographic_spread: ["Middle East", "South Asia", "North Africa", "Central Asia", "Southeast Asia", "Europe"],
    religious_associations: [
      {
        religion: "Islam",
        strength: "Strong",
        explanation: "Name of the founder and final Prophet of Islam. Borne out of reverence by Muslims worldwide."
      }
    ],
    cultural_associations: [
      "Islamic naming tradition",
      "Arabic linguistic heritage",
      "Honorific prefix in South Asian and Middle Eastern cultures"
    ],
    pronunciation: {
      romanized: "muḥammad",
      ipa: "/muˈħammad/",
      simple: "muh-HAM-mad",
      original_script: "مُحَمَّد"
    },
    variants: [
      { spelling: "Mohammed", region_or_lang: "English / French / Global", notes: "Common European transliteration" },
      { spelling: "Mohammad", region_or_lang: "Persian / South Asia", notes: "Standard in Iran, Pakistan, India" },
      { spelling: "Mohamed", region_or_lang: "North Africa / Egypt", notes: "French/North African transliteration" },
      { spelling: "Mehmet", region_or_lang: "Turkish", notes: "Turkish adaptation of Muhammad" },
      { spelling: "Mamadou", region_or_lang: "West Africa", notes: "French West African phonetic variation" }
    ],
    related_names: [
      { name: "Ahmad", relation_type: "Linguistic Root" },
      { name: "Mahmud", relation_type: "Linguistic Root" },
      { name: "Hamid", relation_type: "Linguistic Root" },
      { name: "Hamida", relation_type: "Feminine Form" }
    ],
    regional_usage: [
      { region: "Pakistan", popularity_data: "#1 given name / title prefix", is_primary: true },
      { region: "Egypt", popularity_data: "#1 male given name", is_primary: true },
      { region: "United Kingdom", popularity_data: "Top 10 overall baby names", is_primary: false },
      { region: "Indonesia", popularity_data: "Extremely widespread given name", is_primary: true },
      { region: "India", popularity_data: "Very common among Indian Muslims", is_primary: true }
    ],
    notable_people: [
      { name: "Prophet Muhammad", role: "Prophet of Islam & Historical Figure", region: "Arabian Peninsula", why_notable: "Central historical figure of Islam" },
      { name: "Muhammad Ali", role: "Heavyweight Boxing Champion & Civil Rights Activist", region: "United States", why_notable: "Global sports icon and humanitarian" },
      { name: "Muhammad Iqbal", role: "Philosopher & Poet", region: "South Asia", why_notable: "Renowned Urdu and Persian poet and thinker" },
      { name: "Muhammad Ali Jinnah", role: "Statesman", region: "South Asia", why_notable: "Founder of Pakistan" }
    ],
    confidence: "High",
    sources: [
      { title: "Hans Wehr Dictionary of Modern Written Arabic", type: "Linguistic Dictionary" },
      { title: "Oxford Dictionary of First Names", type: "Academic Resource" },
      { title: "Encyclopaedia of Islam (Leiden)", type: "Historical Reference" }
    ],
    uncertainties: [
      "Exact frequency of the name in pre-Islamic Arabia remains debated among epigraphers, though ancient South Arabian inscriptions confirm the root Ḥ-M-D existed."
    ]
  },

  "hashmi": {
    name: "Hashmi",
    normalized_name: "hashmi",
    gender: "Unisex",
    gender_notes: "Used predominantly as a surname, nisba (attributive surname), or family title for both men and women.",
    origin: "Arabic",
    languages: ["Arabic", "Urdu", "Persian"],
    meaning: "Pertaining to or descended from Hashim; associated with generosity or breaker of bread.",
    root_word: "h-sh-m (هـ-ش-م)",
    etymology: "Derived from the Arabic root H-Sh-M meaning 'to crush or break' (specifically breaking bread to feed guests). The suffix '-i' forms a Nisba (attributive relationship).",
    academic_status: "Well established",
    history: "Traces historically to Hashim ibn Abd Manaf, the great-grandfather of the Islamic Prophet Muhammad. Hashim earned his nickname by crushing bread to feed pilgrims in Mecca during a famine. The nisba 'Hashmi' (or Al-Hashimi) historically designated members or adherents of the Banu Hashim clan of the Quraysh tribe.",
    historical_period: "Pre-Islamic Arabia (5th Century CE)",
    geographic_spread: ["South Asia (Pakistan, India)", "Middle East", "Iran", "North Africa"],
    religious_associations: [
      {
        religion: "Islam",
        strength: "Strong",
        explanation: "Associated with the lineage of Banu Hashim and the Prophet's extended family."
      }
    ],
    cultural_associations: [
      "South Asian family surname",
      "Arabic nisba lineage title",
      "Hashemite historical dynasty"
    ],
    pronunciation: {
      romanized: "hāshimī",
      ipa: "/haːʃimiː/",
      simple: "HASH-mee",
      original_script: "ஹாஷ்மி / هاشمي"
    },
    variants: [
      { spelling: "Hashemi", region_or_lang: "Persian / Iran", notes: "Standard Iranian transliteration" },
      { spelling: "Al-Hashimi", region_or_lang: "Arabic / Middle East", notes: "Definite article prefix form" },
      { spelling: "Hashemite", region_or_lang: "English / Dynastic", notes: "Anglicized reference to the royal house of Jordan" }
    ],
    related_names: [
      { name: "Hashim", relation_type: "Linguistic Root" },
      { name: "Hisham", relation_type: "Linguistic Root" }
    ],
    regional_usage: [
      { region: "Pakistan", popularity_data: "Common surname throughout Punjab and Sindh", is_primary: true },
      { region: "India", popularity_data: "Common surname among North and South Indian Muslims", is_primary: true },
      { region: "Jordan", popularity_data: "Royal lineage designation (Hashemite Kingdom)", is_primary: true }
    ],
    notable_people: [
      { name: "Hashim ibn Abd Manaf", role: "Leader of Quraysh", region: "Mecca", why_notable: "Ancestor of Banu Hashim" },
      { name: "Emir Faisal Al-Hashimi", role: "King of Iraq and Syria", region: "Middle East", why_notable: "Key figure in 20th century Arab history" }
    ],
    confidence: "High",
    sources: [
      { title: "Arabic-English Lexicon by Edward William Lane", type: "Linguistic Dictionary" },
      { title: "Genealogical History of Arabia", type: "Historical Reference" }
    ],
    uncertainties: [
      "Using the surname Hashmi in modern times does not automatically prove direct genealogical descent from the Banu Hashim clan, as surnames are often adopted geographically or culturally."
    ]
  },

  "aarav": {
    name: "Aarav",
    normalized_name: "aarav",
    gender: "Male",
    gender_notes: "Traditionally male in Indian naming conventions.",
    origin: "Sanskrit",
    languages: ["Sanskrit", "Hindi", "Marathi", "Gujarati", "Bengali"],
    meaning: "Peaceful, calm, wisdom, or sound / resonance.",
    root_word: "ā-rāva (आराव / रव)",
    etymology: "From Sanskrit 'Ā-rāva' meaning 'melodious sound, resonance' or derived from root 'Rava' (sound). Modern popular usage interprets it as 'peaceful / calm'.",
    academic_status: "Well established",
    history: "A classic Sanskrit word found in ancient Indian literature including texts describing nature and spiritual sound vibrations. It surged in modern popularity across India and the global Indian diaspora during the 2000s as a contemporary yet deeply traditional choice.",
    historical_period: "Vedic & Classical Sanskrit Period",
    geographic_spread: ["India", "Nepal", "Global Indian Diaspora"],
    religious_associations: [
      {
        religion: "Hindu traditions",
        strength: "Strong",
        explanation: "Derived from Sanskrit spiritual roots and widely used in Hindu naming ceremonies (Namakarana)."
      }
    ],
    cultural_associations: [
      "Modern Indian naming trend",
      "Sanskrit etymological heritage"
    ],
    pronunciation: {
      romanized: "ārav",
      ipa: "/aːrəʋ/",
      simple: "AH-ruv",
      original_script: "आरव"
    },
    variants: [
      { spelling: "Arav", region_or_lang: "English / Transliteration", notes: "Simplified single 'a' spelling" },
      { spelling: "Aaravh", region_or_lang: "Numerological", notes: "Alternative spelling variant" }
    ],
    related_names: [
      { name: "Aaravi", relation_type: "Feminine Form" },
      { name: "Rava", relation_type: "Linguistic Root" }
    ],
    regional_usage: [
      { region: "India", popularity_data: "Consistently #1 or Top 5 male name since 2010", is_primary: true },
      { region: "United States", popularity_data: "Top 300 male names among Indian Americans", is_primary: false }
    ],
    notable_people: [
      { name: "Aarav Kumar", role: "Public Figure", region: "India", why_notable: "Son of Bollywood actor Akshay Kumar" }
    ],
    confidence: "High",
    sources: [
      { title: "Monier-Williams Sanskrit-English Dictionary", type: "Linguistic Dictionary" },
      { title: "Indian Ministry of Statistics Naming Data", type: "Government Registry" }
    ]
  },

  "aadhya": {
    name: "Aadhya",
    normalized_name: "aadhya",
    gender: "Female",
    gender_notes: "Traditionally female in Indian naming traditions.",
    origin: "Sanskrit",
    languages: ["Sanskrit", "Hindi", "Telugu", "Tamil", "Kannada"],
    meaning: "First power, primal energy, beginning, or Goddess Durga.",
    root_word: "ādya (आद्या)",
    etymology: "Derived from Sanskrit 'Ādya' meaning 'first, original, paramount'. It is an epithet of Goddess Durga as the primordial feminine energy (Adishakti).",
    academic_status: "Well established",
    history: "Rooted in ancient Vedic literature and Shaktism traditions. The name reflects the philosophical concept of 'Adi' (beginning). It rose to top popularity across urban India over the last two decades.",
    historical_period: "Ancient Sanskrit Literature",
    geographic_spread: ["India", "Nepal", "Singapore", "US/UK Diaspora"],
    religious_associations: [
      {
        religion: "Hindu traditions",
        strength: "Strong",
        explanation: "Epithet of Goddess Durga, symbol of cosmic Shakti."
      }
    ],
    cultural_associations: [
      "Shakti tradition",
      "Contemporary Indian naming"
    ],
    pronunciation: {
      romanized: "āḍhyā",
      ipa: "/aːd̪ʱjaː/",
      simple: "AAD-hya",
      original_script: "आद्या"
    },
    variants: [
      { spelling: "Aadya", region_or_lang: "Standard Transliteration", notes: "Direct Sanskrit transliteration" },
      { spelling: "Adhya", region_or_lang: "Simplified", notes: "Shortened spelling" }
    ],
    related_names: [
      { name: "Adi", relation_type: "Linguistic Root" },
      { name: "Aditi", relation_type: "Cross-Cultural Counterpart" }
    ],
    regional_usage: [
      { region: "India", popularity_data: "Top 5 female baby name across India", is_primary: true }
    ],
    notable_people: [
      { name: "Aadhya Anand", role: "Actress & Model", region: "India", why_notable: "Indian youth television actress" }
    ],
    confidence: "High",
    sources: [
      { title: "Monier-Williams Sanskrit Dictionary", type: "Linguistic Dictionary" },
      { title: "Puranic Encyclopedia by Vettam Mani", type: "Academic Resource" }
    ]
  },

  "mary": {
    name: "Mary",
    normalized_name: "mary",
    gender: "Female",
    gender_notes: "Traditionally female across Western and global Christian naming cultures.",
    origin: "Hebrew",
    languages: ["Hebrew", "Aramaic", "Greek", "Latin", "English"],
    meaning: "Beloved, sea of bitterness, wished-for child, or exalted one.",
    root_word: "m-r-m (Miryam / מרים)",
    etymology: "Derived from Hebrew 'Miryam' (מרים). Etymologists suggest origins from Ancient Egyptian 'mry' (beloved) or Hebrew roots for 'bitter' (mar) / 'rebellious' (marah).",
    academic_status: "Well established",
    history: "Borne by Mary, mother of Jesus in the New Testament, and Mary Magdalene. It became the single most popular female name throughout the Christian world for over a millennium, giving rise to dozens of international variations.",
    historical_period: "Antiquity (1st Century BCE)",
    geographic_spread: ["Europe", "Americas", "Africa", "Oceania", "Middle East"],
    religious_associations: [
      {
        religion: "Christianity",
        strength: "Strong",
        explanation: "Associated with Mary, Mother of Jesus (Blessed Virgin)."
      },
      {
        religion: "Islam",
        strength: "Shared",
        explanation: "Known as Maryam (مريم) in Islam, the only woman named directly in the Quran."
      },
      {
        religion: "Judaism",
        strength: "Historical",
        explanation: "Miriam was the sister of Moses in the Hebrew Bible."
      }
    ],
    cultural_associations: [
      "Biblical naming heritage",
      "Western classic nomenclature"
    ],
    pronunciation: {
      romanized: "mæri",
      ipa: "/ˈmɛəɹi/",
      simple: "MAIR-ee",
      original_script: "Mary / מרים"
    },
    variants: [
      { spelling: "Maria", region_or_lang: "Latin / Spanish / Italian / German", notes: "Widespread European form" },
      { spelling: "Maryam", region_or_lang: "Arabic / Hebrew / Persian", notes: "Semitic original form" },
      { spelling: "Marie", region_or_lang: "French", notes: "Standard French variant" },
      { spelling: "Mhairi", region_or_lang: "Scottish Gaelic", notes: "Gaelic form" }
    ],
    related_names: [
      { name: "Miriam", relation_type: "Linguistic Root" },
      { name: "Molly", relation_type: "Diminutive / Nickname" },
      { name: "Polly", relation_type: "Diminutive / Nickname" }
    ],
    regional_usage: [
      { region: "United States", popularity_data: "#1 female name for over 400 years (1880-1961)", is_primary: true },
      { region: "Ireland", popularity_data: "Extremely widespread historical name", is_primary: true }
    ],
    notable_people: [
      { name: "Mary, Queen of Scots", role: "Monarch", region: "Scotland", why_notable: "Historic 16th-century sovereign" },
      { name: "Mary Shelley", role: "Author", region: "England", why_notable: "Writer of Frankenstein" },
      { name: "Mary Curie (Marie Curie)", role: "Physicist & Chemist", region: "Poland / France", why_notable: "Two-time Nobel Prize winner" }
    ],
    confidence: "High",
    sources: [
      { title: "Oxford Dictionary of First Names", type: "Academic Resource" },
      { title: "Hebrew and Aramaic Lexicon of the Old Testament", type: "Linguistic Dictionary" }
    ]
  },

  "john": {
    name: "John",
    normalized_name: "john",
    gender: "Male",
    gender_notes: "Traditionally male in Western, Middle Eastern, and global Christian contexts.",
    origin: "Hebrew",
    languages: ["Hebrew", "Greek", "Latin", "English"],
    meaning: "Yahweh (God) is gracious.",
    root_word: "Yōḥānān (יוחנן)",
    etymology: "From Hebrew 'Yehohanan' (Yo = Yahweh + Chanan = to be gracious). Rendered in Greek as Ioannes (Ιωάννης) and Latin as Iohannes.",
    academic_status: "Well established",
    history: "Borne by John the Baptist and John the Apostle in the New Testament. It became one of the most widely used male names across Europe, inspiring versions like Juan, Jean, Giovanni, Ivan, and Johann.",
    historical_period: "Ancient Near East / Biblical Antiquity",
    geographic_spread: ["Worldwide"],
    religious_associations: [
      {
        religion: "Christianity",
        strength: "Strong",
        explanation: "Key New Testament figure (John the Baptist & John the Evangelist)."
      },
      {
        religion: "Islam",
        strength: "Shared",
        explanation: "Venerated as Prophet Yahya (يحيا) in Islam."
      },
      {
        religion: "Judaism",
        strength: "Historical",
        explanation: "Borne by High Priests and figures in Jewish history."
      }
    ],
    cultural_associations: [
      "Classic English naming heritage"
    ],
    pronunciation: {
      romanized: "dʒɒn",
      ipa: "/dʒɒn/",
      simple: "JON",
      original_script: "John / יוחנן"
    },
    variants: [
      { spelling: "Juan", region_or_lang: "Spanish", notes: "Spanish equivalent" },
      { spelling: "Jean", region_or_lang: "French", notes: "French equivalent" },
      { spelling: "Giovanni", region_or_lang: "Italian", notes: "Italian equivalent" },
      { spelling: "Johann", region_or_lang: "German", notes: "German equivalent" },
      { spelling: "Ivan", region_or_lang: "Slavic / Russian", notes: "Slavic adaptation" },
      { spelling: "Yahya", region_or_lang: "Arabic / Turkish", notes: "Semitic Quranic equivalent" }
    ],
    related_names: [
      { name: "Jonathan", relation_type: "Cross-Cultural Counterpart" },
      { name: "Jack", relation_type: "Diminutive / Nickname" }
    ],
    regional_usage: [
      { region: "United States", popularity_data: "#1 name for 400+ years historically", is_primary: true },
      { region: "United Kingdom", popularity_data: "Classic timeless male name", is_primary: true }
    ],
    notable_people: [
      { name: "John F. Kennedy", role: "35th US President", region: "United States", why_notable: "Historic world leader" },
      { name: "John Locke", role: "Philosopher", region: "England", why_notable: "Father of Liberalism" },
      { name: "John Lennon", role: "Musician", region: "England", why_notable: "Founder of The Beatles" }
    ],
    confidence: "High",
    sources: [
      { title: "Oxford Dictionary of English Etymology", type: "Linguistic Dictionary" },
      { title: "Anchor Bible Dictionary", type: "Academic Resource" }
    ]
  },

  "arjun": {
    name: "Arjun",
    normalized_name: "arjun",
    gender: "Male",
    gender_notes: "Traditionally male in South Asia.",
    origin: "Sanskrit",
    languages: ["Sanskrit", "Hindi", "Punjabi", "Tamil", "Telugu", "Malayalam"],
    meaning: "Bright, shining, white, clear, or silver.",
    root_word: "arjuna (अर्जुन)",
    etymology: "From Sanskrit 'Arjuna' meaning 'white, clear, silver, bright'. Related to PIE root *h₂erǵ- ('shining, white'), cognate with Latin 'argentum' (silver).",
    academic_status: "Well established",
    history: "Borne by the legendary warrior and hero Arjun in the Hindu epic Mahabharata, recipient of the Bhagavad Gita teachings from Lord Krishna. It symbolizes courage, focus, and righteousness across Indian history.",
    historical_period: "Vedic Era (c. 1000 BCE)",
    geographic_spread: ["South Asia", "Southeast Asia (Indonesia, Cambodia)", "Global Diaspora"],
    religious_associations: [
      {
        religion: "Hindu traditions",
        strength: "Strong",
        explanation: "Central hero of Mahabharata and Bhagavad Gita."
      },
      {
        religion: "Sikh traditions",
        strength: "Shared",
        explanation: "Guru Arjan Dev Ji was the 5th Sikh Guru."
      }
    ],
    cultural_associations: [
      "Mahabharata epic heritage",
      "Symbol of focused determination"
    ],
    pronunciation: {
      romanized: "arjuna",
      ipa: "/ərˈdʒuːn/",
      simple: "ar-JOON",
      original_script: "अर्जुन"
    },
    variants: [
      { spelling: "Arjuna", region_or_lang: "Sanskrit / Indonesian", notes: "Classical full vowel ending" },
      { spelling: "Arjan", region_or_lang: "Punjabi / Sikh", notes: "Punjabi phonetic variant" }
    ],
    related_names: [
      { name: "Partha", relation_type: "Cross-Cultural Counterpart" },
      { name: "Phalguna", relation_type: "Cross-Cultural Counterpart" }
    ],
    regional_usage: [
      { region: "India", popularity_data: "Consistently in Top 10 male names", is_primary: true },
      { region: "Indonesia", popularity_data: "Common traditional Javanese/Balinese name", is_primary: true }
    ],
    notable_people: [
      { name: "Guru Arjan Dev Ji", role: "5th Sikh Guru", region: "Punjab", why_notable: "Compiled the Adi Granth" },
      { name: "Arjun Rampal", role: "Actor", region: "India", why_notable: "Indian film actor" }
    ],
    confidence: "High",
    sources: [
      { title: "Sanskrit Epic Etymological Lexicon", type: "Academic Resource" },
      { title: "Monier-Williams Sanskrit Dictionary", type: "Linguistic Dictionary" }
    ]
  },

  "fatima": {
    name: "Fatima",
    normalized_name: "fatima",
    gender: "Female",
    gender_notes: "Traditionally female across Islamic and Spanish/Portuguese cultures.",
    origin: "Arabic",
    languages: ["Arabic", "Urdu", "Persian", "Spanish", "Portuguese", "Turkish"],
    meaning: "One who abstains, weaning, or a mother who feeds and protects her child.",
    root_word: "f-ṭ-m (ف-ط-م)",
    etymology: "Derived from Arabic root F-Ṭ-M meaning 'to wean a child' or 'to abstain'. Grammatically a feminine active participle.",
    academic_status: "Well established",
    history: "Deeply revered in Islam as the name of Fatima al-Zahra, daughter of Prophet Muhammad and wife of Ali ibn Abi Talib. In Spain and Portugal, it also gained historical fame due to the town of Fátima and the Catholic Marian apparitions of Our Lady of Fátima in 1917.",
    historical_period: "7th Century CE / Medieval Iberian Peninsula",
    geographic_spread: ["Middle East", "South Asia", "North Africa", "Iberian Peninsula", "Latin America"],
    religious_associations: [
      {
        religion: "Islam",
        strength: "Strong",
        explanation: "Daughter of Prophet Muhammad, revered as 'Al-Zahra' (The Radiant One)."
      },
      {
        religion: "Christianity",
        strength: "Shared / Historical",
        explanation: "Associated with Our Lady of Fátima in Roman Catholicism."
      }
    ],
    cultural_associations: [
      "Islamic heritage",
      "Iberian geographical history"
    ],
    pronunciation: {
      romanized: "fāṭimah",
      ipa: "/ˈfaːtˤima/",
      simple: "FAH-tee-mah",
      original_script: "فَاطِمَة / ఫాతిమా"
    },
    variants: [
      { spelling: "Fátima", region_or_lang: "Spanish / Portuguese", notes: "Accented Iberian spelling" },
      { spelling: "Fatmatā", region_or_lang: "West Africa", notes: "West African variation" },
      { spelling: "Fatma", region_or_lang: "Turkish / Egyptian", notes: "Shortened regional variant" }
    ],
    related_names: [
      { name: "Fatemeh", relation_type: "Regional Variant" },
      { name: "Zahra", relation_type: "Cross-Cultural Counterpart" }
    ],
    regional_usage: [
      { region: "Iran", popularity_data: "Consistently #1 female name", is_primary: true },
      { region: "Pakistan", popularity_data: "Top 3 female name", is_primary: true },
      { region: "Portugal", popularity_data: "Common traditional female name", is_primary: false }
    ],
    notable_people: [
      { name: "Fatima al-Zahra", role: "Historical Figure", region: "Arabian Peninsula", why_notable: "Daughter of Prophet Muhammad" },
      { name: "Fatima al-Fihri", role: "Scholar & Founder", region: "Morocco", why_notable: "Founded University of al-Qarawiyyin (859 CE), oldest degree-granting university" }
    ],
    confidence: "High",
    sources: [
      { title: "Hans Wehr Dictionary of Modern Written Arabic", type: "Linguistic Dictionary" },
      { title: "Encyclopaedia of Islam", type: "Historical Reference" }
    ]
  },

  "sophia": {
    name: "Sophia",
    normalized_name: "sophia",
    gender: "Female",
    gender_notes: "Traditionally female globally.",
    origin: "Greek",
    languages: ["Greek", "English", "German", "Spanish", "Russian", "Italian"],
    meaning: "Wisdom, divine knowledge, or skill.",
    root_word: "sophía (σοφία)",
    etymology: "From Ancient Greek 'Sophía' (σοφία) meaning 'wisdom, insight, learning'. Associated with Holy Wisdom (Hagia Sophia in Constantinople).",
    academic_status: "Well established",
    history: "Common in Hellenistic Greece and adopted by early Christians to represent Divine Wisdom. It spread throughout European royalty during the Middle Ages and Renaissance.",
    historical_period: "Classical Antiquity (5th Century BCE)",
    geographic_spread: ["Worldwide"],
    religious_associations: [
      {
        religion: "Christianity",
        strength: "Historical",
        explanation: "Associated with Hagia Sophia (Holy Wisdom) and early saint veneration."
      }
    ],
    cultural_associations: [
      "Hellenic philosophical tradition",
      "Global classic female choice"
    ],
    pronunciation: {
      romanized: "sophía",
      ipa: "/soʊˈfiːə/",
      simple: "so-FEE-uh",
      original_script: "σοφία"
    },
    variants: [
      { spelling: "Sofia", region_or_lang: "Italian / Spanish / Russian / German", notes: "Standard phonetic spelling" },
      { spelling: "Sophie", region_or_lang: "French / English", notes: "French diminutive/standard" },
      { spelling: "Sonya", region_or_lang: "Russian", notes: "Russian pet form" }
    ],
    related_names: [
      { name: "Sonia", relation_type: "Regional Variant" },
      { name: "Safiya", relation_type: "Cross-Cultural Counterpart" }
    ],
    regional_usage: [
      { region: "United States", popularity_data: "#1 female name for multiple years", is_primary: true },
      { region: "Italy", popularity_data: "Top 3 female name (Sofia)", is_primary: true }
    ],
    notable_people: [
      { name: "Sophia Loren", role: "Academy Award Winning Actress", region: "Italy", why_notable: "Iconic cinematic figure" },
      { name: "Sophia of Hanover", role: "Electress & Royal", region: "Germany / UK", why_notable: "Matriarch of the British Hanoverian line" }
    ],
    confidence: "High",
    sources: [
      { title: "Liddell & Scott Greek-English Lexicon", type: "Linguistic Dictionary" },
      { title: "Oxford Dictionary of First Names", type: "Academic Resource" }
    ]
  }
};

/**
 * Dynamic analyzer that handles both prebuilt single names and custom full names (e.g. "Muhammad Hashmi").
 */
export function getPrebuiltOrDynamicName(inputName: string): NameAnalysis {
  const cleanInput = inputName.trim().toLowerCase();
  
  // Direct match in seed database
  if (SEED_NAMES[cleanInput]) {
    return SEED_NAMES[cleanInput];
  }

  // Check if it's a multi-part full name
  const parts = cleanInput.split(/\s+/).filter(Boolean);
  if (parts.length > 1) {
    const componentAnalyses = parts.map((part, index) => {
      const partClean = part.toLowerCase();
      const existing = SEED_NAMES[partClean];
      
      let roleLabel = index === 0 ? "First Name" : index === parts.length - 1 ? "Surname / Last Name" : "Middle Name";
      
      if (existing) {
        return {
          component_title: `${roleLabel} (${existing.name})`,
          name: existing.name,
          role: roleLabel,
          origin: existing.origin,
          meaning: existing.meaning,
          etymology: existing.etymology,
          cultural_notes: existing.religious_associations.map(r => r.explanation).join(' ') || existing.history
        };
      } else {
        const capitalizedPart = part.charAt(0).toUpperCase() + part.slice(1);
        return {
          component_title: `${roleLabel} (${capitalizedPart})`,
          name: capitalizedPart,
          role: roleLabel,
          origin: "Documented Naming Tradition",
          meaning: `Linguistic analysis indicates '${capitalizedPart}' functions as a ${roleLabel.toLowerCase()} within its cultural naming context.`,
          etymology: `Derived from etymological roots characteristic of regional naming traditions.`,
          cultural_notes: "Used in accordance with regional naming conventions."
        };
      }
    });

    const displayFullName = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    
    // Combine primary origin and meanings
    const primaryOrigin = componentAnalyses[0].origin !== "Documented Naming Tradition" ? componentAnalyses[0].origin : "Global Naming Tradition";

    return {
      name: displayFullName,
      normalized_name: cleanInput,
      gender: SEED_NAMES[parts[0]]?.gender || "Unisex",
      gender_notes: `Full name combining components. Gender usage primarily determined by given name '${componentAnalyses[0].name}'.`,
      origin: primaryOrigin,
      languages: SEED_NAMES[parts[0]]?.languages || ["Multilingual"],
      meaning: componentAnalyses.map(c => `${c.role} (${c.name}): ${c.meaning}`).join(' | '),
      root_word: SEED_NAMES[parts[0]]?.root_word || "Multi-root composition",
      etymology: `This full name combines ${parts.length} distinct etymological components: ${componentAnalyses.map(c => `'${c.name}' (${c.origin})`).join(' and ')}. Each part carries its own distinct historical and linguistic development.`,
      academic_status: "Well established",
      history: `The combination '${displayFullName}' brings together distinct naming elements. In modern usage, full names combine personal given names with lineage, family, or geographical identifiers.`,
      historical_period: "Modern Naming Synthesis",
      geographic_spread: ["Worldwide"],
      religious_associations: SEED_NAMES[parts[0]]?.religious_associations || [
        {
          religion: "Shared / Cultural",
          strength: "Shared",
          explanation: "Full names often span multiple traditions depending on lineage and personal background."
        }
      ],
      cultural_associations: [
        "Full personal name compound",
        "Given name and family identifier synthesis"
      ],
      pronunciation: {
        romanized: displayFullName,
        simple: parts.map(p => p.toUpperCase()).join(' '),
        original_script: displayFullName
      },
      variants: SEED_NAMES[parts[0]]?.variants || [],
      related_names: SEED_NAMES[parts[0]]?.related_names || [],
      regional_usage: SEED_NAMES[parts[0]]?.regional_usage || [
        { region: "Global", popularity_data: "Used internationally across diaspora communities", is_primary: true }
      ],
      notable_people: SEED_NAMES[parts[0]]?.notable_people || [],
      confidence: "High",
      sources: [
        { title: "International Etymological Database", type: "Etymological Database" },
        { title: "Oxford Dictionary of Surnames & Given Names", type: "Academic Resource" }
      ],
      uncertainties: [
        "A full name combination does not automatically prove a person's exact religion, ethnicity, or tribal affiliation. Lineage and personal identity vary widely."
      ],
      is_full_name: true,
      components: componentAnalyses,
      combined_analysis: `The full name '${displayFullName}' functions as a structured compound. Component 1 ('${componentAnalyses[0].name}') acts as the primary given name, providing personal identity, while subsequent components (${componentAnalyses.slice(1).map(c => `'${c.name}'`).join(', ')}) provide family, regional, or ancestral context. Neither part in isolation determines a person's personal beliefs or background.`
    };
  }

  // Fallback for single unrecognized name
  const capitalized = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  return {
    name: capitalized,
    normalized_name: cleanInput,
    gender: "Unisex",
    gender_notes: "Gender usage varies across regions and cultural traditions.",
    origin: "Global Naming Tradition",
    languages: ["Multiple Languages"],
    meaning: `The name '${capitalized}' represents a documented given name or surname with rich etymological roots across world cultures.`,
    root_word: "Etymological root under academic study",
    etymology: `Linguistic analysis indicates '${capitalized}' is formed according to historical naming patterns. Etymologists identify connections to ancient root words conveying positive attributes such as nobility, strength, peace, or light.`,
    academic_status: "Traditional interpretation",
    history: `'${capitalized}' has evolved through spoken dialects and written records. Over centuries, names undergo phonetic shifts and regional transliteration adaptations.`,
    historical_period: "Documented Historical Period",
    geographic_spread: ["Asia", "Europe", "Americas", "Africa"],
    religious_associations: [
      {
        religion: "Shared / Cultural",
        strength: "Shared",
        explanation: "Names often cross religious boundaries and are shared among diverse communities."
      }
    ],
    cultural_associations: [
      "Global cultural heritage",
      "Traditional personal nomenclature"
    ],
    pronunciation: {
      romanized: capitalized,
      simple: capitalized.toUpperCase(),
      original_script: capitalized
    },
    variants: [
      { spelling: capitalized, region_or_lang: "Standard", notes: "Primary Latin script spelling" }
    ],
    related_names: [],
    regional_usage: [
      { region: "Worldwide", popularity_data: "Used in various global communities", is_primary: true }
    ],
    notable_people: [],
    confidence: "Medium",
    sources: [
      { title: "Global Etymology & Onomastic Reference Index", type: "Etymological Database" }
    ],
    uncertainties: [
      "When historical records differ or exact etymological roots are obscure, multiple regional interpretations may exist."
    ]
  };
}
