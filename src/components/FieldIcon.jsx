const iconMap = {
  programming: "bi-code-slash",
  design: "bi-controller",
  "2d-art": "bi-palette",
  "3d-art": "bi-box",
  environment: "bi-tree",
  animation: "bi-camera-reels",
  uiux: "bi-phone",
  sound: "bi-volume-up",
  music: "bi-music-note-beamed",
  narrative: "bi-book",
  production: "bi-clipboard-check",
  marketing: "bi-megaphone",
};

export default function FieldIcon({ id, className = "", style }) {
  const iconClass = iconMap[id];
  if (!iconClass) return null;
  return <i className={`bi ${iconClass} ${className}`} style={style} aria-hidden />;
}
