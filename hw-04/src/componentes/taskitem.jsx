export default function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="flex justify-between items-center border p-2 rounded">
      <span
        className={`flex-1 cursor-pointer ${
          task.status === "completed" ? "line-through text-gray-500" : ""
        }`}
        onClick={() => toggleTask(task.id)}
      >
        {task.name}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 font-bold ml-2"
      >
        ✕
      </button>
    </li>
  );
}
