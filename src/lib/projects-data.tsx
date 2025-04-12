// lib/projects-data.ts
export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  media: string;
  tools: string[];
  play: string;
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
        thumbnail: "/projects/neon-city-thumb.jpg",
        media: "/projects/neon-city-showcase.mp4",
        tools: ["Maya", "Wordpress", "Unreal Engine", "Readypalyerme"],
        play: "https://mivy.me/",
        content: {
          overview: "Contributed to a VR project centered on a 100-story building, where the team was responsible for level design, while taking charge of developing the environment. Key responsibilities included crafting realistic, high-quality virtual spaces, managing the overall look and feel of the environment, and collaborating closely with team members to ensure smooth integration of design elements. Skilled in balancing creativity with technical precision to deliver an engaging and visually cohesive VR experience.",
          features: [
            "Procedurally generated neon signs",
            "Real-time global illumination",
            "Interactive elements"
          ],
          className: "lg:col-span-1 lg:row-span-2", // Tall card (spans 2 rows)
        }
      },
      // Medium square card
      {
        id: 2,
        name: "Iqverse",
        description: "I - IQtech Pvt Ltd (India)",
        category: "VR Experience",
        thumbnail: "/projects/vr-gallery-thumb.jpg",
        media: "/projects/vr-gallery-showcase.mp4",
        tools: ["Unreal Engine", "Maya", "Blender"],
        play: "https://iqverse.com/",
        content: {
          overview: "As an Unreal Designer for IQ Verse, I helped create immersive virtual environments that brought people together and supported digital activities like virtual events and trading. Using Unreal Engine, I designed detailed 3D assets and planned the layout of spaces for events like VirtuFests, ensuring they were engaging, easy to navigate, and visually appealing. I also worked on optimizing the platform’s performance to provide users with a smooth and enjoyable experience. This role allowed me to use both technical skills and creativity to design interactive spaces that encouraged exploration and connection in the metaverse.",
          features: [
            "Multiplayer support",
            "Custom exhibition layouts",
            "Real-time artwork loading"
          ],
          className: "lg:col-span-1 lg:row-span-1", // Square card
        }
      },
      {
        id: 3,
        name: "Swim Genius",
        description: "Iqtech Pvt Ltd (Cambodia)",
        category: "VR Experience",
        thumbnail: "/projects/vr-gallery-thumb.jpg",
        media: "/projects/vr-gallery-showcase.mp4",
        tools: ["Unreal Engine", "Mixamo", "Blender"],
        play: "https://iqtechmax.com/",
        content: {
          overview: "I contributed to Swim Genius, a VR simulation by IQTechMax that helps children aged 12+ learn swimming and overcome aquaphobia. Using Unreal Engine’s Blueprint system, I developed realistic water and swimming mechanics to create an immersive, interactive environment. The project bridges virtual training with real-world skills, combining technical precision with creative design.",
          features: [
            "Multiplayer support",
            "Custom exhibition layouts",
            "Real-time artwork loading"
          ],
          className: "lg:col-span-1 lg:row-span-1", // Square card
        }
      },
      // Wide horizontal card
      {
        id: 4,
        name: "Vr Farm",
        description: "Vr Fram Drone Stimulation - Garuda Aerospace (Dubai)",
        category: "Game Environment",
        thumbnail: "/projects/forest-thumb.jpg",
        media: "/projects/forest-showcase.mp4",
        tools: ["Unreal Engine", "Fab Assets", "Maya"],
        play: "https://garuda.aero/",
        content: {
          overview: "As an Environment Artist, I contributed to the VR Farm Drone project by designing an immersive and realistic space to facilitate drone movement. My responsibilities included creating a detailed virtual farm environment by adding assets that accurately represented a real-world agricultural setting.  This involved creating smooth and responsive controls to enhance the simulations functionality and realism. My work combined technical precision and artistic vision to deliver an engaging and practical virtual reality experience.",
          features: [
            "Procedural tree generation",
            "Dynamic wind system",
            "Interactive wildlife"
          ],
          className: "lg:col-span-2 lg:row-span-1", // Wide card (spans 2 columns)
        }
      },
      // Small square card
      {
        id: 5,
        name: "Super Stylist Game",
        description: "Game environment",
        category: "Mobile Game",
        thumbnail: "/projects/underwater-thumb.jpg",
        media: "/projects/underwater-showcase.mp4",
        tools: ["Maya", "ZBrush", "Substance Painter"],
        play: "https://apps.apple.com/us/app/super-stylist-game-dress-up/id6446013845",
        content: {
          overview: "As a Game Design Intern for Super Stylist: Dress Up, I played a key role in delivering a modern fashion gaming experience by designing trendy outfits and developing innovative gameplay challenges. I conducted in-depth research on hyper-casual fashion games, uncovering ways to refine gameplay mechanics, enhance monetization strategies, and increase user retention. My focus was on celebrating the diversity of Western fashion while ensuring the game remained engaging and polished. By collaborating with designers and developers, I contributed to creating features that balanced creativity and user satisfaction. This role sharpened my abilities in game design, market analysis, and user engagement.",
          features: [
            "Dynamic lighting effects",
            "Aquatic creature AI",
            "Procedural coral reefs"
          ],
          className: "lg:col-span-1 lg:row-span-1", // Small square
        }
      },
      
      // Large square card
      {
        id: 6,
        name: "Poke of words ",
        description: "Exploration game",
        category: "Environment Design",
        thumbnail: "/projects/alley-thumb.jpg",
        media: "/projects/alley-showcase.mp4",
        tools: ["Blender", "Substance Painter", "Unreal Engine"],
        play: "https://play.google.com/store/apps/details?id=com.pixcellplay.ddu&pli=1",
        content: {
          overview: "I contributed to Poke of Words by actively participating in project discussions and identifying gameplay bugs, providing detailed reports for developers. I proposed innovative mechanics and features, supported by design documentation like level blueprints and flowcharts. Additionally, I conducted competitor analysis and researched hyper-casual gaming trends to ensure the project aligned with industry standards and player expectations. This experience allowed me to enhance my skills in gameplay analysis, design documentation, and creative problem-solving while gaining valuable insights into the development process and the competitive gaming market.",
          features: [
            "Dynamic weather system",
            "Interactive advertisements",
            "Procedural trash/debris"
          ],
          className: "lg:col-span-2 lg:row-span-2", // Large square (2x2)
        }
      },
      {
        id: 7,
        name: "Bunny Go ",
        description: "Exploration game",
        category: "3D Design",
        thumbnail: "/projects/underwater-thumb.jpg",
        media: "/projects/underwater-showcase.mp4",
        tools: ["Maya", "ZBrush", "Substance Painter"],
        play: "https://underwaterworld.com/",
        content: {
          overview: "During my internship as a Game Designer at PixcellPlay, I worked on BunnyGo, gaining experience across various aspects of game development. Collaborating with an experienced Level Designer, I learned to create engaging and progressively challenging levels. My responsibilities included designing tiles and strategically placing blockages to enhance difficulty while maintaining player engagement. I focused on achieving a balance between challenge and enjoyment, ensuring a rewarding gameplay experience. This hands-on role broadened my understanding of the game design process and deepened my appreciation for the creativity involved in crafting levels, while honing my skills in level design and strategic problem-solving.",
          features: [
            "Dynamic lighting effects",
            "Aquatic creature AI",
            "Procedural coral reefs"
          ],
          className: "lg:col-span-1 lg:row-span-1", // Small square
        }
      },
      {
        id: 8,
        name: "Mystic Forest",
        description: "Procedurally generated fantasy woodland environment",
        category: "Game Environment",
        thumbnail: "/projects/forest-thumb.jpg",
        media: "/projects/forest-showcase.mp4",
        tools: ["Houdini", "Substance Designer", "Unity"],
        play: "https://mysticforest.com/",
        content: {
          overview: "A magical forest with dynamic vegetation and weather.",
          features: [
            "Procedural tree generation",
            "Dynamic wind system",
            "Interactive wildlife"
          ],
          className: "lg:col-span-2 lg:row-span-1", // Wide card (spans 2 columns)
        }
      },
      {
        id: 9,
        name: "VR Art Gallery",
        description: "Interactive virtual space for digital art exhibitions",
        category: "VR Experience",
        thumbnail: "/projects/vr-gallery-thumb.jpg",
        media: "/projects/vr-gallery-showcase.mp4",
        tools: ["Unity", "Oculus SDK", "Blender"],
        play: "https://vrartgallery.com/",
        content: {
          overview: "An immersive VR experience showcasing digital artwork.",
          features: [
            "Multiplayer support",
            "Custom exhibition layouts",
            "Real-time artwork loading"
          ],
          className: "lg:col-span-1 lg:row-span-2", // Tall card (spans 2 rows)
        }
      },
      {
        id: 10,
        name: "VR Art Gallery",
        description: "Interactive virtual space for digital art exhibitions",
        category: "VR Experience",
        thumbnail: "/projects/vr-gallery-thumb.jpg",
        media: "/projects/vr-gallery-showcase.mp4",
        tools: ["Unity", "Oculus SDK", "Blender"],
        play: "https://vrartgallery.com/",
        content: {
          overview: "An immersive VR experience showcasing digital artwork.",
          features: [
            "Multiplayer support",
            "Custom exhibition layouts",
            "Real-time artwork loading"
          ],
          className: "lg:col-span-1 lg:row-span-1", // Square card
        }
      },
      {
        id: 11,
        name: "VR Art Gallery",
        description: "Interactive virtual space for digital art exhibitions",
        category: "VR Experience",
        thumbnail: "/projects/vr-gallery-thumb.jpg",
        media: "/projects/vr-gallery-showcase.mp4",
        tools: ["Unity", "Oculus SDK", "Blender"],
        play: "https://vrartgallery.com/",
        content: {
          overview: "An immersive VR experience showcasing digital artwork.",
          features: [
            "Multiplayer support",
            "Custom exhibition layouts",
            "Real-time artwork loading"
          ],
          className: "lg:col-span-1 lg:row-span-1", // Square card
        }
      },
];