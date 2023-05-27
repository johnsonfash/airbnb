/* eslint-disable @next/next/no-img-element */
import { useMemo, useState } from "react";
import { blurImage } from "./core";

function PreloadImage({
  src,
  className,
  alt,
  md,
  sm,
  lg,
}: {
  src?: string;
  className?: string;
  alt?: string;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
}) {
  const [image, setImage] = useState("");

  useMemo(() => {
    if (typeof window === "undefined") return;
    const h = window.innerWidth;
    if (src) {
      setImage(
        blurImage(
          h > 992
            ? lg
              ? lg
              : md || sm
            : h > 768
            ? md
              ? md
              : lg || sm
            : sm
            ? sm
            : md || lg
        )
      );
      const img = new Image();
      img.onload = () => {
        setImage(img.src);
      };
      img.onerror = () => {
        setImage("");
      };
      img.src = src;
    }
  }, [src, lg, md, sm]);

  return (
    <img
      src={image}
      alt={alt}
      className={`${className} w-100`}
      loading="lazy"
    />
  );
}

export default PreloadImage;
