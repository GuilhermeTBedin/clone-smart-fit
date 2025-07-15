interface ButtonProps {
  children: React.ReactNode;
  principal?: boolean;
}

export default function Button({ children, principal }: ButtonProps) {
  return (
    <button
      className={`bg-yellow-400 text-zinc-800 p-2 rounded-2xl font-bold hover:bg-yellow-500 cursor-pointer ${
        principal ? "w-3xs" : "w-full"
      }`}
    >
      {children}
    </button>
  );
}
