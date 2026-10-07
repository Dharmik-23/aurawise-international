export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  highlights: string[];
  deliverables: string[];
  eligibility: string[];
  documentsNeeded: string[];
  timeline: string;
  popularDestinations: string[];
}

export interface CountryItem {
  name: string;
  code: string;
  flag: string;
  tagline: string;
  editorialSubtitle: string;
  description: string;
  topPrograms: string[];
  avgProcessingTime: string;
  postStudyWork: string;
  prOpportunity: string;
  heroImage: string;
  visaTypes: {
    title: string;
    category: string;
    description: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  bio: string;
  image: string;
  specialization: string[];
}

export interface TestimonialItem {
  name: string;
  destination: string;
  programOrVisa: string;
  year: string;
  rating: number;
  quote: string;
  achievement: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'General' | 'Student Visa' | 'Permanent Residency' | 'Process' | 'Financials';
}

export interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const COMPANY_INFO = {
  name: "AuraWise International",
  legalName: "AuraWise International LLP",
  tagline: "Global Vision. Trusted Expertise. Limitless Pathways.",
  subTagline: "India's Premier Overseas Education & Global Migration Advisory Since 2009",
  foundedYear: 2009,
  yearsOfExcellence: "15+",
  studentsGuided: "5,000+",
  visaApprovalRate: "98%",
  partnerUniversities: "500+",
  countriesCovered: "10 Prime Hubs • 40+ Destinations",
  certifiedCounsellors: "50+",
  accreditations: [
    { code: "MARA", title: "Migration Agents Registration Authority", country: "Australia" },
    { code: "OISC", title: "Office of the Immigration Services Commissioner", country: "United Kingdom" },
    { code: "AIRC", title: "American International Recruitment Council", country: "United States" },
    { code: "ICCRC/CICC", title: "College of Immigration and Citizenship Consultants", country: "Canada" },
  ],
  contact: {
    address: {
      line1: "C-1001, PNTC, Times Of India Press Road",
      locality: "Vejalpur",
      city: "Ahmedabad",
      state: "Gujarat",
      pincode: "380015",
      country: "India",
      landmark: "Near Radio Mirchi / Times of India Press",
    },
    phones: ["+91 98765 43210", "+91 79 2658 1200"],
    primaryPhone: "+91 98765 43210",
    landline: "+91 79 2658 1200",
    emails: ["info@aurawise.in", "visa@aurawise.in"],
    primaryEmail: "info@aurawise.in",
    workingHours: "Mon – Sat: 9:00 AM – 6:00 PM | Sun: By Appointment",
    whatsappLink: "https://wa.me/919876543210?text=Hello%20AuraWise%20International,%20I%20would%20like%20to%20inquire%20about%20study%20and%20migration%20pathways.",
  },
  socialLinks: {
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  }
};

/* 10 DESTINATIONS PROMINENTLY SHOWCASED */
export const DESTINATION_COUNTRIES: CountryItem[] = [
  {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    tagline: "World-Class Education & Clear Permanent Settlement",
    editorialSubtitle: "Global Talent Magnet • Express Entry Hub • SDS Pathways",
    description: "Canada represents one of the world's most stable and welcoming immigration landscapes. AuraWise provides end-to-end guidance from designated learning institution (DLI) admissions under SDS to Post-Graduation Work Permits (PGWP) and permanent residency through Express Entry (FSW/CEC) and Provincial Nominee Programs (PNP).",
    topPrograms: ["Software Engineering & AI", "Healthcare & Nursing", "Supply Chain Management", "Data Science & Cloud Computing"],
    avgProcessingTime: "6–10 Weeks",
    postStudyWork: "Up to 3 Years (PGWP)",
    prOpportunity: "Express Entry (CRS Points) & 11 Provincial Nominee Streams (PNP)",
    heroImage: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "Study Permit (SDS Stream)", category: "Education", description: "Fast-track student visa for DLIs with upfront GIC investment and IELTS/PTE scores." },
      { title: "Post-Graduation Work Permit (PGWP)", category: "Employment", description: "Open work permit up to 3 years allowing unrestricted Canadian work experience." },
      { title: "Express Entry (FSW / CEC)", category: "Immigration", description: "Federal points-based PR pathway evaluating age, education, language and experience." },
      { title: "Provincial Nominee Program (PNP)", category: "Immigration", description: "Province-sponsored nomination awarding 600 additional CRS points." },
      { title: "Spousal Open Work Permit (SOWP)", category: "Family", description: "Enables accompanying spouses of students and skilled workers to work full-time." },
    ]
  },
  {
    name: "Australia",
    code: "AU",
    flag: "🇦🇺",
    tagline: "Premier Research Universities & Skilled Points Migration",
    editorialSubtitle: "Group of Eight Excellence • High Minimum Wage • Regional PR Perks",
    description: "Australia combines world-renowned Group of Eight (Go8) universities with dynamic skilled migration schemes. Supervised by our MARA-licensed immigration advisors, we prepare airtight applications for Student Visas (Subclass 500), Temporary Graduate visas (Subclass 485), and Points-Tested PR (Subclasses 189, 190 & 491).",
    topPrograms: ["Mining & Civil Engineering", "Cybersecurity & IT", "Hospitality Management", "Biotechnology & Medicine"],
    avgProcessingTime: "4–8 Weeks",
    postStudyWork: "2 to 4 Years (Extended in Regional Designated Areas)",
    prOpportunity: "Points-tested Subclass 189 (Independent), 190 (Nominated), 491 (Regional)",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "Subclass 500 Student Visa", category: "Education", description: "Comprehensive study visa with 48 hrs/fortnight student work privileges." },
      { title: "Subclass 485 Temporary Graduate", category: "Employment", description: "Post-study work stream for Australian university graduates." },
      { title: "Subclass 189 Skilled Independent", category: "Immigration", description: "Permanent residency visa for invited skilled workers with no sponsorship required." },
      { title: "Subclass 190 Skilled Nominated", category: "Immigration", description: "State or territory nominated permanent residency adding 5 bonus points." },
      { title: "Subclass 482 Temporary Skill Shortage (TSS)", category: "Employment", description: "Employer-sponsored work visa across Short-term and Medium-term lists." },
    ]
  },
  {
    name: "New Zealand",
    code: "NZ",
    flag: "🇳🇿",
    tagline: "Unrivalled Quality of Life & Direct Green List Settlement",
    editorialSubtitle: "High Safety Index • Straight to Residence • Post-Study Work",
    description: "New Zealand offers top-tier academic institutions ranked in the world's top 3% and transparent settlement routes via the Immigration New Zealand Green List. AuraWise steers candidates through university admissions, post-study work authorization, and Accredited Employer Work Visas (AEWV) leading to residency.",
    topPrograms: ["Agricultural Technology", "Environmental Science", "Construction Management", "Software Development"],
    avgProcessingTime: "5–8 Weeks",
    postStudyWork: "Up to 3 Years depending on degree qualification level",
    prOpportunity: "Skilled Migrant Category (SMC 6-Point System) & Green List Straight to Residence",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "Fee Paying Student Visa", category: "Education", description: "Full-time study at recognized NZ universities with 20 hrs/week term work rights." },
      { title: "Post-Study Work Visa", category: "Employment", description: "Open work rights up to 3 years for Level 7 bachelor's and Level 8/9 postgraduate degrees." },
      { title: "Accredited Employer Work Visa (AEWV)", category: "Employment", description: "Direct job-offer pathway with an approved NZ accredited employer." },
      { title: "Green List Straight to Residence", category: "Immigration", description: "Immediate PR application for tier-1 occupations in healthcare, tech and engineering." },
      { title: "Skilled Migrant Category (SMC)", category: "Immigration", description: "6-point qualification and work experience residency pathway." },
    ]
  },
  {
    name: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    tagline: "Centuries of Academic Prestige & Fast-Track Graduate Degrees",
    editorialSubtitle: "Russell Group Heritage • 1-Year Masters • Graduate Route 2-Yr PSW",
    description: "The United Kingdom stands at the forefront of global scholarship and enterprise. Our OISC-registered advisors oversee Confirmation of Acceptance for Studies (CAS) issuance, Student Visa filing, the 2-Year Graduate Route, and transitions to the Skilled Worker visa with licensed corporate sponsors.",
    topPrograms: ["International Business & Finance", "Data Science & Fintech", "Biomedical Sciences", "Architecture & Law"],
    avgProcessingTime: "3–4 Weeks (Priority 5-Day Available)",
    postStudyWork: "2 Years (Graduate Route) • 3 Years for PhD Graduates",
    prOpportunity: "5-Year Skilled Worker pathway to Indefinite Leave to Remain (ILR)",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "UK Student Visa (Points-Based)", category: "Education", description: "CAS-backed university admission with 20 hrs/week part-time work rights." },
      { title: "Graduate Route (Post-Study Work)", category: "Employment", description: "2-year unsponsored work visa for international UK degree completers." },
      { title: "Skilled Worker Visa (with CoS)", category: "Employment", description: "Employer-sponsored route leading directly to UK settlement after 5 years." },
      { title: "Global Talent Visa", category: "Talent", description: "Fast-track settlement for leaders and emerging leaders in academia, tech, and arts." },
      { title: "High Potential Individual (HPI)", category: "Employment", description: "2-year visa for graduates from top 50 global non-UK universities." },
    ]
  },
  {
    name: "United States",
    code: "US",
    flag: "🇺🇸",
    tagline: "Pinnacle of Global Innovation, STEM OPT & Tech Leadership",
    editorialSubtitle: "Ivy League & Tier-1 Research • 3-Year STEM OPT • High ROIs",
    description: "Home to the world's most distinguished research institutions and Silicon Valley industry leaders. AuraWise provides strategic counseling for university selection, high-value institutional assistantships, F-1 visa DS-160 filings, 36-month STEM OPT work extensions, and employment transition strategies.",
    topPrograms: ["Computer Science, AI & Robotics", "Business Analytics & STEM MBA", "Biotechnology", "Electrical Engineering"],
    avgProcessingTime: "2–4 Months",
    postStudyWork: "12 Months OPT + 24 Months STEM OPT Extension (3 Years Total)",
    prOpportunity: "H-1B Dual Intent & Employment-Based Green Cards (EB-2 NIW / EB-1 / EB-3)",
    heroImage: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "F-1 Academic Student Visa", category: "Education", description: "Full-time degree study with on-campus employment and CPT/OPT training access." },
      { title: "STEM OPT 24-Month Extension", category: "Employment", description: "Total 36 months of full-time professional US employment for STEM graduates." },
      { title: "J-1 Exchange Visitor Visa", category: "Research", description: "For research scholars, fellows, and international corporate trainees." },
      { title: "B1/B2 Visitor & Business Visa", category: "Travel", description: "Fast-track travel dossier for academic conferences, business meetings and tourism." },
      { title: "EB-2 National Interest Waiver (NIW)", category: "Immigration", description: "Self-petitioned green card for advanced degree professionals with substantial merit." },
    ]
  },
  {
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    tagline: "Tuition-Free Public Higher Education & Industrial Prowess",
    editorialSubtitle: "TU9 Technological Hubs • Opportunity Card • EU Blue Card Route",
    description: "Europe's economic engine offers world-class education with zero or nominal tuition fees at top public TU9 universities. AuraWise guides engineers, analysts, and scientists through APS certification, National Student Visas, the German Opportunity Card (Chancenkarte), and rapid EU Blue Card permanent residence.",
    topPrograms: ["Automotive & Mechanical Engineering", "Robotics & Automation", "Renewable Energy & Power", "Informatics & Data"],
    avgProcessingTime: "8–12 Weeks (APS Verification Required)",
    postStudyWork: "18 Months Post-Study Job Seeker Residence Permit",
    prOpportunity: "Permanent Settlement (Niederlassungserlaubnis) in 21–27 months on EU Blue Card",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "German National Student Visa (§16b)", category: "Education", description: "Study permit for public and private universities with 140 full work days/year." },
      { title: "Opportunity Card (Chancenkarte)", category: "Employment", description: "Points-based job seeker visa for skilled professionals to enter and interview in Germany." },
      { title: "18-Month Job Seeker Permit", category: "Employment", description: "Granted upon graduation from German universities to secure qualified employment." },
      { title: "EU Blue Card (§18g)", category: "Immigration", description: "Fast-track residency for university graduates with a recognized minimum salary contract." },
      { title: "Language Course Visa", category: "Education", description: "Intensive preparatory German language training for academic prerequisites." },
    ]
  },
  {
    name: "Ireland",
    code: "IE",
    flag: "🇮🇪",
    tagline: "Silicon Valley of Europe & English-Speaking Tech Powerhouse",
    editorialSubtitle: "European Tech HQ Hub • Stamp 1G 2-Year PSW • Critical Skills CSEP",
    description: "Ireland is Europe's premier English-speaking hub for multinational technology and pharmaceutical titans (Google, Meta, Pfizer, Apple). AuraWise facilitates admissions into prestigious institutions like Trinity College Dublin and UCD, Stamp 2 visas, Stamp 1G post-study work, and Critical Skills Employment Permits (CSEP).",
    topPrograms: ["Data Science & Big Data", "Pharmaceutical & Medical Tech", "Fintech & Corporate Finance", "Cloud Computing"],
    avgProcessingTime: "4–6 Weeks",
    postStudyWork: "2 Years Stamp 1G for Master's Completers • 1 Year for Bachelor's",
    prOpportunity: "Stamp 4 Permanent Residence after 2 years on Critical Skills Employment Permit",
    heroImage: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "Stamp 2 Student Visa", category: "Education", description: "Full-time degree study with 20 hrs/week term and 40 hrs/week holiday work rights." },
      { title: "Third Level Graduate Scheme (Stamp 1G)", category: "Employment", description: "Up to 24 months full-time post-study employment for master's degree graduates." },
      { title: "Critical Skills Employment Permit (CSEP)", category: "Employment", description: "Fast-track work authorization for occupations on Ireland's Critical Skills list." },
      { title: "General Employment Permit", category: "Employment", description: "Employer-sponsored work permit for standard occupation classifications." },
      { title: "Stamp 4 Permanent Permission", category: "Immigration", description: "Permanent residence granting unrestricted work and business rights in Ireland." },
    ]
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    flag: "🇦🇪",
    tagline: "Global Financial Oasis, Zero Income Tax & 10-Year Golden Visas",
    editorialSubtitle: "Zero Personal Income Tax • Dubai Global Campus • 10-Yr Golden Visa",
    description: "The UAE has rapidly emerged as a world-class educational and corporate crossroad, hosting satellite branches of premier UK, US, and Australian universities in Dubai and Abu Dhabi. AuraWise handles student residencies, Remote Work Visas, Green Visas, and the prestigious 10-Year UAE Golden Visa.",
    topPrograms: ["International Business & Trade", "Hospitality & Luxury Management", "Artificial Intelligence & Fintech", "Civil Engineering & Design"],
    avgProcessingTime: "2–4 Weeks",
    postStudyWork: "2-Year Job Seeker Visa & Sponsorship Transition",
    prOpportunity: "10-Year Golden Visa (Self-sponsored) & 5-Year Green Visa",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "University Student Residence Visa", category: "Education", description: "Renewable annual residency sponsored by accredited UAE university campuses." },
      { title: "10-Year UAE Golden Visa", category: "Immigration", description: "Long-term self-sponsored residency for exceptional students (GPA 3.8+), executives and specialists." },
      { title: "5-Year Green Visa for Skilled Employees", category: "Employment", description: "Self-sponsored residency for freelance specialists and skilled workers." },
      { title: "Virtual Work (Remote Work) Visa", category: "Employment", description: "1-year residency for professionals working remotely for global employers." },
      { title: "Standard Employment Residence Visa", category: "Employment", description: "Corporate employer-sponsored residency with 2-year validity." },
    ]
  },
  {
    name: "France",
    code: "FR",
    flag: "🇫🇷",
    tagline: "Grandes Écoles Excellence, European Culture & Talent Passports",
    editorialSubtitle: "Grandes Écoles Prestige • 5-Yr Post-Study Schengen Alumni Visa • Tech Hub",
    description: "France is celebrated for its elite Grandes Écoles business and engineering schools, subsidized tuition models, and English-taught master's degrees. Indian students benefit from the 5-year post-study Schengen alumni visa, APS post-study job seeker permits, and the renowned Passeport Talent.",
    topPrograms: ["Luxury & Fashion Brand Management", "Aerospace Engineering", "International MBA", "Culinary Arts & Enology"],
    avgProcessingTime: "3–6 Weeks",
    postStudyWork: "1 to 2 Years APS / RECE (Plus 5-Year Schengen Alumni Travel Visa)",
    prOpportunity: "Carte de Résident (10-Year PR) after 5 years continuous lawful stay and work",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "VLS-TS Long-Stay Student Visa", category: "Education", description: "Residence permit equivalent with 964 hours annual student work authorization." },
      { title: "APS / RECE (Post-Study Work Permit)", category: "Employment", description: "Job-search permit for master's degree completers seeking professional contracts." },
      { title: "Passeport Talent (Talent Passport)", category: "Employment", description: "4-year multi-entry residency for qualified employees, researchers and founders." },
      { title: "5-Year Schengen Alumni Tourist Visa", category: "Travel", description: "Special visa privilege for Indian alumni with an accredited French master's degree." },
      { title: "Visitor Visa (Visiteur)", category: "Travel", description: "Long-stay non-working visa for self-funded stays in France." },
    ]
  },
  {
    name: "Italy",
    code: "IT",
    flag: "🇮🇹",
    tagline: "Historic Academic Foundations, DSU Scholarships & Design Hubs",
    editorialSubtitle: "Centuries-Old Universities • DSU Regional Grants • Post-Study Conversion",
    description: "Italy is home to the world's oldest universities (Bologna, Politecnico di Milano, Sapienza) offering English-taught degrees, regional DSU scholarships covering tuition and stipends, and post-study conversion permits to professional employment visas across the European Union.",
    topPrograms: ["Architecture & Industrial Design", "Automotive & Mechanical Design", "Fashion Economics & Luxury", "Biomedical Sciences"],
    avgProcessingTime: "4–8 Weeks (Universitaly Portal Verification)",
    postStudyWork: "12-Month Permesso di Soggiorno per Ricerca Lavoro (Job Search)",
    prOpportunity: "Permesso di Soggiorno UE per Soggiornanti di Lungo Periodo (5 Years)",
    heroImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
    visaTypes: [
      { title: "Type D National Student Visa", category: "Education", description: "Entry visa following Universitaly pre-enrolment validation with 20 hrs/week work." },
      { title: "Permesso di Soggiorno per Studio", category: "Education", description: "Italian residence permit issued upon arrival for the academic year duration." },
      { title: "Job Search Permit (Ricerca Lavoro)", category: "Employment", description: "12-month extension for master's/PhD graduates to seek qualified Italian employment." },
      { title: "Conversion to Lavoro Subordinato", category: "Employment", description: "Smooth conversion from study permit to full-time work permit upon job offer." },
      { title: "EU Blue Card (Carta Blu UE)", category: "Immigration", description: "Streamlined Italian work and residency for highly skilled specialists." },
    ]
  }
];

