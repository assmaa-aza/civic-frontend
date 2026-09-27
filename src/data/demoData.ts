export interface ProfileData {
  employmentStatus: string;
  idea: string;
  location: string;
  targetCustomers: string;
  budget: string;
  resources: string[];
}

export interface FeasibilityData {
  challengeTitle: string;
  challengeDescription: string;
  challengeWhyMatters: string;
  adaptationTitle: string;
  adaptationDescription: string;
  adaptationPoints: string[];
  adaptationWhyHelps: string;
  startingModel: {
    icon: string;
    text: string;
  }[];
}

export interface LegalStep {
  id: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Pending';
  source: string;
}

export interface FundingProgram {
  id: string;
  name: string;
  type: 'Grant' | 'Microloan' | 'Incubator';
  matchStatus: 'Appears to match' | 'Possible match';
  badgeType: 'teal' | 'gold';
  amount: string;
  matches: string[];
  gaps?: string[];
  warnings?: string[];
  verifiedDate: string;
  source: string;
  description: string;
  eligibility: string[];
}

export interface ActionTask {
  id: string;
  category: 'Legal' | 'Funding' | 'Verification';
  title: string;
  completed: boolean;
}

export const demoProfile: ProfileData = {
  employmentStatus: "Unemployed",
  idea: "Neighborhood delivery service",
  location: "Settat, Morocco",
  targetCustomers: "Local residents & small shops",
  budget: "3,000 MAD",
  resources: [
    "Smartphone",
    "Basic delivery capability (Bicycle/Scooter)"
  ]
};

export const demoFeasibility: FeasibilityData = {
  challengeTitle: "Potential challenge",
  challengeDescription: "A city-wide delivery service may require more operational resources than your current starting budget supports.",
  challengeWhyMatters: "Delivery coverage, drivers, customer acquisition, and technology costs can increase quickly.",
  adaptationTitle: "Possible adaptation",
  adaptationDescription: "Start hyper-local in your immediate neighborhood.",
  adaptationPoints: [
    "Focus on one neighborhood",
    "Small delivery radius (1-2 km)",
    "WhatsApp-based ordering",
    "Test demand before building a full app"
  ],
  adaptationWhyHelps: "This could reduce initial complexity and allow you to validate demand before scaling.",
  startingModel: [
    { icon: "📍", text: "One neighborhood" },
    { icon: "💬", text: "WhatsApp orders" },
    { icon: "🚲", text: "Small delivery radius" },
    { icon: "📈", text: "Scale after validation" }
  ]
};

export const demoLegalPath: LegalStep[] = [
  {
    id: "legal-1",
    title: "Determine the appropriate registration type",
    description: "For a micro delivery service starting with a 3,000 MAD budget, the Auto-Entrepreneur status offers simplified tax rates and zero corporate registration fees.",
    status: "Completed",
    source: "Official Authority (RNAE / CRI Morocco)"
  },
  {
    id: "legal-2",
    title: "Prepare required documents",
    description: "National ID (CIN) copy, proof of local residential address in Settat, and completed online registration form.",
    status: "In Progress",
    source: "Official Authority (RNAE)"
  },
  {
    id: "legal-3",
    title: "Complete the registration process",
    description: "Submit online application through the National Auto-Entrepreneur portal or at a designated postal branch (Barid Al-Maghrib).",
    status: "Pending",
    source: "Official Authority (Barid Al-Maghrib)"
  },
  {
    id: "legal-4",
    title: "Confirm current requirements with the relevant authority",
    description: "Verify local municipal permits for local transport services if expanding beyond neighborhood errands.",
    status: "Pending",
    source: "Local Municipality (Settat)"
  }
];

