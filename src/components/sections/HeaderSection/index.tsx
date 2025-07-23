import { Link } from "react-router";
import Logo from "../../ui/Logo/Logo";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-12 shadow-2xl">
      <Logo />
      <div>
        <ul className="flex gap-8">
          <li className="hover:bg-zinc-300 p-2 rounded-2xl font-bold">
            <Link to="/">Pagina inicial</Link>
          </li>
          <li className="hover:bg-zinc-300 p-2 rounded-2xl font-bold">
            <Link to="/espaco-do-cliente">Espaco do cliente</Link>
          </li>
          <li className="hover:bg-zinc-300 p-2 rounded-2xl font-bold">
            <Link to="/seja-um-franqueado">Seja um franqueado</Link>
          </li>
          <li className="bg-yellow-400 p-2 rounded-2xl font-bold hover:bg-yellow-500">
            <a href="#">Buscar academia</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
