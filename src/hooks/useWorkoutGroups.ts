import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as api from "../api/workoutGroups";
import type { GroupInput, WorkoutGroup } from "../types";


export function useWorkoutGroups() {
  const queryCliente = useQueryClient();
  const queryKey = ["workoutGroups"];
  const { data: workoutGroups, error, isLoading } = useQuery<WorkoutGroup[]>({
    queryKey: queryKey,
    queryFn: api.fetchWorkoutGroups,
  });
  
  const {mutate: createGroup, isPending: isCreating} = useMutation({
    mutationFn: api.createWorkoutGroup,
    onSuccess: () => {
      queryCliente.invalidateQueries({ queryKey: queryKey });
    },
    onError: (error: Error) => {
      console.error("Erro ao criar grupo de treino:", error.message);
    }
  });

  const {mutate: updateGroup, isPending: isUpdating} = useMutation({
    mutationFn: ({ id, updatedGroup }: { id: string; updatedGroup: GroupInput }) => 
      api.updateWorkoutGroup(id, updatedGroup),
    onSuccess: () => {
      queryCliente.invalidateQueries({ queryKey: queryKey });
    },
    onError: (error: Error) => {
      console.error("Erro ao atualizar grupo de treino:", error.message);
    }
  });

  const {mutate: deleteGroup, isPending: isDeleting} = useMutation({
    mutationFn: api.deleteWorkoutGroup,
    onSuccess: () => {
      queryCliente.invalidateQueries({ queryKey: queryKey });
    },
    onError: (error: Error) => {
      console.error("Erro ao deletar grupo de treino:", error.message);
    }
  });

  return {
    workoutGroups,
    error,
    isLoading,
    createGroup,
    isCreating,
    deleteGroup,
    isDeleting,
    updateGroup,
    isUpdating
  };
}
