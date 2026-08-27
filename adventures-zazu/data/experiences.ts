import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "tour-around-zimbabwe",
    slug: "tour-around-zimbabwe",
    title: "Tour Around Zimbabwe",
    category: "multi-day-trip",

    destination: "Zimbabwe",
    destinationSlug: "victoria-falls",
    duration: "Multi-day",

    shortDescription:
      "Explore some of Zimbabwe's most remarkable destinations on a journey across the country.",

    description:
      "Discover Zimbabwe through a journey that brings together remarkable landscapes, wildlife, history and culture.",

    image: "/images/experiences/tour-around-zimbabwe.png",

    gallery: [
      "/images/experiences/tour-around-zimbabwe-2.png",
      "/images/experiences/tour-around-zimbabwe-3.png",
      "/images/experiences/tour-around-zimbabwe-4.png",
    ],

    highlights: [
      "Victoria Falls",
      "Hwange National Park",
      "Great Zimbabwe",
      "Matobo Hills",
    ],

    included: [
      "Accommodation",
      "Transportation",
      "Guided experiences",
    ],

    excluded: [
      "International flights",
      "Personal expenses",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival & Hwange National Park",
        activities: [
          "Arrival in Victoria Falls.",
          "Transfer towards Hwange National Park.",
          "Check in at the lodge.",
          "Afternoon/evening game drive.",
          "Dinner and overnight in Hwange.",
        ],
      },
      {
        day: 2,
        title: "Hwange & Victoria Falls",
        activities: [
          "Morning safari in Hwange.",
          "Return towards Victoria Falls.",
          "Guided Victoria Falls experience.",
          "Overnight in Victoria Falls.",
        ],
      },
      {
        day: 3,
        title: "Chobe National Park",
        activities: [
          "Cross into Botswana.",
          "Full-day Chobe National Park safari.",
          "Game drive.",
          "River cruise.",
          "Overnight stay.",
        ],
      },
      {
        day: 4,
        title: "Okavango Delta",
        activities: [
          "Transfer to the Okavango Delta.",
          "Afternoon mokoro excursion.",
        ],
      },
      {
        day: 5,
        title: "Okavango Delta Safari",
        activities: [
          "Full-day Okavango Delta safari.",
          "Guided bush walks.",
          "Wildlife viewing.",
          "Optional boat activities.",
        ],
      },
      {
        day: 6,
        title: "Departure",
        activities: [
          "Breakfast.",
          "Departure transfer.",
        ],
      },
    ],

    faqs: [],

    featured: true,
  },

  {
    id: "cape-town-day-tour",
    slug: "cape-town-day-tour",
    title: "Cape Town Day Tour",
    category: "day-trip",

    destination: "Cape Town",
    destinationSlug: "cape-town",
    duration: "1 day",

    shortDescription:
      "Experience Cape Town through a carefully planned day of exploration.",

    description:
      "Explore Cape Town and its surrounding attractions on a convenient day experience.",

    image: "/images/experiences/cape-town-day-tour.png",

    gallery: [],

    highlights: [
      "Cape Town",
      "Scenic viewpoints",
      "Local attractions",
    ],

    included: [
      "Transportation",
      "Guided experience",
    ],

    excluded: [
      "Personal expenses",
    ],

    itinerary: [],

    faqs: [],

    featured: true,
  },

  {
    id: "kruger-national-park-day-tour",
    slug: "kruger-national-park-day-tour",
    title: "Kruger National Park Day Tour",
    category: "day-trip",

    destination: "Kruger National Park",
    destinationSlug: "kruger-national-park",
    duration: "1 day",

    shortDescription:
      "Spend a day exploring Kruger National Park and experiencing its remarkable wildlife.",

    description:
      "Experience a day of wildlife viewing and safari exploration in Kruger National Park.",

    image: "/images/experiences/kruger-national-park-day-tour.png",

    gallery: [],

    highlights: [
      "Kruger National Park",
      "Wildlife viewing",
      "Game drive",
    ],

    included: [
      "Transportation",
      "Safari experience",
    ],

    excluded: [
      "Personal expenses",
    ],

    itinerary: [],

    faqs: [],

    featured: true,
  },

  {
    id: "okavango-delta-day-trip",
    slug: "okavango-delta-day-trip",
    title: "Okavango Delta Day Trip",
    category: "day-trip",

    destination: "Okavango Delta",
    destinationSlug: "okavango-delta",
    duration: "1 day",

    shortDescription:
      "Discover the waterways and wildlife of the Okavango Delta on a memorable day trip.",

    description:
      "Experience the unique landscape of the Okavango Delta through a carefully planned day adventure.",

    image: "/images/experiences/okavango-delta-day-trip.png",

    gallery: [],

    highlights: [
      "Okavango Delta",
      "Mokoro experience",
      "Wildlife viewing",
    ],

    included: [
      "Transportation",
      "Guided experience",
    ],

    excluded: [
      "Personal expenses",
    ],

    itinerary: [],

    faqs: [],

    featured: true,
  },
];
