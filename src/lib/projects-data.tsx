// lib/projects-data.ts
export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  media: string;
  tools: string[];
  link: string;
  content: {
    overview: string;
    features: string[];
    className: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    name: "MIVY ",
    description: "Meet with you web visitors - Goingclear(Boston)",
    category: "B2B - Metaverse",
    thumbnail: "/images/goingClear.png",
    media: "/videos/goingClear.mp4",
    tools: ["Maya", "Wordpress", "Unreal Engine", "Readypalyerme"],
    link: "",
    content: {
      overview:
        "Led environment design for a VR project centered on a 100-story building. Created realistic,high-quality virtual spaces, managed the overall visual style, and worked closely with the level design team to ensure cohesive integration of assets and smooth user experience.Balanced creative vision with technical accuracy to enhance immersion",
      features: [
        "Created realistic, high-quality virtual spaces",
        "Collaborated with the level design team for seamless asset integration",
        "Balanced creativity with technical precision for a cohesive VR experience",
      ],
      className: "lg:col-span-1 lg:row-span-2", // Tall card (spans 2 rows)
    },
  },
  // Medium square card
  {
    id: 2,
    name: "Iqverse",
    description: "I - IQtech Pvt Ltd (India)",
    category: "VR Experience",
    thumbnail: "/images/iqverse.png",
    media: "/videos/IQVERSE.mp4",
    tools: ["Unreal Engine", "Maya", "Blender"],
    link: "https://iqverse.com/",
    content: {
      overview:
        "As an Unreal Designer for IQ Verse, I created immersive virtual environments for events and digital activities like trading. Using Unreal Engine, I designed 3D assets, planned engaging layouts for events like VirtuFests, and optimized performance to ensure a smooth user experience. This role combined technical skills and creativity to build interactive, user-friendly spaces in the metaverse.",
      features: [
        "Planned level layouts to enhance user engagement and intuitive navigation",
        "Integrated user feedback into design improvements for better gameplay flow",
        "Implemented lighting, materials, and post-processing for immersive experiences",
      ],
      className: "lg:col-span-1 lg:row-span-1", // Square card
    },
  },
  {
    id: 3,
    name: "Swim Genius",
    description: "Iqtech Pvt Ltd (Cambodia)",
    category: "VR Experience",
    thumbnail: "/images/swimgenius.png",
    media: "/videos/swimgenius.mp4",
    tools: ["Unreal Engine", "Mixamo", "Blender"],
    link: "https://iqtechmax.com/",
    content: {
      overview:
        "Contributed to Swim Genius, a VR swimming simulation game designed to teach children (12+) swimming techniques while easing their fear of water. Used Unreal Engine's Blueprint system to create realistic water behavior and interactive swimming mechanics, blending technical accuracy with engaging design to support real-world skill development.",
      features: [
        "Created custom water shaders for realistic water stimulation",
        "Built a breathing-underwater Blueprint system and integrated it with VR",
        "Bridged virtual actions with real-life swimming applications",
      ],
      className: "lg:col-span-1 lg:row-span-1", // Square card
    },
  },
  // Wide horizontal card
  {
    id: 4,
    name: "Vr Farm",
    description: "Vr Fram Drone Stimulation - Garuda Aerospace (Dubai)",
    category: "Game Environment",
    thumbnail: "/images/Vrfarm.png",
    media: "/videos/GarudaAero.mp4",
    tools: ["Unreal Engine", "Fab Assets", "Maya"],
    link: "https://garuda.aero/",
    content: {
      overview:
        "As an Environment Artist for the VR Farm Drone project, I designed a detailed and immersive farm environment to facilitate realistic drone movement. Utilizing Unreal Engine's Blueprint system, I programmed smooth drone controls, ensuring an engaging and practical VR experience that accurately simulates a real-world agricultural setting for educational Training.",
      features: [
        "Designed and built a detailed, realistic virtual farm environment",
        "Created assets to accurately represent real-world agricultural elements",
        "Programmed drone movement using Unreal Engine's Blueprint system",
      ],
      className: "lg:col-span-2 lg:row-span-1", // Wide card (spans 2 columns)
    },
  },
  // Small square card
  {
    id: 5,
    name: "Super Stylist Game",
    description: "Game environment",
    category: "Mobile Game",
    thumbnail: "/images/superstylist.jpg",
    media: "/videos/ss.mp4",
    tools: ["Maya", "ZBrush", "Substance Painter"],
    link: "https://apps.apple.com/us/app/super-stylist-game-dress-up/id6446013845",
    content: {
      overview:
        "As a Game Design Intern for Super Stylist: Dress Up, I researched hyper-casual fashion games to refine gameplay mechanics, enhance monetization, and improve user retention. I focused on showcasing diverse Western fashion, collaborating witd esigners and developers to create engaging features while delivering a points-based system for level changes.",
      features: [
        "Conducted research on hyper-casual fashion games to improve gameplay and monetization",
        "Designed a points-based system for outfit ratings to enhance level progression",
        "Collaborated with designers and developers to create engaging game features",
      ],
      className: "lg:col-span-1 lg:row-span-1", // Small square
    },
  },

  // Large square card
  {
    id: 6,
    name: "Poke of words ",
    description: "Exploration game",
    category: "Environment Design",
    thumbnail: "/images/pow.png",
    media: "/videos/pow.mp4",
    tools: ["Blender", "Substance Painter", "Unreal Engine"],
    link: "https://play.google.com/store/apps/details?id=com.pixcellplay.ddu&pli=1",
    content: {
      overview:
        "In Poke of Words, I actively participated in project discussions, identified gameplay bugs, and provided detailed reports to developers. I proposed new mechanics, conducted competitor analysis, and researched hyper-casual gaming trends to ensure alignment with industry standards and player expectations, enhancing my skills in gameplay analysis and design documentation.",
      features: [
        "Identified gameplay bugs and provided detailed reports for developers",
        "Conducted competitor analysis and researched hyper-casual gaming trends",
        "Gameplay analysis,",
      ],
      className: "lg:col-span-2 lg:row-span-2", // Large square (2x2)
    },
  },
  {
    id: 7,
    name: "Bunny Go ",
    description: "Exploration game",
    category: "3D Design",
    thumbnail: "/images/Bunnygo.png",
    media: "/videos/Bunnygo.mp4",
    tools: ["Maya", "ZBrush", "Substance Painter"],
    link: "https://underwaterworld.com/",
    content: {
      overview:
       "Designer to create engaging and challenging levels. I designed 50 level tiles and strategically placed blockages to enhance difficulty while maintaining player  engagement, balancing challenge and enjoyment for a rewarding gameplay experience.",
      features: [
        "Level Designer to create progressively challenging levels",
        "Designed tiles and placed blockages to enhance gameplay difficulty",
        "Balanced challenge and enjoyment to maintain player engagement",
      ],
      className: "lg:col-span-1 lg:row-span-1", // Small square
    },
  },
];

