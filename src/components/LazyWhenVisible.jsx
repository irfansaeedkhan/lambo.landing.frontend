import React, { useEffect, useRef, useState } from "react";

/**
 * Mounts children only when near the viewport so their JS/chunks
 * are not fetched on first paint (IntersectionObserver gate).
 */
function LazyWhenVisible({
  children,
  rootMargin = "280px 0px",
  minHeight,
  placeholder = null,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div
      ref={ref}
      style={
        !visible && minHeight
          ? { minHeight, contentVisibility: "auto", containIntrinsicSize: `auto ${minHeight}` }
          : undefined
      }
    >
      {visible ? children : placeholder}
    </div>
  );
}

export default LazyWhenVisible;
