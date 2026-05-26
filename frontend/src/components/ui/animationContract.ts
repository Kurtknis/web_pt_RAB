export type MotionIntent = "entrance" | "hover" | "modal" | "reveal";

export const animationContract: Record<MotionIntent, { maxDurationMs: number; reducedMotion: "fade" | "none" }> = {
  entrance: { maxDurationMs: 700, reducedMotion: "fade" },
  hover: { maxDurationMs: 260, reducedMotion: "none" },
  modal: { maxDurationMs: 320, reducedMotion: "fade" },
  reveal: { maxDurationMs: 700, reducedMotion: "fade" },
};
