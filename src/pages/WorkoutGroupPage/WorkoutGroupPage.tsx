// src/pages/ExercisesPage/ExercisesPage.tsx
import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { TrashIcon } from "@radix-ui/react-icons";
import { useWorkoutGroups } from "../../hooks/useWorkoutGroups";
import { Box, Button, Flex, IconButton, Spinner } from "@radix-ui/themes";
import { TitlePage, InputComponent, ContentComponents } from "../../components";

export const WorkoutGroupPage = () => {
  const {
    workoutGroups,
    isLoading,
    error,
    createGroup,
    isCreating,
    deleteGroup,
  } = useWorkoutGroups();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name) return alert("Nome é obrigatório");
    createGroup(
      { name, description },
      {
        onSuccess: () => {
          setName("");
          setDescription("");
        },
      }
    );
  };

  return (
    <ContentComponents>
      {isLoading ? (
        <Spinner size="3" />
      ) : (
        <>
          {error ? <TitlePage title="Erro ao carregar dados" /> : null}
          <TitlePage title="Meus Grupos de Treinamento" />
          <Flex direction="row" gap="3" align="center" justify="center">
            {workoutGroups?.map((group) => (
              <Box
                style={{
                  border: "2px solid blue",
                  borderRadius: "8px",
                  padding: "1rem",
                  alignItems: "center",
                  display: "flex",
                }}
                key={group.id}
              >
                <Link to={`/workout-detail/${group.id}`}>
                  <strong>{group.name}</strong> - {group.description}
                </Link>
                <IconButton
                  size="1"
                  onClick={() => {
                    if (window.confirm(`Deletar "${group.name}"?`)) {
                      deleteGroup(group.id);
                    }
                  }}
                  style={{
                    marginLeft: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <TrashIcon width={18} height={18} />
                </IconButton>
              </Box>
            ))}
          </Flex>
          <Flex
            direction="column"
            align="center"
            justify="center"
            style={{ marginTop: "2rem", width: "50%" }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ marginBottom: "2rem", width: "100%" }}
            >
              <h2>Cadastrar novo grupo</h2>
              <Flex direction="row" gap="2" style={{ marginBottom: "1rem" }}>
                <InputComponent
                  value={name}
                  onChange={setName}
                  placeholder="Nome (ex: Peito e Tríceps)"
                />
                <InputComponent
                  value={description}
                  onChange={setDescription}
                  placeholder="Descrição (ex: tempo de treino, intensidade, etc)"
                />
              </Flex>
              <Button type="submit" disabled={isCreating}>
                {isCreating ? "Salvando..." : "Salvar Grupo"}
              </Button>
            </form>
          </Flex>
        </>
      )}
    </ContentComponents>
  );
};
