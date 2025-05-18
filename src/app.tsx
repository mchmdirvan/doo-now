import Button from "./components/button";

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

      <ul className="p-10 space-y-5">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="border flex gap-5 px-5 rounded-sm py-2"
            >
              <input type="checkbox" name="completed" id="completed" />
              <h2>{task.title}</h2>
              <Button>Delete</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
