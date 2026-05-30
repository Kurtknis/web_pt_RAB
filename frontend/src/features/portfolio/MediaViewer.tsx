"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/icons";

export function MediaViewer({ images, title }: { images: readonly string[]; title: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="gallery-grid gallery-grid--interactive">
        {images.map((image) => (
          <button type="button" key={image} onClick={() => setActive(image)} aria-label={`Open ${title} gallery image`}>
            <Image
              src={image}
              alt={`${title} gallery image by PT Cipta Kreasi Buana`}
              width={900}
              height={650}
              sizes="(max-width: 760px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>
      {active ? (
        <div className="media-viewer" role="dialog" aria-modal="true" aria-label={`${title} fullscreen media`}>
          <button type="button" onClick={() => setActive(null)} aria-label="Close media viewer">
            <Icon name="close" size={24} />
          </button>
          <Image src={active} alt={`${title} fullscreen media`} fill sizes="100vw" />
        </div>
      ) : null}
    </>
  );
}