export const demoPrograms: FundingProgram[] = [
  {
    id: "grant-1",
    name: "Local Entrepreneurship Grant",
    type: "Grant",
    matchStatus: "Appears to match",
    badgeType: "teal",
    amount: "Up to 20,000 MAD",
    matches: [
      "Target audience (unemployed youth)",
      "Project stage (early idea/launch)",
      "Location (Settat region)"
    ],
    gaps: [
      "Additional registration document (Auto-entrepreneur card)"
    ],
    verifiedDate: "25 September 2026",
    source: "Official Regional Program",
    description: "A non-repayable grant program supporting micro-entrepreneurs and first-time founders in regional provinces across Morocco.",
    eligibility: [
      "Moroccan national residing in the project area",
      "Valid National ID (CIN)",
      "Registered auto-entrepreneur status or commitment to register within 30 days"
    ]
  },
  {
    id: "microloan-1",
    name: "Microfinance Option",
    type: "Microloan",
    matchStatus: "Possible match",
    badgeType: "gold",
    amount: "Up to 15,000 MAD",
    matches: [
      "Small business model",
      "Immediate working capital funding need"
    ],
    gaps: [
      "Proof of registration"
    ],
    warnings: [
      "Repayment required over 12 to 24 months with low interest rate"
    ],
    verifiedDate: "25 September 2026",
    source: "Official Microfinance Institution",
    description: "Flexible micro-financing tailored for micro-distributors and local service providers needing equipment or initial stock.",
    eligibility: [
      "Age 18+",
      "Clear business plan or activity description",
      "Guarantor or basic personal commitment"
    ]
  },
  {
    id: "incubator-1",
    name: "Business Incubator Support",
    type: "Incubator",
    matchStatus: "Possible match",
    badgeType: "teal",
    amount: "Training + mentoring",
    matches: [
      "Early-stage project",
      "Needs structured business support & coaching"
    ],
    gaps: [
      "Application requirements (Short video pitch or interview)"
    ],
    verifiedDate: "25 September 2026",
    source: "Civic & Innovation Hub",
    description: "Non-equity acceleration program providing 6 weeks of practical coaching, financial literacy, and customer acquisition strategies.",
    eligibility: [
      "Early stage business idea in service or tech sector",
      "Commitment to attend weekly workshops in Settat / online"
    ]
  }
];

export const initialActionTasks: ActionTask[] = [
  // 01 - Legal
  { id: "task-1", category: "Legal", title: "Confirm registration type (Auto-Entrepreneur status)", completed: true },
  { id: "task-2", category: "Legal", title: "Prepare identification documents (CIN & proof of address)", completed: true },
  { id: "task-3", category: "Legal", title: "Confirm current requirements with relevant authority", completed: true },
  
  // 02 - Funding
  { id: "task-4", category: "Funding", title: "Prepare business description & hyper-local strategy", completed: true },
  { id: "task-5", category: "Funding", title: "Prepare estimated budget breakdown (3,000 MAD initial)", completed: false },
  { id: "task-6", category: "Funding", title: "Collect required documents for grant application", completed: false },
  { id: "task-7", category: "Funding", title: "Check application submission deadline", completed: false },
  
  // 03 - Verification
  { id: "task-8", category: "Verification", title: "Contact the program provider / regional representative", completed: false },
  { id: "task-9", category: "Verification", title: "Verify current submission deadline", completed: false },
  { id: "task-10", category: "Verification", title: "Confirm final document requirements with local CRI agent", completed: false }
];

export const demoChatScript = [
  {
    sender: "ai" as const,
    content: "Tell me about your business idea in your own words. What would you like to start?",
    timestamp: "10:00 AM"
  },
  {
    sender: "user" as const,
    content: "I'm unemployed and want to start a small delivery app for my neighborhood.",
    timestamp: "10:01 AM"
  },
  {
    sender: "ai" as const,
    content: "That gives me a good starting point. Who are your target customers, and what area do you want to cover?",
    timestamp: "10:01 AM"
  },
  {
    sender: "user" as const,
    content: "I live in Settat. I want to deliver groceries and daily goods to local residents. My starting budget is around 3,000 MAD.",
    timestamp: "10:02 AM"
  },
  {
    sender: "ai" as const,
    content: "Thank you! I have extracted your core business profile. I am ready to evaluate feasibility and guide you through legal steps and relevant funding programs in Morocco.",
    timestamp: "10:02 AM"
  }
];