export const personal_projects: Project[] = [
  {
    id: 1,
    name: "The Seasons ",
    description: "The beauty of nature throughout the seasons",
    category: "Unreal Engine",
    thumbnail: "/images/theseasons.png",
    media: "/videos/Theseasons.mp4",
    tools: ["Maya", "Wordpress", "Unreal Engine", "Readypalyerme"],
    link: "https://youtu.be/QDpWhm2NUL0?si=TdSU08trqYCcXgD6",
    content: {
      overview:
        "The Seasons is a video project created using Unreal Engine 5, inspired by the emotional expressions of nature through its changing seasons. The project visually explores nature’s transformation, each season representing a different emotion and the cycle of life. Through stunning 3D environmental art, the series highlights the inherent beauty of nature while encouraging a deeper emotional connection to the natural world and its changing landscapes.",
      features: [
        "Created using Unreal Engine 5, from concept to lighting and rendering",
        "Focused on emotional storytelling through seasonal landscapes",
        "Highlighted the therapeutic effect of seasonal art on mental health",
      ],
      className: "lg:col-span-1 lg:row-span-2", // Tall card (spans 2 rows)
    },
  },
  // Medium square card
  {
    id: 2,
    name: "The Great Escape (Vol. 1)",
    description:
      "The game uses real-time thriller gameplay to give players an intense experience in gaming.",
    category: "First-Person Thriller Game",
    thumbnail: "/images/TGE.png",
    media: "/videos/tge.mp4",
    tools: ["Unreal Engine", "Maya", "Blender"],
    link: "https://youtu.be/LlwpJlALN3M",
    content: {
      overview:
        "The Great Escape (Vol. 1) is a spine-chilling first-person shooter game built using Unreal ling and immersive experience. Players take on the role of George, a crime novelist whose daughter goes missing, leading him to the haunted Grihims Mansion. The game blends intense combat, puzzle-solving, and exploration, set against a backdrop of eerie visuals and a gripping narrative. The mansion itself is a key character, offering players an opportunity to uncover its dark secrets while battling relentless zombie hordes category",
      features: [
        "Created zombie Ai",
        "Combat system with limited weapons, requiring strategic resource management",
        "Integrated environmental challenges and puzzles",
      ],
      className: "lg:col-span-1 lg:row-span-1", // Square card
    },
  },
  {
    id: 3,
    name: "Demoreel",
    description:
      "This demo reel showcases projects in game design, environment art, and animation, crafted with Unreal Engine 5, Unity, Maya, Photoshop, and Premiere Pro",
    category: "Game Design, Environment Art & Animation",
    thumbnail: "/images/Demoreel.png",
    media: "/videos/demoreel.mp4",
    tools: ["Unreal Engine", "Mixamo", "Blender"],
    link: "https://www.youtube.com/watch?v=cWNqq1gD75c",
    content: {
      overview:
        "This demo reel showcases a variety of projects in game design, environment art, and animation, developed using industry-standard tools such as Unreal Engine 5, Unity, Maya, Photoshop, and Premiere Pro. The reel highlights immersive environments, dynamic animations, and innovative gameplay mechanics, showcasing a versatile skill set across the game development pipeline. Each project is a reflection of creativity, technical precision, and collaboration",
      features: [
        "Utilizes industry-standard tools: Unreal Engine 5, Unity, Maya, ",
        "Immersive world-building in environment art with detailed textures, lighting, and atmospheric effects",
        "AI system and puzzle-solving",
      ],
      className: "lg:col-span-1 lg:row-span-1", // Square card
    },
  },
  // Wide horizontal card
  {
    id: 4,
    name: "The crash- Animation Shortfilm ",
    description:
      "It highlights immersive environments, dynamic animations, innovative gameplay mechanics,",
    category: "Game Environment",
    thumbnail: "/images/crash.png",
    media: "/videos/crash.mp4",
    tools: ["Unreal Engine", "Fab Assets", "Maya"],
    link: "https://youtu.be/YgDTHFMUjbo",
    content: {
      overview:
        "I developed a short film in Unreal Engine focused on speed awareness, using the contrast between high-speed action and the serene beauty of a winter wonderland to convey the message. The film highlights the intensity of speed while set against peaceful snowy landscapes, creating a powerful visual narrative to encourage reflection on the dangers of reckless speed.",
      features: [
        "Dynamic Lighting & Effects",
        "Cinematic Camera Control",
        "Particle Systems",
      ],
      className: "lg:col-span-2 lg:row-span-1", // Wide card (spans 2 columns)
    },
  },
];
