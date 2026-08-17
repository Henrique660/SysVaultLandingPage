import { useEffect, useRef, useState } from "react";

export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return activeRef;
}
