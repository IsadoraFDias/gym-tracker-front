import type { GroupInput, WorkoutGroup } from "../types";

const API_URL = "http://localhost:3333";

export const fetchWorkoutGroups = async (): Promise<WorkoutGroup[]> => {
  const response = await fetch(`${API_URL}/workout-groups`);
  if (!response.ok) {
    throw new Error("Failed to fetch workout groups");
  }
  return response.json();
}

export const fetchWorkoutGroupsId = async (id: string): Promise<WorkoutGroup> => {
  const response = await fetch(`${API_URL}/workout-groups/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch workout group");
  }
  return response.json();
}

export const createWorkoutGroup = async (newGroup: GroupInput): Promise<WorkoutGroup> => {
  const response = await fetch(`${API_URL}/workout-groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newGroup)
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to create workout group");
  }
  return response.json();
}

export const deleteWorkoutGroup = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/workout-groups/${id}`, {
    method: "DELETE"
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to delete workout group");
  }
}

export const updateWorkoutGroup = async (id: string, updatedGroup: GroupInput): Promise<WorkoutGroup> => {
  const response = await fetch(`${API_URL}/workout-groups/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedGroup)
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to update workout group");
  }
  return response.json();
}