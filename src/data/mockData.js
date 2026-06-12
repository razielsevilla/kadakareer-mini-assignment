export const INITIAL_USER_PROFILE = {
  name: "Juan dela Cruz",
  email: "juan.delacruz@gmail.com",
  contact: "+63 917 123 4567",
  university: "Polytechnic University of the Philippines (PUP)",
  location: "Manila, Philippines",
  completedVAs: [
    { id: "va-1", title: "Digital Marketing Basics", icon: "📈", date: "May 2026", skills: ["Social Media Planning", "SEO", "Copywriting"] },
    { id: "va-2", title: "Intro to Data Analytics", icon: "📊", date: "June 2026", skills: ["Excel Basics", "Data Visualization", "SQL Fundamentals"] }
  ],
  savedJobs: [],
  bio: "Hi! I am an aspiring digital marketer and data analyst. Through KadaKareer's Virtual Apprenticeships, I have developed practical hands-on experience in managing content schedules, drafting SEO-optimized copy, and building dashboards to tracking campaign conversions."
};

export const MOCK_JOBS = [
  {
    id: "job-1",
    title: "Social Media Specialist Intern",
    company: "Zenar Tech Solutions",
    location: "Ortigas (Hybrid)",
    salary: "₱8,000 - ₱10,000 / month",
    type: "Remote / On-site",
    deadline: "June 30, 2026",
    externalUrl: "https://kadakareer.prosple.com/graduate-jobs/social-media-specialist-zenar",
    requiredSkills: ["Social Media Planning", "Copywriting", "Canva Graphics"],
    preferredQualifications: "Completed Digital Marketing Virtual Apprenticeship or equivalent experience.",
    aboutCompany: "Zenar Tech Solutions is a fast-growing local e-commerce provider focusing on bringing digital transformation to community micro-SMEs.",
    matchingVaId: "va-1"
  },
  {
    id: "job-2",
    title: "Junior Data Analyst",
    company: "PhData Corp",
    location: "Taguig City (On-site)",
    salary: "₱25,000 - ₱30,000 / month",
    type: "On-site",
    deadline: "July 15, 2026",
    externalUrl: "https://kadakareer.prosple.com/graduate-jobs/junior-data-analyst-phdata",
    requiredSkills: ["SQL Fundamentals", "Excel Basics", "Data Visualization"],
    preferredQualifications: "Familiarity with data manipulation. Data analytics portfolio or KadaKareer project milestone highly valued.",
    aboutCompany: "PhData Corp specializes in supply chain logistics solutions across the Southeast Asian market, helping logistics partners streamline operations.",
    matchingVaId: "va-2"
  },
  {
    id: "job-3",
    title: "Content Marketing Intern",
    company: "KadaPartner Org",
    location: "Remote (Philippines)",
    salary: "₱6,000 / month",
    type: "Remote",
    deadline: "July 05, 2026",
    externalUrl: "https://kadakareer.prosple.com/graduate-jobs/content-marketing-kadapartner",
    requiredSkills: ["Copywriting", "SEO", "Basic Graphic Design"],
    preferredQualifications: "Passion for community building. Completed Digital Marketing VA.",
    aboutCompany: "An NGO partner focusing on delivering educational technology to rural communities across Visayas and Mindanao.",
    matchingVaId: "va-1"
  }
];
