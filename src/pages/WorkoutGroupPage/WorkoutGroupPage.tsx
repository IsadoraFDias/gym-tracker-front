import { useWorkoutGroups } from "../../hooks/useWorkoutGroups";

export function WorkoutGroupPage() {
  const {workoutGroups} = useWorkoutGroups()
  return <div>{workoutGroups?.map(group => <div key={group.id}>{group.name}</div>)}</div>;
}
