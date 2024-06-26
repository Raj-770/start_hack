type Startup = {
  name: string;
  logoUrl: string;
  productServiceDescription: string;
  website: string;
  socialMediaProfiles: {
    linkedIn: string;
    twitter: string;
    facebook: string;
  };
  headquarters: {
    country: string;
    city: string;
  };
  industry: string;
  foundingDate: Date;
  status: {
    stage: "FFF" | "Pre-Seed" | "Seed" | "Series A" | "Series B" | "Series C+";
    operation: "Working on it" | "Crashed" | "Exit";
  };
  funding: {
    totalUSD: number;
    rounds: Array<{
      round: string;
      year: number;
      amountUSD: number;
      investor: string;
    }>;
  };
  employees: Array<{
    count: number;
    originCountry: string;
  }>;
  businessModel: "B2B" | "B2C";
  acceleratorParticipation: {
    batch: string;
    incubatorParticipation: boolean;
    incubatorYear?: number;
    acceleratorType: "BUILD" | "IGNITE";
    equityFreeGrantsCHF: number;
  };
  pitchDeckUrl: string;
  kpis: Array<string>;
  nsm: {
    metric: string;
    value: number;
    growthRate: number;
  };
  founderInfo: {
    name: string;
    gender: "Female" | "Male" | "Other";
    birthday: Date;
    country: string;
    city: string;
    socials: {
      x: string;
      linkedIn: string;
    };
  };
  coFounderInfo: {
    name: string;
    socials: {
      x: string;
      linkedIn: string;
    };
  };
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  additionalInfo: {
    foundersBackground: string;
    targetMarket: string;
    keyMilestones: string;
    intellectualProperty: string;
    growthMetrics: string;
    currentChallenges: string;
  };
};

interface User {
  id: string;
  name: string;
  email: string;
  role: "Employee" | "Mentor" | "Investor" | "Founder";
  startupAffiliation: {
    startupName: string;
    relationship: "Employee" | "Mentor" | "Investor" | "Co-Founder";
    since: Date;
  };
  profilePicUrl: string;
  contactInfo: {
    phone?: string;
    address?: string;
  };
  socialMediaProfiles?: {
    linkedIn?: string;
    twitter?: string;
    facebook?: string;
  };
  interests?: string[];
  bio?: string;
}

const ecoChargeSolutions: Startup = {
  name: "EcoCharge Solutions",
  logoUrl: "XXX", // Replace XXX with actual URL when available
  productServiceDescription:
    "EcoCharge Solutions develops and sells advanced solar-powered charging stations...",
  website: "www.ecochargesolutions.com",
  socialMediaProfiles: {
    linkedIn: "EcoCharge Solutions",
    twitter: "@EcoChargeS",
    facebook: "/EcoChargeSolutions",
  },
  headquarters: {
    country: "United States",
    city: "San Francisco, CA",
  },
  industry: "Renewable Energy / Tech",
  foundingDate: new Date("2018-03-01"),
  status: {
    stage: "Series A",
    operation: "Working on it",
  },
  funding: {
    totalUSD: 5000000,
    rounds: [
      {
        round: "Seed",
        year: 2019,
        amountUSD: 1000000,
        investor: "SolarFuture Capital & angel investor Mia Hu",
      },
      {
        round: "Series A",
        year: 2022,
        amountUSD: 4000000,
        investor: "GreenTech Ventures",
      },
    ],
  },
  employees: [
    {count: 10, originCountry: "USA"},
    {count: 5, originCountry: "Canada"},
    {count: 4, originCountry: "Germany"},
    {count: 3, originCountry: "India"},
    {count: 3, originCountry: "Australia"},
  ],
  businessModel: "B2B",
  acceleratorParticipation: {
    batch: "FS Batch 22'",
    incubatorParticipation: true,
    incubatorYear: 2021,
    acceleratorType: "IGNITE",
    equityFreeGrantsCHF: 25000,
  },
  pitchDeckUrl: "XXX", // Replace XXX with actual URL when available
  kpis: [
    "Revenue growth",
    "Revenue per client",
    "Profit margin",
    "Client retention rate",
    "Customer satisfaction",
  ],
  nsm: {
    metric: "cars charged with EcoCharge Solutions",
    value: 1475,
    growthRate: 50,
  },
  founderInfo: {
    name: "",
    gender: "Female",
    birthday: undefined,
    country: "",
    city: "",
    socials: {
      x: "",
      linkedIn: "",
    },
  },
  coFounderInfo: {
    name: "",
    socials: {
      x: "",
      linkedIn: "",
    },
  },
  contactInfo: {
    email: "",
    phone: "",
    address: "",
  },
  additionalInfo: {
    foundersBackground: "",
    targetMarket: "",
    keyMilestones: "",
    intellectualProperty: "",
    growthMetrics: "",
    currentChallenges: "",
  },
};

