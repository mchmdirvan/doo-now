export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-red-500 rounded-full px-2 py-1">{children}</button>
  );
}
