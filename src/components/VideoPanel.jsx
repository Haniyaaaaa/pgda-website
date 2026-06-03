import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getYouTubeId, youtubeEmbedUrl, youtubeThumbnail, youtubeWatchUrl } from "../utils/youtube";

function VideoCard({ title, url }) {
  const id = getYouTubeId(url);
  const hasUrl = Boolean(id);

  if (!hasUrl) {
    return (
      <div
        className="flex gap-3 rounded border p-3"
        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      >
        <div
          className="flex h-14 w-24 shrink-0 items-center justify-center text-lg opacity-40"
          style={{ background: "var(--card)" }}
        >
          ▶
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[0.68rem] leading-snug" style={{ color: "var(--text)" }}>
            {title}
          </p>
          <p className="mt-1 font-mono text-[0.58rem] label-upper" style={{ color: "var(--muted)" }}>
            Add URL in src/data/videos.js
          </p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={youtubeWatchUrl(id)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-3 rounded border p-3 transition-all duration-200 hover:border-[var(--accent)]"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <img
        src={youtubeThumbnail(id)}
        alt=""
        className="h-14 w-24 shrink-0 object-cover"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <p
          className="font-mono text-[0.68rem] leading-snug transition-colors group-hover:text-[var(--accent)]"
          style={{ color: "var(--text)" }}
        >
          {title}
        </p>
        <p className="mt-1 font-mono text-[0.58rem] label-upper" style={{ color: "var(--muted)" }}>
          Watch on YouTube ↗
        </p>
      </div>
    </a>
  );
}

function VideoEmbed({ url, title }) {
  const id = getYouTubeId(url);
  if (!id) return null;

  return (
    <div className="mt-4 overflow-hidden rounded border" style={{ borderColor: "var(--border)" }}>
      <div className="relative aspect-video w-full">
        <iframe
          title={title}
          src={youtubeEmbedUrl(id)}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function VideoPanel({ data }) {
  const [featuredUrl, setFeaturedUrl] = useState("");

  if (!data) return null;

  const flatItems = data.items
    ? data.items
    : data.categories?.flatMap((c) => c.items) ?? [];

  const firstWithUrl = flatItems.find((v) => getYouTubeId(v.url));
  const featured = featuredUrl || firstWithUrl?.url || "";

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-5 overflow-hidden"
    >
      <p className="font-mono text-[0.62rem] label-upper" style={{ color: "var(--cyan)" }}>
        {data.title}
      </p>

      {data.items && (
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {data.items.map((item, i) => (
            <div
              key={i}
              onClick={() => item.url && setFeaturedUrl(item.url)}
              onKeyDown={() => {}}
              role="presentation"
            >
              <VideoCard title={item.title} url={item.url} />
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {featured && <VideoEmbed url={featured} title="Featured tutorial" />}
      </AnimatePresence>

      {data.categories?.map((cat, ci) => (
        <div key={ci} className="mt-6">
          <div className="mb-2 flex flex-wrap items-baseline gap-2">
            <h4 className="font-syne text-sm font-bold" style={{ color: "var(--text)" }}>
              {cat.name}
            </h4>
            {cat.tag && (
              <span
                className="font-mono text-[0.55rem] label-upper px-2 py-0.5 rounded"
                style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
              >
                {cat.tag}
              </span>
            )}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {cat.items.map((item, i) => (
              <div key={i} onClick={() => item.url && setFeaturedUrl(item.url)} role="presentation">
                <VideoCard title={item.title} url={item.url} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
