// src/pages/ExercisesPage/ExercisesPage.tsx
import { type FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
// 1. Importa o hook
import { useWorkoutGroups } from '../../hooks/useWorkoutGroups';

export const WorkoutGroupPage = () => {
  // 2. Consome o hook
  const {
    workoutGroups,
    isLoading,
    error,
    createGroup,
    isCreating,
    deleteGroup,
  } = useWorkoutGroups();

  // Estado local, apenas para o formulário
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name) return alert('Nome é obrigatório');
    // 3. Chama a função do hook
    createGroup(
      { name, description },
      {
        onSuccess: () => {
          // Limpa o form SÓ se a mutação der certo
          setName('');
          setDescription('');
        },
      }
    );
  };

  // --- Renderização ---
  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar dados.</div>;

  return (
    <div>
      {/* Formulário de Criação */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <h3>Novo Grupo</h3>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome (ex: Treino A)"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição (ex: Peito e Tríceps)"
        />
        <button type="submit" disabled={isCreating}>
          {isCreating ? 'Salvando...' : 'Salvar Grupo'}
        </button>
      </form>

      {/* Lista de Grupos */}
      <h1>Meus Grupos de Treino</h1>
      <ul>
        {workoutGroups?.map((group) => (
          <li key={group.id}>
            <Link to={`/workout-groups/${group.id}`}>
              <strong>{group.name}</strong> - {group.description}
            </Link>
            <button
              onClick={() => {
                if (window.confirm(`Deletar "${group.name}"?`)) {
                  // 4. Chama a outra função do hook
                  deleteGroup(group.id);
                }
              }}
              style={{ marginLeft: '1rem', color: 'red' }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};