// Sample user data related to EcoCharge Solutions
const sampleUser: User = {
  id: "user123",
  name: "Jamie Lin",
  email: "jamie@ecochargesolutions.com",
  role: "Founder",
  startupAffiliation: {
    startupName: "EcoCharge Solutions",
    relationship: "Co-Founder",
    since: new Date("2018-03-01"),
  },
  profilePicUrl: "https://example.com/path/to/jamie's-profile-pic",
  contactInfo: {
    phone: "+1 (555) 010-0222",
    address: "123 Greenway Blvd, San Francisco, CA 94107, USA",
  },
  socialMediaProfiles: {
    linkedIn: "Jamie Lin EcoCharge",
    twitter: "@EcoChargeJamie",
  },
  interests: [
    "Renewable Energy",
    "Sustainable Technologies",
    "Startup Ecosystems",
  ],
  bio: "Co-founder of EcoCharge Solutions, passionate about driving the change towards a more sustainable future.",
};

export const Revenue_Data = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Revenue (in thousand CHF)",
      data: [100, 150, 160, 250],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
  ],
};
export const Profitability_Data = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Profitability (in %)",
      data: [22, 35, 42, 37],
      borderColor: "rgba(255, 206, 86, 1)",
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      fill: true,
    },
  ],
};
export const Burn_Rate_Data = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Burn Rate (in %)",
      data: [30, 45, 20, 75],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
  ],
};
export const Equity_Data = {
  labels: ["Angel Investor", "Venture Capital", "Founder"],
  datasets: [
    {
      label: "Equity Distribution",
      data: [20, 60, 20],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const Funds_Data = {
  labels: ["At disposal", "Upcoming"],
  datasets: [
    {
      label: "Funds Raised (in thousands)",
      data: [100, 400],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};
export const Expenses_Data = {
  labels: ["Marketing", "Operations", "Personnel", "IT & Software"],
  datasets: [
    {
      label: "Expenses",
      data: [50000, 35000, 50000, 125000],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      fill: true,
    },
  ],
};
export const Budget_Data = {
  labels: ["Marketing", "Operations", "Personnel", "IT & Software"],
  datasets: [
    {
      label: "Budget Allocation",
      data: [30000, 45000, 60000, 75000],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
  ],
};

export const events = [
  {
    id: 1,
    title: "Tech Innovators Conference",
    date: "April 15, 2024",
    description:
      "Join us for a day of talks, workshops, and networking with the pioneers of the tech industry.",
    imageUrl:
      "https://vir.com.vn/stores/news_dataimages/2023/072023/19/15/12b8adade07000b04846c4d60ffd0276.png?rt=20230719152853",
  },
  {
    id: 2,
    title: "Green Tech Symposium",
    date: "May 20, 2024",
    description:
      "Explore the latest in sustainable technologies and how they're shaping our future.",
    imageUrl:
      "https://startupnowforum.gr/wp-content/uploads/2021/09/I-will-be-at-GREENTECH-1200x630-1.jpg",
  },
  {
    id: 3,
    title: "AI in Healthcare Summit",
    date: "June 11, 2024",
    description:
      "Discover the revolutionary impact of AI on healthcare at this must-attend summit.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1200/1*3SbtyZwucRgy9F5tO7qSVQ.png",
  },
];
