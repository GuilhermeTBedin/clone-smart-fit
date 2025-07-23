import Button from "../components/ui/Button";
import Logo from "../components/ui/Logo/Logo";

export default function Login() {
  return (
    <div className="pb-32 pt-20 flex justify-evenly">
      <div className="gap-2">
        <Logo />
        <h3 className="font-bold mb-1">
          Este é o canal de gerenciamento da sua conta.
        </h3>
        <h3 className="font-bold  mb-2.5">Por aqui você consegue:</h3>
        <ul className="list-disc list-inside">
          <li>Atualizar dados pessoais</li>
          <li>Consultar histórico</li>
          <li>Trocar de unidade</li>
          <li>Alterar forma de pagamento</li>
          <li>Troca de plano</li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-2 border border-zinc-300 px-16 rounded-2xl">
        <h2 className="font-bold text-2xl">Boas-vindas ao Espaço do Cliente</h2>
        <p>Use seu documento de acesso para gerenciar a sua conta!</p>
        <div className="flex gap-2 justify-between w-100">
          <label
            htmlFor=""
            className="border border-zinc-500 rounded-sm px-10 py-1"
          >
            CPF
          </label>
          <input
            type="text"
            placeholder="Seu documento"
            className="border border-zinc-500 px-10 py-1 rounded-sm"
          />
        </div>
        <Button>Entrar</Button>
      </div>
    </div>
  );
}
