import Button from "../../ui/Button";
import TituloSecoes from "../../ui/TituloSecoes";

export default function Formulario() {
  return (
    <div
      id="formulario-franqueado"
      className="w-full flex justify-center my-10"
    >
      <div className="w-2/3 lg:w-1/2 flex flex-col items-center gap-8 text-center bg-zinc-50 py-8 px-20 rounded-3xl">
        <TituloSecoes titulo="Quero ser um" destaque="franqueado!" />
        <p className="text-lg">
          Preencha o formulário abaixo para que a gente possa avaliar o seu
          perfil! Aproveite e inclua até três sócios* pra embarcar nessa com
          você!
        </p>
        <form action="" className="w-full text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <label htmlFor="nome" className="mb-1 font-semibold">
                Nome*
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                className="border border-zinc-400 rounded p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="telefone" className="mb-1 font-semibold">
                Telefone*
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(DDD) 99999-9999"
                className="border border-zinc-400 rounded p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-semibold">
                Email*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="contato@email.com"
                className="border border-zinc-400 rounded p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cidade" className="mb-1 font-semibold">
                Cidade
              </label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                placeholder="Sua cidade"
                className="border border-zinc-400 rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="renda" className="mb-1 font-semibold">
                Renda mensal
              </label>
              <input
                id="renda"
                name="renda"
                type="number"
                placeholder="Ex: 300.000,00"
                className="border border-zinc-400 rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cidade-interesse" className="mb-1 font-semibold">
                Cidade de interesse
              </label>
              <input
                id="cidade-interesse"
                name="cidade-interesse"
                type="text"
                placeholder="Cidade de interesse"
                className="border border-zinc-400 rounded p-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="socios" className="mb-1 font-semibold">
                Número de sócios
              </label>
              <input
                id="socios"
                name="socios"
                type="number"
                placeholder="Máximo 3"
                min="0"
                max="3"
                className="border border-zinc-400 rounded p-2"
              />
            </div>
            <div className="text-center mt-8">
              <Button>Enviar</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
