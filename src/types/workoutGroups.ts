export interface WorkoutExercise {
  id: number;
  name: string;
  isFreeExercise: boolean;
  time?: number;
  photo_url: string;
  sets?: number;
  reps?: number;
  weight?: number;
}

export interface WorkoutGroup {
  id: number;
  name: string;
  exercises: WorkoutExercise[]; 
}
