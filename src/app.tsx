import Button from "./components/button";

const tasks = [
  {
    id: 1,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-11 07:00"),
  },
  {
    id: 2,
    title: "Cleaning The Room",
    completed: false,
    date: new Date("2025-05-11 08:00"),
  },
  {
    id: 3,
    title: "Morning Exercise",
    completed: false,
    date: new Date("2025-05-11 08:30"),
  },
  {
    id: 4,
    title: "Check Emails",
    completed: false,
    date: new Date("2025-05-11 09:00"),
  },
  {
    id: 5,
    title: "Team Meeting",
    completed: false,
    date: new Date("2025-05-11 10:00"),
  },
  {
    id: 6,
    title: "Project Work",
    completed: false,
    date: new Date("2025-05-11 11:00"),
  },
  {
    id: 7,
    title: "Lunch",
    completed: false,
    date: new Date("2025-05-11 12:30"),
  },
  {
    id: 8,
    title: "Client Call",
    completed: false,
    date: new Date("2025-05-11 14:00"),
  },
  {
    id: 9,
    title: "Code Review",
    completed: false,
    date: new Date("2025-05-11 15:30"),
  },
  {
    id: 10,
    title: "Plan Tomorrow",
    completed: false,
    date: new Date("2025-05-11 17:00"),
  },
];

export default function App() {
  return (
    <div className="bg-neutral-800 text-white min-h-screen">
      <header className="py-5 px-10">
        <h1 className="text-indigo-400 text-2xl font-bold">Doo Now</h1>
      </header>

      <ul className="p-10 space-y-5 flex flex-col items-center">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="border flex gap-5 px-5 rounded-sm py-2 justify-between min-w-lg max-w-lg"
            >
              <div className="flex gap-5 items-center">
                <input type="checkbox" name="completed" id="completed" />
                <h2>{task.title}</h2>
              </div>
              <Button>Delete</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
