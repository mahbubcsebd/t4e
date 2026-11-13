"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const DELETE_MS = 32;
const TYPE_MS = 62;
const HOLD_MS = 1700;
const SWITCH_PAUSE_MS = 320;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const subscribeReducedMotion = (onChange) => {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false
  );
}

// Types / deletes through `phrases` in a loop. Returns the visible text and the
// index of the phrase currently shown (used to sync the hero scene).
export function useTypedPhrases(phrases, { isReducedMotion = false } = {}) {
  const phrasesKey = phrases.join("|");
  const [state, setState] = useState({ key: phrasesKey, text: phrases[0] || "", index: 0 });

  useEffect(() => {
    if (isReducedMotion || phrases.length < 2) return undefined;

    let timer;
    let isDeleting = true;
    let index = 0;
    let length = phrases[0].length;

    const tick = () => {
      let delay;
      if (isDeleting) {
        length -= 1;
        delay = DELETE_MS;
        if (length === 0) {
          isDeleting = false;
          index = (index + 1) % phrases.length;
          delay = SWITCH_PAUSE_MS;
        }
      } else {
        length += 1;
        delay = TYPE_MS;
        if (length === phrases[index].length) {
          isDeleting = true;
          delay = HOLD_MS;
        }
      }
      setState({ key: phrasesKey, text: phrases[index].slice(0, length), index });
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, HOLD_MS);
    return () => clearTimeout(timer);
    // phrases is rebuilt every render from the dictionary; phrasesKey tracks its content.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrasesKey, isReducedMotion]);

  // Language switch: show the first phrase until the new loop ticks.
  if (state.key !== phrasesKey) return { text: phrases[0] || "", phraseIndex: 0 };
  return { text: state.text, phraseIndex: state.index };
}
