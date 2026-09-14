"use client";

import { useEffect } from "react";
import { View } from "lucide-react";

interface ModelViewerProps {
  src: string;
  iosSrc?: string;
  alt: string;
}

export default function ModelViewer({ src, iosSrc, alt }: ModelViewerProps) {
  useEffect(() => {
    // Dynamically import the model-viewer web component on the client side
    import("@google/model-viewer").catch(console.error);
  }, []);

  return (
    <div className="w-full h-full relative bg-surface/50 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
      {/* @ts-ignore */}
      <model-viewer
        src={src}
        ios-src={iosSrc}
        alt={alt}
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        environment-image="neutral"
      >
        <button slot="ar-button" className="ar-button">
          <View size={20} />
          Ver na minha mesa
        </button>
      {/* @ts-ignore */}
      </model-viewer>
    </div>
  );
}
