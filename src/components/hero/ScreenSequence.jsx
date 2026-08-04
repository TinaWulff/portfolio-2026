import { useEffect, useState } from "react";

const TYPE_SPEED = 40;
const NEXT_LINE_DELAY = 420;
const NEXT_SCREEN_DELAY = 1500;

export default function ScreenSequence({ screens }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [activeCharCount, setActiveCharCount] = useState(0);

  useEffect(() => {
    setActiveScreenIndex(0);
    setActiveLineIndex(0);
    setActiveCharCount(0);
  }, [screens]);

  useEffect(() => {
    if (!screens.length) {
      return undefined;
    }

    const activeScreen = screens[activeScreenIndex];
    const activeLine = activeScreen.lines[activeLineIndex] ?? "";

    const timeoutId = window.setTimeout(() => {
      if (activeCharCount < activeLine.length) {
        setActiveCharCount((currentCount) => currentCount + 1);
        return;
      }

      if (activeLineIndex < activeScreen.lines.length - 1) {
        setActiveLineIndex((currentLine) => currentLine + 1);
        setActiveCharCount(0);
        return;
      }

      setActiveScreenIndex((currentScreen) => (currentScreen + 1) % screens.length);
      setActiveLineIndex(0);
      setActiveCharCount(0);
    }, activeCharCount < activeLine.length ? TYPE_SPEED : activeLineIndex < activeScreen.lines.length - 1 ? NEXT_LINE_DELAY : NEXT_SCREEN_DELAY);

    return () => window.clearTimeout(timeoutId);
  }, [activeCharCount, activeLineIndex, activeScreenIndex, screens]);

  if (!screens.length) {
    return null;
  }

  const activeScreen = screens[activeScreenIndex];

  return (
    <div className="screen-sequence" aria-live="polite">
      <div className="screen-sequence__panel" key={activeScreen.id}>
        {activeScreen.lines.map((line, index) => {
          if (index > activeLineIndex) {
            return null;
          }

          const visibleText = index < activeLineIndex ? line : line.slice(0, activeCharCount);
          const isTyping = index === activeLineIndex && activeCharCount < line.length;

          return (
            <span className={`screen-sequence__line${isTyping ? " is-typing" : ""}`} key={`${activeScreen.id}-${index}`}>
              {visibleText}
            </span>
          );
        })}
      </div>
    </div>
  );
}
