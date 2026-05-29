"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type FlexImageProps = Omit<ImageProps, "src"> & { src: string };

function swapExt(src: string): string | null {
  if (src.endsWith(".jpg")) return src.replace(/\.jpg$/, ".png");
  if (src.endsWith(".jpeg")) return src.replace(/\.jpeg$/, ".png");
  if (src.endsWith(".png")) return src.replace(/\.png$/, ".jpg");
  return null;
}

export function FlexImage({ src, alt, ...rest }: FlexImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [tried, setTried] = useState(false);

  const handleError = () => {
    if (!tried) {
      const fallback = swapExt(currentSrc);
      if (fallback) {
        setCurrentSrc(fallback);
        setTried(true);
      }
    }
  };

  return <Image src={currentSrc} alt={alt} onError={handleError} {...rest} />;
}
