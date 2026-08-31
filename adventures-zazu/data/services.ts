import type { TravelService } from "@/types/service";

export const services: TravelService[] = [
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport Transfers",
    image: "/images/travel-services/travel-services-transfers.webp",
    shortDescription:
      "Reliable private transfers between Victoria Falls Airport and your accommodation.",
    description:
      "Arrange your arrival or departure transfer before you travel. We can coordinate a private vehicle between Victoria Falls Airport and your hotel, lodge or selected accommodation, helping the first and final part of your journey run smoothly.",
    features: [
      "Private airport pickup or drop-off",
      "Meet-and-greet at Victoria Falls Airport",
      "Luggage assistance",
      "Direct transfer to or from your Victoria Falls accommodation",
      "Collection times coordinated around your flight details",
    ],
    idealFor:
      "Travellers arriving in or departing from Victoria Falls who would like the transport details organised in advance.",
    howItWorks: [
      "Send us your arrival or departure date, flight time and accommodation details.",
      "We confirm the collection time and transfer arrangement with you.",
      "Your driver meets you at the agreed point and takes you directly to your destination.",
    ],
    availableOptions: [
      {
        title: "Victoria Falls Airport Transfer",
        description:
          "A private transfer between Victoria Falls Airport and your Victoria Falls hotel, lodge or accommodation.",
        href: "/experiences/transfers/victoria-falls-airport-transfer",
      },
    ],
    enquiryPrompt:
      "Send your flight number, arrival or departure time, number of travellers and accommodation details.",
    featured: true,
  },

  {
    id: "private-transfers",
    slug: "private-transfers",
    title: "Private Transfers",
    image: "/images/travel-services/travel-services-private-transfers.webp",
    shortDescription:
      "Door-to-door private transport between Victoria Falls and key regional connections.",
    description:
      "Connect Victoria Falls with the wider region in a comfortable private vehicle. We can arrange point-to-point transfers for travellers continuing to Botswana or Zambia, with collection from your Victoria Falls accommodation and practical guidance for the border crossing.",
    features: [
      "Private one-way transfer arrangements",
      "Hotel or lodge collection in Victoria Falls",
      "Kasane Airport and Livingstone connections",
      "Luggage assistance",
      "Border-crossing guidance for cross-border journeys",
      "Timing coordinated with your onward plans",
    ],
    idealFor:
      "Independent travellers, couples, families and small groups connecting Victoria Falls with Botswana or Zambia.",
    howItWorks: [
      "Tell us your collection point, destination, travel date and preferred time.",
      "We confirm the vehicle, transfer price and collection details before travel.",
      "Carry the required passport, visa and travel documents for any border crossing.",
    ],
    availableOptions: [
      {
        title: "Victoria Falls to Kasane Airport Private Transfer",
        description:
          "Private door-to-door transport to Kasane Airport in Botswana via the Kazungula border.",
        href: "/experiences/transfers/victoria-falls-to-kasane-airport-private-transfer",
      },
      {
        title: "Victoria Falls to Livingstone Private Transfer",
        description:
          "Private transport from Victoria Falls to Livingstone, a Livingstone hotel or the airport in Zambia.",
        href: "/experiences/transfers/victoria-falls-to-livingstone-private-transfer",
      },
    ],
    enquiryPrompt:
      "Send your collection address, destination, travel date, preferred collection time and the number of travellers.",
    featured: true,
  },

  {
    id: "guided-tours",
    slug: "guided-tours",
    title: "Guided Tours",
    image: "/images/travel-services/travel-services-guided-tour.webp",
    shortDescription:
      "Add knowledgeable local guidance to the experiences that matter most to you.",
    description:
      "Choose guided experiences that suit your interests, time and travel style. From the rainforest at Victoria Falls to wildlife and conservation encounters, we can help you select and coordinate activities as individual bookings or as part of a wider journey.",
    features: [
      "Local guided experiences",
      "Victoria Falls sightseeing and rainforest walks",
      "Wildlife, conservation and scenic flight options",
      "Activity timing coordinated with your itinerary",
      "Advice on building a balanced day around your selected experiences",
    ],
    idealFor:
      "Travellers who want a local perspective and help selecting experiences without trying to fit everything into one day.",
    howItWorks: [
      "Share your interests, dates and how much time you have available.",
      "We recommend suitable experiences and explain the practical details.",
      "Once you choose, we coordinate the bookings around your accommodation and transfers where required.",
    ],
    availableOptions: [
      {
        title: "Victoria Falls Guided Walking Tour",
        description: "A guided walk through the rainforest and viewpoints of Victoria Falls.",
        href: "/experiences/activities/victoria-falls-guided-walking-tour",
      },
      {
        title: "Victoria Falls Wildlife Safari",
        description: "A guided safari near Victoria Falls in search of Zimbabwean wildlife.",
        href: "/experiences/activities/victoria-falls-wildlife-safari",
      },
      {
        title: "Victoria Falls Flight of the Angels",
        description: "A short scenic helicopter flight over the Falls, Zambezi River and gorge.",
        href: "/experiences/activities/victoria-falls-flight-of-the-angels",
      },
    ],
    enquiryPrompt:
      "Tell us what you would like to experience, your travel dates and whether you need transfers included.",
    featured: true,
  },

  {
    id: "accommodation-assistance",
    slug: "accommodation-assistance",
    title: "Accommodation Assistance",
    image: "/images/travel-services/travel-services-accommodation.webp",
    shortDescription:
      "Find stays that match your route, comfort level and the way you want to travel.",
    description:
      "Accommodation is most useful when it is planned around the rest of your journey. We can help incorporate appropriate hotels, lodges and safari stays into your route, considering your dates, destinations, planned activities and preferred style of travel.",
    features: [
      "Accommodation suggestions aligned with your route",
      "Victoria Falls hotels, lodges and safari stays",
      "Stay durations planned around your activities and transfers",
      "Accommodation incorporated into a custom itinerary where required",
    ],
    idealFor:
      "Travellers who want their accommodation choices to work properly with a multi-stop journey rather than booking every night separately.",
    howItWorks: [
      "Tell us your travel dates, destinations, number of travellers and preferred comfort level.",
      "We consider suitable stay options alongside your route and planned experiences.",
      "You receive a clear itinerary proposal to review before confirming any arrangements.",
    ],
    enquiryPrompt:
      "Share your dates, destinations, number of rooms or travellers and the style of stay you have in mind.",
    featured: true,
  },

  {
    id: "custom-itineraries",
    slug: "custom-itineraries",
    title: "Custom Itineraries",
    image: "/images/travel-services/travel-services-custom-itinerary.webp",
    shortDescription:
      "Send us your ideas and we will help shape them into a journey that works.",
    description:
      "A custom itinerary lets you start with the parts of Southern Africa that interest you most. Tell us where you would like to go, how long you have and what kind of travel you enjoy; we can help bring together the destinations, experiences, accommodation and transfers into one considered journey.",
    features: [
      "Personalised route and day-by-day journey planning",
      "Destination and experience selection",
      "Accommodation and transfer coordination",
      "Flexible pacing for couples, families, solo travellers and groups",
      "A single enquiry point for the parts of your trip",
    ],
    idealFor:
      "Travellers who do not want a fixed package and would rather build a trip around their own dates, interests and priorities.",
    howItWorks: [
      "Send us your travel dates, number of travellers, destinations and wish list.",
      "We discuss the practical route and suggest experiences, stays and transfers that fit together.",
      "You receive an itinerary proposal that can be refined before you decide to proceed.",
    ],
    enquiryPrompt:
      "Send us your rough plan—even a simple list of places, dates and interests is enough to begin.",
    featured: true,
  },

  {
    id: "travel-planning",
    slug: "travel-planning",
    title: "Travel Planning",
    image: "/images/travel-services/travel-servies-planning.webp",
    shortDescription:
      "Bring your accommodation, activities, transfers and timings together in one clear plan.",
    description:
      "Travel planning is for the practical details that make a trip feel easy: working out a sensible order for destinations, allowing time for transfers and border crossings, and matching activities with the days you have available. We help you see how the different parts of your journey can work together.",
    features: [
      "Route and timing guidance",
      "Destination, activity and transfer coordination",
      "Advice for cross-border journey planning",
      "A clearer view of your trip before you travel",
      "Support choosing services that fit your available time",
    ],
    idealFor:
      "Travellers who already have some ideas but would like help turning them into a practical, well-paced trip.",
    howItWorks: [
      "Tell us what you have already booked or what you are considering.",
      "We look at the timing, route and services needed to connect the journey.",
      "We suggest a clear next step, whether that is an individual transfer, selected activities or a complete custom itinerary.",
    ],
    enquiryPrompt:
      "Send us the plans you already have, including travel dates and any bookings, and tell us where you would like help.",
    featured: true,
  },
];
