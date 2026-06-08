export const PGDA_LINKEDIN =
  "https://www.linkedin.com/company/pakistan-game-developer-alliance/?viewAsMember=true";

export const steps = [
  {
    id: 0,
    label: "Overview",
    title: "Get the Big Picture",
    description:
      "Before choosing any software or tutorial, watch these overview videos to understand the full game development landscape — careers, paths, and what the industry actually looks like.",
    videoKey: "step0",
    introNote:
      "Don't rush into Unity, Unreal, or Blender yet. First, understand what game development is and where you might fit in.",
  },
  {
    id: 1,
    label: "Understand",
    title: "Understand What Game Development Is",
    description:
      "Game development is not only programming. It is a team effort across many creative and technical disciplines.",
    videoKey: null,
    understandBody: [
      "A single game is built by people with different skills working together — programmers write code, designers craft mechanics and levels, artists create visuals, and many more roles keep the project moving.",
    ],
    mainFields: [
      "Game Programming",
      "Game Design",
      "2D & 3D Art",
      "Animation",
      "Audio & Sound Design",
      "UI/UX Design",
      "Quality Assurance (QA)",
      "Marketing",
      "Production & Project Management",
      "Publishing & Narrative Design",
    ],
    understandFooter:
      "Spend time learning what each field does before choosing your starting path.",
    fieldsAnchor: "fields",
  },
  {
    id: 2,
    label: "Setup",
    title: "Choose Your Software",
    description:
      "Pick the engine and tools that match your interests and your PC. Unity and Godot are great for beginners; Unreal shines for high-end 3D; Blender, Maya, Aseprite, and Photoshop cover art and animation.",
    videoKey: null,
    anchor: "software",
  },
  {
    id: 3,
    label: "Learn",
    title: "Resource Library",
    description:
      "Your curated learning library — beginner tutorials organized by engine, discipline, and skill. Start with one path and build through guided projects.",
    videoKey: "step3",
  },
  {
    id: 4,
    label: "Build",
    title: "Build Small Projects",
    description:
      "Do not start your dream game first. Start small, complete small projects, and then move to bigger ideas.",
    videoKey: null,
    beginnerGames: [
      "Pong",
      "Snake",
      "Flappy Bird",
      "Brick Breaker",
      "Space Shooter",
      "Asteroids",
      "Tetris",
    ],
    footerNote: "Start small. Finish projects. Then grow.",
  },
  {
    id: 5,
    label: "Share",
    title: "Build Your Online Presence",
    description:
      "Create profiles on key platforms and share your work early. Your portfolio starts from day one — tag PGDA so we can review, support, and showcase your progress.",
    videoKey: null,
    platforms: [
      { name: "LinkedIn", url: "https://www.linkedin.com/", hint: "Professional network — mention PGDA on your profile" },
      { name: "GitHub", url: "https://github.com/", hint: "Code repos, game projects, and version control" },
      { name: "ArtStation", url: "https://www.artstation.com/", hint: "3D art, concept art, and environment work" },
      { name: "Behance", url: "https://www.behance.net/", hint: "UI/UX, illustration, and creative portfolios" },
      { name: "itch.io", url: "https://itch.io/", hint: "Publish and share your small games" },
    ],
    linkedIn: {
      label: "PGDA on LinkedIn",
      url: PGDA_LINKEDIN,
      hint: "Follow PGDA and tag us when you share your work.",
    },
  },
  {
    id: 6,
    label: "Collaborate",
    title: "Join PGDA ITC — Indie Team Center",
    description:
      "PGDA ITC is where members find teammates, join game jams, create indie teams, and work on small game projects together. Learn communication, scope management, and teamwork.",
    videoKey: null,
    anchor: "community",
    communityLinks: [
      { label: "PGDA WhatsApp", url: "https://chat.whatsapp.com/EdbOlMRDQGN1CEVHTXJ0MA", style: "whatsapp" },
      { label: "ITC WhatsApp", url: "https://chat.whatsapp.com/CxM9EDrIuaMInMgWPcrIVi", style: "whatsapp" },
      { label: "PGDA Discord", url: "https://discord.gg/QR46nakFP", style: "discord" },
      { label: "PGDA LinkedIn", url: PGDA_LINKEDIN, style: "linkedin" },
    ],
  },
  {
    id: 7,
    label: "Portfolio",
    title: "Show Your Work",
    description:
      "Small games, GDDs, environment art, animations, UI designs, technical projects — showcase work relevant to your field and keep building.",
    videoKey: null,
  },
];
