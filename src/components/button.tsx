export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-red-500 max-h-8 px-2 rounded-sm text-xs">
      {children}
    </button>
  );
}
