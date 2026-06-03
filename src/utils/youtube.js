/** Extract YouTube video ID from watch, embed, or youtu.be URLs */
export function getYouTubeId(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("/")[0];
    if (u.searchParams.has("v")) return u.searchParams.get("v");
    const embed = u.pathname.match(/\/embed\/([^/?]+)/);
    if (embed) return embed[1];
  } catch {
    return null;
  }
  return null;
}

export function youtubeThumbnail(id) {
  return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

export function youtubeWatchUrl(id) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function youtubeEmbedUrl(id) {
  return `https://www.youtube.com/embed/${id}?rel=0`;
}
