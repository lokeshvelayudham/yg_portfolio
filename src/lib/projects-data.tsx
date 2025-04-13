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
    link: "https://mivy.me/",
    content: {
      overview:
        "Contributed to a VR project centered on a 100-story building, where the team was responsible for level design, while taking charge of developing the environment. Key responsibilities included crafting realistic, high-quality virtual spaces, managing the overall look and feel of the environment, and collaborating closely with team members to ensure smooth integration of design elements. Skilled in balancing creativity with technical precision to deliver an engaging and visually cohesive VR experience.",
      features: [
        "Procedurally generated neon signs",
        "Real-time global illumination",
        "Interactive elements",
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
        "As an Unreal Designer for IQ Verse, I helped create immersive virtual environments that brought people together and supported digital activities like virtual events and trading. Using Unreal Engine, I designed detailed 3D assets and planned the layout of spaces for events like VirtuFests, ensuring they were engaging, easy to navigate, and visually appealing. I also worked on optimizing the platform’s performance to provide users with a smooth and enjoyable experience. This role allowed me to use both technical skills and creativity to design interactive spaces that encouraged exploration and connection in the metaverse.",
      features: [
        "Multiplayer support",
        "Custom exhibition layouts",
        "Real-time artwork loading",
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
        "I contributed to Swim Genius, a VR simulation by IQTechMax that helps children aged 12+ learn swimming and overcome aquaphobia. Using Unreal Engine’s Blueprint system, I developed realistic water and swimming mechanics to create an immersive, interactive environment. The project bridges virtual training with real-world skills, combining technical precision with creative design.",
      features: [
        "Multiplayer support",
        "Custom exhibition layouts",
        "Real-time artwork loading",
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
        "As an Environment Artist, I contributed to the VR Farm Drone project by designing an immersive and realistic space to facilitate drone movement. My responsibilities included creating a detailed virtual farm environment by adding assets that accurately represented a real-world agricultural setting.  This involved creating smooth and responsive controls to enhance the simulations functionality and realism. My work combined technical precision and artistic vision to deliver an engaging and practical virtual reality experience.",
      features: [
        "Procedural tree generation",
        "Dynamic wind system",
        "Interactive wildlife",
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
        "As a Game Design Intern for Super Stylist: Dress Up, I played a key role in delivering a modern fashion gaming experience by designing trendy outfits and developing innovative gameplay challenges. I conducted in-depth research on hyper-casual fashion games, uncovering ways to refine gameplay mechanics, enhance monetization strategies, and increase user retention. My focus was on celebrating the diversity of Western fashion while ensuring the game remained engaging and polished. By collaborating with designers and developers, I contributed to creating features that balanced creativity and user satisfaction. This role sharpened my abilities in game design, market analysis, and user engagement.",
      features: [
        "Dynamic lighting effects",
        "Aquatic creature AI",
        "Procedural coral reefs",
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
        "I contributed to Poke of Words by actively participating in project discussions and identifying gameplay bugs, providing detailed reports for developers. I proposed innovative mechanics and features, supported by design documentation like level blueprints and flowcharts. Additionally, I conducted competitor analysis and researched hyper-casual gaming trends to ensure the project aligned with industry standards and player expectations. This experience allowed me to enhance my skills in gameplay analysis, design documentation, and creative problem-solving while gaining valuable insights into the development process and the competitive gaming market.",
      features: [
        "Dynamic weather system",
        "Interactive advertisements",
        "Procedural trash/debris",
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
        "During my internship as a Game Designer at PixcellPlay, I worked on BunnyGo, focusing on level design alongside an experienced designer. I created tiles, added strategic blockages, and balanced difficulty to keep players engaged. This experience sharpened my skills in game design, creativity, and problem-solving.",
      features: [
        "Dynamic lighting effects",
        "Aquatic creature AI",
        "Procedural coral reefs",
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
        "“The Seasons” is an artistic exploration of nature’s transformative beauty, told through evocative Unreal Engine 3D artworks. Each season is portrayed as a chapter—summer radiates vitality, monsoon brings renewal, winter captures serene stillness, and autumn evokes nostalgic warmth. The visual storytelling fosters emotional connections to nature and reminds viewers of life’s cyclical essence. This series highlights environmental art’s power to inspire awareness, well-being, and renewed appreciation for the natural world.",
      features: [
        "Procedurally generated neon signs",
        "Real-time global illumination",
        "Interactive elements",
      ],
      className: "lg:col-span-1 lg:row-span-2", // Tall card (spans 2 rows)
    },
  },
  // Medium square card
  {
    id: 2,
    name: "The Great Escape",
    description: "The game uses real-time thriller gameplay to give players an intense experience in gaming.",
    category: "Unreal Engine 5",
    thumbnail: "/images/TGE.png",
    media: "/videos/tge.mp4",
    tools: ["Unreal Engine", "Maya", "Blender"],
    link: "https://youtu.be/LlwpJlALN3M",
    content: {
      overview:
        "Design Statement – The Great Escape (Vol. 1)The Great Escape (Vol. 1) is a first-person thriller built in Unreal Engine 5, where players control George, a crime writer searching for his missing daughter in the haunting Grihims Mansion. With intense combat, environmental puzzles, and rich storytelling, the game blends exploration and suspense. Dynamic visuals and immersive audio heighten the experience, making the mansion a key part of the narrative. It’s a gripping journey through fear, mystery, and emotional discovery.",
      features: [
        "Multiplayer support",
        "Custom exhibition layouts",
        "Real-time artwork loading",
      ],
      className: "lg:col-span-1 lg:row-span-1", // Square card
    },
  },
  {
    id: 3,
    name: "Demoreel",
    description: "This demo reel showcases projects in game design, environment art, and animation, crafted with Unreal Engine 5, Unity, Maya, Photoshop, and Premiere Pro",
    category: "RPG Games",
    thumbnail: "/images/Demoreel.png",
    media: "/videos/demoreel.mp4",
    tools: ["Unreal Engine", "Mixamo", "Blender"],
    link: "https://www.youtube.com/watch?v=cWNqq1gD75c",
    content: {
      overview:
        "Design Statement - This demo reel highlights work in game design, environment art, and animation using tools like Unreal Engine 5, Unity, and Maya. It features immersive environments, lifelike character animations, and engaging gameplay mechanics. Projects include a haunted mansion, a forest landscape, a dystopian FPS, and a light-based puzzle game. Collaborative work showcases strong teamwork and polished, industry-ready results",
      features: [
        "Multiplayer support",
        "Custom exhibition layouts",
        "Real-time artwork loading",
      ],
      className: "lg:col-span-1 lg:row-span-1", // Square card
    },
  },
  // Wide horizontal card
  {
    id: 4,
    name: "The crash- Animation Shortfilm ",
    description: "It highlights immersive environments, dynamic animations, innovative gameplay mechanics,",
    category: "Game Environment",
    thumbnail: "/images/crash.png",
    media: "/videos/crash.mp4",
    tools: ["Unreal Engine", "Fab Assets", "Maya"],
    link: "https://youtu.be/YgDTHFMUjbo",
    content: {
      overview:
        "As an Environment Artist, I contributed to the VR Farm Drone project by designing an immersive and realistic space to facilitate drone movement. My responsibilities included creating a detailed virtual farm environment by adding assets that accurately represented a real-world agricultural setting.  This involved creating smooth and responsive controls to enhance the simulations functionality and realism. My work combined technical precision and artistic vision to deliver an engaging and practical virtual reality experience.",
      features: [
        "Procedural tree generation",
        "Dynamic wind system",
        "Interactive wildlife",
      ],
      className: "lg:col-span-2 lg:row-span-1", // Wide card (spans 2 columns)
    },
  },
 
 
];
