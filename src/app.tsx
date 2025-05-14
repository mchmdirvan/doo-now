const tasks = [
  {
    id: 1,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-11 7:00"),
  },
  {
    id: 2,
    title: "Cleaning The Room",
    completed: false,
    date: new Date("2025-05-11 08:00"),
  },
];

export default function App() {
  return (
    <div>
      <header className="border-b flex justify-center py-2">
        <h1>Doo Now</h1>
      </header>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.completed}</p>
              <p>Date Time: {task.date.toLocaleString()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
