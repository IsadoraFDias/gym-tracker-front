export interface WorkoutExercise {
  id: string;
  name: string;
  isFreeExercise: boolean;
  time?: number;
  photo_url?: string;
  sets?: number;
  reps?: number;
  weight?: number;
}

export interface WorkoutGroup {
  id: string;
  name: string;
  description: string;
  user_id: string;
  exercises?: WorkoutExercise[]; 
}

export type WorkoutGroupsSummary = {
  id: string;
  name: string;
  description: string;
  user_id: string;
}

export type GroupInput = {
  name: string;
  description: string;
}