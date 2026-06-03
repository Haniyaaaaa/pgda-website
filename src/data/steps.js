export const steps = [
  {
    id: 0,
    label: "Watch First",
    title: "Get the Big Picture",
    description:
      "Start with these overview videos before diving in. No experience required — just watch and absorb the landscape.",
    videoKey: "step0",
  },
  {
    id: 1,
    label: "Understand",
    title: "What is Game Dev?",
    description: "Game development is not only programming.",
    videoKey: null,
    understandBody: [
      "A game is created by multiple disciplines working together.",
    ],
    mainFields: [
      "Game Programming",
      "Game Design",
      "2D Art",
      "3D Art",
      "Environment Art",
      "Animation",
      "UI/UX Design",
      "Sound Design",
      "Music Production",
      "Narrative Design",
      "Production & Project Management",
      "Marketing & Publishing",
    ],
    understandFooter:
      "Before choosing a path, spend some time learning what each field does.",
    fieldsAnchor: "fields",
  },
  {
    id: 2,
    label: "Setup",
    title: "Choose Your Software",
    description:
      "Pick the engine and tools that match your interests and hardware. Unity and Godot for beginners; Unreal for high-end 3D; Blender for art.",
    videoKey: null,
    anchor: "software",
  },
  {
    id: 3,
    label: "Learn",
    title: "Master the Basics",
    description:
      "Follow curated tutorial paths for Unity, Godot, Unreal, design, art, and more. Build skills through guided projects.",
    videoKey: "step3",
  },
  {
    id: 4,
    label: "Build",
    title: "Make Small Projects",
    description:
      "Do NOT start your dream game as your first project. Instead, create small beginner games and finish at least 2 before moving to advanced tutorials.",
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
    footerNote:
      "Finish at least 2 projects, then look for more advanced tutorials.",
    linkedIn: {
      label: "PGDA on LinkedIn",
      url: "https://www.linkedin.com/company/pakistan-game-developer-alliance/?viewAsMember=true",
      hint: "Follow PGDA and mention us when you share your work.",
    },
  },
  {
    id: 5,
    label: "Share",
    title: "Build Your Online Presence",
    description:
      "Create LinkedIn, GitHub, ArtStation, and Itch.io profiles. Upload work early — your portfolio starts from day one.",
    videoKey: null,
    linkedIn: {
      label: "PGDA on LinkedIn",
      url: "https://www.linkedin.com/company/pakistan-game-developer-alliance/?viewAsMember=true",
      hint: "Mention PGDA on your profile so we can review your work.",
    },
  },
  {
    id: 6,
    label: "Collaborate",
    title: "Join a Team",
    description:
      "Learn communication, version control, scope management, and teamwork. Join PGDA ITC for game jams and commercial projects.",
    videoKey: null,
    anchor: "community",
  },
  {
    id: 7,
    label: "Portfolio",
    title: "Show Your Work",
    description:
      "Small games, GDDs, environment art, animations, UI designs, technical projects — showcase work relevant to your field.",
    videoKey: null,
  },
];
