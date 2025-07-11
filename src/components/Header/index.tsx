import Logo from "/assets/logo-fundo.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-12 shadow-2xl">
      <div>
        <img src={Logo} alt="" className="size-32" />
      </div>
      <div>
        <ul className="flex gap-8">
          <li className="hover:bg-zinc-300 p-2 rounded-2xl font-bold">
            <a href="#">Academias</a>
          </li>
          <li className="hover:bg-zinc-300 p-2 rounded-2xl font-bold">
            <a href="#">Espaco do cliente</a>
          </li>
          <li className="hover:bg-zinc-300 p-2 rounded-2xl font-bold">
            <a href="#">Seja um franqueado</a>
          </li>
          <li className="bg-yellow-400 p-2 rounded-2xl font-bold hover:bg-yellow-500">
            <a href="#">Buscar academia</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
