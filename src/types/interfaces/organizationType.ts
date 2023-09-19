export interface IOrganizationTypeOption {
  name: string;
  description: string;
  optionId?: string;
}

export const organizationTypeOptions: IOrganizationTypeOption[] = [
  {
    name: "Agriculture",
    description: "Companies involved in farming, crop production, and agricultural services.",
    optionId: "agriculture",
  },
  {
    name: "Technology",
    description: "Companies engaged in technology and IT services.",
    optionId: "technology",
  },
  {
    name: "Waste Management",
    description: "Companies involved in waste management and recycling services.",
    optionId: "waste_management",
  },
  {
    name: "Clean Energy",
    description: "Companies focused on clean and renewable energy sources.",
    optionId: "clean_energy",
  },
  {
    name: "Workshops",
    description: "Organizations offering workshops and training programs.",
    optionId: "workshops",
  },
  {
    name: "Cultural Festivals",
    description: "Entities organizing cultural festivals and events.",
    optionId: "cultural_festivals",
  },
  {
    name: "Arts",
    description: "Organizations promoting and supporting the arts and creative endeavors.",
    optionId: "arts",
  },
  {
    name: "Music",
    description: "Organizations related to the music industry and musical events.",
    optionId: "music",
  },
  {
    name: "Sports",
    description: "Entities involved in sports and athletic activities.",
    optionId: "sports",
  },
  {
    name: "Learning and Education",
    description: "Institutions and services related to learning and education.",
    optionId: "learning_education",
  },
  {
    name: "Hiking, Travelling",
    description: "Groups and services related to hiking and travel.",
    optionId: "hiking_traveling",
  },
  {
    name: "Environmental Conservation",
    description: "Organizations dedicated to environmental conservation and sustainability.",
    optionId: "environmental_conservation",
  },
  {
    name: "Healthcare",
    description: "Entities providing healthcare and medical services.",
    optionId: "healthcare",
  },
  {
    name: "Researchers",
    description: "Researchers and research institutions.",
    optionId: "researchers",
  },
  {
    name: "Nyumba Kumi",
    description: "Community-based security and neighborhood watch groups.",
    optionId: "nyumba_kumi",
  },
  {
    name: "Media & Entertainment",
    description: "Media and entertainment companies and services.",
    optionId: "media_entertainment",
  },
  {
    name: "Non-profit",
    description: "Non-profit organizations and charitable services.",
    optionId: "non_profit",
  },
  {
    name: "Others",
    description: "Other industries not listed above.",
    optionId: "others",
  },
];
