export interface Exercise {
  name: string;
  sets: string;
  url: string;
}

export interface Workout {
  id: number;
  title: string;
  duration: string;
  theme: 'starter' | 'main';
  warmupType: 'upper' | 'lower' | 'full';
  cooldownType: 'upper' | 'lower' | 'full';
  exercises: Exercise[];
}

export interface WarmupCooldown {
  upper: Exercise[];
  lower: Exercise[];
  full: Exercise[];
}

export type TabType = 'workout' | 'progress' | 'profile';
