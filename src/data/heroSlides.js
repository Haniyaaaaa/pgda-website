/** Resolve public portfolio images (works with Vite base './' for GitHub Pages) */
const img = (file) => `${import.meta.env.BASE_URL}portfolio/${file}`;

/** Portfolio & project screenshots for the hero showcase carousel */
export const heroSlides = [
  { src: img("slide-1.png"), alt: "Game project screenshot" },
  { src: img("slide-2.webp"), alt: "Indie game screenshot" },
  { src: img("slide-3.png"), alt: "Game development project" },
  { src: img("slide-4.png"), alt: "Unity game project" },
  { src: img("slide-5.png"), alt: "3D game environment" },
  { src: img("slide-6.png"), alt: "Game level design" },
  { src: img("slide-7.png"), alt: "Indie game art" },
  { src: img("slide-8.png"), alt: "Game prototype screenshot" },
  { src: img("slide-9.png"), alt: "Community game project" },
  { src: img("slide-10.png"), alt: "Game development work" },
  { src: img("slide-11.png"), alt: "Creative game project" },
  { src: img("slide-12.png"), alt: "Game jam project" },
  { src: img("slide-13.png"), alt: "Student game project" },
  { src: img("slide-14.png"), alt: "Indie game showcase" },
];
