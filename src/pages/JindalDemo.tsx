import { useEffect, useState } from "react";
import demoVideo from "@/assets/jindal-demo.mp4";
import videoThumbnail from "@/assets/thumbnail.png";

const JindalDemo = () => {
  const [isTracked, setIsTracked] = useState(false);

  useEffect(() => {
    // Track visitor on page load
    const trackVisitor = async () => {
      if (isTracked) return;

      try {
        await fetch("/api/track-visitor", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: "/jindal/demo",
            referrer: document.referrer || "direct",
            userAgent: navigator.userAgent,
            timestamp: new Date().toISOString(),
          }),
        });
        setIsTracked(true);
      } catch (error) {
        console.error("Failed to track visitor:", error);
      }
    };

    trackVisitor();
  }, [isTracked]);

  // Prevent keyboard shortcuts for saving/downloading
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent Ctrl+S / Cmd+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
      }
      // Prevent Ctrl+Shift+I / Cmd+Option+I (DevTools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "I") {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-black/95 flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 border-b border-white/10">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-white">Jindal Port Demo</h1>
        </div>
      </header>

      {/* Main content with video player */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated bg-black select-none">
            {/* Video Player - Direct streaming with download protection */}
            <video
              className="w-full aspect-video"
              controls
              autoPlay
              playsInline
              preload="auto"
              src={demoVideo}
              poster={videoThumbnail}
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
            >
              Your browser does not support the video tag.
            </video>
            {/* Overlay to prevent drag */}
            <div
              className="absolute inset-0 pointer-events-none"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>

          {/* Video title/description */}
          <div className="mt-6 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              Terminal Management System Demo
            </h2>
            <p className="text-white/60">
              Watch our Terminal Management System demonstration
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} DataPaar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default JindalDemo;
