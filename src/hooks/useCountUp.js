import { useEffect, useState } from "react";

export function useCountUp(end, duration = 1400, active = false, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setValue(decimals > 0 ? current : Math.floor(current));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(end);
    };

    requestAnimationFrame(tick);
  }, [end, duration, active, decimals]);

  return value;
}
