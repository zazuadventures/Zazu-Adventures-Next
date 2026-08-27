import type { TravelService } from "@/types/service";

export const services: TravelService[] = [
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport Transfers",
    shortDescription:
      "Convenient airport transfers to help you start and finish your journey smoothly.",
    description:
      "Arrange a convenient transfer between the airport and your accommodation or next destination as part of your travel plans.",
    features: [
      "Airport pickup",
      "Airport drop-off",
      "Planned transfer arrangements",
      "Coordination with your itinerary",
    ],
    featured: true,
  },

  {
    id: "private-transfers",
    slug: "private-transfers",
    title: "Private Transfers",
    shortDescription:
      "Private transportation arrangements between destinations.",
    description:
      "Travel between destinations with private transfer arrangements that fit into your wider itinerary.",
    features: [
      "Private transfer arrangements",
      "Point-to-point travel",
      "Itinerary coordination",
      "Flexible travel planning",
    ],
    featured: true,
  },

  {
    id: "guided-tours",
    slug: "guided-tours",
    title: "Guided Tours",
    shortDescription:
      "Explore destinations through guided travel experiences.",
    description:
      "Add guided experiences to your trip and explore destinations with an itinerary designed around the places and activities you want to experience.",
    features: [
      "Destination tours",
      "Guided experiences",
      "Activity planning",
      "Itinerary coordination",
    ],
    featured: true,
  },

  {
    id: "accommodation-assistance",
    slug: "accommodation-assistance",
    title: "Accommodation Assistance",
    shortDescription:
      "Get assistance planning accommodation as part of your journey.",
    description:
      "Accommodation can be incorporated into your wider travel plans so that your stays work alongside your destinations, activities and itinerary.",
    features: [
      "Accommodation planning",
      "Stay coordination",
      "Itinerary integration",
      "Destination-based planning",
    ],
    featured: true,
  },

  {
    id: "custom-itineraries",
    slug: "custom-itineraries",
    title: "Custom Itineraries",
    shortDescription:
      "Create a journey around your destinations, interests and available time.",
    description:
      "Build a travel itinerary around the destinations and experiences that matter to you rather than following a fixed journey.",
    features: [
      "Personalised itinerary planning",
      "Destination selection",
      "Activity planning",
      "Trip coordination",
    ],
    featured: true,
  },

  {
    id: "travel-planning",
    slug: "travel-planning",
    title: "Travel Planning",
    shortDescription:
      "Get help bringing the different parts of your trip together.",
    description:
      "Travel planning brings together the practical parts of your journey so that your destinations, experiences, transfers and accommodation can work together.",
    features: [
      "Trip planning",
      "Destination planning",
      "Experience selection",
      "Travel coordination",
    ],
    featured: true,
  },
];