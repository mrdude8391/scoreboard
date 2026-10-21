import { useState } from "react";

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullScreen = async () => {
    try {
      if (!document.fullscreenElement) {
        // Enter fullscreen mode (removes URL bar and bottom bar)
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
    } catch (error) {
      console.error("Error attempting to toggle fullscreen:", error);
    }
  };

  return (
    <button onClick={toggleFullScreen}>
      {isFullscreen ? "Exit Full Screen" : "Go Full Screen"}
    </button>
  );
}