/* 10 CORE SERVICES SPECIFIED BY USER */
export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "profile-assessment",
    slug: "profile-assessment",
    number: "01",
    title: "Profile Assessment",
    subtitle: "Comprehensive Diagnostic Evaluation & Scoring",
    badge: "Foundational Step",
    iconName: "ClipboardCheck",
    shortDesc: "Rigorous 360-degree audit of your academic transcripts, work history, test readiness, and financial bandwidth against international immigration benchmarks.",
    fullDesc: "Every successful international trajectory begins with honest diagnostic clarity. Our certified MARA and OISC senior counsellors analyze your GPA, backlogs, gaps, career progression, and target destinations. We benchmark your profile against points-test matrices (Express Entry CRS, Australian SkillSelect, German Chancenkarte, New Zealand SMC) and international university cutoffs to build a viable, risk-mitigated strategy.",
    highlights: [
      "Objective GPA, backlog, and career gap reconciliation",
      "Points diagnostic for Canadian Express Entry, Australian PR, and NZ SMC",
      "Budget feasibility modeling across tuition, living costs, and proof of funds",
      "Identification of dream, target, and high-probability safe pathways"
    ],
    deliverables: [
      "Custom Profile Feasibility Diagnostic Report",
      "Target Country Compatibility Matrix",
      "Intake Timeline & Milestone Calendar"
    ],
    eligibility: ["Applicable to all prospective students, working professionals, and family applicants."],
    documentsNeeded: ["Academic transcripts (10th, 12th, Bachelor's)", "Current Resume / CV", "Scorecards if already taken (IELTS/PTE/GRE)"],
    timeline: "Delivered within 24–48 hours of intake",
    popularDestinations: ["All 10 Prime Global Hubs"]
  },
  {
    id: "course-university-selection",
    slug: "course-university-selection",
    number: "02",
    title: "Course & University Selection",
    subtitle: "Precision Institutional Alignment & ROI Strategy",
    badge: "Academic Direction",
    iconName: "Compass",
    shortDesc: "Strategic course shortlisting across 500+ global partner institutions matching your career aspirations, industry demand, and post-study work rights.",
    fullDesc: "Selecting the right course and institution dictates your long-term employability and residency success. AuraWise utilizes data-driven insights into post-graduation work opportunities, university faculty rankings, regional immigration benefits, and industry accreditation to curate an optimal shortlist of 5–8 institutions across North America, Europe, the UK, and Australasia.",
    highlights: [
      "Direct priority partnerships with 500+ accredited global universities",
      "Analysis of localized occupation shortage lists (STEM, healthcare, tech)",
      "Regional post-study work advantages (Regional Australia, Canada Atlantic, UK Russell Group)",
      "Curriculum depth and industry internship (Co-op) integration analysis"
    ],
    deliverables: [
      "Curated Shortlist of 5–8 Accredited Universities (Dream, Target, Safe)",
      "Course Curriculum & Internship (Co-op) Comparison Matrix",
      "Institutional Fee Schedules & Living Cost Breakdown"
    ],
    eligibility: ["Candidates meeting prerequisite academic coursework and degree requirements."],
    documentsNeeded: ["Degree certificates", "Syllabus outline for credit transfer (if applicable)", "Passport copy"],
    timeline: "1 to 2 weeks of collaborative strategic review",
    popularDestinations: ["Canada", "USA", "UK", "Australia", "Germany", "Ireland"]
  },
  {
    id: "admission-management",
    slug: "admission",
    number: "03",
    title: "Admission Management",
    subtitle: "End-to-End Application Filing & Offer Securing",
    badge: "Direct Representation",
    iconName: "GraduationCap",
    shortDesc: "Meticulous dossier assembly, portal submissions, direct university liaison, offer letter follow-ups, and departmental scholarship negotiation.",
    fullDesc: "Navigating diverse application portals (UCAS, Common App, OUAC, Universitaly, Uni-Assist) requires exact compliance with deadlines and formatting standards. AuraWise manages the entire admissions workflow: compiling certified transcripts, expediting verification, liaising directly with university international admissions teams, securing conditional/unconditional offers, and appealing for merit-based scholarships.",
    highlights: [
      "Priority representation with admissions directors and overseas faculties",
      "Flawless application packet preparation avoiding portal rejections",
      "Aggressive negotiation for departmental merit scholarships (up to 50% tuition)",
      "Rapid tracking from initial submission to CAS / I-20 / CoE / LOA issuance"
    ],
    deliverables: [
      "Official University Offer Letters (Conditional & Unconditional)",
      "Merit Scholarship Award Confirmations",
      "Official CAS / I-20 / CoE / LOA Visa Documentation"
    ],
    eligibility: ["Candidates who have completed profile assessment and university shortlisting."],
    documentsNeeded: ["Final Academic Dossier", "Approved SOP & LORs", "English Proficiency Test Scorecard", "Financial affidavits"],
    timeline: "2 to 8 weeks depending on institutional processing speed",
    popularDestinations: ["United States", "United Kingdom", "Canada", "Australia", "France", "Italy"]
  },
  {
    id: "visa-filing",
    slug: "visa-filing",
    number: "04",
    title: "Visa Filing",
    subtitle: "Airtight Consular Portfolios Directed by Certified Counsel",
    badge: "Legal Precision",
    iconName: "ShieldCheck",
    shortDesc: "Expert visa preparation, legal compliance checks, fee remittances, and embassy-specific dossier filing directed by MARA and OISC certified practitioners.",
    fullDesc: "The visa filing represents the culmination of your entire international preparation. Directed by government-certified advisors (MARA for Australia, OISC for the UK), our legal desk constructs bulletproof visa dossiers. We audit every form (DS-160, IMM 1294, Subclass 500 portals), ensure full compliance with GTE/GS Genuine Student rules, and maintain our historic 98% audited approval rate.",
    highlights: [
      "File direction by MARA & OISC government-certified legal practitioners",
      "Rigorous elimination of consular rejection factors and document inconsistencies",
      "Specialized representation for complex cases, prior refusals, and gap explanations",
      "Complete biometrics, medical examination, and consular tracking coordination"
    ],
    deliverables: [
      "Airtight Official Consular Visa Dossier",
      "Government Submission Receipts & Biometric Booking Slips",
      "Visa Grant Letter / Stamped Passport Return"
    ],
    eligibility: ["Candidates holding unconditional university offers or valid immigration invitations (ITA / Nomination)."],
    documentsNeeded: ["Valid Passport (min. 6–12 months validity)", "Official Admission Letter / Invitation", "Proof of Funds Portfolio", "Medical Clearances & Police Records"],
    timeline: "2 to 8 weeks in accordance with consular processing times",
    popularDestinations: ["Canada (SDS)", "Australia (Subclass 500)", "UK (Student Route)", "USA (F-1)", "Germany (§16b)"]
  },
  {
    id: "documentation-review",
    slug: "documentation",
    number: "05",
    title: "Documentation Review",
    subtitle: "3-Tier Verification & Consular Audit Standard",
    badge: "Zero-Error Guarantee",
    iconName: "FileCheck2",
    shortDesc: "Thorough auditing of academic records, employment verifications, notarizations, translations, and financial affidavits to eliminate discrepancies.",
    fullDesc: "Consular officers reject files predominantly due to paperwork discrepancies, inaccurate notarizations, or unverified claims. Our 3-tier document verification desk examines every page of your dossier: cross-referencing names, ensuring verified seals, auditing apostilles and translations, and verifying employment references against international occupation classifications (NOC / ANZSCO / SOC).",
    highlights: [
      "3-tier independent quality check on every submitted document",
      "Sworn translation and apostille facilitation for European and UAE consulates",
      "Verification of salary slips, Form 16, tax returns, and employer reference letters",
      "Ensures zero grounds for consular doubts regarding misrepresentation"
    ],
    deliverables: [
      "Master Document Audit Checklist & Verification Clearance",
      "Consular-Ready Notarized & Apostilled Dossier Binder",
      "Digital Secure Cloud Archive of All Verified Records"
    ],
    eligibility: ["Mandatory for all admissions and visa applications processed through AuraWise."],
    documentsNeeded: ["All primary academic, biographical, employment, and legal certificates."],
    timeline: "Continuous throughout application lifecycle (3–5 days per review cycle)",
    popularDestinations: ["All 10 Prime Global Hubs"]
  },
  {
    id: "sop-lor-crafting",
    slug: "sop-lor",
    number: "06",
    title: "SOP & LOR Crafting",
    subtitle: "Bespoke Editorial Writing & Personal Narrative Direction",
    badge: "Editorial Excellence",
    iconName: "Feather",
    shortDesc: "One-on-one editorial coaching to craft compelling, 100% plagiarism-free Statements of Purpose, Letters of Recommendation, and personal statements.",
    fullDesc: "Your Statement of Purpose (SOP) is your personal voice before the admissions committee and visa officer. Led by experienced academic editors, we help you articulate your intellectual motivations, research interests, career milestones, and strong ties to your home country. We deliver bespoke, narrative-driven SOPs, LORs, and CVs that stand apart from generic AI-generated templates.",
    highlights: [
      "1-on-1 editorial narrative sessions with dedicated writing coaches",
      "100% plagiarism-free, customized essays tailored to specific university prompts",
      "Rigorous adherence to Genuine Student (GS) and consular intent standards",
      "Professional standard formatting for academic and professional Letters of Recommendation"
    ],
    deliverables: [
      "Tailored Statement of Purpose (SOP) for Primary & Secondary Choices",
      "2–3 Academic and Professional Recommendation Letters (LORs)",
      "International Standard Academic / Professional CV"
    ],
    eligibility: ["All undergraduate, postgraduate, and doctoral applicants."],
    documentsNeeded: ["Academic transcripts", "Resume", "Personal achievements draft / questionnaire response"],
    timeline: "5 to 10 working days of iterative drafting and refinement",
    popularDestinations: ["USA", "UK", "Canada", "Australia", "Germany", "Ireland", "France"]
  },
  {
    id: "financial-guidance",
    slug: "financial-guidance",
    number: "07",
    title: "Financial Guidance",
    subtitle: "Proof of Funds Structuring, Education Loans & Forex",
    badge: "Fiscal Strategy",
    iconName: "Coins",
    shortDesc: "Strategic structuring of liquid funds, bank loan sanction letters, GIC/Blocked Accounts, property evaluations, and foreign exchange remittances.",
    fullDesc: "Demonstrating sufficient, genuine financial capability is the most critical hurdle in global student visa and migration applications. AuraWise provides transparent guidance on acceptable funding sources: tying up with premier nationalized and private banks for non-collateral education loans, setting up Canadian GICs (Scotiabank/CIBC) and German Blocked Accounts (Expatrio/Fintiba), and structuring tax-compliant affidavits of support.",
    highlights: [
      "Partnerships with top financial institutions for competitive unsecured student loans",
      "Assistance with Canadian Guaranteed Investment Certificates (GIC) & German Blocked Accounts",
      "Consular-compliant CA Valuation Reports and liquid asset audit portfolios",
      "Competitive institutional forex remittance rates for tuition deposits"
    ],
    deliverables: [
      "Consular-Ready Proof of Funds Financial Portfolio",
      "Bank Loan Sanction Letter Assistance",
      "Verified GIC / Blocked Account Certificate & Forex Wire Confirmation"
    ],
    eligibility: ["Candidates preparing for visa filing and university tuition deposits."],
    documentsNeeded: ["Bank statements (6 months)", "ITR acknowledgements (3 years)", "Property ownership papers", "Sponsor affidavits"],
    timeline: "2 to 3 weeks prior to official visa submission",
    popularDestinations: ["Canada (GIC $20,635)", "Germany (Blocked Account €11,904)", "USA (I-20 Form)", "UK (28-Day Bank Rule)", "Australia (Evidence of Funds)"]
  },
  {
    id: "interview-preparation",
    slug: "interview-prep",
    number: "08",
    title: "Interview Preparation",
    subtitle: "Simulated Consular Mock Interviews with Senior Experts",
    badge: "Confidence Building",
    iconName: "Mic",
    shortDesc: "Rigorous 1-on-1 mock interviews simulating US consular (F-1/B1), UK credibility, and Australian GS visa interviews to ensure composure and articulate answers.",
    fullDesc: "A consular interview is a high-pressure encounter where split-second answers decide your visa outcome. AuraWise conducts comprehensive mock interview drills replicating actual embassy environments. We train candidates on articulation, body language, career justification, post-study intentions, and handling complex questions on finances, gaps, and why a foreign degree is chosen.",
    highlights: [
      "Simulated mock interviews modeled on actual US embassy and UKVI questioning patterns",
      "Comprehensive answer framing for course justification, funding, and return intent",
      "Personalized feedback on vocal tone, eye contact, and clarity under pressure",
      "Over 99% pass rate among candidates who complete our 3-stage mock interview series"
    ],
    deliverables: [
      "Destination-Specific Consular Question & Answer Guide",
      "3 Recorded Mock Interview Evaluation Sessions",
      "Confidence & Body Language Readiness Clearance"
    ],
    eligibility: ["Applicants facing mandatory embassy interviews (USA F-1, UK Credibility, Germany, etc.)."],
    documentsNeeded: ["Copy of submitted DS-160 / visa file", "University offer letter / I-20", "Financial statement summary"],
    timeline: "Scheduled 1 to 2 weeks prior to embassy appointment",
    popularDestinations: ["United States (F-1)", "United Kingdom (UKVI Credibility)", "Germany", "France (Campus France)"]
  },
  {
    id: "pre-departure-briefing",
    slug: "pre-departure",
    number: "09",
    title: "Pre-departure Briefing",
    subtitle: "Customs, Packing, Currency & Academic Transition Prep",
    badge: "Readiness Protocol",
    iconName: "Luggage",
    shortDesc: "Exhaustive pre-flight workshops covering port-of-entry immigration clearance, essential documentation, international SIMs, and cultural orientation.",
    fullDesc: "Crossing international borders for the first time should be exciting, not intimidating. AuraWise conducts exhaustive pre-departure orientation sessions for students and migrating families. We detail baggage allowances, port-of-entry customs questions, essential medical insurance, student discount transit passes, climate adaptations, and immediate checklist protocols upon landing abroad.",
    highlights: [
      "Detailed port-of-entry immigration and border clearance walkthrough",
      "Customs guidelines: what to pack, prohibited items, and medication documentation",
      "Pre-activated international SIM card and student forex card setup",
      "Academic orientation on citation standards, lecture culture, and part-time work laws"
    ],
    deliverables: [
      "Master Pre-Departure Handbook & Packing Checklist",
      "Pre-activated International SIM Card & Forex Travel Card",
      "Port-of-Entry Immigration Dossier Envelope"
    ],
    eligibility: ["All candidates holding confirmed visa grants."],
    documentsNeeded: ["Stamped Visa & Passport", "Air Ticket Confirmation", "Accommodation Address", "Medical Insurance Policy"],
    timeline: "2 to 3 weeks prior to international departure",
    popularDestinations: ["All 10 Prime Global Hubs"]
  },
  {
    id: "post-arrival-support",
    slug: "post-arrival",
    number: "10",
    title: "Post-arrival Support",
    subtitle: "Airport Pickup, Housing, Bank Accounts & Alumni Connect",
    badge: "Lifelong Partnership",
    iconName: "Handshake",
    shortDesc: "On-ground transition assistance including airport greeting coordination, student housing lease reviews, bank account opening, and alumni community integration.",
    fullDesc: "Our commitment to you does not end when your flight takes off. AuraWise maintains an active international student alumni network across Canada, Australia, the UK, Europe, and the US. We assist with airport pickup coordination, student accommodation lease verifications, local bank account setup (RBC, Commonwealth, Barclays, Sparkasse), Social Insurance / Tax Number registrations, and local city orientation.",
    highlights: [
      "Airport reception coordination and temporary stay arrangements",
      "Safe student accommodation vetting (on-campus dorms and off-campus verified leases)",
      "Guidance on local bank account opening, transit passes, and national insurance (SIN / TFN / NI / SSN)",
      "Direct introduction to AuraWise student alumni communities in your host city"
    ],
    deliverables: [
      "Host City Settling-In Checklist & Emergency Contact Directory",
      "Local Bank Account & Tax ID Registration Assistance",
      "Alumni Community WhatsApp Network Invitation"
    ],
    eligibility: ["All AuraWise clients arriving in their destination country."],
    documentsNeeded: ["Study permit / BRP / Residence card issued at border", "University registration card", "Proof of address"],
    timeline: "First 30 to 60 days following international arrival",
    popularDestinations: ["Canada", "Australia", "United Kingdom", "United States", "Germany", "Ireland", "UAE"]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ahmedraza Mansuri",
    role: "Founder & Strategic Migration Director",
    credentials: "MARA Registered Migration Specialist (Australia)",
    experience: "12+ Years Experience",
    bio: "Ahmedraza leads AuraWise International's strategic migration advisory and high-stakes consular representations. Specializing in Australian and Canadian permanent residency routes and complex appeal tribunals, he ensures zero-error legal execution for ambitious families and professionals.",
    image: "/images/team/ahmedraza-mansuri.jpg",
    specialization: ["Australian Skilled PR", "Canada Express Entry", "Complex Appeals & Refusals"]
  },
  {
    name: "Mohammednihal Suthar",
    role: "Head of Global Education & University Placements",
    credentials: "AIRC Certified Senior Education Consultant",
    experience: "8+ Years Experience",
    bio: "Mohammednihal directs our overseas academic advisory desk across the UK, USA, Germany, and Europe. He mentors students through competitive university selections, departmental scholarship acquisitions, and tailored academic career roadmaps.",
    image: "/images/team/mohammednihal-suthar.jpg",
    specialization: ["Ivy League & Russell Group Admissions", "Merit Scholarships", "Post-Study Work Permits"]
  },
  {
    name: "Hetul Patel",
    role: "Senior Consular Operations & Strategic Advisory Lead",
    credentials: "OISC Certified Legal Advisor (United Kingdom)",
    experience: "10+ Years Experience",
    bio: "Hetul oversees institutional consular compliance, skilled corporate transfers, and European mobility frameworks. He specializes in EU Blue Card, German Chancenkarte, and UK skilled worker routes, bringing outcome certainty to every client docket.",
    image: "/images/team/hetul-patel.jpg",
    specialization: ["UK Skilled Worker Visas", "EU Blue Card & German Chancenkarte", "Consular Filing Strategy"]
  },
  {
    name: "Chiragkumar Prajapati",
    role: "Senior Visa Compliance & Case Processing Director",
    credentials: "Certified Immigration Compliance & Verification Officer",
    experience: "8+ Years Experience",
    bio: "Chiragkumar directs the 3-tier document verification protocol and rigorous consular interview readiness sessions. His precision-driven auditing guarantees bulletproof financial and legal representations across all 10 destination embassies.",
    image: "/images/team/chiragkumar-prajapati.jpg",
    specialization: ["Financial Portfolio Structuring", "Embassy Interview Coaching", "Zero-Error Case Verification"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Rohan Patel",
    destination: "Canada",
    programOrVisa: "University of Toronto – Master of Science",
    year: "2025",
    rating: 5,
    quote: "AuraWise made my dream of studying at the University of Toronto a reality. Their counsellors were incredibly patient and helped me secure a $12,000 scholarship. Couldn't have done it without them!",
    achievement: "$12,000 Merit Scholarship Secured",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Vikram & Neha Joshi",
    destination: "Australia",
    programOrVisa: "Permanent Residency – Subclass 189 Skilled Independent",
    year: "2025",
    rating: 5,
    quote: "I was skeptical at first, but the team at AuraWise guided me step by step through my PR application for Australia. I got my Subclass 189 visa in just 8 months. Highly recommended!",
    achievement: "PR Visa Granted in 8 Months",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Ananya Desai",
    destination: "United Kingdom",
    programOrVisa: "King's College London – MSc Finance",
    year: "2025",
    rating: 5,
    quote: "Best decision I made was choosing AuraWise for my UK student visa. Their SOP writing service is exceptional and the mock interview sessions gave me total confidence. Visa approved in 15 days!",
    achievement: "UK Student Visa Approved in 15 Days",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Karan Singhal",
    destination: "United States",
    programOrVisa: "Purdue University – MS Industrial Engineering",
    year: "2024",
    rating: 5,
    quote: "The IELTS coaching alone was worth every rupee. I went from a 6.0 to a 7.5 in just 6 weeks. Then AuraWise helped me apply to 5 US universities — I got into 3 with funding!",
    achievement: "IELTS Band 7.5 & 3 Funded US Admits",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Harsh & Priya Trivedi",
    destination: "Canada",
    programOrVisa: "Spouse Open Work Permit (SOWP)",
    year: "2025",
    rating: 5,
    quote: "I was worried about my spouse visa application as we had some complications with previous travel documentation. The AuraWise team handled everything professionally, and we're now happily settled in Canada together.",
    achievement: "Complex Spousal Visa Resolved & Approved",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Meera Kulkarni",
    destination: "Germany",
    programOrVisa: "TU Munich – MS Informatics (Tuition-Free)",
    year: "2024",
    rating: 5,
    quote: "AuraWise's transparency is what won me over. No hidden fees, clear timelines, and honest advice. My Germany study visa was processed smoothly. Danke AuraWise!",
    achievement: "Admit at TU Munich + Zero Tuition Fees",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "General",
    question: "How do I start the process of studying abroad?",
    answer: "Start with a free consultation with one of our certified counsellors. We'll evaluate your academic background, work experience, test scores, and financial situation, then recommend the best countries and universities that align with your career goals and budget."
  },
  {
    category: "Financials",
    question: "What is the cost of your services?",
    answer: "Our service fees depend on the specific service and destination country. We offer transparent, no-hidden-charges pricing with a written service agreement upfront. The initial 30-minute consultation is completely free with no obligations."
  },
  {
    category: "Process",
    question: "How long does the entire study abroad process take?",
    answer: "Typically 3–8 months depending on the intake (Fall/September or Spring/January), country, and university deadlines. We recommend starting at least 6 months before your intended intake to ensure ample time for language tests, documentation, offer issuance, and visa stamping."
  },
  {
    category: "General",
    question: "Do you guarantee visa approval?",
    answer: "No legitimate consultant can legally guarantee visa approval, as the final sovereign decision rests solely with the destination country's embassy or immigration department. However, our 98% audited success rate reflects our rigorous preparation, ensuring your documentation complies precisely with every consular standard."
  },
  {
    category: "Student Visa",
    question: "What is the minimum IELTS score required for Canada?",
    answer: "Most Canadian universities and colleges require a minimum IELTS Academic score of 6.0–6.5 overall, with no individual band below 6.0 for direct SDS study permit stream. Top universities may require 7.0+. For Express Entry Permanent Residency, a CLB 7 (equivalent to IELTS General 6.0 in each band) is generally the baseline threshold."
  },
  {
    category: "Student Visa",
    question: "Can I work while studying abroad?",
    answer: "Yes! Most destination countries grant international students lawful part-time work rights. Canada allows 20 hours per week during academic terms. Australia permits 48 hours per fortnight. The UK allows 20 hours per week during term and full-time during vacations. USA (CPT and on-campus work) provides designated options. Our advisors review exact campus employment rules for your destination."
  },
  {
    category: "Permanent Residency",
    question: "What is the difference between Express Entry and Provincial Nominee Programs (PNP)?",
    answer: "Canada's Express Entry is an online federal points-based system managing applications for skilled workers under Federal Skilled Worker, Canadian Experience Class, and Federal Skilled Trades. Provincial Nominee Programs (PNP) allow specific Canadian provinces (like Ontario, British Columbia, or Alberta) to nominate individuals who meet localized labor market needs, awarding a 600-point CRS boost that virtually guarantees an Invitation to Apply (ITA)."
  },
  {
    category: "Permanent Residency",
    question: "Are your migration counsellors legally certified?",
    answer: "Yes. Our team includes advisors registered with MARA (Migration Agents Registration Authority, Australia), OISC (Office of the Immigration Services Commissioner, United Kingdom), and AIRC (American International Recruitment Council, USA). All immigration counsel is delivered in strict conformity with foreign statutory regulations."
  }
];

