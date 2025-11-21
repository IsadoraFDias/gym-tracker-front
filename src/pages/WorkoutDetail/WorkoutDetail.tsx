import { Box, DataList } from "@radix-ui/themes";
import { ContentComponents, TitlePage } from "../../components";

export function WorkoutDetail() {
  const mockExercices = [
    {
      id: "021",
      name: "elevação lateral",
      isFreeExercise: false,
      time: null,
      photo_url: null,
      sets: 4,
      reps: 8,
      weight: 6,
    },
    {
      id: "022",
      name: "supino reto",
      isFreeExercise: false,
      time: null,
      photo_url: null,
      sets: 4,
      reps: 10,
      weight: 20,
    },
  ];
  return (
    <ContentComponents>
      <TitlePage title="Detalhe do Treino" />
      <Box>
        <h1>Nome do Grupo de exercicio</h1>
        {mockExercices.map((exercise) => (
          <Box
            key={exercise.id}
            style={{
                  border: "2px solid blue",
                  borderRadius: "8px",
                  padding: "1rem",
                  alignItems: "center",
                  display: "flex",
                }}
          >
            <DataList.Root
              orientation={{ initial: "vertical", sm: "horizontal" }}
            >
              <DataList.Item>
                <DataList.Label minWidth="88px">Exercicio</DataList.Label>
                <DataList.Value>{exercise.name}</DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </Box>
        ))}
      </Box>
    </ContentComponents>
  );
}
