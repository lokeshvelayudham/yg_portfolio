export interface ProjectVideo {
  title: string;
  src: string;
  poster?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  role: string;
  summary: string;
  overview: string[];
  tools: string[];
  contributions: string[];
  hero: string;
  gallery: string[];
  videos: ProjectVideo[];
  externalLinks: ProjectLink[];
  featured: boolean;
}

const asset = (slug: string, filename: string) => `/portfolio/${slug}/${filename}`;

const gallery = (slug: string, prefix: string, count: number) =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return asset(slug, `${prefix}-${number}.webp`);
  });

export const projects: Project[] = [
  {
    slug: "lost-past",
    title: "Lost Past",
    category: "Environment Art",
    role: "Environment Artist",
    summary:
      "An ancient temple environment focused on modular architecture, sculpted trim detail, water shaders, and cinematic lighting.",
    overview: [
      "Lost Past is an environment art project created as part of an upcoming game, focused on capturing the atmosphere of an ancient temple hidden within time. The scene was fully modeled in Autodesk Maya, with a strong emphasis on modularity, architectural storytelling, and visual composition.",
      "Custom trim sheets were sculpted in ZBrush and textured in Substance 3D Painter, allowing efficient asset creation while maintaining a high level of surface detail across the environment. Every major asset, from the temple structure to the ornamental carvings, was built from scratch to establish a cohesive visual language inspired by ancient architecture.",
      "A significant portion of the project was dedicated to lighting and mood exploration. Multiple lighting passes refined the interaction between warm temple illumination, stone surfaces, and the reflective water feature at the center of the scene. Small details such as floating lotus flowers were placed to enhance scale, serenity, and environmental storytelling.",
    ],
    tools: ["Maya", "ZBrush", "Substance 3D Painter", "Redshift"],
    contributions: [
      "Environment modeling",
      "Modular asset creation",
      "Custom trim sheet workflow",
      "High-detail sculpting and texturing",
      "Lighting development and look exploration",
      "Water shader development",
      "Scene composition and final rendering",
    ],
    hero: asset("lost-past", "lost-past-hero.webp"),
    gallery: gallery("lost-past", "lost-past", 16),
    videos: [],
    externalLinks: [],
    featured: true,
  },
  {
    slug: "lost-rooms",
    title: "Lost Rooms",
    category: "Psychological Horror Game",
    role: "Primary Developer / Environment Artist",
    summary:
      "A first-person horror project built around unsettling room repetition, subtle anomalies, atmospheric lighting, and Blueprint-driven gameplay events.",
    overview: [
      "Lost Rooms is a first-person psychological horror game developed as part of DePaul Originals Studio. Inspired by the unsettling atmosphere of Exit 8 and the surreal horror of The Backrooms, the game places players in an endless sequence of familiar rooms where subtle anomalies challenge perception, memory, and reality.",
      "As the primary developer, I built the game from the ground up and took ownership of nearly every aspect of production. I created all 3D assets from scratch, including modeling, texturing, and environmental design. The environments were modeled in Maya and assembled in Unreal Engine 5, with a heavy focus on lighting, mood, and environmental storytelling.",
      "Beyond environment art, I implemented sound integration, visual effects, and gameplay systems using Blueprints, creating interactive anomalies, environmental events, and in-engine animations that drive the horror experience.",
    ],
    tools: ["Unreal Engine 5", "Maya", "Blueprints"],
    contributions: [
      "Environment art and level design",
      "3D modeling and texturing",
      "Asset creation pipeline",
      "Blueprint scripting",
      "Gameplay system implementation",
      "In-engine animation setup",
      "Sound and visual effects integration",
    ],
    hero: asset("lost-rooms", "lost-rooms-hero.webp"),
    gallery: gallery("lost-rooms", "lost-rooms", 20),
    videos: [
      {
        title: "Lost Rooms gameplay capture",
        src: asset("lost-rooms", "lost-rooms-video-01.mp4"),
        poster: asset("lost-rooms", "lost-rooms-hero.webp"),
      },
    ],
    externalLinks: [],
    featured: true,
  },
  {
    slug: "architectural-interior-lighting-study",
    title: "Architectural Interior Lighting Study",
    category: "Architectural Visualization",
    role: "Lighting Artist / 3D Artist",
    summary:
      "A contemporary interior study exploring natural sunlight, warm late-afternoon mood, material response, and clean visual composition.",
    overview: [
      "This architectural interior visualization was created as a lighting and mood exploration project, focusing on the interaction between natural sunlight and interior materials within a contemporary living space. The goal was to capture the warmth and subtle atmosphere of a late-afternoon indoor environment while maintaining a clean, minimalist aesthetic.",
      "The scene was fully assembled in Autodesk Maya, where composition, asset placement, and lighting setup were developed to guide the viewer's attention through the space. A combination of natural window light and strategically placed artificial light sources created a soft, balanced evening ambiance with realistic falloff and shadow definition.",
      "Materials and textures were selected to complement the warm lighting conditions, emphasizing contrast between matte surfaces, glossy furniture elements, and reflective materials. The final renders were produced with Redshift Renderer using physically based shading and global illumination.",
    ],
    tools: ["Maya", "Redshift"],
    contributions: [
      "Interior environment setup",
      "Architectural visualization",
      "Lighting development and mood exploration",
      "Material and texture creation",
      "Composition and scene layout",
      "Physically based rendering",
      "Look development and final rendering",
    ],
    hero: asset(
      "architectural-interior-lighting-study",
      "architecture-hero.webp",
    ),
    gallery: gallery(
      "architectural-interior-lighting-study",
      "architecture",
      4,
    ),
    videos: [],
    externalLinks: [],
    featured: true,
  },
  {
    slug: "puzzlelot",
    title: "PuzzleLot",
    category: "Puzzle / City-Building Game",
    role: "Environment Artist / Asset Artist",
    summary:
      "A stylized city-building puzzle game where parking constraints shape the layout, readability, and visual language of each city block.",
    overview: [
      "PuzzleLot is a puzzle and city-building game developed in Unreal Engine by a team of three developers. The game challenges players to design efficient and visually appealing city blocks while navigating restrictive parking minimum requirements.",
      "I created a significant portion of the game's 3D and 2D assets, ensuring a cohesive visual style that supported gameplay clarity and the overall aesthetic of the environment. I designed and modeled environmental assets, props, and supporting visual elements that helped bring the city-building experience to life.",
      "Beyond asset creation, I played a major role in environment development within Unreal Engine, assembling levels, integrating assets, and refining scene composition to create readable gameplay spaces.",
    ],
    tools: ["Unreal Engine", "Maya"],
    contributions: [
      "3D asset modeling",
      "2D asset creation",
      "Environment art and world building",
      "Unreal Engine level assembly",
      "Asset integration and optimization",
      "Visual design support",
      "Collaborative game development",
    ],
    hero: asset("puzzlelot", "puzzlelot-hero.webp"),
    gallery: gallery("puzzlelot", "puzzlelot", 7),
    videos: [],
    externalLinks: [],
    featured: true,
  },
  {
    slug: "the-plant-chicago-digital-twin",
    title: "The Plant Chicago Digital Twin",
    category: "Digital Twin / Data Visualization",
    role: "3D Visualization Artist",
    summary:
      "An interactive 3D facility visualization using color-coded spatial blocks to represent temperature patterns and sensor-backed environmental data.",
    overview: [
      "As part of my internship with The Plant Chicago, I contributed to the development of a digital twin of the facility, designed to visualize and monitor environmental data in an interactive 3D space.",
      "My work involved creating a visual system using color-coded blocks to represent temperature variations throughout the facility, allowing users to quickly identify temperature patterns and changes within different areas.",
      "The project is being expanded with integrated sensor technology that will provide live temperature data, enabling real-time visualization directly within the digital twin environment. This work was showcased at NeoCon 2026.",
    ],
    tools: ["3D Visualization", "Digital Twin Workflow", "Sensor Data Support"],
    contributions: [
      "Digital twin development",
      "3D facility visualization",
      "Temperature data representation",
      "Interactive data visualization",
      "Real-time sensor integration support",
      "Environmental monitoring systems",
    ],
    hero: asset("the-plant-chicago-digital-twin", "plant-hero.webp"),
    gallery: gallery("the-plant-chicago-digital-twin", "plant", 4),
    videos: [],
    externalLinks: [],
    featured: false,
  },
  {
    slug: "the-lagoon",
    title: "The Lagoon",
    category: "Virtual Production",
    role: "Unreal Simulation Artist",
    summary:
      "A professional film production contribution focused on Unreal camera setup, image plates, shot composition, and virtual production scene assembly.",
    overview: [
      "The Lagoon is an upcoming feature film produced by Blue Light Production Studios, scheduled for theatrical release in late Summer 2026. As an Unreal Simulation Artist, I contributed to the virtual production pipeline by working extensively with camera setups, shot composition, and image plate integration within Unreal Engine.",
      "My responsibilities included placing and aligning image plates, supporting camera-based workflows, and assisting in the setup of scenes involving the film's built-in Aria character.",
      "Through close collaboration with the production team, I helped ensure that virtual elements, camera perspectives, and environmental components were accurately integrated to support the film's visual storytelling.",
    ],
    tools: ["Unreal Engine"],
    contributions: [
      "Virtual production workflows",
      "Camera setup and shot composition",
      "Image plate integration",
      "Unreal Engine scene assembly",
      "Aria character scene support",
      "Cinematic environment development",
    ],
    hero: asset("the-lagoon", "lagoon-hero.webp"),
    gallery: gallery("the-lagoon", "lagoon", 3),
    videos: [
      {
        title: "Virtual production capture 01",
        src: asset("the-lagoon", "lagoon-video-01.mp4"),
        poster: asset("the-lagoon", "lagoon-hero.webp"),
      },
      {
        title: "Virtual production capture 02",
        src: asset("the-lagoon", "lagoon-video-02.mp4"),
        poster: asset("the-lagoon", "lagoon-hero.webp"),
      },
      {
        title: "Virtual production capture 03",
        src: asset("the-lagoon", "lagoon-video-03.mp4"),
        poster: asset("the-lagoon", "lagoon-hero.webp"),
      },
    ],
    externalLinks: [],
    featured: false,
  },
  {
    slug: "procedural-snow-environment-generator",
    title: "Procedural Snow Environment Generator",
    category: "Technical Art / Scripting",
    role: "Technical Artist",
    summary:
      "A MEL tool that procedurally generates snow environments in Maya with controllable rocks, trees, mountains, and snow particle effects.",
    overview: [
      "Developed as part of a scripting course, this tool was created to streamline environment creation in Maya. After working with environment artists, I noticed that manually populating large scenes with assets is time-consuming and can create performance issues when environments become too dense.",
      "To solve this, I developed a script that procedurally generates snow environments with a single click, automatically creating and placing elements such as rocks, mountains, and snow particle effects.",
      "The tool was designed to be flexible, allowing users to swap and customize assets to fit different environment styles and production needs.",
    ],
    tools: ["MEL", "Maya"],
    contributions: [
      "MEL scripting",
      "Procedural environment generation",
      "Automated asset placement",
      "Snow particle integration",
      "Customizable asset system",
      "Workflow optimization",
    ],
    hero: asset(
      "procedural-snow-environment-generator",
      "scripting-hero.webp",
    ),
    gallery: gallery("procedural-snow-environment-generator", "scripting", 2),
    videos: [
      {
        title: "Snow generator workflow",
        src: asset(
          "procedural-snow-environment-generator",
          "scripting-video-01.mp4",
        ),
        poster: asset(
          "procedural-snow-environment-generator",
          "scripting-hero.webp",
        ),
      },
    ],
    externalLinks: [],
    featured: false,
  },
  {
    slug: "beloved-friend",
    title: "Beloved Friend",
    category: "Collaborative 3D Animated Short",
    role: "Post-Production / 3D Modeling / Animation",
    summary:
      "A collaborative animated short film built by a five-artist team, with contributions across shot assembly, pacing, VFX integration, modeling, and animation.",
    overview: [
      "Beloved Friend is a collaborative 3D animated short film created by a team of five artists using Autodesk Maya. The project involved the complete production pipeline, including modeling, animation, scene assembly, and final presentation, with a strong emphasis on teamwork and storytelling.",
      "My primary contribution was in post-production and shot assembly, where I organized sequences, trimmed shots, refined pacing, and integrated visual effects to ensure a cohesive narrative flow.",
      "In addition to editing responsibilities, I contributed to the production process through 3D modeling and animation, creating assets and animating several key shots used throughout the film.",
    ],
    tools: ["Maya"],
    contributions: [
      "Shot assembly and sequence editing",
      "Post-production workflow",
      "Visual effects integration",
      "3D modeling",
      "Character and scene animation",
      "Collaborative production pipeline",
      "Final film presentation",
    ],
    hero: asset("beloved-friend", "beloved-friend-hero.webp"),
    gallery: gallery("beloved-friend", "beloved-friend", 10),
    videos: [],
    externalLinks: [
      {
        label: "Watch on YouTube",
        href: "https://www.youtube.com/watch?v=Ck_rxE5MwPc",
      },
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug).slice(0, 3);
}
