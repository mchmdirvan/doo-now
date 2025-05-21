export default function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 max-h-8 px-2 rounded-sm text-xs"
    >
      {children}
    </button>
  );
}