export const HOW_WE_WORK_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Diagnostic Consultation",
    subtitle: "30-Minute In-Depth Feasibility Evaluation",
    description: "We meet at our flagship Ahmedabad office or via secure video call. Our certified counsellor conducts an exhaustive assessment of your transcripts, work history, target destinations, and long-term residency plans.",
    deliverables: ["Profile Diagnostic Scorecard", "Target Country Feasibility Matrix", "Intake Roadmap & Timeline"]
  },
  {
    number: "02",
    title: "Institutional Shortlisting",
    subtitle: "Strategic University & Program Matching",
    description: "We analyze your academic metrics, GRE/IELTS scores, and career goals to curate universities across Dream, Target, and Safe categories, ensuring optimal admission odds and scholarship eligibility.",
    deliverables: ["Curated Shortlist of 5–8 Universities", "Course Curriculum & Co-op Comparison", "Scholarship Catalog"]
  },
  {
    number: "03",
    title: "Editorial & Dossier Assembly",
    subtitle: "Bespoke SOPs, LORs & Certified Portfolios",
    description: "Our dedicated editorial desk coaches you through writing compelling Statements of Purpose (SOPs), CV formatting to international standards, and verified recommendation letters that resonate with admissions and visa officers.",
    deliverables: ["Plagiarism-Free Tailored SOPs", "Recommendation Letters (LORs)", "Verified Portal Upload Packets"]
  },
  {
    number: "04",
    title: "Offer & Scholarship Negotiation",
    subtitle: "Comparing Letters & Securing Institutional Aid",
    description: "Upon receiving official letters of offer, we assist in reviewing conditions, finalizing tuition deposits, and actively appealing for departmental merit scholarships.",
    deliverables: ["Official CAS / I-20 / CoE / LOA Acquisition", "Tuition Wire & Forex Transfer Guidance", "Scholarship Acceptance Protocols"]
  },
  {
    number: "05",
    title: "Visa Dossier & Mock Drills",
    subtitle: "Airtight Consular Audits & Simulated Interviews",
    description: "Our registered immigration attorneys (MARA/OISC) review every financial ledger, tax return, and intent letter. We conduct intensive simulated consular mock interviews to give you unbreakable confidence.",
    deliverables: ["Comprehensive Consular Visa File Review", "Mock Embassy Interview Simulations", "Biometric & Medical Appointment Coordination"]
  },
  {
    number: "06",
    title: "Pre-Departure & Landing Continuity",
    subtitle: "Seamless Transition to Your New Homeland",
    description: "Our guidance extends across borders. We guide you through student housing lease reviews, forex cards, international SIMs, and connecting with our active alumni network in your host city.",
    deliverables: ["Pre-Departure Luggage & Customs Guide", "Student Housing & Lease Review", "Alumni Community Introduction"]
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "15+ Years of Proven Credibility",
    description: "Guiding Indian students and families since 2009 with ethical, reliable, and outcome-oriented counsel.",
    icon: "Award"
  },
  {
    title: "MARA & OISC Certified Advisors",
    description: "Every migration file is directed by certified legal practitioners, ensuring 100% legal compliance and accuracy.",
    icon: "ShieldCheck"
  },
  {
    title: "Consistently Maintained 98% Success Rate",
    description: "Meticulous 3-tier document verification and mock interview training that eliminate consular rejection factors.",
    icon: "TrendingUp"
  },
  {
    title: "Direct Partnerships with 500+ Universities",
    description: "Direct priority channels with institutions in USA, UK, Canada, Australia, and Germany for faster offer turnarounds.",
    icon: "Building2"
  },
  {
    title: "100% Transparent, Fixed-Fee Structure",
    description: "Zero hidden fees or surprise costs. Detailed written fee schedules provided before commencing work.",
    icon: "Scale"
  },
  {
    title: "Complete Pre & Post-Landing Care",
    description: "From Forex assistance and accommodation booking to airport connections, we ensure you never feel alone.",
    icon: "HeartHandshake"
  }
];
