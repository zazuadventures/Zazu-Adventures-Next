import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "boma-dinner-drum-show",
    slug: "boma-dinner-drum-show",
    title: "Boma Dinner & Drum Show",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "3 Hours",
    price: {
      from: 80,
      currency: "USD",
      per: "person",
      note: "Adult rate; transfers available on request",
    },
    shortDescription:
      "Enjoy a traditional African feast, live cultural performances and an interactive drumming experience at The Boma in Victoria Falls.",
    description:
      "Experience an unforgettable evening of Zimbabwean food, music and culture at The Boma Dinner & Drum Show in Victoria Falls. Set in an atmospheric open-air boma, the experience combines a traditional African buffet with live music, dancing, storytelling and an interactive drumming performance.",
    image: "/images/experiences/experience-boma-dinner-show-1.webp",
    gallery: [
      "/images/experiences/experience-boma-dinner-show-2.webp",
      "/images/experiences/experience-boma-dinner-show-3.webp",
      "/images/experiences/experience-boma-dinner-show-4.webp",
      "/images/experiences/experience-boma-dinner-show-5.webp",
      "/images/experiences/experience-boma-dinner-show-6.webp",
    ],
    highlights: [
      "Traditional African buffet dinner",
      "Live music and dance performances",
      "Interactive African drumming",
      "Traditional welcome experience",
      "Selection of local and game dishes",
      "Open-air boma setting",
      "Cultural entertainment and storytelling",
      "Suitable for couples, families and groups",
    ],
    included: [
      "The Boma Dinner & Drum Show experience",
      "Traditional African buffet dinner",
      "Live cultural performances",
      "Interactive drumming experience",
      "Traditional welcome experience",
      "Cultural entertainment",
      "Chitenge presentation",
      "Vegetarian meal options",
    ],
    excluded: [
      "Drinks unless specified in the selected package",
      "Hotel transfers unless specifically selected",
      "Personal purchases",
      "Tips and gratuities",
      "Optional souvenirs",
    ],
    itinerary: [
      {
        day: 1,
        title: "Boma Dinner & Drum Show",
        location: "The Boma, Victoria Falls",
        activities: [
          {
            time: "18:30",
            title: "Optional Hotel Pick-Up",
            description:
              "If transfers have been selected, meet your driver at your Victoria Falls accommodation for the short transfer to The Boma.",
          },
          {
            time: "19:00",
            title: "Arrival at The Boma",
            description:
              "Arrive at The Boma and enter the atmospheric open-air dining area, designed to create an authentic African dining experience.",
          },
          {
            time: "19:15",
            title: "Traditional Welcome",
            description:
              "Take part in the traditional welcome experience before settling into the evening's programme. Guests may receive a chitenge to wear during the experience.",
          },
          {
            time: "19:30",
            title: "African Buffet Dinner",
            description:
              "Enjoy a generous buffet featuring a variety of African-inspired dishes, grilled meats, selected game specialties, vegetables, salads and desserts. Vegetarian options are available.",
          },
          {
            time: "20:00",
            title: "Live Cultural Performances",
            description:
              "Enjoy live African music, singing and traditional dancing as performers bring Zimbabwean culture to life around the dining area.",
          },
          {
            time: "20:45",
            title: "Cultural Entertainment",
            description:
              "Continue enjoying the evening's entertainment through traditional music, dancing and storytelling while dinner service continues.",
          },
          {
            time: "21:00",
            title: "Interactive Drum Show",
            description:
              "Join the performers for the highlight of the evening. Guests are invited to participate in an energetic African drumming experience and learn traditional rhythms.",
          },
          {
            time: "21:45",
            title: "Farewell",
            description:
              "The cultural programme comes to an end. Take a final moment to enjoy the atmosphere before leaving The Boma.",
          },
          {
            time: "22:00",
            title: "Activity Ends",
            description:
              "The Boma Dinner & Drum Show concludes. Guests using arranged transfers depart for their Victoria Falls accommodation.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "Boma Dinner & Drum Show Victoria Falls | Zimbabwe Cultural Experience",
      metaDescription:
        "Enjoy a 3-hour Boma Dinner & Drum Show in Victoria Falls with a traditional African buffet, live cultural performances and an interactive drumming experience.",
      keywords: [
        "Boma Dinner Victoria Falls",
        "Boma Drum Show Victoria Falls",
        "Boma Dinner and Drum Show",
        "Victoria Falls cultural experience",
        "Zimbabwe traditional dinner",
        "African drumming Victoria Falls",
        "Victoria Falls evening activities",
        "Zimbabwe cultural dinner",
      ],
      canonicalSlug: "boma-dinner-drum-show",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 80,
      currency: "USD",
    },
    featured: true,
  },
  {
    id: "zambezi-dinner-cruise",
    slug: "zambezi-dinner-cruise",
    title: "Zambezi Sunset Dinner Cruise",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "3 Hours",
    price: { from: 110, currency: "USD", per: "person", note: "Per person" },
    shortDescription:
      "Sail along the Zambezi River as the sun sets, enjoying dinner, drinks and beautiful evening views in the heart of the African wilderness.",
    description:
      "Enjoy an unforgettable evening on the Zambezi River with a scenic sunset cruise and dinner served on board. Watch the river landscape transform as the sun goes down, look out for wildlife along the banks and enjoy a relaxed dining experience surrounded by the beauty of Victoria Falls.",
    image: "/images/experiences/experience-sunset-dinner-cruise-1.webp",
    gallery: [
      "/images/experiences/experience-sunset-dinner-cruise-2.webp",
      "/images/experiences/experience-sunset-dinner-cruise-3.webp",
      "/images/experiences/experience-sunset-dinner-cruise-4.webp",
      "/images/experiences/experience-sunset-dinner-cruise-5.webp",
      "/images/experiences/experience-sunset-dinner-cruise-6.webp",
      "/images/experiences/experience-sunset-dinner-cruise-7.webp",
    ],
    highlights: [
      "Scenic Zambezi River cruise",
      "Sunset views over the river",
      "Dinner served on board",
      "Wildlife viewing opportunities",
      "Relaxed evening atmosphere",
      "Beautiful African river scenery",
    ],
    included: ["Zambezi Sunset Dinner Cruise", "Dinner served on board"],
    excluded: [
      "Hotel transfers unless specifically selected",
      "Drinks unless specified in the selected package",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Zambezi Sunset Dinner Cruise",
        location: "Zambezi River, Victoria Falls",
        activities: [
          {
            time: "16:00",
            title: "Hotel Pick-Up",
            description:
              "If transfers have been selected, meet your driver at your Victoria Falls accommodation for the transfer to the Zambezi River jetty.",
          },
          {
            time: "16:30",
            title: "Arrival at the Jetty",
            description:
              "Arrive at the river, complete boarding arrangements and prepare for your evening cruise.",
          },
          {
            time: "17:00",
            title: "Board the Dinner Cruise",
            description:
              "Board the cruise vessel, settle into your seat and take in the peaceful surroundings of the Zambezi River.",
          },
          {
            time: "17:15",
            title: "Zambezi River Cruise",
            description:
              "Cruise along the Zambezi while enjoying views of the riverbanks and watching for hippos, crocodiles, elephants and birdlife.",
          },
          {
            time: "17:45",
            title: "Sunset & Dinner",
            description:
              "As the sun begins to set over the Zambezi, enjoy dinner on board while taking in the changing colours of the African landscape.",
          },
          {
            time: "18:30",
            title: "Evening River Views",
            description:
              "Continue cruising along the river and enjoy the calm evening atmosphere, scenic views and surrounding wilderness.",
          },
          {
            time: "19:00",
            title: "Return to the Jetty",
            description:
              "The cruise concludes as the vessel returns to the jetty. Disembark and meet your driver if a return transfer has been arranged.",
          },
          {
            time: "19:30",
            title: "Hotel Drop-Off",
            description:
              "Return to your Victoria Falls accommodation and conclude your evening experience.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle: "Zambezi Sunset Dinner Cruise Victoria Falls | Zimbabwe",
      metaDescription:
        "Enjoy a Zambezi Sunset Dinner Cruise in Victoria Falls with dinner on board, scenic river views, sunset and opportunities to spot African wildlife.",
      keywords: [
        "Zambezi Sunset Dinner Cruise",
        "Zambezi Dinner Cruise Victoria Falls",
        "Victoria Falls Dinner Cruise",
        "Zambezi River Dinner",
        "Victoria Falls Sunset Cruise",
        "Zambezi River Cruise",
        "Victoria Falls evening activities",
        "Zimbabwe dinner cruise",
      ],
      canonicalSlug: "zambezi-dinner-cruise",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 110,
      currency: "USD",
    },
  },
  {
    id: "evening-in-a-zimbabwean-home",
    slug: "evening-in-a-zimbabwean-home",
    title: "An Evening in a Zimbabwean Home",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "2–3 Hours",
    price: { from: 60, currency: "USD", per: "person", note: "Per person" },
    shortDescription:
      "Step into everyday Zimbabwean life, share a home-cooked meal and experience the warmth of genuine local hospitality.",
    description:
      "Go beyond the usual tourist experience and spend an evening in a Zimbabwean home. Meet a local host, share a traditional home-cooked meal and discover the stories, food and everyday traditions that make Zimbabwean hospitality so special. This intimate cultural experience offers a genuine connection with local life around the dinner table.",
    image: "/images/experiences/home-hosted-dinner.png",
    gallery: [],
    highlights: [
      "Authentic Zimbabwean home experience",
      "Home-cooked traditional dinner",
      "Warm local hospitality",
      "Meet and connect with local hosts",
      "Learn about everyday Zimbabwean life",
      "Traditional food and family stories",
      "Intimate cultural experience",
    ],
    included: [
      "Home-hosted Zimbabwean dining experience",
      "Traditional home-cooked dinner",
      "Cultural interaction with local hosts",
      "Local host and cultural guidance",
    ],
    excluded: [
      "Hotel transfers unless specifically selected",
      "Personal expenses",
      "Tips and gratuities",
      "Optional purchases",
    ],
    itinerary: [
      {
        day: 1,
        title: "An Evening in a Zimbabwean Home",
        location: "Victoria Falls Community",
        activities: [
          {
            time: "17:30",
            title: "Hotel Pick-Up",
            description:
              "If transfers have been selected, meet your driver at your Victoria Falls accommodation for the short journey to the host's home.",
          },
          {
            time: "18:00",
            title: "Welcome to a Zimbabwean Home",
            description:
              "Meet your local host and receive a warm Zimbabwean welcome before settling into the evening.",
          },
          {
            time: "18:15",
            title: "Meet Your Host & Discover Local Life",
            description:
              "Spend time getting to know your host and learn about everyday life, family traditions, local customs and the community around Victoria Falls.",
          },
          {
            time: "18:45",
            title: "Traditional Home-Cooked Dinner",
            description:
              "Sit down for a freshly prepared Zimbabwean meal featuring traditional home-style dishes. Your host introduces the food and shares the stories and traditions behind it.",
          },
          {
            time: "19:30",
            title: "Around the Zimbabwean Table",
            description:
              "Relax over dinner and conversation. Share stories with your hosts and discover more about Zimbabwean culture, family life and local traditions.",
          },
          {
            time: "20:15",
            title: "Cultural Connection",
            description:
              "Continue the conversation over the final part of the meal, with an opportunity to ask questions and learn more about life in Zimbabwe from a local perspective.",
          },
          {
            time: "20:30",
            title: "Farewell & Departure",
            description:
              "Thank your hosts and say goodbye before departing for Victoria Falls.",
          },
          {
            time: "21:00",
            title: "Return to Accommodation",
            description:
              "Arrive back at your Victoria Falls accommodation and conclude your home-hosted cultural experience.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "An Evening in a Zimbabwean Home | Victoria Falls Dining Experience",
      metaDescription:
        "Experience authentic Zimbabwean hospitality with a home-cooked dinner, local hosts and a genuine cultural connection in Victoria Falls.",
      keywords: [
        "Zimbabwean home dinner",
        "Victoria Falls cultural experience",
        "home hosted dinner Victoria Falls",
        "Zimbabwe local dining experience",
        "Zimbabwean food experience",
        "Victoria Falls local experience",
        "Zimbabwe cultural dining",
        "authentic Zimbabwe experience",
      ],
      canonicalSlug: "evening-in-a-zimbabwean-home",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 60,
      currency: "USD",
    },
  },
  {
    id: "into-zimbabwean-village-life",
    slug: "into-zimbabwean-village-life",
    title: "Into Zimbabwean Village Life",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "3 Hours",
    price: { from: 75, currency: "USD", per: "person", note: "Per person" },
    shortDescription:
      "Step beyond Victoria Falls and discover everyday Zimbabwean life, traditions and community through a guided village experience.",
    description:
      "Step beyond the famous Falls and into everyday Zimbabwean life. Visit a local community with a knowledgeable guide, meet local people and discover the traditions, homes, food and stories that shape life around Victoria Falls. This respectful cultural experience offers visitors an opportunity to connect with the community and see a side of Zimbabwe that many travellers never experience.",
    image: "/images/experiences/experience-into-zimbabwean-village-life-1.webp",
    gallery: [
      "/images/experiences/experience-into-zimbabwean-village-life-2.webp",
      "/images/experiences/experience-into-zimbabwean-village-life-3.webp",
      "/images/experiences/experience-into-zimbabwean-village-life-4.webp",
      "/images/experiences/experience-into-zimbabwean-village-life-5.webp",
      "/images/experiences/experience-into-zimbabwean-village-life-6.webp",
      "/images/experiences/experience-into-zimbabwean-village-life-7.webp",
    ],
    highlights: [
      "Authentic Zimbabwean village experience",
      "Meet local community members",
      "Discover everyday Zimbabwean life",
      "Learn about local traditions and customs",
      "Traditional homes and community life",
      "Local stories and cultural insights",
      "Guided and respectful cultural exchange",
      "A different perspective beyond Victoria Falls",
    ],
    included: [
      "Guided village experience",
      "Local community visit",
      "Cultural interpretation",
      "Interaction with community members",
    ],
    excluded: [
      "Hotel transfers unless specifically selected",
      "Personal expenses",
      "Tips and gratuities",
      "Optional purchases or souvenirs",
    ],
    itinerary: [
      {
        day: 1,
        title: "Into Zimbabwean Village Life",
        location: "Victoria Falls Community",
        activities: [
          {
            time: "08:30",
            title: "Hotel Pick-Up",
            description:
              "If transfers have been selected, meet your guide at your Victoria Falls accommodation and begin the journey into the surrounding community.",
          },
          {
            time: "09:00",
            title: "Arrival in the Community",
            description:
              "Arrive in the local community and meet your guide, who introduces the area and explains what to expect during the experience.",
          },
          {
            time: "09:15",
            title: "Walk Through Village Life",
            description:
              "Explore the community on foot and observe everyday activities, homes, gardens and shared spaces while your guide explains how the community lives and works.",
          },
          {
            time: "09:45",
            title: "Meet the Local Community",
            description:
              "Spend time with local community members and learn about family life, livelihoods, traditions and the experiences of people living around Victoria Falls.",
          },
          {
            time: "10:15",
            title: "Traditional Homes & Daily Life",
            description:
              "Discover traditional approaches to home life and learn how local households organise their daily routines, prepare food and use the resources around them.",
          },
          {
            time: "10:45",
            title: "Zimbabwean Culture & Traditions",
            description:
              "Learn about local customs, celebrations, food, beliefs and traditions through stories and conversation with your guide and community hosts.",
          },
          {
            time: "11:15",
            title: "Community Conversation",
            description:
              "Take time to ask questions, share experiences and connect with your hosts in a relaxed cultural exchange.",
          },
          {
            time: "11:30",
            title: "Farewell & Departure",
            description:
              "Say goodbye to your hosts and begin the return journey to Victoria Falls.",
          },
          {
            time: "12:00",
            title: "Return to Accommodation",
            description:
              "Arrive back at your Victoria Falls accommodation and conclude your village life experience.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "Into Zimbabwean Village Life | Victoria Falls Cultural Experience",
      metaDescription:
        "Discover authentic Zimbabwean village life near Victoria Falls. Meet local communities, learn about traditions and experience everyday Zimbabwean culture.",
      keywords: [
        "Zimbabwean village life",
        "Victoria Falls village tour",
        "Victoria Falls cultural experience",
        "Zimbabwe village experience",
        "Zimbabwe cultural tour",
        "local village Victoria Falls",
        "Victoria Falls community tour",
        "authentic Zimbabwe experience",
      ],
      canonicalSlug: "into-zimbabwean-village-life",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 75,
      currency: "USD",
    },
  },
  {
    id: "zambezi-river-boat-cruise",
    slug: "zambezi-river-boat-cruise",
    title: "Zambezi River Boat Cruise",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "2 Hours",
    price: { from: 75, currency: "USD", per: "person", note: "Per person" },
    shortDescription:
      "Cruise along the mighty Zambezi River, taking in beautiful river scenery and watching for elephants, hippos, crocodiles and birdlife.",
    description:
      "Relax aboard a comfortable boat and discover the Zambezi River from the water. Cruise through the peaceful river channels near Victoria Falls while taking in the surrounding wilderness and looking out for wildlife along the banks. With scenic views, fresh air and an unhurried pace, this is a perfect way to experience one of Africa's great rivers.",
    image: "/images/experiences/experience-zambezi-river-boat-cruise-1.webp",
    gallery: [
      "/images/experiences/experience-zambezi-river-boat-cruise-2.webp",
      "/images/experiences/experience-zambezi-river-boat-cruise-3.webp",
      "/images/experiences/experience-zambezi-river-boat-cruise-4.webp",
      "/images/experiences/experience-zambezi-river-boat-cruise-5.webp",
      "/images/experiences/experience-zambezi-river-boat-cruise-6.webp",
      "/images/experiences/experience-zambezi-river-boat-cruise-7.webp",
    ],
    highlights: [
      "Cruise along the Zambezi River",
      "Beautiful African river scenery",
      "Wildlife viewing opportunities",
      "Elephant, hippo and crocodile sightings",
      "Abundant birdlife",
      "Relaxed two-hour river experience",
      "Professional crew and river guide",
    ],
    included: [
      "Zambezi River boat cruise",
      "Professional crew",
      "River and wildlife commentary",
    ],
    excluded: [
      "Hotel transfers unless specifically selected",
      "Drinks and snacks unless specified in the selected package",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Zambezi River Boat Cruise",
        location: "Zambezi River, Victoria Falls",
        activities: [
          {
            time: "15:30",
            title: "Hotel Pick-Up",
            description:
              "If transfers have been selected, meet your driver at your Victoria Falls accommodation for the transfer to the Zambezi River jetty.",
          },
          {
            time: "16:00",
            title: "Arrival at the Jetty",
            description:
              "Arrive at the river and complete boarding arrangements before stepping aboard the cruise vessel.",
          },
          {
            time: "16:15",
            title: "Board the Boat",
            description:
              "Settle aboard the boat, meet the crew and prepare to explore the Zambezi River.",
          },
          {
            time: "16:30",
            title: "Zambezi River Cruise Begins",
            description:
              "Begin cruising along the Zambezi, enjoying panoramic views of the river and surrounding wilderness.",
          },
          {
            time: "16:45",
            title: "Wildlife & Birdlife Viewing",
            description:
              "Keep watch along the riverbanks for elephants, hippos, crocodiles and a variety of waterbirds and other wildlife.",
          },
          {
            time: "17:15",
            title: "River Exploration",
            description:
              "Continue along the river while your guide shares information about the Zambezi ecosystem, wildlife and the area's natural environment.",
          },
          {
            time: "17:45",
            title: "Scenic River Views",
            description:
              "Relax on board and take in the peaceful surroundings as the boat makes its way along the Zambezi.",
          },
          {
            time: "18:15",
            title: "Return to the Jetty",
            description:
              "Return to the departure point and disembark after approximately two hours on the river.",
          },
          {
            time: "18:30",
            title: "Hotel Drop-Off",
            description:
              "If a return transfer has been arranged, depart the jetty and return to your Victoria Falls accommodation.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle: "Zambezi River Boat Cruise Victoria Falls | Zimbabwe",
      metaDescription:
        "Enjoy a 2-hour Zambezi River Boat Cruise in Victoria Falls with scenic river views and opportunities to spot elephants, hippos, crocodiles and birdlife.",
      keywords: [
        "Zambezi River Boat Cruise",
        "Zambezi River Cruise Victoria Falls",
        "Victoria Falls boat cruise",
        "Zambezi River cruise",
        "Victoria Falls river cruise",
        "Zambezi wildlife cruise",
        "Victoria Falls river activities",
        "Zimbabwe Zambezi cruise",
      ],
      canonicalSlug: "zambezi-river-boat-cruise",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 75,
      currency: "USD",
    },
  },
  {
    id: "victoria-falls-flight-of-the-angels",
    slug: "victoria-falls-flight-of-the-angels",
    title: "Victoria Falls Flight of the Angels",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "12–15 Minutes",
    price: {
      from: 200,
      currency: "USD",
      per: "person",
      note: "From price per person",
    },
    shortDescription:
      "Take to the skies over Victoria Falls for a spectacular aerial view of the Falls, Zambezi River and surrounding gorge.",
    description:
      "Experience Victoria Falls from a completely different perspective on a scenic helicopter flight over one of Africa's greatest natural wonders. Fly above the mighty Zambezi, the Falls and the surrounding gorge, with the spray rising beneath you and the scale of the landscape unfolding from above.",
    image:
      "/images/experiences/experience-victoria-falls-flight-of-the-angels-6.webp",
    gallery: [
      "/images/experiences/experience-victoria-falls-flight-of-the-angels-2.webp",
      "/images/experiences/experience-victoria-falls-flight-of-the-angels-3.webp",
      "/images/experiences/experience-victoria-falls-flight-of-the-angels-4.webp",
      "/images/experiences/experience-victoria-falls-flight-of-the-angels-5.webp",
      "/images/experiences/experience-victoria-falls-flight-of-the-angels-1.webp",
      "/images/experiences/experience-victoria-falls-flight-of-the-angels-7.webp",
    ],
    highlights: [
      "Aerial views of Victoria Falls",
      "Flight over the Zambezi River",
      "Views of the upper gorge",
      "Spectacular views of the Falls and spray",
      "Professional helicopter flight",
      "12–15 minute scenic flight",
    ],
    included: [
      "Scenic helicopter flight",
      "Professional pilot",
      "Safety briefing",
    ],
    excluded: [
      "Hotel transfers unless specifically selected",
      "Park fees and applicable levies",
      "Fuel surcharge where applicable",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Victoria Falls Flight of the Angels",
        location: "Victoria Falls, Zimbabwe",
        activities: [
          {
            time: "08:30",
            title: "Hotel Pick-Up",
            description:
              "If transfers have been selected, meet your driver at your Victoria Falls accommodation for the transfer to the helicopter base.",
          },
          {
            time: "09:00",
            title: "Arrival & Check-In",
            description:
              "Arrive at the helicopter base, complete check-in and prepare for your scenic flight.",
          },
          {
            time: "09:15",
            title: "Safety Briefing",
            description:
              "Meet your pilot and receive a short safety briefing before boarding the helicopter.",
          },
          {
            time: "09:30",
            title: "Take-Off",
            description:
              "Lift off and begin your scenic flight towards Victoria Falls and the Zambezi River.",
          },
          {
            time: "09:32",
            title: "Victoria Falls Aerial View",
            description:
              "Fly above Victoria Falls and take in the full scale of the Main Falls, surrounding rainforest and the spray rising from the gorge.",
          },
          {
            time: "09:37",
            title: "Zambezi & Gorge",
            description:
              "Continue over the Zambezi River and upper gorge while enjoying panoramic views of the dramatic landscape below.",
          },
          {
            time: "09:42",
            title: "Return Flight",
            description: "Begin the return flight towards the helicopter base.",
          },
          {
            time: "09:45",
            title: "Landing",
            description:
              "Land safely and conclude the scenic flight experience.",
          },
          {
            time: "10:00",
            title: "Return to Accommodation",
            description:
              "If a return transfer has been arranged, depart the helicopter base for your Victoria Falls accommodation.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle: "Flight of the Angels Victoria Falls | Helicopter Flight",
      metaDescription:
        "Fly over Victoria Falls on the Flight of the Angels, a spectacular 12–15 minute helicopter experience with aerial views of the Falls, Zambezi River and gorge.",
      keywords: [
        "Flight of the Angels Victoria Falls",
        "Victoria Falls helicopter flight",
        "Victoria Falls scenic flight",
        "helicopter over Victoria Falls",
        "Victoria Falls aerial tour",
        "Zambezi helicopter flight",
        "Victoria Falls helicopter tour",
      ],
      canonicalSlug: "victoria-falls-flight-of-the-angels",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 200,
      currency: "USD",
    },
  },
  {
    id: "victoria-falls-gorge-helicopter-flight",
    slug: "victoria-falls-gorge-helicopter-flight",
    title: "Victoria Falls Gorge Helicopter Flight",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "22 Minutes",
    price: {
      from: 200,
      currency: "USD",
      per: "person",
      note: "From price per person",
    },
    shortDescription:
      "Go beyond the Falls on an extended 22-minute helicopter flight over Victoria Falls, the Zambezi River and the dramatic Batoka Gorge.",
    description:
      "Take the longer scenic route above Victoria Falls and into the dramatic gorge carved by the Zambezi River. The 22-minute helicopter flight gives you the iconic aerial view of the Falls while extending the experience over the gorge and surrounding Zambezi landscape.",
    image:
      "/images/experiences/experience-victoria-falls-gorge-helicopter-flight-1.webp",
    gallery: [
      "/images/experiences/experience-victoria-falls-gorge-helicopter-flight-2.webp",
      "/images/experiences/experience-victoria-falls-gorge-helicopter-flight-3.webp",
      "/images/experiences/experience-victoria-falls-gorge-helicopter-flight-4.webp",
      "/images/experiences/experience-victoria-falls-gorge-helicopter-flight-5.webp",
      "/images/experiences/experience-victoria-falls-gorge-helicopter-flight-6.webp",
      "/images/experiences/experience-victoria-falls-gorge-helicopter-flight-7.webp",
    ],
    highlights: [
      "Aerial views of Victoria Falls",
      "Extended 22-minute scenic flight",
      "Batoka Gorge views",
      "Zambezi River and upper Zambezi",
      "Dramatic gorge and river landscapes",
      "Professional helicopter flight",
      "More extensive aerial experience",
    ],
    included: [
      "22-minute scenic helicopter flight",
      "Professional pilot",
      "Safety briefing",
    ],
    excluded: [
      "Hotel transfers unless specifically selected",
      "Park fees and applicable levies",
      "Fuel surcharge where applicable",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Victoria Falls Gorge Helicopter Flight",
        location: "Victoria Falls, Zimbabwe",
        activities: [
          {
            time: "08:30",
            title: "Hotel Pick-Up",
            description:
              "If transfers have been selected, meet your driver at your Victoria Falls accommodation for the transfer to the helicopter base.",
          },
          {
            time: "09:00",
            title: "Arrival & Check-In",
            description:
              "Arrive at the helicopter base, complete check-in and prepare for your extended scenic flight.",
          },
          {
            time: "09:15",
            title: "Safety Briefing",
            description:
              "Meet your pilot and receive a safety briefing before boarding the helicopter.",
          },
          {
            time: "09:30",
            title: "Take-Off",
            description:
              "Lift off and begin your flight towards Victoria Falls and the upper Zambezi.",
          },
          {
            time: "09:32",
            title: "Victoria Falls From Above",
            description:
              "Take in spectacular aerial views of Victoria Falls, the rainforest and the immense spray rising from the gorge.",
          },
          {
            time: "09:38",
            title: "Zambezi River & Gorge",
            description:
              "Continue beyond the Falls to follow sections of the Zambezi and experience the dramatic gorge landscape from above.",
          },
          {
            time: "09:45",
            title: "Extended Gorge Flight",
            description:
              "Enjoy additional aerial views of the gorge, river channels and surrounding wilderness before turning back towards Victoria Falls.",
          },
          {
            time: "09:52",
            title: "Return Towards Victoria Falls",
            description:
              "Begin the return section of the flight while enjoying one final perspective of the Falls and surrounding landscape.",
          },
          {
            time: "09:52",
            title: "Landing",
            description:
              "Land at the helicopter base and conclude your 22-minute scenic flight.",
          },
          {
            time: "10:10",
            title: "Return to Accommodation",
            description:
              "If a return transfer has been arranged, depart the helicopter base for your Victoria Falls accommodation.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle: "22-Minute Gorge Helicopter Flight Victoria Falls | Zimbabwe",
      metaDescription:
        "Take a 22-minute Gorge Helicopter Flight over Victoria Falls, the Zambezi River and Batoka Gorge for an extended aerial experience in Zimbabwe.",
      keywords: [
        "22 minute helicopter flight Victoria Falls",
        "Victoria Falls Gorge Flight",
        "Gorge helicopter flight Victoria Falls",
        "Victoria Falls helicopter tour",
        "Batoka Gorge helicopter flight",
        "Zambezi Gorge scenic flight",
        "Victoria Falls aerial tour",
      ],
      canonicalSlug: "victoria-falls-gorge-helicopter-flight",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 200,
      currency: "USD",
    },
  },
  {
    id: "victoria-falls-wildlife-safari",
    slug: "victoria-falls-wildlife-safari",
    title: "Victoria Falls Wildlife Safari",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "3 Hours",
    price: { from: 85, currency: "USD", per: "person", note: "Per person" },
    shortDescription:
      "Venture into the wild landscapes around Victoria Falls on a guided safari in search of Zimbabwe's remarkable wildlife.",
    description:
      "Leave Victoria Falls behind and venture into the surrounding wilderness on a guided wildlife safari. Travel through Zimbabwean bush and riverine landscapes with an experienced safari guide, learning about the region's wildlife and natural environment while keeping watch for elephants, buffalo, giraffes, antelope, hippos, crocodiles and abundant birdlife. Depending on conditions and the selected safari, the experience may take place in Zambezi National Park, Chamabondo National Park or another suitable wildlife area near Victoria Falls.",
    image: "/images/experiences/experience-safari-1.webp",
    gallery: [
      "/images/experiences/experience-safari-2.webp",
      "/images/experiences/experience-safari-3.webp",
      "/images/experiences/experience-safari-4.webp",
      "/images/experiences/experience-safari-5.webp",
      "/images/experiences/experience-safari-6.webp",
      "/images/experiences/experience-safari-7.webp",
    ],
    highlights: [
      "Guided wildlife safari near Victoria Falls",
      "Experienced safari guide",
      "Open safari vehicle",
      "Wildlife viewing opportunities",
      "Elephants, buffalo and antelope",
      "Giraffes and other plains game",
      "Birdwatching opportunities",
      "Zimbabwean bush and riverine landscapes",
    ],
    included: [
      "Guided safari game drive",
      "Experienced safari guide",
      "Safari vehicle",
    ],
    excluded: [
      "Hotel transfers unless specifically selected",
      "Park entrance fees unless specified in the selected package",
      "Meals and drinks unless specified",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Victoria Falls Wildlife Safari",
        location: "Wildlife Area Near Victoria Falls",
        activities: [
          {
            time: "05:30",
            title: "Early Hotel Pick-Up",
            description:
              "Meet your safari guide at your Victoria Falls accommodation for an early morning transfer towards the selected wildlife area.",
          },
          {
            time: "06:00",
            title: "Arrive at the Safari Area",
            description:
              "Reach the selected wildlife area and prepare for the game drive. Depending on operating conditions and the day's safari plan, the drive may take place in Zambezi National Park, Chamabondo National Park or another suitable wildlife area.",
          },
          {
            time: "06:15",
            title: "Game Drive Begins",
            description:
              "Set out in an open safari vehicle through the African bush, with your guide explaining the landscape, wildlife and signs to look for along the way.",
          },
          {
            time: "06:45",
            title: "Wildlife Tracking",
            description:
              "Search for fresh tracks, animal movements and other signs of wildlife while exploring different habitats within the safari area.",
          },
          {
            time: "07:30",
            title: "Wildlife & Birdlife Viewing",
            description:
              "Keep watch for elephants, buffalo, giraffes, antelope and other wildlife, as well as the many bird species found across the region.",
          },
          {
            time: "08:15",
            title: "Explore the Bush",
            description:
              "Continue deeper into the selected safari area, stopping at suitable locations to observe wildlife, take photographs and learn about the surrounding ecosystem.",
          },
          {
            time: "08:45",
            title: "Final Wildlife Viewing",
            description:
              "Enjoy the final section of the game drive while your guide searches for further sightings and shares insights into the behaviour and habitat of the animals encountered.",
          },
          {
            time: "09:00",
            title: "Safari Concludes",
            description:
              "Complete the game drive and begin the journey back towards Victoria Falls.",
          },
          {
            time: "09:30",
            title: "Return to Victoria Falls",
            description:
              "Arrive back in Victoria Falls and conclude your wildlife safari experience.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle: "Victoria Falls Wildlife Safari | Zimbabwe Game Drive",
      metaDescription:
        "Explore the wildlife areas around Victoria Falls on a guided Zimbabwe safari. Look out for elephants, buffalo, giraffes, antelope and abundant birdlife.",
      keywords: [
        "Victoria Falls Wildlife Safari",
        "Victoria Falls safari",
        "Victoria Falls game drive",
        "Zimbabwe wildlife safari",
        "Victoria Falls safari game drive",
        "Zimbabwe game drive",
        "Zambezi National Park safari",
        "Chamabondo National Park safari",
        "Victoria Falls wildlife experience",
        "Zimbabwe safari from Victoria Falls",
      ],
      canonicalSlug: "victoria-falls-wildlife-safari",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 85,
      currency: "USD",
    },
  },
  {
    id: "victoria-falls-big-cat-conservation-experience",
    slug: "victoria-falls-big-cat-conservation-experience",
    title: "Victoria Falls Big Cat Conservation Experience",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "Half Day",
    price: { from: 170, currency: "USD", per: "person", note: "Per person" },
    shortDescription:
      "Get closer to Africa's iconic big cats through a guided lion and cheetah conservation experience near Victoria Falls.",
    description:
      "Discover the world of Africa's great predators through a guided big cat conservation experience near Victoria Falls. Learn about lion and cheetah behaviour, their natural habitats and the challenges they face in the wild while experiencing these remarkable animals under the supervision of experienced guides and handlers. The experience combines education, wildlife observation and a deeper understanding of conservation.",
    image: "/images/experiences/experience-big-cat-conservation-1.webp",
    gallery: [
      "/images/experiences/experience-big-cat-conservation-2.webp",
      "/images/experiences/experience-big-cat-conservation-3.webp",
      "/images/experiences/experience-big-cat-conservation-4.webp",
      "/images/experiences/experience-big-cat-conservation-5.webp",
      "/images/experiences/experience-big-cat-conservation-6.webp",
      "/images/experiences/experience-big-cat-conservation-7.webp",
    ],
    highlights: [
      "Lion and cheetah conservation experience",
      "Guided big cat encounters",
      "Learn about predator behaviour",
      "Wildlife conservation education",
      "Experienced guides and handlers",
      "Close observation of lions and cheetahs",
      "Photography opportunities",
      "Small-group wildlife experience",
    ],
    included: [
      "Lion and cheetah conservation experience",
      "Professional guide and handlers",
      "Conservation and wildlife briefing",
      "Guided wildlife activities",
    ],
    excluded: [
      "Hotel transfers unless specifically selected",
      "Personal expenses",
      "Tips and gratuities",
      "Optional purchases",
    ],
    itinerary: [
      {
        day: 1,
        title: "Victoria Falls Big Cat Conservation Experience",
        location: "Conservation Areas Near Victoria Falls",
        activities: [
          {
            time: "07:00",
            title: "Hotel Pick-Up",
            description:
              "Meet your guide at your Victoria Falls accommodation and begin the short transfer to the conservation area. Exact collection time depends on the confirmed activity slot.",
          },
          {
            time: "07:30",
            title: "Arrival & Welcome",
            description:
              "Arrive at the wildlife facility and meet the professional guides and handlers responsible for your experience.",
          },
          {
            time: "07:45",
            title: "Conservation & Safety Briefing",
            description:
              "Learn about the animals, their behaviour, conservation challenges and the safety guidelines that must be followed throughout the experience.",
          },
          {
            time: "08:00",
            title: "Lion Experience",
            description:
              "Join the professional guides for a supervised lion experience. Learn about lion behaviour, social structures, habitat and the importance of protecting these predators.",
          },
          {
            time: "09:00",
            title: "Guided Wildlife Observation",
            description:
              "Observe the lions in their environment while your guide explains their behaviour, individual characteristics and the conservation work surrounding them.",
          },
          {
            time: "09:30",
            title: "Cheetah Conservation Experience",
            description:
              "Continue with the cheetah experience and learn about one of Africa's most endangered large predators, including its behaviour, habitat requirements and conservation challenges.",
          },
          {
            time: "10:15",
            title: "Guided Cheetah Walk",
            description:
              "Where included in the confirmed experience, walk alongside the cheetahs under the supervision of experienced guides while learning about their behaviour and conservation.",
          },
          {
            time: "11:00",
            title: "Conservation Conversation",
            description:
              "Spend time with your guides discussing big-cat conservation, human-wildlife conflict and the work being done to protect lions and cheetahs.",
          },
          {
            time: "11:30",
            title: "Final Photos & Farewell",
            description:
              "Take your final photographs where permitted and say farewell to the guides before leaving the conservation area.",
          },
          {
            time: "12:00",
            title: "Return to Victoria Falls",
            description:
              "Depart the conservation area and return to your Victoria Falls accommodation, concluding the experience.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "Victoria Falls Big Cat Conservation Experience | Lions & Cheetahs",
      metaDescription:
        "Experience lions and cheetahs near Victoria Falls through a guided big cat conservation experience focused on wildlife, behaviour and conservation.",
      keywords: [
        "Victoria Falls big cat experience",
        "Victoria Falls lion experience",
        "Victoria Falls cheetah experience",
        "lion and cheetah experience Zimbabwe",
        "Victoria Falls lion walk",
        "Victoria Falls cheetah walk",
        "Zimbabwe big cat experience",
        "lion conservation Victoria Falls",
        "cheetah conservation Victoria Falls",
        "Victoria Falls wildlife experience",
      ],
      canonicalSlug: "victoria-falls-big-cat-conservation-experience",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 170,
      currency: "USD",
    },
  },
  {
    id: "victoria-falls-guided-walking-tour",
    slug: "victoria-falls-guided-walking-tour",
    title: "Victoria Falls Guided Walking Tour",
    category: "activity",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "2 Hours",
    price: { from: 30, currency: "USD", per: "person", note: "Per person" },
    shortDescription:
      "Walk through the rainforest with a knowledgeable local guide and discover the history, geology and natural wonder of Victoria Falls.",
    description:
      "Explore Victoria Falls on foot with a knowledgeable local guide. Follow the rainforest trails and viewpoints overlooking the Zambezi River and the Falls while learning about the area's history, geology, wildlife and changing landscapes. Your guide brings the viewpoints to life with local stories and practical insight, making this an easy and informative way to experience one of Africa's great natural wonders.",
    image: "/images/experiences/experience-guided-tour-falls-1.webp",
    gallery: [
      "/images/experiences/experience-guided-tour-falls-2.webp",
      "/images/experiences/experience-guided-tour-falls-3.webp",
      "/images/experiences/experience-guided-tour-falls-4.webp",
      "/images/experiences/experience-guided-tour-falls-5.webp",
      "/images/experiences/experience-guided-tour-falls-6.webp",
      "/images/experiences/experience-guided-tour-falls-7.webp",
    ],
    highlights: [
      "Guided walking tour of Victoria Falls",
      "Victoria Falls rainforest",
      "Multiple scenic viewpoints",
      "Local history and stories",
      "Geology and formation of the Falls",
      "Flora and birdlife",
      "Photography opportunities",
      "Knowledgeable local guide",
    ],
    included: [
      "Guided Victoria Falls walking tour",
      "Professional local guide",
      "Guided interpretation of the Falls and rainforest",
    ],
    excluded: [
      "Victoria Falls National Park entrance fee unless specifically selected",
      "Hotel transfers unless specifically selected",
      "Meals and drinks",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Victoria Falls Guided Walking Tour",
        location: "Victoria Falls, Zimbabwe",
        activities: [
          {
            time: "08:30",
            title: "Hotel Pick-Up",
            description:
              "If transfers have been selected, meet your guide at your Victoria Falls accommodation and travel to the entrance of Victoria Falls National Park.",
          },
          {
            time: "09:00",
            title: "Enter Victoria Falls National Park",
            description:
              "Meet your guide at the entrance and begin the walking experience through the rainforest towards the Falls.",
          },
          {
            time: "09:10",
            title: "Rainforest Walk",
            description:
              "Follow the established paths through the rainforest while your guide introduces the plants, birds and natural environment surrounding Victoria Falls.",
          },
          {
            time: "09:30",
            title: "First Falls Viewpoints",
            description:
              "Reach the first viewpoints and experience the sound, spray and scale of the Falls while your guide explains the landscape and river system.",
          },
          {
            time: "09:50",
            title: "Victoria Falls & Zambezi Story",
            description:
              "Learn about the formation of Victoria Falls, the Zambezi River and the geological forces that shaped the gorge.",
          },
          {
            time: "10:15",
            title: "Main Viewpoints",
            description:
              "Continue along the rainforest trail to additional viewpoints, taking in different perspectives of the Falls and surrounding gorge.",
          },
          {
            time: "10:40",
            title: "History, Wildlife & Local Stories",
            description:
              "Discover the history of the Falls, local stories and traditions, as well as the plants and birdlife that thrive in the rainforest environment.",
          },
          {
            time: "11:00",
            title: "Final Viewpoints & Photography",
            description:
              "Enjoy the final viewpoints and take photographs before making your way back towards the park entrance.",
          },
          {
            time: "11:15",
            title: "Exit the Rainforest",
            description:
              "Complete the walking route and leave Victoria Falls National Park.",
          },
          {
            time: "11:30",
            title: "Tour Ends",
            description:
              "Conclude your guided Victoria Falls experience. Guests with arranged transfers are returned to their accommodation.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle: "Victoria Falls Guided Walking Tour | Zimbabwe",
      metaDescription:
        "Explore Victoria Falls with a local guide on a 2-hour guided walking tour through the rainforest, viewpoints and surrounding gorge.",
      keywords: [
        "Victoria Falls Guided Walking Tour",
        "Victoria Falls guided tour",
        "Victoria Falls walking tour",
        "Victoria Falls rainforest tour",
        "Victoria Falls National Park tour",
        "Victoria Falls Zimbabwe tour",
        "guided tour of Victoria Falls",
        "Victoria Falls sightseeing tour",
        "Victoria Falls local guide",
      ],
      canonicalSlug: "victoria-falls-guided-walking-tour",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 30,
      currency: "USD",
    },
  },
  {
    id: "victoria-falls-airport-transfer",
    slug: "victoria-falls-airport-transfer",
    title: "Victoria Falls Airport Transfer",
    category: "transfer",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "Approximately 25–30 Minutes",
    price: {
      from: 40,
      currency: "USD",
      per: "vehicle",
      note: "From price per vehicle",
    },
    shortDescription:
      "Enjoy a convenient private transfer between Victoria Falls Airport and your accommodation in Victoria Falls.",
    description:
      "Start or finish your Victoria Falls trip with a comfortable airport transfer. Your driver will meet you at Victoria Falls Airport, assist with your luggage and provide a direct transfer to your hotel, lodge or selected accommodation in Victoria Falls. The service is also available for transfers from your accommodation to the airport for your departure.",
    image:
      "/images/experiences/experience-victoria-falls-airport-transfer-1.webp",
    gallery: [],
    highlights: [
      "Victoria Falls Airport transfer",
      "Private and comfortable vehicle",
      "Airport meet-and-greet",
      "Luggage assistance",
      "Direct transfer to your accommodation",
      "Available for arrivals and departures",
      "Experienced local driver",
    ],
    included: [
      "Private airport transfer",
      "Professional local driver",
      "Airport meet-and-greet",
      "Luggage assistance",
      "Transfer to or from Victoria Falls accommodation",
    ],
    excluded: [
      "Personal expenses",
      "Additional stops not included in the transfer",
      "Tips and gratuities",
      "Accommodation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Victoria Falls Airport Transfer",
        location: "Victoria Falls Airport & Victoria Falls",
        activities: [
          {
            time: "Arrival",
            title: "Meet Your Driver",
            description:
              "Upon arrival at Victoria Falls Airport, your driver will meet you at the agreed meeting point and assist with your luggage.",
          },
          {
            time: "Arrival + 15 min",
            title: "Depart Victoria Falls Airport",
            description:
              "Once you have collected your luggage and completed airport formalities, depart the airport in a comfortable transfer vehicle.",
          },
          {
            time: "Arrival + 25 min",
            title: "Arrive in Victoria Falls",
            description:
              "Travel directly to your selected hotel, lodge or accommodation in Victoria Falls.",
          },
          {
            time: "Arrival + 30 min",
            title: "Hotel Drop-Off",
            description:
              "Arrive at your accommodation and conclude your airport transfer.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle: "Victoria Falls Airport Transfer | Airport to Hotel Transfer",
      metaDescription:
        "Book a convenient Victoria Falls Airport Transfer for a comfortable private transfer between Victoria Falls Airport and your hotel or accommodation.",
      keywords: [
        "Victoria Falls Airport Transfer",
        "Victoria Falls Airport to Hotel Transfer",
        "Victoria Falls Airport Taxi",
        "Victoria Falls Airport Shuttle",
        "Victoria Falls Airport Pickup",
        "Victoria Falls Airport Transfer to Hotel",
        "Zimbabwe Airport Transfer",
        "Victoria Falls Private Transfer",
      ],
      canonicalSlug: "victoria-falls-airport-transfer",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 40,
      currency: "USD",
    },
  },
  {
    id: "victoria-falls-to-kasane-airport-private-transfer",
    slug: "victoria-falls-to-kasane-airport-private-transfer",
    title: "Victoria Falls to Kasane Airport Private Transfer",
    category: "transfer",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "Approximately 2 Hours",
    price: {
      from: 180,
      currency: "USD",
      per: "vehicle",
      note: "Private transfer, from price per vehicle",
    },
    shortDescription:
      "Travel comfortably from Victoria Falls to Kasane Airport with a private door-to-door transfer and an experienced local driver.",
    description:
      "Enjoy a comfortable and convenient private transfer from Victoria Falls to Kasane Airport in Botswana. Your driver collects you directly from your hotel or lodge in Victoria Falls, assists with your luggage and drives you safely towards the Kazungula border before continuing to Kasane Airport. Designed for travellers connecting Victoria Falls with Botswana's Chobe region, this private transfer provides a relaxed and convenient alternative to shared transport.",
    image:
      "/images/experiences/experience-victoria-falls-to-kasane-airport-private-transfer-1.webp",
    gallery: [],
    highlights: [
      "Private Victoria Falls to Kasane Airport transfer",
      "Door-to-door service",
      "Comfortable private vehicle",
      "Experienced local driver",
      "Hotel or lodge pick-up",
      "Luggage assistance",
      "Kazungula border crossing",
      "Direct airport drop-off",
      "Ideal for connecting Zimbabwe and Botswana",
    ],
    included: [
      "Private one-way transfer",
      "Professional local driver",
      "Private transfer vehicle",
      "Hotel or lodge pick-up in Victoria Falls",
      "Kasane Airport drop-off",
      "Luggage assistance",
      "Border crossing guidance",
    ],
    excluded: [
      "Visa fees",
      "Immigration or border fees where applicable",
      "Travel insurance",
      "Personal expenses",
      "Meals and drinks",
      "Tips and gratuities",
      "Additional sightseeing stops",
    ],
    itinerary: [
      {
        day: 1,
        title: "Victoria Falls to Kasane Airport",
        location: "Victoria Falls, Zimbabwe → Kasane Airport, Botswana",
        activities: [
          {
            time: "07:00",
            title: "Hotel Pick-Up",
            description:
              "Meet your private driver at your Victoria Falls hotel or lodge. Your driver will assist with your luggage before beginning the journey to Kasane Airport.",
          },
          {
            time: "07:15",
            title: "Depart Victoria Falls",
            description:
              "Leave Victoria Falls and begin your private journey towards the Kazungula border and Botswana.",
          },
          {
            time: "08:15",
            title: "Arrive at the Border",
            description:
              "Reach the Zimbabwe–Botswana border area and prepare for immigration and customs procedures.",
          },
          {
            time: "08:30",
            title: "Border Formalities",
            description:
              "Complete the required immigration and customs procedures before continuing into Botswana. Travellers are responsible for carrying valid passports, visas and any required travel documentation.",
          },
          {
            time: "09:00",
            title: "Continue to Kasane",
            description:
              "Continue the journey through Botswana towards Kasane while enjoying the surrounding landscape.",
          },
          {
            time: "09:30",
            title: "Arrive in Kasane",
            description:
              "Arrive in the Kasane area and continue towards the airport for your departure.",
          },
          {
            time: "09:45",
            title: "Kasane Airport Drop-Off",
            description:
              "Arrive at Kasane Airport with sufficient time for your onward flight, depending on your confirmed departure schedule.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "Victoria Falls to Kasane Airport Private Transfer | Zimbabwe to Botswana",
      metaDescription:
        "Book a private transfer from Victoria Falls to Kasane Airport. Enjoy comfortable door-to-door transport with an experienced local driver via the Kazungula border.",
      keywords: [
        "Victoria Falls to Kasane Airport transfer",
        "Victoria Falls to Kasane transfer",
        "Victoria Falls Kasane private transfer",
        "Victoria Falls to Botswana transfer",
        "Victoria Falls Kasane Airport shuttle",
        "Victoria Falls to Kasane Airport private transfer",
        "Zimbabwe to Botswana transfer",
        "Kazungula border transfer",
        "Victoria Falls Botswana transfer",
        "Kasane Airport transfer",
      ],
      canonicalSlug: "victoria-falls-to-kasane-airport-private-transfer",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 180,
      currency: "USD",
    },
  },
  {
    id: "victoria-falls-to-livingstone-private-transfer",
    slug: "victoria-falls-to-livingstone-private-transfer",
    title: "Victoria Falls to Livingstone Private Transfer",
    category: "transfer",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "Approximately 1–1.5 Hours",
    price: {
      from: 80,
      currency: "USD",
      per: "person",
      note: "From price per person",
    },
    shortDescription:
      "Travel comfortably from Victoria Falls to Livingstone with a private transfer, professional driver and assistance at the border.",
    description:
      "Travel from Victoria Falls in Zimbabwe to Livingstone in Zambia with a comfortable private transfer. Your driver will collect you from your hotel or lodge, assist with your luggage and take you across the Victoria Falls Bridge and into Zambia. Continue comfortably to Livingstone Town, your hotel or Harry Mwanga Nkumbula International Airport, depending on your selected drop-off.",
    image:
      "/images/experiences/experience-victoria-falls-to-livingstone-private-transfer-1.webp",
    gallery: [],
    highlights: [
      "Private Victoria Falls to Livingstone transfer",
      "Door-to-door service",
      "Professional local driver",
      "Comfortable air-conditioned vehicle",
      "Victoria Falls Bridge crossing",
      "Border-crossing assistance",
      "Luggage assistance",
      "Hotel or airport drop-off",
      "Ideal for Zimbabwe–Zambia itineraries",
    ],
    included: [
      "Private one-way transfer",
      "Professional local driver",
      "Comfortable transfer vehicle",
      "Hotel or lodge pick-up in Victoria Falls",
      "Livingstone hotel or airport drop-off",
      "Luggage assistance",
      "Border-crossing guidance",
      "Victoria Falls Bridge levy where applicable",
    ],
    excluded: [
      "Visa fees",
      "Immigration or border charges where applicable",
      "Travel insurance",
      "Meals and drinks",
      "Personal expenses",
      "Tips and gratuities",
      "Additional sightseeing stops",
    ],
    itinerary: [
      {
        day: 1,
        title: "Victoria Falls to Livingstone Private Transfer",
        location: "Victoria Falls, Zimbabwe → Livingstone, Zambia",
        activities: [
          {
            time: "Scheduled",
            title: "Hotel Pick-Up",
            description:
              "Meet your private driver at your Victoria Falls hotel or lodge at your confirmed collection time. Your driver will assist with your luggage before departure.",
          },
          {
            time: "Scheduled",
            title: "Depart Victoria Falls",
            description:
              "Leave Victoria Falls and begin your private journey towards the Victoria Falls Bridge and the Zambian border.",
          },
          {
            time: "En Route",
            title: "Victoria Falls Bridge",
            description:
              "Cross the historic Victoria Falls Bridge spanning the Zambezi River and connecting Zimbabwe with Zambia.",
          },
          {
            time: "En Route",
            title: "Border Formalities",
            description:
              "Complete the required Zimbabwean and Zambian immigration and customs procedures. Your driver will provide guidance during the border-crossing process. Travellers must carry valid passports, visas and any required travel documentation.",
          },
          {
            time: "En Route",
            title: "Continue to Livingstone",
            description:
              "After completing border formalities, continue into Zambia towards Livingstone.",
          },
          {
            time: "Arrival",
            title: "Livingstone Drop-Off",
            description:
              "Arrive at your selected Livingstone hotel, lodge or Harry Mwanga Nkumbula International Airport and conclude your private transfer.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "Victoria Falls to Livingstone Private Transfer | Zimbabwe to Zambia",
      metaDescription:
        "Book a private transfer from Victoria Falls to Livingstone, Zambia. Enjoy comfortable door-to-door transport, luggage assistance and border-crossing guidance.",
      keywords: [
        "Victoria Falls to Livingstone transfer",
        "Victoria Falls to Livingstone private transfer",
        "Victoria Falls Livingstone transfer",
        "Victoria Falls to Zambia transfer",
        "Victoria Falls to Livingstone Airport transfer",
        "Victoria Falls Bridge transfer",
        "Zimbabwe Zambia private transfer",
        "Livingstone Airport transfer from Victoria Falls",
        "Victoria Falls Zambia transport",
      ],
      canonicalSlug: "victoria-falls-to-livingstone-private-transfer",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 80,
      currency: "USD",
    },
  },
  {
    id: "chobe-national-park-day-safari",
    slug: "chobe-national-park-day-safari",
    title: "Chobe National Park Day Safari",
    category: "day-trip",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "Full Day",
    price: { from: 210, currency: "USD", per: "person", note: "Per person" },
    shortDescription:
      "Cross into Botswana for a full-day Chobe safari combining a wildlife-rich river cruise, buffet lunch and an open 4x4 game drive.",
    description:
      "Experience one of the region's most rewarding wildlife day trips from Victoria Falls with a full-day safari in Botswana's Chobe National Park. Cross the Kazungula border into Botswana and experience Chobe from two perspectives: cruise along the Chobe River in search of elephants, hippos, crocodiles and abundant birdlife, then head into the park on an open 4x4 safari vehicle in search of elephants, buffalo, giraffes, antelope and predators. A buffet lunch and return transfers from Victoria Falls complete this memorable two-country safari experience.",
    image:
      "/images/experiences/experience-chobe-national-park-day-safari-1.webp",
    gallery: [
      "/images/experiences/experience-chobe-national-park-day-safari-2.webp",
      "/images/experiences/experience-chobe-national-park-day-safari-3.webp",
      "/images/experiences/experience-chobe-national-park-day-safari-4.webp",
      "/images/experiences/experience-chobe-national-park-day-safari-5.webp",
      "/images/experiences/experience-chobe-national-park-day-safari-6.webp",
      "/images/experiences/experience-chobe-national-park-day-safari-7.webp",
    ],
    highlights: [
      "Full-day Chobe National Park safari",
      "Chobe River boat safari",
      "Open 4x4 game drive",
      "Large elephant herds",
      "Hippos and crocodiles",
      "Buffalo, giraffes and antelope",
      "Abundant birdlife",
      "Buffet lunch",
      "Professional safari guides",
      "Return transfers from Victoria Falls",
      "Zimbabwe–Botswana border crossing",
    ],
    included: [
      "Return transfers from Victoria Falls",
      "Chobe River boat cruise",
      "Chobe National Park game drive",
      "Open 4x4 safari vehicle",
      "Professional safari guide",
      "Buffet lunch",
      "Bottled water and selected refreshments",
    ],
    excluded: [
      "Botswana visa fees where applicable",
      "Zimbabwe re-entry visa or immigration fees where applicable",
      "Premium alcoholic drinks",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Chobe National Park Day Safari",
        location: "Victoria Falls, Zimbabwe → Chobe National Park, Botswana",
        activities: [
          {
            time: "06:30",
            title: "Hotel Pick-Up",
            description:
              "Meet your safari vehicle at your Victoria Falls hotel or lodge for an early morning departure towards the Kazungula border.",
          },
          {
            time: "07:00",
            title: "Depart Victoria Falls",
            description:
              "Begin the journey towards Botswana. Your guide will brief you on the day's activities and the border-crossing process.",
          },
          {
            time: "08:00",
            title: "Kazungula Border Crossing",
            description:
              "Complete Zimbabwean and Botswana immigration and customs formalities before continuing into Botswana. Travellers should carry valid passports, visas and any required travel documentation.",
          },
          {
            time: "08:30",
            title: "Arrive in Kasane",
            description:
              "Meet your Botswana safari team and prepare for your first wildlife experience of the day.",
          },
          {
            time: "09:00",
            title: "Chobe River Boat Safari",
            description:
              "Board a safari boat and cruise along the Chobe River. Look out for elephants coming to the water, hippos, crocodiles, buffalo and large concentrations of waterbirds along the riverbanks.",
          },
          {
            time: "11:45",
            title: "Return from the River",
            description:
              "Complete the river safari and head towards the lunch venue in the Kasane area.",
          },
          {
            time: "12:30",
            title: "Buffet Lunch",
            description:
              "Enjoy a relaxed buffet lunch and take a short break before the afternoon game drive.",
          },
          {
            time: "13:30",
            title: "Chobe National Park Game Drive",
            description:
              "Enter Chobe National Park in an open 4x4 safari vehicle and begin exploring the park's wildlife-rich landscapes with an experienced guide.",
          },
          {
            time: "14:00",
            title: "Wildlife Viewing",
            description:
              "Search for elephants, buffalo, giraffes, antelope and other wildlife while your guide explains the animals, habitats and ecology of Chobe.",
          },
          {
            time: "15:30",
            title: "Afternoon Safari",
            description:
              "Continue through the park, following wildlife activity and stopping at suitable locations for observation and photography. Predator sightings are possible but never guaranteed.",
          },
          {
            time: "16:30",
            title: "Leave Chobe",
            description:
              "Complete the game drive and begin the journey back towards Kasane and the Kazungula border.",
          },
          {
            time: "17:00",
            title: "Border Crossing",
            description:
              "Complete the required Botswana and Zimbabwe border formalities before continuing back to Victoria Falls.",
          },
          {
            time: "18:30",
            title: "Return to Victoria Falls",
            description:
              "Arrive back in Victoria Falls and return to your hotel or lodge, concluding your Chobe National Park day safari.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "Chobe National Park Day Safari from Victoria Falls | Botswana",
      metaDescription:
        "Take a full-day Chobe safari from Victoria Falls with a Chobe River boat cruise, buffet lunch and open 4x4 game drive in Botswana's famous wildlife park.",
      keywords: [
        "Chobe National Park Day Safari",
        "Chobe Day Trip from Victoria Falls",
        "Chobe Safari from Victoria Falls",
        "Chobe National Park Victoria Falls",
        "Victoria Falls to Chobe Safari",
        "Chobe River Cruise",
        "Chobe Game Drive",
        "Botswana Safari from Victoria Falls",
        "Chobe elephant safari",
        "Victoria Falls Botswana day trip",
      ],
      canonicalSlug: "chobe-national-park-day-safari",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 210,
      currency: "USD",
    },
  },
  {
    id: "hwange-national-park-day-safari",
    slug: "hwange-national-park-day-safari",
    title: "Hwange National Park Day Safari",
    category: "day-trip",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "Full Day",
    price: {
      from: 205,
      currency: "USD",
      per: "person",
      note: "From price per person",
    },
    shortDescription:
      "Journey from Victoria Falls to Hwange National Park for a full day of wildlife viewing, guided game drives and authentic Zimbabwean safari scenery.",
    description:
      "Travel from Victoria Falls into the wild heart of Zimbabwe on a full-day safari in Hwange National Park. Known for its large elephant population and diverse wildlife, Hwange offers a different safari experience from the parks around Victoria Falls. After an early morning drive to the park, spend the day exploring in an open 4x4 safari vehicle with an experienced guide, with time for wildlife viewing, lunch and a second game-drive session before returning to Victoria Falls.",
    image:
      "/images/experiences/experience-hwange-national-park-day-safari-1.webp",
    gallery: [
      "/images/experiences/experience-hwange-national-park-day-safari-2.webp",  
      "/images/experiences/experience-hwange-national-park-day-safari-3.webp",
      "/images/experiences/experience-hwange-national-park-day-safari-4.webp",
      "/images/experiences/experience-hwange-national-park-day-safari-5.webp",
      "/images/experiences/experience-hwange-national-park-day-safari-6.webp",
      "/images/experiences/experience-hwange-national-park-day-safari-7.webp",
    ],
    highlights: [
      "Full-day Hwange National Park safari",
      "Return transfer from Victoria Falls",
      "Morning and afternoon game drives",
      "Open 4x4 safari vehicle",
      "Large elephant herds",
      "Lions, buffalo and other wildlife",
      "African wild dog viewing opportunities",
      "Birdwatching",
      "Experienced safari guide",
      "Lunch in the park",
    ],
    included: [
      "Return transport from Victoria Falls",
      "Hwange National Park game drives",
      "Open 4x4 safari vehicle",
      "Professional safari guide",
      "Lunch",
      "Bottled drinking water",
    ],
    excluded: [
      "Park entrance fees unless specifically stated in the confirmed package",
      "Personal expenses",
      "Alcoholic drinks",
      "Tips and gratuities",
      "Optional activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Hwange National Park Day Safari",
        location: "Victoria Falls → Hwange National Park → Victoria Falls",
        activities: [
          {
            time: "06:00",
            title: "Hotel Pick-Up",
            description:
              "Meet your safari vehicle at your Victoria Falls hotel or lodge for an early morning departure towards Hwange National Park.",
          },
          {
            time: "06:30",
            title: "Depart Victoria Falls",
            description:
              "Begin the journey towards Hwange National Park. The drive takes you through the countryside and communities between Victoria Falls and the park.",
          },
          {
            time: "08:30",
            title: "Arrive at Hwange National Park",
            description:
              "Arrive at the park and transfer into an open 4x4 safari vehicle before beginning the day's wildlife exploration.",
          },
          {
            time: "08:45",
            title: "Morning Game Drive",
            description:
              "Set out into Hwange with your professional guide. Explore different habitats and keep watch for elephants, buffalo, giraffes, antelope and other wildlife.",
          },
          {
            time: "10:30",
            title: "Wildlife & Waterhole Viewing",
            description:
              "Visit productive wildlife areas and waterholes where animals may gather, particularly during the drier months. Your guide shares information about the animals and their environment.",
          },
          {
            time: "12:30",
            title: "Safari Lunch",
            description:
              "Take a break from the game drive and enjoy lunch before continuing with the afternoon safari.",
          },
          {
            time: "13:30",
            title: "Afternoon Game Drive",
            description:
              "Continue exploring Hwange in the afternoon, when changing temperatures and wildlife activity can create new viewing opportunities.",
          },
          {
            time: "14:30",
            title: "Wildlife Tracking",
            description:
              "Follow animal tracks and explore the park with your guide while looking for elephants, buffalo, antelope, giraffes, predators and birdlife.",
          },
          {
            time: "16:00",
            title: "Final Safari Drive",
            description:
              "Enjoy the final wildlife-viewing section of the day before leaving the park and beginning the return journey.",
          },
          {
            time: "16:30",
            title: "Leave Hwange National Park",
            description:
              "Complete the safari and begin the drive back towards Victoria Falls.",
          },
          {
            time: "18:30",
            title: "Return to Victoria Falls",
            description:
              "Arrive back in Victoria Falls and return to your hotel or lodge, concluding your Hwange National Park Day Safari.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "Hwange National Park Day Safari from Victoria Falls | Zimbabwe",
      metaDescription:
        "Take a full-day Hwange National Park safari from Victoria Falls with return transfers, guided game drives, lunch and opportunities to see elephants and other Zimbabwean wildlife.",
      keywords: [
        "Hwange National Park Day Safari",
        "Hwange Day Trip from Victoria Falls",
        "Hwange Safari from Victoria Falls",
        "Hwange National Park safari",
        "Victoria Falls to Hwange safari",
        "Hwange game drive",
        "Zimbabwe safari from Victoria Falls",
        "Hwange wildlife safari",
        "Hwange elephant safari",
        "Hwange National Park day trip",
      ],
      canonicalSlug: "hwange-national-park-day-safari",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 205,
      currency: "USD",
    },
  },
  {
    id: "livingstone-zambia-falls-day-experience",
    slug: "livingstone-zambia-falls-day-experience",
    title: "Livingstone Zambia Falls Day Experience",
    category: "day-trip",
    destination: "Victoria Falls",
    destinationSlug: "victoria-falls",
    duration: "Full Day",
    price: { from: 75, currency: "USD", per: "person", note: "Per person" },
    shortDescription:
      "Cross into Zambia for a full-day Livingstone experience featuring the Zambian side of Victoria Falls, scenic viewpoints and the stories of the Zambezi.",
    description:
      "Discover the Zambian side of Victoria Falls on a full-day trip from Victoria Falls, Zimbabwe. Cross the Victoria Falls Bridge into Zambia and explore the spectacular Mosi-oa-Tunya side of the Falls with a knowledgeable local guide. Walk through the rainforest, experience viewpoints including the Knife-Edge Bridge area and learn about the Zambezi River, the Falls and the history of Livingstone. Enjoy time to explore Livingstone before returning to Victoria Falls.",
    image: "/images/experiences/experience-livingstone-zambia-falls-day-1.webp",
    gallery: [],
    highlights: [
      "Full-day Livingstone experience",
      "Zambian side of Victoria Falls",
      "Mosi-oa-Tunya National Park",
      "Knife-Edge Bridge viewpoint",
      "Victoria Falls viewpoints",
      "Zambezi River views",
      "Local history and stories",
      "Guided rainforest walk",
      "Victoria Falls Bridge crossing",
      "Time to explore Livingstone",
    ],
    included: [
      "Return transport from Victoria Falls",
      "Professional local guide",
      "Guided tour of the Zambian side of Victoria Falls",
      "Raincoats when required",
      "Bottled drinking water",
      "Border-crossing assistance",
    ],
    excluded: [
      "Zambian Victoria Falls park entrance fee unless specifically selected",
      "Victoria Falls Bridge levy where applicable",
      "Visa fees",
      "Meals and drinks",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Livingstone Zambia Falls Day Experience",
        location: "Victoria Falls, Zimbabwe → Livingstone, Zambia",
        activities: [
          {
            time: "07:30",
            title: "Hotel Pick-Up",
            description:
              "Meet your guide and transfer vehicle at your Victoria Falls hotel or lodge for the journey across the border into Zambia.",
          },
          {
            time: "08:00",
            title: "Depart Victoria Falls",
            description:
              "Begin the short journey towards the Victoria Falls Bridge and the Zimbabwe–Zambia border.",
          },
          {
            time: "08:30",
            title: "Victoria Falls Bridge & Border Crossing",
            description:
              "Cross the historic Victoria Falls Bridge and complete the required immigration formalities before entering Zambia.",
          },
          {
            time: "09:00",
            title: "Arrive on the Zambian Side",
            description:
              "Meet your Zambian guide and prepare for your guided exploration of the Victoria Falls area.",
          },
          {
            time: "09:15",
            title: "Rainforest Walk",
            description:
              "Follow the established paths through the rainforest while your guide explains the natural environment, local history and changing character of the Falls throughout the seasons.",
          },
          {
            time: "09:45",
            title: "Knife-Edge Bridge Viewpoint",
            description:
              "Experience one of the most dramatic viewpoints on the Zambian side, with views towards the Eastern Cataract and the gorge below. Expect spray during periods of high water.",
          },
          {
            time: "10:30",
            title: "Victoria Falls Viewpoints",
            description:
              "Continue along the Falls trail and stop at key viewpoints for photographs and panoramic views of the Zambezi and Victoria Falls.",
          },
          {
            time: "11:30",
            title: "The Boiling Pot & Gorge Views",
            description:
              "Explore viewpoints around the gorge and learn how the Zambezi River has shaped the landscape around Victoria Falls.",
          },
          {
            time: "12:30",
            title: "Lunch Break",
            description:
              "Enjoy a relaxed lunch in Livingstone or at a selected local restaurant. Lunch arrangements can be confirmed when booking.",
          },
          {
            time: "13:30",
            title: "Explore Livingstone",
            description:
              "Spend time discovering Livingstone's atmosphere and local character, with an opportunity to browse local shops or enjoy a relaxed break.",
          },
          {
            time: "15:00",
            title: "Optional Livingstone Experience",
            description:
              "Guests may add an optional Livingstone activity, subject to availability and seasonal conditions, such as a river cruise or Livingstone Island experience.",
          },
          {
            time: "16:00",
            title: "Return Towards the Border",
            description:
              "Begin the journey back towards the Victoria Falls Bridge and prepare for the return border crossing.",
          },
          {
            time: "16:30",
            title: "Return Border Formalities",
            description:
              "Complete the required Zambian and Zimbabwean immigration procedures before continuing back to Victoria Falls.",
          },
          {
            time: "17:30",
            title: "Return to Victoria Falls",
            description:
              "Arrive back in Victoria Falls and return to your hotel or lodge, concluding the Livingstone Zambia Falls Day Experience.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "Livingstone Zambia Falls Day Trip from Victoria Falls | Zimbabwe",
      metaDescription:
        "Explore Livingstone and the Zambian side of Victoria Falls on a full-day trip from Victoria Falls with guided Falls walks, viewpoints and border assistance.",
      keywords: [
        "Livingstone day trip from Victoria Falls",
        "Livingstone Zambia day trip",
        "Victoria Falls to Livingstone day trip",
        "Zambian side of Victoria Falls",
        "Livingstone Victoria Falls tour",
        "Victoria Falls Zambia side tour",
        "Livingstone Zambia tour",
        "Mosi-oa-Tunya Victoria Falls tour",
        "Knife Edge Bridge Victoria Falls",
        "Victoria Falls Zimbabwe to Zambia day trip",
      ],
      canonicalSlug: "livingstone-zambia-falls-day-experience",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 75,
      currency: "USD",
    },
  },
  {
    id: "zimbabwe-grand-explorer",
    slug: "zimbabwe-grand-explorer",
    title: "Zimbabwe Grand Explorer",
    category: "multi-day-trip",
    destination: "Zimbabwe",
    destinationSlug: "zimbabwe",
    duration: "12 Days / 11 Nights",
    price: {
      from: 3450,
      currency: "USD",
      per: "person",
      note: "Based on 2 people sharing",
    },
    groupSize: "2-8 guests",
    shortDescription:
      "Journey across Zimbabwe from the mighty Victoria Falls to Hwange's wildlife-rich plains, the granite landscapes of Matobo and the ancient ruins of Great Zimbabwe.",
    description:
      "Discover Zimbabwe on an immersive 12-day journey through the country's most iconic natural, cultural and historical destinations. Begin at Victoria Falls before travelling south to Hwange National Park for exceptional wildlife viewing. Continue to Bulawayo and the dramatic granite landscapes of Matobo National Park, then explore the ancient ruins of Great Zimbabwe before travelling to Harare, Zimbabwe's vibrant capital. The journey returns to Victoria Falls, combining guided sightseeing, safari experiences, cultural encounters and scenic road travel into one complete Zimbabwe adventure.",
    image: "/images/experiences/experience-zimbabwe-grand-explorer-2.webp",
    gallery: [
      "/images/experiences/experience-zimbabwe-grand-explorer-1.webp",
      "/images/experiences/experience-zimbabwe-grand-explorer-3.webp",
      "/images/experiences/experience-zimbabwe-grand-explorer-4.webp",
      "/images/experiences/experience-zimbabwe-grand-explorer-5.webp",
      "/images/experiences/experience-zimbabwe-grand-explorer-6.webp",
      "/images/experiences/experience-zimbabwe-grand-explorer-7.webp",
    ],
    highlights: [
      "Victoria Falls",
      "Guided Victoria Falls rainforest tour",
      "Zambezi River sunset cruise",
      "Hwange National Park",
      "Morning and afternoon game drives",
      "Zimbabwean wildlife and landscapes",
      "Bulawayo",
      "Matobo National Park",
      "Matobo granite hills and rock formations",
      "Ancient San rock art",
      "Great Zimbabwe Monument",
      "Harare city experience",
      "Zimbabwean culture and heritage",
      "Private road transfers",
      "Professional English-speaking guide",
    ],
    included: [
      "11 nights accommodation",
      "Daily breakfast",
      "Selected lunches and dinners as specified",
      "Private air-conditioned vehicle",
      "Professional English-speaking guide",
      "Victoria Falls Airport arrival transfer",
      "Victoria Falls Airport departure transfer",
      "All scheduled intercity road transfers",
      "Guided Victoria Falls rainforest tour",
      "Zambezi sunset cruise",
      "Hwange National Park game drives",
      "Matobo National Park excursion",
      "Great Zimbabwe Monument visit",
      "Harare city tour",
      "National park and monument entrance fees specified in the itinerary",
      "Bottled drinking water during scheduled road transfers",
    ],
    excluded: [
      "International flights",
      "Domestic flights",
      "Travel insurance",
      "Zimbabwe visa fees",
      "Meals not specifically listed",
      "Drinks",
      "Personal expenses",
      "Laundry",
      "Alcoholic drinks",
      "Tips and gratuities",
      "Optional adventure activities",
      "Additional activities not listed in the itinerary",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Victoria Falls",
        location: "Victoria Falls, Zimbabwe",
        overnight: "Victoria Falls",
        meals: ["Dinner"],
        activities: [
          {
            time: "12:00",
            title: "Airport Arrival & Meet Your Guide",
            description:
              "Meet your professional guide at Victoria Falls Airport and transfer to your accommodation.",
          },
          {
            time: "14:00",
            title: "Hotel Check-In & Rest",
            description:
              "Check in, settle into your accommodation and enjoy some free time after your journey.",
          },
          {
            time: "16:00",
            title: "Victoria Falls Town Orientation",
            description:
              "Take a relaxed guided orientation around Victoria Falls town and nearby points of interest.",
          },
          {
            time: "17:30",
            title: "Sunset Experience",
            description:
              "Enjoy your first Zimbabwean sunset before returning to your accommodation.",
          },
          {
            time: "18:30",
            title: "The Boma Dinner Experience",
            description:
              "Spend three hours enjoying traditional Zimbabwean cuisine, music and cultural entertainment.",
          },
        ],
      },
      {
        day: 2,
        title: "Victoria Falls & Zambezi River",
        location: "Victoria Falls, Zimbabwe",
        overnight: "Victoria Falls",
        meals: ["Breakfast"],
        activities: [
          {
            time: "07:00",
            title: "Breakfast",
            description: "Enjoy breakfast at your accommodation.",
          },
          {
            time: "08:00",
            title: "Guided Victoria Falls Tour",
            description:
              "Explore the rainforest and viewpoints surrounding Victoria Falls with a professional guide.",
          },
          {
            time: "11:30",
            title: "Victoria Falls Viewpoints",
            description:
              "Visit the major viewpoints and experience the scale and power of the Zambezi River.",
          },
          {
            time: "13:00",
            title: "Lunch",
            description: "Enjoy lunch and some time to relax.",
          },
          {
            time: "15:30",
            title: "Free Afternoon",
            description:
              "Enjoy free time to explore Victoria Falls town or relax at the lodge.",
          },
          {
            time: "17:00",
            title: "Zambezi Sunset Cruise",
            description:
              "Cruise along the Zambezi River and look out for wildlife while enjoying sunset views.",
          },
        ],
      },
      {
        day: 3,
        title: "Victoria Falls to Hwange",
        location: "Hwange National Park, Zimbabwe",
        overnight: "Hwange National Park",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "06:30",
            title: "Breakfast & Check-Out",
            description: "Have breakfast before departing Victoria Falls.",
          },
          {
            time: "07:30",
            title: "Drive to Hwange National Park",
            description:
              "Travel south through Zimbabwe's countryside towards Hwange National Park.",
          },
          {
            time: "10:30",
            title: "Arrive in Hwange",
            description:
              "Enter the Hwange area and continue towards your safari lodge.",
          },
          {
            time: "12:30",
            title: "Lunch & Lodge Check-In",
            description:
              "Enjoy lunch and settle into your safari accommodation.",
          },
          {
            time: "15:00",
            title: "Afternoon Game Drive",
            description:
              "Set out on your first Hwange game drive in search of elephants, buffalo, lions, giraffes and other wildlife.",
          },
          {
            time: "18:30",
            title: "Return to Lodge",
            description:
              "Return to the lodge for dinner and an evening around the camp.",
          },
        ],
      },
      {
        day: 4,
        title: "Full-Day Hwange Safari",
        location: "Hwange National Park, Zimbabwe",
        overnight: "Hwange National Park",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "05:00",
            title: "Early Morning Game Drive",
            description:
              "Depart before sunrise when wildlife is often most active.",
          },
          {
            time: "08:30",
            title: "Bush Breakfast",
            description:
              "Enjoy breakfast in the wilderness before continuing your safari.",
          },
          {
            time: "09:30",
            title: "Morning Safari",
            description:
              "Continue exploring Hwange's plains, woodland and wildlife-rich waterholes.",
          },
          {
            time: "12:30",
            title: "Lunch & Rest",
            description: "Return to camp for lunch and a midday rest.",
          },
          {
            time: "15:00",
            title: "Afternoon Safari",
            description:
              "Continue wildlife viewing as temperatures begin to cool.",
          },
          {
            time: "18:30",
            title: "Sunset Game Drive",
            description:
              "Enjoy the changing colours of the African bush before returning to camp.",
          },
        ],
      },
      {
        day: 5,
        title: "Hwange to Bulawayo",
        location: "Bulawayo, Zimbabwe",
        overnight: "Bulawayo",
        meals: ["Breakfast"],
        activities: [
          {
            time: "06:30",
            title: "Breakfast",
            description: "Enjoy breakfast at the lodge.",
          },
          {
            time: "07:30",
            title: "Morning Game Drive",
            description:
              "Enjoy one final wildlife drive through Hwange National Park.",
          },
          {
            time: "10:30",
            title: "Depart Hwange",
            description: "Leave the park and continue south towards Bulawayo.",
          },
          {
            time: "13:30",
            title: "Lunch",
            description: "Stop for lunch during the journey.",
          },
          {
            time: "15:30",
            title: "Arrive in Bulawayo",
            description: "Check in and relax at your accommodation.",
          },
          {
            time: "17:00",
            title: "Bulawayo City Experience",
            description:
              "Enjoy a relaxed introduction to Zimbabwe's second-largest city.",
          },
        ],
      },
      {
        day: 6,
        title: "Matobo National Park",
        location: "Matobo National Park, Zimbabwe",
        overnight: "Bulawayo",
        meals: ["Breakfast"],
        activities: [
          {
            time: "06:30",
            title: "Breakfast",
            description: "Enjoy breakfast before departing for Matobo.",
          },
          {
            time: "07:30",
            title: "Drive to Matobo National Park",
            description:
              "Travel into the spectacular granite landscape of the Matobo Hills.",
          },
          {
            time: "08:30",
            title: "Matobo Wildlife Safari",
            description:
              "Explore the park in search of rhino, zebra, giraffe and other wildlife.",
          },
          {
            time: "11:30",
            title: "Ancient Rock Art",
            description:
              "Discover ancient San rock art sites and learn about the history of the region.",
          },
          {
            time: "13:00",
            title: "Bush Lunch",
            description:
              "Enjoy lunch surrounded by the distinctive Matobo landscape.",
          },
          {
            time: "14:30",
            title: "World's View",
            description: "Visit one of Matobo's spectacular viewpoints.",
          },
          {
            time: "16:30",
            title: "Return to Bulawayo",
            description: "Return to Bulawayo for the evening.",
          },
        ],
      },
      {
        day: 7,
        title: "Bulawayo to Great Zimbabwe",
        location: "Great Zimbabwe, Masvingo",
        overnight: "Masvingo",
        meals: ["Breakfast"],
        activities: [
          {
            time: "06:30",
            title: "Breakfast & Check-Out",
            description:
              "Enjoy breakfast before beginning the next stage of the journey.",
          },
          {
            time: "07:30",
            title: "Depart Bulawayo",
            description:
              "Travel east through Zimbabwe's countryside towards Masvingo.",
          },
          {
            time: "12:30",
            title: "Lunch",
            description: "Stop for lunch during the journey.",
          },
          {
            time: "14:00",
            title: "Great Zimbabwe Monument",
            description:
              "Explore the UNESCO World Heritage Site of Great Zimbabwe with a local guide.",
          },
          {
            time: "17:00",
            title: "Sunset & Lodge Check-In",
            description: "Check in and enjoy the surrounding landscape.",
          },
        ],
      },
      {
        day: 8,
        title: "Great Zimbabwe to Harare",
        location: "Harare, Zimbabwe",
        overnight: "Harare",
        meals: ["Breakfast"],
        activities: [
          {
            time: "07:00",
            title: "Breakfast",
            description: "Enjoy breakfast at the lodge.",
          },
          {
            time: "08:00",
            title: "Great Zimbabwe Cultural Experience",
            description:
              "Learn more about the history, architecture and significance of Great Zimbabwe.",
          },
          {
            time: "10:30",
            title: "Depart for Harare",
            description:
              "Begin the journey north towards Zimbabwe's capital city.",
          },
          {
            time: "13:30",
            title: "Lunch",
            description: "Stop for lunch along the way.",
          },
          {
            time: "16:30",
            title: "Arrive in Harare",
            description: "Check in at your hotel and relax.",
          },
          {
            time: "18:00",
            title: "Harare Evening",
            description: "Enjoy a relaxed evening in Zimbabwe's capital.",
          },
        ],
      },
      {
        day: 9,
        title: "Discover Harare",
        location: "Harare, Zimbabwe",
        overnight: "Harare",
        meals: ["Breakfast"],
        activities: [
          {
            time: "07:00",
            title: "Breakfast",
            description: "Enjoy breakfast at your hotel.",
          },
          {
            time: "08:00",
            title: "Harare City Tour",
            description:
              "Explore key landmarks and neighbourhoods while learning about Zimbabwe's capital.",
          },
          {
            time: "10:30",
            title: "Mbare & Local Market Experience",
            description:
              "Experience one of Harare's vibrant local market environments.",
          },
          {
            time: "13:00",
            title: "Lunch",
            description: "Enjoy lunch in Harare.",
          },
          {
            time: "14:30",
            title: "National Heritage Experience",
            description:
              "Visit selected cultural and heritage attractions in the capital.",
          },
          {
            time: "17:00",
            title: "Free Evening",
            description:
              "Enjoy time at leisure before your final journey through Zimbabwe.",
          },
        ],
      },
      {
        day: 10,
        title: "Harare to Victoria Falls",
        location: "Victoria Falls, Zimbabwe",
        overnight: "Victoria Falls",
        meals: ["Breakfast"],
        activities: [
          {
            time: "06:00",
            title: "Breakfast & Check-Out",
            description:
              "Have an early breakfast before beginning the journey back towards Victoria Falls.",
          },
          {
            time: "07:00",
            title: "Depart Harare",
            description: "Travel west through Zimbabwe's changing landscapes.",
          },
          {
            time: "12:00",
            title: "Lunch Stop",
            description: "Stop for lunch and refreshments.",
          },
          {
            time: "16:30",
            title: "Arrive in Victoria Falls",
            description: "Check in and relax after the journey.",
          },
          {
            time: "18:00",
            title: "Victoria Falls Sunset",
            description: "Enjoy a final sunset experience in Victoria Falls.",
          },
        ],
      },
      {
        day: 11,
        title: "Victoria Falls Adventure Day",
        location: "Victoria Falls, Zimbabwe",
        overnight: "Victoria Falls",
        meals: ["Breakfast"],
        activities: [
          {
            time: "07:00",
            title: "Breakfast",
            description: "Enjoy breakfast at your accommodation.",
          },
          {
            time: "08:00",
            title: "Adventure Activity",
            description:
              "Choose from available Victoria Falls adventure experiences according to your interests.",
          },
          {
            time: "12:30",
            title: "Lunch",
            description: "Enjoy lunch and take time to relax.",
          },
          {
            time: "14:30",
            title: "Free Time",
            description:
              "Explore local craft markets, relax at the lodge or enjoy additional optional activities.",
          },
          {
            time: "17:00",
            title: "Farewell Zambezi Sunset",
            description: "Enjoy your final evening around the Zambezi River.",
          },
        ],
      },
      {
        day: 12,
        title: "Departure from Victoria Falls",
        location: "Victoria Falls, Zimbabwe",
        meals: ["Breakfast"],
        activities: [
          {
            time: "07:00",
            title: "Breakfast",
            description: "Enjoy your final breakfast in Zimbabwe.",
          },
          {
            time: "08:00",
            title: "Free Morning",
            description: "Enjoy a relaxed morning before departure.",
          },
          {
            time: "10:00",
            title: "Check-Out",
            description: "Check out from your accommodation.",
          },
          {
            time: "10:30",
            title: "Airport Transfer",
            description:
              "Private transfer to Victoria Falls Airport for your onward journey.",
          },
        ],
      },
    ],
    faqs: [],
    accommodation: {
      standard:
        "Comfortable 3-star hotels, guesthouses and selected safari lodges",
      upgrade: "4-star and premium safari accommodation available on request",
    },
    bestTimeToVisit:
      "Zimbabwe is a year-round destination. The dry season from May to October is particularly popular for safari because wildlife tends to concentrate around water sources and vegetation is less dense. The wetter months from November to April bring greener landscapes, seasonal waterfalls and excellent birdwatching.",
    travelStyle: ["Private guided journey"],
    transport:
      "Private air-conditioned vehicle with professional English-speaking driver-guide",
    seo: {
      metaTitle:
        "Zimbabwe Grand Explorer | 12-Day Zimbabwe Safari & Heritage Tour",
      metaDescription:
        "Explore Zimbabwe on a 12-day safari and heritage journey covering Victoria Falls, Hwange National Park, Matobo, Great Zimbabwe and Harare.",
      keywords: [
        "Zimbabwe Grand Explorer",
        "Zimbabwe safari tour",
        "Zimbabwe 12 day tour",
        "12 day Zimbabwe safari",
        "Zimbabwe multi day tour",
        "Zimbabwe round tour",
        "Zimbabwe holiday package",
        "Victoria Falls tour",
        "Hwange National Park safari",
        "Hwange safari",
        "Matobo National Park tour",
        "Matobo Hills Zimbabwe",
        "Great Zimbabwe tour",
        "Harare tour",
        "Zimbabwe cultural tour",
        "Zimbabwe wildlife tour",
        "Zimbabwe heritage tour",
        "Victoria Falls Hwange Matobo Great Zimbabwe",
      ],
      canonicalSlug: "zimbabwe-grand-explorer",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 2,
      priceFrom: 3450,
      currency: "USD",
    },
    featured: true,
  },
  {
    id: "zimbabwe-zambia-malawi-safari-adventure",
    slug: "zimbabwe-zambia-malawi-safari-adventure",
    title: "Zimbabwe, Zambia & Malawi Safari Adventure",
    category: "multi-day-trip",
    destination: "Zimbabwe, Zambia & Malawi",
    destinationSlug: "victoria-falls",
    duration: "16 Days / 15 Nights",
    price: {
      from: 0,
      currency: "USD",
      per: "person",
      note: "Price calculated based on confirmed accommodation, activities and group size",
    },
    shortDescription:
      "A 16-day journey through Zimbabwe, Zambia and Malawi combining Victoria Falls, river adventures, wildlife safaris, walking experiences and the beaches of Lake Malawi.",
    description:
      "Experience three of Southern Africa's most spectacular destinations on one carefully planned 16-day adventure. Begin in Victoria Falls with the mighty Zambezi River, guided Falls walks and wildlife encounters before crossing into Zambia for Livingstone and the Zambian side of Victoria Falls. Continue east into the legendary South Luangwa Valley for game drives and a guided walking safari, then cross into Malawi for a slower-paced lakeside escape around Lake Malawi and Cape Maclear. This journey balances wildlife, adventure, culture, scenic road travel and time to relax, creating a complete Southern African experience.",
    image: "/images/experiences/experience-zimbabwe-zambia-malawi-safari-adventure-1.webp",
    gallery: [],
    highlights: [
      "16 days across Zimbabwe, Zambia and Malawi",
      "Victoria Falls rainforest and viewpoints",
      "Zambezi River sunset cruise",
      "Zambezi National Park safari",
      "Livingstone and the Zambian side of Victoria Falls",
      "South Luangwa National Park",
      "Guided walking safari",
      "Lake Malawi beach escape",
      "Boat and island adventure",
      "Snorkelling and kayaking",
      "Cape Maclear",
      "Three-country Southern African journey",
    ],
    included: [
      "15 nights accommodation",
      "Airport arrival transfer",
      "All accommodation as specified in the final booking",
      "Daily breakfast",
      "Selected lunches and dinners as specified",
      "Victoria Falls guided rainforest tour",
      "Zambezi River sunset cruise",
      "Zambezi National Park game drive",
      "Victoria Falls to Livingstone road transfer",
      "Zambian side of Victoria Falls experience",
      "Livingstone sunset cruise",
      "Livingstone to South Luangwa road transfer",
      "South Luangwa game drives",
      "South Luangwa walking safari",
      "South Luangwa to Malawi road transfer",
      "Lake Malawi boat excursion",
      "Snorkelling and kayaking activities where conditions permit",
      "Malawi cultural experience",
      "Cape Maclear activities",
      "Departure airport transfer",
      "Professional local guides and drivers",
    ],
    excluded: [
      "International flights",
      "Domestic or regional flights unless specifically included",
      "Travel insurance",
      "Visas and immigration fees",
      "Zimbabwe Victoria Falls National Park entrance fees where applicable",
      "South Luangwa National Park entrance fees where applicable",
      "Optional activities not listed in the fixed itinerary",
      "Alcoholic beverages",
      "Personal expenses",
      "Laundry",
      "Tips and gratuities",
      "Medical expenses",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Victoria Falls",
        location: "Victoria Falls, Zimbabwe",
        meals: ["Dinner"],
        overnight: "Victoria Falls",
        activities: [
          {
            time: "10:00",
            title: "Airport Arrival & Pick-Up",
            description:
              "Meet your local representative at Victoria Falls Airport and transfer to your accommodation.",
          },
          {
            time: "16:00",
            title: "Zambezi Sunset Cruise",
            description:
              "Head onto the Zambezi River for a relaxed sunset cruise, watching for hippos, crocodiles and birdlife.",
          },
          {
            time: "19:30",
            title: "Welcome Dinner",
            description:
              "Enjoy your first dinner in Victoria Falls and meet your fellow travellers and tour team.",
          },
        ],
      },
      {
        day: 2,
        title: "Victoria Falls & Rainforest",
        location: "Victoria Falls National Park, Zimbabwe",
        meals: ["Breakfast"],
        overnight: "Victoria Falls",
        activities: [
          {
            time: "08:30",
            title: "Guided Victoria Falls Tour",
            description:
              "Walk through the rainforest and visit principal viewpoints including the Main Falls, Horseshoe Falls and Rainbow Falls.",
          },
          {
            time: "10:30",
            title: "David Livingstone Statue",
            description:
              "Visit the David Livingstone statue and hear about the explorer's connection with Victoria Falls.",
          },
          {
            time: "11:30",
            title: "Zambezi Gorge Views",
            description:
              "Learn about the geology and formation of Victoria Falls while taking in dramatic gorge views.",
          },
        ],
      },
      {
        day: 3,
        title: "Zambezi National Park Safari",
        location: "Zambezi National Park, Zimbabwe",
        meals: ["Breakfast"],
        overnight: "Victoria Falls",
        activities: [
          {
            time: "06:00",
            title: "Morning Game Drive",
            description:
              "Search for elephant, buffalo, giraffe, antelope and birdlife on a guided game drive.",
          },
          {
            time: "09:30",
            title: "Wildlife Viewing",
            description: "Continue exploring the park with your safari guide.",
          },
          {
            time: "18:30",
            title: "Optional Boma Dinner",
            description:
              "The Boma Dinner & Drum Show may be added for traditional food, music, dance and interactive drumming.",
          },
        ],
      },
      {
        day: 4,
        title: "Victoria Falls Adventure Day",
        location: "Victoria Falls, Zimbabwe",
        meals: ["Breakfast"],
        overnight: "Victoria Falls",
        activities: [
          {
            time: "09:00",
            title: "Victoria Falls Adventure",
            description:
              "Choose a scheduled adventure experience such as a helicopter flight, rafting, zipline and gorge adventure, or wildlife interaction.",
          },
          {
            time: "14:00",
            title: "Free Afternoon",
            description:
              "Relax or continue with your selected adventure activity.",
          },
        ],
      },
      {
        day: 5,
        title: "Victoria Falls to Livingstone",
        location: "Victoria Falls, Zimbabwe → Livingstone, Zambia",
        meals: ["Breakfast"],
        overnight: "Livingstone",
        activities: [
          {
            time: "08:00",
            title: "Border Crossing",
            description:
              "Travel via Victoria Falls Bridge and complete immigration and customs procedures.",
          },
          {
            time: "11:00",
            title: "Livingstone Exploration",
            description:
              "Enjoy a relaxed introduction to Livingstone and its local atmosphere.",
          },
          {
            time: "14:00",
            title: "Zambian Side of Victoria Falls",
            description:
              "Explore the Zambian side of Victoria Falls with a local guide.",
          },
        ],
      },
      {
        day: 6,
        title: "Livingstone Adventure & Zambezi",
        location: "Livingstone, Zambia",
        meals: ["Breakfast"],
        overnight: "Livingstone",
        activities: [
          {
            time: "08:00",
            title: "Morning Adventure",
            description:
              "Take part in a scheduled Livingstone activity, subject to seasonal conditions and availability.",
          },
          {
            time: "11:30",
            title: "Livingstone Island Experience",
            description:
              "Experience Livingstone Island when operating conditions are safe and the activity is open.",
          },
          {
            time: "16:30",
            title: "Zambezi Sunset Cruise",
            description: "Enjoy an evening cruise on the Zambezi River.",
          },
        ],
      },
      {
        day: 7,
        title: "Livingstone to South Luangwa",
        location: "Livingstone → South Luangwa, Zambia",
        meals: ["Breakfast", "Dinner"],
        overnight: "South Luangwa",
        activities: [
          {
            time: "06:00",
            title: "Depart Livingstone",
            description:
              "Begin the road journey through Zambia towards the South Luangwa Valley.",
          },
          {
            time: "16:30",
            title: "Arrive in the Mfuwe Area",
            description:
              "Reach the South Luangwa area and transfer to your safari lodge.",
          },
          {
            time: "17:30",
            title: "Evening Game Drive",
            description:
              "Enjoy a short evening game drive if arrival time and park conditions permit.",
          },
        ],
      },
      {
        day: 8,
        title: "South Luangwa Safari",
        location: "South Luangwa National Park, Zambia",
        meals: ["Breakfast", "Dinner"],
        overnight: "South Luangwa",
        activities: [
          {
            time: "06:00",
            title: "Morning Game Drive",
            description:
              "Explore the Luangwa Valley in search of elephants, hippos, buffalo, giraffes, antelope, predators and birdlife.",
          },
          {
            time: "15:30",
            title: "Afternoon Game Drive",
            description:
              "Return to the park as temperatures begin to fall and wildlife becomes more active.",
          },
          {
            time: "18:00",
            title: "Evening Safari",
            description:
              "Continue into the evening, looking for nocturnal species where permitted.",
          },
        ],
      },
      {
        day: 9,
        title: "South Luangwa Walking Safari",
        location: "South Luangwa National Park, Zambia",
        meals: ["Breakfast", "Dinner"],
        overnight: "South Luangwa",
        activities: [
          {
            time: "06:00",
            title: "Guided Walking Safari",
            description:
              "Explore the bush on foot with an experienced walking guide and armed ranger where required.",
          },
          {
            time: "08:30",
            title: "Wildlife Tracking",
            description:
              "Learn how guides interpret tracks, calls, droppings and other animal signs.",
          },
          {
            time: "16:00",
            title: "Evening & Night Game Drive",
            description:
              "Experience the park as nocturnal wildlife becomes active, subject to regulations and conditions.",
          },
        ],
      },
      {
        day: 10,
        title: "South Luangwa to Lake Malawi",
        location: "South Luangwa, Zambia → Lake Malawi, Malawi",
        meals: ["Breakfast", "Dinner"],
        overnight: "Lake Malawi",
        activities: [
          {
            time: "06:00",
            title: "Depart South Luangwa",
            description:
              "Begin the journey towards the Malawi border via the Chipata region.",
          },
          {
            time: "10:00",
            title: "Zambia–Malawi Border",
            description:
              "Complete immigration and customs formalities before entering Malawi.",
          },
          {
            time: "16:30",
            title: "Arrive at Lake Malawi",
            description:
              "Reach your lakeside accommodation and enjoy your first sunset over the lake.",
          },
        ],
      },
      {
        day: 11,
        title: "Lake Malawi Leisure Day",
        location: "Lake Malawi, Malawi",
        meals: ["Breakfast", "Dinner"],
        overnight: "Lake Malawi",
        activities: [
          {
            time: "08:30",
            title: "Beach Morning",
            description: "Enjoy swimming and relaxing beside the lake.",
          },
          {
            time: "10:00",
            title: "Kayaking",
            description: "Explore the calm waters of Lake Malawi by kayak.",
          },
          {
            time: "13:30",
            title: "Free Afternoon",
            description:
              "Relax by the lake or enjoy the surroundings at your own pace.",
          },
        ],
      },
      {
        day: 12,
        title: "Lake Malawi Boat & Island Adventure",
        location: "Lake Malawi, Malawi",
        meals: ["Breakfast", "Dinner"],
        overnight: "Lake Malawi",
        activities: [
          {
            time: "08:30",
            title: "Boat Adventure",
            description:
              "Explore the clear waters and islands around Lake Malawi by boat.",
          },
          {
            time: "09:30",
            title: "Snorkelling",
            description:
              "Discover Lake Malawi's freshwater fish and underwater environment in suitable areas.",
          },
          {
            time: "11:00",
            title: "Island Exploration",
            description: "Visit a nearby island to explore, swim and relax.",
          },
        ],
      },
      {
        day: 13,
        title: "Malawi Cultural Experience",
        location: "Lake Malawi, Malawi",
        meals: ["Breakfast", "Dinner"],
        overnight: "Lake Malawi",
        activities: [
          {
            time: "09:00",
            title: "Local Village Visit",
            description:
              "Learn about everyday life around Lake Malawi with a local guide.",
          },
          {
            time: "10:00",
            title: "Community Interaction",
            description:
              "Meet local residents and learn about traditions and livelihoods.",
          },
          {
            time: "12:30",
            title: "Local Food Experience",
            description:
              "Sample locally prepared food and learn about traditional ingredients and cooking practices.",
          },
        ],
      },
      {
        day: 14,
        title: "Cape Maclear Adventure",
        location: "Cape Maclear, Malawi",
        meals: ["Breakfast", "Dinner"],
        overnight: "Cape Maclear",
        activities: [
          {
            time: "09:00",
            title: "Cape Maclear",
            description:
              "Travel to Cape Maclear and settle into your lakeside accommodation.",
          },
          {
            time: "10:30",
            title: "Snorkelling",
            description:
              "Enjoy a guided snorkelling experience in clear lake waters.",
          },
          {
            time: "13:30",
            title: "Kayaking",
            description:
              "Paddle along the shoreline and enjoy the scenery from the water.",
          },
        ],
      },
      {
        day: 15,
        title: "Malawi Scenic & Farewell Day",
        location: "Cape Maclear, Malawi",
        meals: ["Breakfast", "Dinner"],
        overnight: "Cape Maclear",
        activities: [
          {
            time: "08:30",
            title: "Scenic Drive",
            description:
              "Enjoy the surrounding countryside and communities around Lake Malawi.",
          },
          {
            time: "10:30",
            title: "Local Market & Crafts",
            description:
              "Discover handmade products and locally produced goods.",
          },
          {
            time: "17:00",
            title: "Farewell Sunset",
            description:
              "Gather beside the lake for your final African sunset.",
          },
          {
            time: "19:00",
            title: "Farewell Dinner",
            description: "Celebrate the end of your three-country adventure.",
          },
        ],
      },
      {
        day: 16,
        title: "Departure",
        location: "Cape Maclear → Departure Airport",
        meals: ["Breakfast"],
        activities: [
          {
            time: "08:00",
            title: "Check-Out",
            description: "Check out and prepare for your onward journey.",
          },
          {
            time: "08:30",
            title: "Departure Transfer",
            description:
              "Transfer to the agreed departure airport according to your confirmed flight schedule.",
          },
          {
            time: "12:00",
            title: "Tour Ends",
            description:
              "Your 16-day Zimbabwe, Zambia and Malawi Safari Adventure comes to an end.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle:
        "16-Day Zimbabwe Zambia Malawi Safari Adventure | Victoria Falls, South Luangwa & Lake Malawi",
      metaDescription:
        "Explore Zimbabwe, Zambia and Malawi on a 16-day safari adventure featuring Victoria Falls, Livingstone, South Luangwa National Park and Lake Malawi.",
      keywords: [
        "Zimbabwe Zambia Malawi safari",
        "Zimbabwe Zambia Malawi tour",
        "16 day Southern Africa tour",
        "Victoria Falls South Luangwa Lake Malawi",
        "Victoria Falls Zambia Malawi itinerary",
        "South Luangwa safari",
        "Lake Malawi holiday",
        "Cape Maclear tour",
        "Victoria Falls multi country tour",
        "Southern Africa safari adventure",
        "Zimbabwe Zambia Malawi itinerary",
        "three country Africa safari",
      ],
      canonicalSlug: "zimbabwe-zambia-malawi-safari-adventure",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 0,
      currency: "USD",
    },
    featured: true,
  },
  {
    id: "victoria-falls-chobe-safari-escape",
    slug: "victoria-falls-chobe-safari-escape",
    title: "Victoria Falls & Chobe Safari Escape",
    category: "multi-day-trip",
    destination: "Victoria Falls & Chobe",
    destinationSlug: "victoria-falls",
    duration: "5 Days / 4 Nights",
    price: {
      from: 0,
      currency: "USD",
      per: "person",
      note: "Price calculated based on selected accommodation and group size",
    },
    shortDescription:
      "Experience the power of Victoria Falls and the wildlife of Botswana's Chobe National Park on a 5-day safari escape combining waterfalls, river cruises and game drives.",
    description:
      "Discover two of Southern Africa's most iconic destinations on one seamless 5-day journey. Begin in Victoria Falls with a guided rainforest tour and a spectacular Zambezi sunset cruise before crossing into Botswana for two nights in Kasane. Explore Chobe National Park on a river safari and guided 4x4 game drive, with excellent opportunities to see elephants, hippos, buffalo, crocodiles and a wide variety of birdlife. With four nights of accommodation and carefully planned cross-border transfers, this is an ideal short safari extension from Victoria Falls.",
    image: "/images/experiences/experience-victoria-falls-chobe-safari-escape-1.webp",
    gallery: [],
    highlights: [
      "5 days / 4 nights",
      "2 nights in Victoria Falls",
      "2 nights in Kasane, Botswana",
      "Guided Victoria Falls rainforest tour",
      "Victoria Falls main viewpoints",
      "Zambezi River sunset cruise",
      "Cross-border journey from Zimbabwe to Botswana",
      "Chobe National Park safari",
      "Chobe River wildlife cruise",
      "4x4 game drive",
      "Elephant and buffalo viewing",
      "Hippo and crocodile sightings",
      "African sunset and river scenery",
      "Return transfer to Victoria Falls",
    ],
    included: [
      "4 nights accommodation",
      "Airport or hotel arrival transfer in Victoria Falls",
      "Accommodation in Victoria Falls for 2 nights",
      "Accommodation in Kasane for 2 nights",
      "Daily breakfast",
      "Guided Victoria Falls rainforest tour",
      "Zambezi sunset cruise",
      "Victoria Falls to Kasane transfer",
      "Kazungula border transfer assistance",
      "Chobe National Park game drive",
      "Chobe River wildlife cruise",
      "Kasane to Victoria Falls transfer",
      "Professional guides and drivers",
      "Bottled drinking water during scheduled activities",
    ],
    excluded: [
      "International flights",
      "Zimbabwe Victoria Falls National Park entrance fee unless specifically included",
      "Botswana Chobe National Park fees unless specifically included",
      "Botswana tourism or conservation levies where applicable",
      "Visa fees",
      "Meals not specifically listed",
      "Drinks",
      "Personal expenses",
      "Laundry",
      "Tips and gratuities",
      "Travel insurance",
      "Optional activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Victoria Falls",
        location: "Victoria Falls, Zimbabwe",
        meals: ["Dinner"],
        overnight: "Victoria Falls",
        activities: [
          {
            time: "10:00",
            title: "Airport Pick-Up",
            description:
              "Meet your local representative at Victoria Falls Airport and transfer to your accommodation in Victoria Falls.",
          },
          {
            time: "12:00",
            title: "Hotel Check-In",
            description:
              "Check in, settle into your accommodation and take time to relax after your journey.",
          },
          {
            time: "16:00",
            title: "Zambezi Sunset Cruise",
            description:
              "Board a sunset cruise on the Zambezi River and watch for hippos, crocodiles and birdlife along the banks.",
          },
          {
            time: "19:30",
            title: "Welcome Dinner",
            description:
              "Enjoy your first dinner in Victoria Falls and prepare for the adventure ahead.",
          },
        ],
      },
      {
        day: 2,
        title: "Victoria Falls & Zambezi Sunset",
        location: "Victoria Falls, Zimbabwe",
        meals: ["Breakfast"],
        overnight: "Victoria Falls",
        activities: [
          {
            time: "08:30",
            title: "Guided Victoria Falls Rainforest Tour",
            description:
              "Enter Victoria Falls National Park with your local guide and follow the rainforest trail towards the main waterfall viewpoints.",
          },
          {
            time: "09:00",
            title: "Main Falls Viewpoints",
            description:
              "Experience the different sections of Victoria Falls while learning about the Falls, the Zambezi River and the surrounding ecosystem.",
          },
          {
            time: "10:30",
            title: "David Livingstone Statue",
            description:
              "Visit the David Livingstone statue and hear about the explorer's association with Victoria Falls.",
          },
          {
            time: "11:00",
            title: "Zambezi Gorge Views",
            description:
              "Continue along the Falls trail for dramatic gorge views and photographs.",
          },
          {
            time: "16:00",
            title: "Zambezi Sunset Cruise",
            description:
              "Enjoy a second perspective of the Zambezi on an afternoon-to-sunset river cruise.",
          },
        ],
      },
      {
        day: 3,
        title: "Victoria Falls to Kasane & Chobe",
        location: "Victoria Falls, Zimbabwe → Kasane, Botswana",
        meals: ["Breakfast", "Dinner"],
        overnight: "Kasane, Botswana",
        activities: [
          {
            time: "08:00",
            title: "Depart Victoria Falls",
            description:
              "Travel by road from Victoria Falls towards the Kazungula border and Kasane.",
          },
          {
            time: "09:00",
            title: "Zimbabwe–Botswana Border",
            description:
              "Complete immigration and customs formalities before crossing into Botswana; travellers may change vehicles at the border.",
          },
          {
            time: "10:30",
            title: "Arrive in Kasane",
            description:
              "Continue to Kasane and check in or leave your luggage at the lodge.",
          },
          {
            time: "13:00",
            title: "Chobe River Safari Cruise",
            description:
              "Cruise along the Chobe River, looking for elephants, hippos, crocodiles, buffalo and waterbirds.",
          },
          {
            time: "16:30",
            title: "African Sunset",
            description:
              "Continue along the river as the light changes and enjoy the Chobe sunset.",
          },
        ],
      },
      {
        day: 4,
        title: "Chobe National Park Safari",
        location: "Chobe National Park, Botswana",
        meals: ["Breakfast", "Dinner"],
        overnight: "Kasane, Botswana",
        activities: [
          {
            time: "06:00",
            title: "Morning 4x4 Game Drive",
            description:
              "Explore Chobe National Park in an open safari vehicle during the cooler morning hours.",
          },
          {
            time: "07:30",
            title: "Wildlife Viewing",
            description:
              "Search for elephant herds, buffalo, giraffe, zebra, antelope, predators and birdlife.",
          },
          {
            time: "15:00",
            title: "Afternoon Safari",
            description:
              "Return to the Chobe area for another wildlife-viewing experience.",
          },
          {
            time: "17:30",
            title: "Sunset Game Viewing",
            description:
              "Enjoy the final golden-hour wildlife viewing before returning to the lodge.",
          },
        ],
      },
      {
        day: 5,
        title: "Kasane to Victoria Falls & Departure",
        location: "Kasane, Botswana → Victoria Falls, Zimbabwe",
        meals: ["Breakfast"],
        activities: [
          {
            time: "08:00",
            title: "Check-Out",
            description:
              "Check out and prepare for your return journey to Victoria Falls.",
          },
          {
            time: "08:30",
            title: "Kasane to Victoria Falls Transfer",
            description:
              "Travel back towards the Kazungula border and Victoria Falls.",
          },
          {
            time: "09:30",
            title: "Border Formalities",
            description:
              "Complete the required Botswana and Zimbabwe immigration procedures.",
          },
          {
            time: "11:00",
            title: "Arrive in Victoria Falls",
            description:
              "Continue to your hotel or Victoria Falls International Airport.",
          },
          {
            time: "12:00",
            title: "Tour Ends",
            description:
              "Your Victoria Falls & Chobe Safari Escape concludes with your airport or hotel drop-off.",
          },
        ],
      },
    ],
    faqs: [],
    seo: {
      metaTitle: "Victoria Falls & Chobe Safari Escape | 5 Days 4 Nights",
      metaDescription:
        "Experience Victoria Falls and Chobe National Park on a 5-day, 4-night safari combining the Falls, Zambezi River cruises, Botswana wildlife and Chobe game drives.",
      keywords: [
        "Victoria Falls Chobe safari",
        "Victoria Falls and Chobe 5 days",
        "Victoria Falls Chobe 5 day 4 night",
        "Victoria Falls Chobe safari package",
        "Victoria Falls Botswana safari",
        "Chobe National Park from Victoria Falls",
        "Victoria Falls to Chobe safari",
        "Chobe safari from Victoria Falls",
        "Kasane Victoria Falls safari",
        "Zimbabwe Botswana safari",
        "Victoria Falls Chobe holiday",
        "Chobe River safari",
      ],
      canonicalSlug: "victoria-falls-chobe-safari-escape",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 1,
      priceFrom: 0,
      currency: "USD",
    },
    featured: true,
  },
  {
    id: "victoria-falls-okavango-wild-journey",
    slug: "victoria-falls-okavango-wild-journey",
    title: "Victoria Falls to Okavango: Botswana Wild Journey",
    category: "multi-day-trip",
    destination: "Victoria Falls, Botswana",
    destinationSlug: "victoria-falls",
    duration: "11 Days / 10 Nights",
    price: {
      from: 0,
      currency: "USD",
      per: "person",
      note: "Price based on accommodation category, safari activities and group size",
    },
    groupSize: "2-8 guests",
    shortDescription:
      "Travel from the mighty Victoria Falls through Chobe, Elephant Sands and the Makgadikgadi Salt Pans to Maun and the extraordinary Okavango Delta.",
    description:
      "Follow one of Southern Africa's most rewarding safari routes from Victoria Falls into the heart of Botswana. Begin with the natural wonder of Victoria Falls before crossing into Botswana for wildlife-rich Chobe National Park. Continue south through the bush to Elephant Sands, where wild elephants gather around the lodge's natural waterhole, then experience the vast landscapes of the Makgadikgadi Salt Pans. From Maun, travel deeper into the Okavango region for an immersive Delta safari combining waterways, wildlife and wilderness. This 11-day journey brings together waterfalls, river safaris, elephants, salt pans, traditional communities and one of Africa's greatest inland wildernesses.",
    image: "/images/experiences/experience-victoria-falls-okavango-wild-journey-1.webp",
    gallery: [
    ],
    highlights: [
      "Victoria Falls",
      "Guided Victoria Falls rainforest tour",
      "Zambezi River sunset cruise",
      "Chobe National Park",
      "Chobe River wildlife cruise",
      "Chobe 4x4 safari",
      "Elephant Sands",
      "Wild elephants at the Elephant Sands waterhole",
      "Makgadikgadi Salt Pans",
      "African salt-pan landscapes",
      "Maun",
      "Okavango Delta",
      "Mokoro experience",
      "Okavango wildlife viewing",
      "Traditional Delta waterways",
      "Botswana safari experience",
    ],
    included: [
      "10 nights accommodation",
      "Daily breakfast",
      "Selected lunches and dinners as specified",
      "Private road transfers between destinations",
      "Victoria Falls to Botswana transfer",
      "Professional English-speaking guide for scheduled road activities",
      "Guided Victoria Falls rainforest tour",
      "Zambezi sunset cruise",
      "Chobe River wildlife cruise",
      "Chobe National Park game drive",
      "Elephant Sands stay",
      "Elephant Sands wildlife experience",
      "Makgadikgadi Salt Pans excursion",
      "Maun accommodation",
      "Okavango Delta safari activities",
      "Mokoro or boat activity where water levels and local operating conditions permit",
      "Scheduled safari activities listed in the itinerary",
      "Bottled drinking water during scheduled road transfers",
      "Cross-border transfer assistance",
    ],
    excluded: [
      "International flights",
      "Flights between Maun and Okavango camps unless specifically included",
      "Domestic flights not specified in the package",
      "Zimbabwe visa fees",
      "Botswana visa fees where applicable",
      "Park and conservation fees unless specifically included in the final quotation",
      "Meals not specifically listed",
      "Drinks",
      "Alcoholic beverages",
      "Travel insurance",
      "Personal expenses",
      "Laundry",
      "Tips and gratuities",
      "Optional activities",
      "Private charter flights",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Victoria Falls",
        location: "Victoria Falls, Zimbabwe",
        overnight: "Victoria Falls",
        meals: ["Dinner"],
        activities: [
          {
            time: "12:00",
            title: "Airport Arrival & Meet Your Guide",
            description:
              "Meet your representative at Victoria Falls Airport and transfer to your accommodation.",
          },
          {
            time: "15:30",
            title: "Victoria Falls Town Orientation",
            description:
              "Enjoy a relaxed introduction to Victoria Falls town and the surrounding area.",
          },
          {
            time: "19:00",
            title: "Welcome Dinner",
            description:
              "Enjoy a welcome dinner and introduction to the journey ahead.",
          },
        ],
      },
      {
        day: 2,
        title: "Victoria Falls Experience",
        location: "Victoria Falls, Zimbabwe",
        overnight: "Victoria Falls",
        meals: ["Breakfast"],
        activities: [
          {
            time: "08:00",
            title: "Guided Victoria Falls Tour",
            description:
              "Explore the rainforest trails and major viewpoints with a professional local guide.",
          },
          {
            time: "09:00",
            title: "Main Falls Viewpoints",
            description:
              "Learn about the Zambezi River and surrounding rainforest from the Falls viewpoints.",
          },
          {
            time: "16:00",
            title: "Zambezi Sunset Cruise",
            description:
              "Cruise the Zambezi River and watch for hippos, crocodiles and birdlife.",
          },
        ],
      },
      {
        day: 3,
        title: "Victoria Falls to Chobe",
        location: "Victoria Falls, Zimbabwe → Kasane, Botswana",
        overnight: "Kasane, Botswana",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "08:00",
            title: "Private Transfer to Kasane",
            description:
              "Travel via the Kazungula border to Botswana's gateway to Chobe National Park.",
          },
          {
            time: "09:00",
            title: "Border Formalities",
            description:
              "Complete Zimbabwean and Botswana immigration and customs procedures.",
          },
          {
            time: "13:30",
            title: "Chobe River Safari",
            description:
              "Look for elephants, hippos, crocodiles, buffalo and abundant birdlife along the Chobe River.",
          },
        ],
      },
      {
        day: 4,
        title: "Chobe Safari to Elephant Sands",
        location: "Kasane → Elephant Sands",
        overnight: "Elephant Sands",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "05:30",
            title: "Early Morning Game Drive",
            description:
              "Explore the Chobe area in a 4x4 safari vehicle when wildlife is often most active.",
          },
          {
            time: "10:00",
            title: "Depart Chobe",
            description:
              "Travel south through Botswana towards Elephant Sands.",
          },
          {
            time: "16:30",
            title: "Elephant Waterhole Experience",
            description:
              "Watch elephants and other wildlife gather around the lodge's natural waterhole.",
          },
        ],
      },
      {
        day: 5,
        title: "Elephant Sands to the Makgadikgadi Salt Pans",
        location: "Elephant Sands → Makgadikgadi",
        overnight: "Makgadikgadi / Nata area",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "06:00",
            title: "Morning Wildlife Viewing",
            description:
              "Observe wildlife around the Elephant Sands waterhole before breakfast.",
          },
          {
            time: "09:00",
            title: "Depart for Makgadikgadi",
            description: "Travel towards the vast Makgadikgadi landscape.",
          },
          {
            time: "14:30",
            title: "Salt Pan Experience",
            description:
              "Explore the geological and ecological story of this ancient lake system.",
          },
          {
            time: "16:30",
            title: "Sundowner on the Pans",
            description: "Watch the sun descend across the vast open horizon.",
          },
        ],
      },
      {
        day: 6,
        title: "Makgadikgadi to Maun",
        location: "Makgadikgadi → Maun",
        overnight: "Maun",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "08:00",
            title: "Depart for Maun",
            description:
              "Travel north-west towards Maun, the gateway to the Okavango Delta.",
          },
          {
            time: "11:30",
            title: "Arrive in Maun",
            description: "Check in to your accommodation.",
          },
          {
            time: "14:30",
            title: "Maun Cultural Experience",
            description:
              "Learn about life around Maun and communities connected to the Okavango.",
          },
          {
            time: "16:30",
            title: "Thamalakane River Sunset",
            description: "Enjoy a relaxed sunset around Maun's waterways.",
          },
        ],
      },
      {
        day: 7,
        title: "Maun to the Okavango Delta",
        location: "Maun → Okavango Delta",
        overnight: "Okavango Delta",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "07:00",
            title: "Depart for the Delta",
            description:
              "Transfer from Maun to your Okavango safari camp or activity base.",
          },
          {
            time: "10:00",
            title: "Mokoro Experience",
            description:
              "Glide through the waterways in a traditional mokoro where conditions permit.",
          },
          {
            time: "15:00",
            title: "Afternoon Wildlife Experience",
            description:
              "Explore the Delta by boat or on foot according to local conditions.",
          },
        ],
      },
      {
        day: 8,
        title: "Okavango Delta Safari",
        location: "Okavango Delta",
        overnight: "Okavango Delta",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "05:30",
            title: "Early Morning Safari",
            description:
              "Explore the Delta when temperatures are cooler and wildlife is often active.",
          },
          {
            time: "09:00",
            title: "Morning Delta Exploration",
            description:
              "Look for elephants, hippos, antelope, birds and predators among waterways and islands.",
          },
          {
            time: "15:30",
            title: "Afternoon Game Viewing",
            description:
              "Enjoy a safari by vehicle, boat or mokoro according to the camp and seasonal conditions.",
          },
        ],
      },
      {
        day: 9,
        title: "Okavango Wilderness Day",
        location: "Okavango Delta",
        overnight: "Okavango Delta",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "05:30",
            title: "Sunrise Safari",
            description:
              "Begin the day with an early wildlife excursion through the Delta.",
          },
          {
            time: "09:00",
            title: "Guided Nature Experience",
            description:
              "Learn about the Delta's waterways, plants and wildlife with a local guide.",
          },
          {
            time: "15:00",
            title: "Final Afternoon Safari",
            description:
              "Enjoy a final extended wildlife experience in the Okavango.",
          },
        ],
      },
      {
        day: 10,
        title: "Okavango to Maun",
        location: "Okavango Delta → Maun",
        overnight: "Maun",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "06:00",
            title: "Final Morning Activity",
            description:
              "Enjoy one final wildlife experience before leaving the Delta.",
          },
          {
            time: "09:30",
            title: "Depart the Delta",
            description:
              "Travel back towards Maun by the scheduled camp transfer arrangement.",
          },
          {
            time: "15:00",
            title: "Maun at Leisure",
            description:
              "Explore local craft shops, relax at the lodge or enjoy an optional activity.",
          },
        ],
      },
      {
        day: 11,
        title: "Departure from Maun",
        location: "Maun, Botswana",
        meals: ["Breakfast"],
        activities: [
          {
            time: "08:00",
            title: "Free Morning",
            description:
              "Enjoy final free time depending on your departure schedule.",
          },
          {
            time: "10:30",
            title: "Airport Transfer",
            description: "Transfer to Maun Airport for your onward flight.",
          },
          {
            time: "12:00",
            title: "Tour Ends",
            description:
              "Your Victoria Falls to Okavango Wild Journey concludes in Maun.",
          },
        ],
      },
    ],
    faqs: [],
    accommodation: {
      standard:
        "Comfortable 3-star hotels, bush lodges, safari camps and selected Delta accommodation",
      upgrade: "4-star and premium safari camps available on request",
    },
    travelStyle: ["Private guided safari journey"],
    transport:
      "Private road transfers between Victoria Falls, Chobe, Elephant Sands, Makgadikgadi and Maun, with scheduled camp transfers or light-aircraft transfers where required for the Okavango section.",
    bestTimeToVisit:
      "Botswana can be visited throughout the year, but the Okavango Delta experience changes significantly with the seasons. The dry winter months are generally excellent for wildlife viewing, while the Delta flood season can provide outstanding water-based experiences. Makgadikgadi and Nxai Pan wildlife activity is strongly seasonal and influenced by rainfall. Mokoro and water-based activities in the Okavango are subject to seasonal water levels.",
    importantNotes: [
      "Okavango activities depend on seasonal water levels and the operating arrangements of the selected camp.",
      "Mokoro excursions are subject to suitable water levels and local operating conditions.",
      "Makgadikgadi Salt Pan conditions vary significantly by season.",
      "Wildlife sightings are not guaranteed.",
      "Border crossing times between Zimbabwe and Botswana can vary.",
      "Exact Okavango transfers may be by road, boat or light aircraft depending on the selected camp.",
    ],
    seo: {
      metaTitle: "Victoria Falls to Okavango | 11-Day Botswana Safari Journey",
      metaDescription:
        "Explore Victoria Falls, Chobe, Elephant Sands, Makgadikgadi Salt Pans, Maun and the Okavango Delta on an 11-day, 10-night Botswana safari journey.",
      keywords: [
        "Victoria Falls to Okavango",
        "Victoria Falls Botswana safari",
        "Victoria Falls Chobe Okavango",
        "Botswana safari 11 days",
        "Botswana 10 night safari",
        "Chobe Okavango safari",
        "Elephant Sands Botswana",
        "Makgadikgadi Salt Pans",
        "Makgadikgadi safari",
        "Maun Botswana",
        "Okavango Delta safari",
        "Okavango mokoro safari",
        "Victoria Falls Chobe Elephant Sands",
        "Botswana multi day safari",
        "Botswana safari package",
        "Victoria Falls Botswana tour",
      ],
      canonicalSlug: "victoria-falls-okavango-wild-journey",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 2,
      priceFrom: 0,
      currency: "USD",
    },
    featured: true,
  },
  {
    id: "cape-town-kruger-victoria-falls-chobe",
    slug: "cape-town-kruger-victoria-falls-chobe",
    title: "Cape Town, Kruger, Victoria Falls & Chobe Safari",
    category: "multi-day-trip",
    destination: "Southern Africa",
    destinationSlug: "cape-town",
    duration: "11 Days / 10 Nights",
    price: {
      from: 0,
      currency: "USD",
      per: "person",
      note: "Final price depends on accommodation, flights, travel dates and group size",
    },
    groupSize: "2-8 guests",
    shortDescription:
      "Experience the best of Southern Africa in 11 days, combining Cape Town's iconic landscapes, a Big Five safari in Kruger, Victoria Falls and a wildlife-rich Chobe safari.",
    description:
      "Discover four of Southern Africa's most memorable destinations on one carefully planned 11-day journey. Begin in Cape Town with Table Mountain, the Cape Peninsula and the city's spectacular coastline before flying north-east to Kruger National Park for an authentic African safari. Continue to Victoria Falls in Zimbabwe to experience one of the world's great natural wonders and cruise the Zambezi at sunset. Finish in Botswana with a Chobe safari combining river wildlife viewing and a 4x4 game drive. This itinerary balances city, nature, wildlife and adventure while using regional flights and private transfers to make the route comfortable and practical.",
    image: "/images/experiences/experience-cape-town-kruger-victoria-falls-chobe-1.webp",
    gallery: [
    ],
    highlights: [
      "Cape Town",
      "Table Mountain",
      "Cape Peninsula",
      "Boulders Beach penguins",
      "V&A Waterfront",
      "Kruger National Park",
      "Big Five safari",
      "Early morning game drives",
      "Victoria Falls",
      "Guided Victoria Falls rainforest tour",
      "Zambezi River sunset cruise",
      "Chobe National Park",
      "Chobe River safari",
      "Chobe 4x4 game drive",
      "Elephant and buffalo viewing",
      "Southern Africa's iconic landscapes",
    ],
    included: [
      "10 nights accommodation",
      "Daily breakfast",
      "Selected lunches and dinners as specified",
      "Regional flights specified in the itinerary",
      "Private airport and lodge transfers",
      "Professional English-speaking guide for scheduled activities",
      "Cape Town city experience",
      "Table Mountain experience subject to weather and operating conditions",
      "Cape Peninsula excursion",
      "Boulders Beach visit",
      "Kruger safari activities",
      "Scheduled game drives",
      "Victoria Falls guided tour",
      "Zambezi sunset cruise",
      "Chobe River wildlife cruise",
      "Chobe National Park game drive",
      "Road transfer from Victoria Falls to Kasane",
      "Bottled drinking water during scheduled road transfers",
    ],
    excluded: [
      "International flights",
      "Flights not specifically listed in the itinerary",
      "Travel insurance",
      "Visa fees",
      "Park entrance fees not specifically listed as included",
      "Table Mountain cableway if not included in the final quotation",
      "Meals not specifically listed",
      "Drinks and alcoholic beverages",
      "Personal expenses",
      "Laundry",
      "Tips and gratuities",
      "Optional adventure activities",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cape Town",
        location: "Cape Town, South Africa",
        overnight: "Cape Town",
        meals: ["Breakfast"],
        activities: [
          {
            time: "10:00",
            title: "Airport Arrival",
            description:
              "Meet your representative for a private airport transfer to your hotel.",
          },
          {
            time: "14:30",
            title: "Cape Town Orientation",
            description:
              "Enjoy a relaxed orientation around central Cape Town.",
          },
          {
            time: "16:30",
            title: "V&A Waterfront",
            description:
              "Explore the V&A Waterfront's shops, restaurants and harbour views.",
          },
        ],
      },
      {
        day: 2,
        title: "Table Mountain & Cape Town",
        location: "Cape Town, South Africa",
        overnight: "Cape Town",
        meals: ["Breakfast"],
        activities: [
          {
            time: "08:00",
            title: "Table Mountain",
            description:
              "Ascend by cableway when weather and operating conditions permit.",
          },
          {
            time: "10:30",
            title: "Table Mountain Summit",
            description:
              "Enjoy panoramic views across Cape Town and Table Bay.",
          },
          {
            time: "13:30",
            title: "Bo-Kaap & City Highlights",
            description:
              "Explore Cape Town landmarks and the colourful Bo-Kaap.",
          },
          {
            time: "16:00",
            title: "Camps Bay",
            description:
              "Visit the Atlantic seaboard and Twelve Apostles viewpoints.",
          },
        ],
      },
      {
        day: 3,
        title: "Cape Peninsula",
        location: "Cape Town, South Africa",
        overnight: "Cape Town",
        meals: ["Breakfast"],
        activities: [
          {
            time: "08:00",
            title: "Chapman's Peak Drive",
            description:
              "Travel along the Atlantic coastline, subject to conditions.",
          },
          {
            time: "09:30",
            title: "Cape Point",
            description:
              "Explore the Cape Point area within Table Mountain National Park.",
          },
          {
            time: "11:00",
            title: "Cape of Good Hope",
            description: "Visit the rugged Cape of Good Hope coastline.",
          },
          {
            time: "14:00",
            title: "Boulders Beach",
            description: "Visit the African penguin colony.",
          },
        ],
      },
      {
        day: 4,
        title: "Cape Town to Kruger National Park",
        location: "Cape Town → Kruger National Park, South Africa",
        overnight: "Greater Kruger / Kruger area",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "06:30",
            title: "Airport Transfer",
            description:
              "Transfer to Cape Town International Airport for your regional flight.",
          },
          {
            time: "09:00",
            title: "Regional Flight",
            description:
              "Fly to the Kruger region according to the confirmed route.",
          },
          {
            time: "15:30",
            title: "Afternoon Game Drive",
            description: "Search for the Big Five with an experienced ranger.",
          },
        ],
      },
      {
        day: 5,
        title: "Kruger Big Five Safari",
        location: "Kruger National Park / Greater Kruger",
        overnight: "Greater Kruger / Kruger area",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "05:00",
            title: "Early Morning Game Drive",
            description: "Explore when wildlife activity is often highest.",
          },
          {
            time: "09:00",
            title: "Morning Safari",
            description:
              "Continue searching for the Big Five and other wildlife.",
          },
          {
            time: "15:00",
            title: "Afternoon Safari",
            description: "Head out again as temperatures cool.",
          },
        ],
      },
      {
        day: 6,
        title: "Kruger Safari & Victoria Falls",
        location: "Kruger → Victoria Falls, Zimbabwe",
        overnight: "Victoria Falls",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "05:30",
            title: "Final Morning Safari",
            description:
              "Enjoy a final wildlife drive before leaving the Kruger region.",
          },
          {
            time: "13:00",
            title: "Flight to Victoria Falls",
            description:
              "Fly to Victoria Falls; routing may operate via Johannesburg.",
          },
          {
            time: "16:30",
            title: "Victoria Falls Airport Transfer",
            description: "Transfer to your accommodation.",
          },
        ],
      },
      {
        day: 7,
        title: "Victoria Falls",
        location: "Victoria Falls, Zimbabwe",
        overnight: "Victoria Falls",
        meals: ["Breakfast"],
        activities: [
          {
            time: "08:00",
            title: "Guided Victoria Falls Tour",
            description:
              "Explore rainforest viewpoints with a knowledgeable local guide.",
          },
          {
            time: "11:30",
            title: "David Livingstone Statue",
            description: "Learn about the exploration history of the area.",
          },
          {
            time: "17:00",
            title: "Zambezi Sunset Cruise",
            description:
              "Watch for hippos, crocodiles, elephants and birdlife.",
          },
        ],
      },
      {
        day: 8,
        title: "Victoria Falls Adventure Day",
        location: "Victoria Falls, Zimbabwe",
        overnight: "Victoria Falls",
        meals: ["Breakfast"],
        activities: [
          {
            time: "08:00",
            title: "Free Morning",
            description:
              "Relax or select an optional Victoria Falls adventure.",
          },
          {
            time: "09:00",
            title: "Optional Adventure",
            description:
              "Choose activities such as a helicopter flight, gorge adventure or rafting.",
          },
          {
            time: "14:30",
            title: "Afternoon at Leisure",
            description: "Relax or explore Victoria Falls town.",
          },
        ],
      },
      {
        day: 9,
        title: "Victoria Falls to Chobe",
        location: "Victoria Falls → Kasane, Botswana",
        overnight: "Kasane",
        meals: ["Breakfast", "Dinner"],
        activities: [
          {
            time: "08:00",
            title: "Private Transfer to Kasane",
            description: "Travel through the Kazungula border area to Kasane.",
          },
          {
            time: "09:00",
            title: "Border Formalities",
            description:
              "Complete Zimbabwean and Botswana immigration procedures.",
          },
          {
            time: "13:30",
            title: "Chobe River Safari",
            description:
              "Look for elephant herds, buffalo, hippos, crocodiles and birdlife.",
          },
        ],
      },
      {
        day: 10,
        title: "Full-Day Chobe Safari",
        location: "Chobe National Park, Botswana",
        overnight: "Kasane",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "05:30",
            title: "Early Morning Game Drive",
            description: "Explore Chobe by 4x4 safari vehicle.",
          },
          {
            time: "09:30",
            title: "Morning Wildlife Drive",
            description:
              "Search woodland and floodplain habitats for wildlife.",
          },
          {
            time: "15:00",
            title: "Afternoon Chobe Safari",
            description:
              "Head back into the park for another wildlife session.",
          },
        ],
      },
      {
        day: 11,
        title: "Departure from Kasane",
        location: "Kasane, Botswana",
        meals: ["Breakfast"],
        activities: [
          {
            time: "10:00",
            title: "Check-Out",
            description: "Prepare for your onward journey.",
          },
          {
            time: "10:30",
            title: "Airport Transfer",
            description: "Private transfer to Kasane Airport.",
          },
          {
            time: "12:00",
            title: "Tour Ends",
            description: "Your safari concludes in Kasane.",
          },
        ],
      },
    ],
    faqs: [],
    accommodation: {
      standard:
        "Comfortable 3-star hotels, safari lodges and selected bush accommodation",
      upgrade: "4-star and premium safari lodges available on request",
    },
    travelStyle: ["Private guided Southern Africa safari"],
    transport:
      "Regional flights between Cape Town, the Kruger region and Victoria Falls, followed by private road transfers between Victoria Falls and Kasane.",
    bestTimeToVisit:
      "This itinerary can be operated throughout the year. May to October is generally popular for safari, while Victoria Falls changes dramatically with seasonal water levels.",
    importantNotes: [
      "Exact regional flight routing depends on airline schedules and the selected Kruger lodge.",
      "Some flights may operate via Johannesburg.",
      "Wildlife sightings are not guaranteed.",
      "Table Mountain cableway is subject to weather and operational conditions.",
      "Victoria Falls water levels vary seasonally.",
      "Border crossing times between Zimbabwe and Botswana can vary.",
      "Chobe activities are subject to park regulations, water levels and local operating conditions.",
    ],
    seo: {
      metaTitle: "Cape Town, Kruger, Victoria Falls & Chobe Safari | 11 Days",
      metaDescription:
        "Experience Cape Town, Kruger National Park, Victoria Falls and Chobe National Park on an 11-day Southern Africa safari combining city, Big Five wildlife and iconic landscapes.",
      keywords: [
        "Cape Town Kruger Victoria Falls Chobe",
        "Cape Town Kruger Chobe safari",
        "Cape Town Victoria Falls Chobe safari",
        "11 day Southern Africa safari",
        "Southern Africa safari package",
        "Cape Town safari holiday",
        "Kruger National Park safari",
        "Victoria Falls safari package",
        "Chobe National Park safari",
        "Victoria Falls Chobe tour",
        "Cape Town Kruger safari",
        "Kruger Victoria Falls Chobe",
        "Big Five safari South Africa",
        "Chobe River cruise",
        "Southern Africa multi day tour",
      ],
      canonicalSlug: "cape-town-kruger-victoria-falls-chobe",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 2,
      priceFrom: 0,
      currency: "USD",
    },
    featured: true,
  },
  {
    id: "ultimate-namibia-safari",
    slug: "ultimate-namibia-safari",
    title: "Ultimate Namibia Safari",
    category: "multi-day-trip",
    destination: "Namibia",
    destinationSlug: "namibia",
    duration: "10 Days / 9 Nights",
    price: {
      from: 0,
      currency: "USD",
      per: "person",
      note: "Final price depends on accommodation, group size and travel dates",
    },
    groupSize: "2-8 guests",
    shortDescription:
      "Discover Namibia's most iconic landscapes and wildlife on a 10-day safari through Windhoek, Sossusvlei, Swakopmund, Damaraland and Etosha National Park.",
    description:
      "Experience the extraordinary contrasts of Namibia on a carefully designed 10-day safari through the country's most iconic regions. Begin in Windhoek before travelling into the Namib Desert to explore Sossusvlei and Deadvlei. Continue to the Atlantic coast for Swakopmund, travel through dramatic Damaraland to discover ancient rock engravings and desert-adapted wildlife, then finish with game drives in Etosha National Park.",
    image: "/images/experiences/experience-ultimate-namibia-safari-1.webp",
    gallery: [
    ],
    highlights: [
      "Windhoek",
      "Namib Desert",
      "Sossusvlei",
      "Deadvlei",
      "Sesriem Canyon",
      "Swakopmund",
      "Atlantic coast",
      "Walvis Bay",
      "Damaraland",
      "Twyfelfontein rock engravings",
      "Desert-adapted wildlife",
      "Etosha National Park",
      "Etosha Pan",
      "Big Five wildlife viewing",
      "Guided safari drives",
      "Scenic desert landscapes",
      "Namibian culture and history",
    ],
    included: [
      "9 nights accommodation",
      "Daily breakfast",
      "Selected lunches and dinners as specified",
      "Private air-conditioned safari vehicle",
      "Professional English-speaking driver-guide",
      "Airport arrival and departure transfers",
      "All scheduled road transfers",
      "Sossusvlei and Deadvlei excursion",
      "Sesriem Canyon visit",
      "Swakopmund coastal experience",
      "Damaraland excursion",
      "Twyfelfontein rock engraving visit",
      "Etosha National Park game drives",
      "Park entrance fees for activities specified in the itinerary",
      "Bottled drinking water during scheduled road transfers",
    ],
    excluded: [
      "International flights",
      "Domestic flights unless specifically added",
      "Travel insurance",
      "Visa fees",
      "Optional activities",
      "Meals not specifically listed",
      "Drinks and alcoholic beverages",
      "Personal expenses",
      "Laundry",
      "Tips and gratuities",
      "Photography fees where applicable",
      "Items of a personal nature",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Windhoek",
        location: "Windhoek",
        overnight: "Windhoek",
        meals: ["Breakfast"],
        activities: [
          {
            time: "10:00",
            title: "Airport Arrival",
            description:
              "Meet your guide at Hosea Kutako International Airport.",
          },
          {
            time: "16:00",
            title: "Windhoek City Orientation",
            description:
              "See selected landmarks and historic areas of the capital.",
          },
        ],
      },
      {
        day: 2,
        title: "Windhoek to Sossusvlei",
        location: "Windhoek → Namib Desert",
        overnight: "Sossusvlei / Sesriem",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "07:00",
            title: "Depart Windhoek",
            description: "Travel south-west into the Namib Desert.",
          },
          {
            time: "15:30",
            title: "Arrive at Sossusvlei Area",
            description: "Settle into your desert lodge.",
          },
          {
            time: "17:00",
            title: "Desert Sunset",
            description: "Watch changing desert colours over the dunes.",
          },
        ],
      },
      {
        day: 3,
        title: "Sossusvlei & Deadvlei",
        location: "Namib Desert",
        overnight: "Sossusvlei / Sesriem",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "06:30",
            title: "Sunrise Over the Dunes",
            description: "Watch sunrise illuminate the red Namib dunes.",
          },
          {
            time: "07:00",
            title: "Sossusvlei",
            description:
              "Explore one of Namibia's most recognisable landscapes.",
          },
          {
            time: "08:30",
            title: "Deadvlei",
            description:
              "Walk among ancient camelthorn trees and towering dunes.",
          },
          {
            time: "13:30",
            title: "Sesriem Canyon",
            description: "Explore the canyon carved by the Tsauchab River.",
          },
        ],
      },
      {
        day: 4,
        title: "Namib Desert to Swakopmund",
        location: "Sossusvlei → Swakopmund",
        overnight: "Swakopmund",
        meals: ["Breakfast", "Lunch"],
        activities: [
          {
            time: "08:00",
            title: "Depart for Swakopmund",
            description:
              "Travel west across the Namib Desert to the Atlantic coast.",
          },
          {
            time: "15:00",
            title: "Arrive in Swakopmund",
            description: "Check into your coastal accommodation.",
          },
          {
            time: "16:00",
            title: "Swakopmund Orientation",
            description:
              "Explore historic streets, promenade and architecture.",
          },
        ],
      },
      {
        day: 5,
        title: "Swakopmund & Walvis Bay",
        location: "Swakopmund / Walvis Bay",
        overnight: "Swakopmund",
        meals: ["Breakfast"],
        activities: [
          {
            time: "08:00",
            title: "Walvis Bay",
            description: "Travel along the Atlantic coast.",
          },
          {
            time: "09:00",
            title: "Coastal Wildlife Experience",
            description: "Look for seals, seabirds and marine wildlife.",
          },
          {
            time: "14:30",
            title: "Optional Adventure",
            description:
              "Choose a marine cruise, sandboarding, quad biking or another activity.",
          },
        ],
      },
      {
        day: 6,
        title: "Swakopmund to Damaraland",
        location: "Swakopmund → Damaraland",
        overnight: "Damaraland",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "07:30",
            title: "Depart Swakopmund",
            description: "Travel through Namibia's dramatic desert landscapes.",
          },
          {
            time: "14:30",
            title: "Damaraland Scenic Experience",
            description: "Explore mountains, valleys and dry riverbeds.",
          },
        ],
      },
      {
        day: 7,
        title: "Damaraland & Twyfelfontein",
        location: "Damaraland",
        overnight: "Damaraland",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "07:30",
            title: "Twyfelfontein",
            description: "Visit UNESCO-listed ancient rock engravings.",
          },
          {
            time: "11:30",
            title: "Organ Pipes",
            description:
              "Visit distinctive geological formations when the final route permits.",
          },
          {
            time: "14:30",
            title: "Desert Wildlife Search",
            description:
              "Look for desert-adapted wildlife in dry river valleys.",
          },
        ],
      },
      {
        day: 8,
        title: "Damaraland to Etosha National Park",
        location: "Damaraland → Etosha National Park",
        overnight: "Etosha National Park",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "07:00",
            title: "Depart Damaraland",
            description: "Travel towards Etosha.",
          },
          {
            time: "13:30",
            title: "Etosha Game Drive",
            description:
              "Begin wildlife viewing around waterholes and open plains.",
          },
        ],
      },
      {
        day: 9,
        title: "Full-Day Etosha Safari",
        location: "Etosha National Park",
        overnight: "Etosha National Park",
        meals: ["Breakfast", "Lunch", "Dinner"],
        activities: [
          {
            time: "05:30",
            title: "Early Morning Game Drive",
            description: "Explore when wildlife is active around waterholes.",
          },
          {
            time: "09:00",
            title: "Etosha Wildlife Drive",
            description:
              "Search for elephants, lions, zebra, giraffe, antelope, rhino and birdlife.",
          },
          {
            time: "14:30",
            title: "Afternoon Safari",
            description: "Continue exploring Etosha's wildlife-rich areas.",
          },
        ],
      },
      {
        day: 10,
        title: "Etosha to Windhoek & Departure",
        location: "Etosha → Windhoek",
        meals: ["Breakfast", "Lunch"],
        activities: [
          {
            time: "05:30",
            title: "Final Morning Safari",
            description: "Enjoy a final game drive.",
          },
          {
            time: "09:30",
            title: "Depart Etosha",
            description: "Travel south to Windhoek.",
          },
          {
            time: "16:30",
            title: "Airport Transfer",
            description: "Transfer to Hosea Kutako International Airport.",
          },
        ],
      },
    ],
    faqs: [],
    accommodation: {
      standard:
        "Comfortable 3-star hotels, desert lodges, guesthouses and safari lodges",
      upgrade:
        "4-star and luxury desert and safari lodges available on request",
    },
    travelStyle: ["Private guided safari and scenic road journey"],
    transport:
      "Private air-conditioned safari vehicle with an experienced English-speaking driver-guide.",
    bestTimeToVisit:
      "Namibia can be visited throughout the year. May to October is particularly popular for wildlife viewing, while November to April brings greener landscapes and excellent birdwatching.",
    importantNotes: [
      "The itinerary involves long road journeys between destinations.",
      "Road conditions and travel times can vary.",
      "Wildlife sightings are not guaranteed.",
      "Sossusvlei and Etosha activities are subject to park regulations and conditions.",
      "Optional Swakopmund activities are subject to availability and weather conditions.",
    ],
    seo: {
      metaTitle: "Ultimate Namibia Safari | 10-Day Namibia Tour",
      metaDescription:
        "Explore Namibia on a 10-day safari through Windhoek, Sossusvlei, Deadvlei, Swakopmund, Damaraland and Etosha National Park with guided wildlife and desert experiences.",
      keywords: [
        "Ultimate Namibia Safari",
        "Namibia safari",
        "Namibia safari tour",
        "10 day Namibia safari",
        "Namibia holiday package",
        "Namibia multi day tour",
        "Sossusvlei safari",
        "Deadvlei tour",
        "Etosha National Park safari",
        "Damaraland safari",
        "Swakopmund tour",
        "Namib Desert tour",
        "Twyfelfontein tour",
        "Namibia wildlife safari",
        "Namibia desert safari",
        "Namibia guided tour",
      ],
      canonicalSlug: "ultimate-namibia-safari",
    },
    booking: {
      type: "enquiry",
      availability: "on-request",
      minimumTravellers: 2,
      priceFrom: 0,
      currency: "USD",
    },
    featured: true,
  },
];
