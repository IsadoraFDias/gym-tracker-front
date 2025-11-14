const API_URL = "http://localhost:3333";

export async function fetchGroups() {
  const response = await fetch(`${API_URL}/workout-groups`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  if (!response.ok) {
    throw new Error("Falha ao buscar grupos de treino");
  }
  return response.json();
}

export async function fetchGroupById(id: number) {
  const response = await fetch(`${API_URL}/workout-groups/${id}`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  if (!response.ok) {
    throw new Error("Falha ao buscar detalhes do grupo de treino");
  }
  return response.json();
}
