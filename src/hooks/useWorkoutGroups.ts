import { useQuery } from "@tanstack/react-query";
import type { WorkoutGroup } from "../types/index";

export function useWorkoutGroups() {
  const { data, error, isLoading } = useQuery<WorkoutGroup[]>({
    queryKey: ["workoutGroups"],
    queryFn: async () => {
      const response = await fetch("/api/workout-groups");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return {
    workoutGroups: data,
    error,
    isLoading,
  };
}
