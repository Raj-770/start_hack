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
      stage: 'FFF' | 'Pre-Seed' | 'Seed' | 'Series A' | 'Series B' | 'Series C+';
      operation: 'Working on it' | 'Crashed' | 'Exit';
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
    businessModel: 'B2B' | 'B2C';
    acceleratorParticipation: {
      batch: string;
      incubatorParticipation: boolean;
      incubatorYear?: number;
      acceleratorType: 'BUILD' | 'IGNITE';
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
      gender: 'Female' | 'Male' | 'Other';
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
    role: 'Employee' | 'Mentor' | 'Investor' | 'Founder';
    startupAffiliation: {
      startupName: string;
      relationship: 'Employee' | 'Mentor' | 'Investor' | 'Co-Founder';
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
      productServiceDescription: "EcoCharge Solutions develops and sells advanced solar-powered charging stations...",
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
          { count: 10, originCountry: "USA" },
          { count: 5, originCountry: "Canada" },
          { count: 4, originCountry: "Germany" },
          { count: 3, originCountry: "India" },
          { count: 3, originCountry: "Australia" },
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
              linkedIn: ""
          }
      },
      coFounderInfo: {
          name: "",
          socials: {
              x: "",
              linkedIn: ""
          }
      },
      contactInfo: {
          email: "",
          phone: "",
          address: ""
      },
      additionalInfo: {
          foundersBackground: "",
          targetMarket: "",
          keyMilestones: "",
          intellectualProperty: "",
          growthMetrics: "",
          currentChallenges: ""
      }
  }


    
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
    interests: ["Renewable Energy", "Sustainable Technologies", "Startup Ecosystems"],
    bio: "Co-founder of EcoCharge Solutions, passionate about driving the change towards a more sustainable future.",
  };
   
  