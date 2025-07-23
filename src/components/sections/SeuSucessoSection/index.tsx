import Button from "../../ui/Button";
import TituloSecoes from "../../ui/TituloSecoes";

const conteudo = [
  {
    titulo: "Lucratividade média",
    valor: "30%",
  },
  {
    titulo: "Investimentos a partir de",
    valor: "R$3,8MM",
  },
  {
    titulo: "Taxa inicial da franquia",
    valor: "R$100mil",
  },
];

export default function SeuSucesso() {
  return (
    <div className="text-center my-10">
      <TituloSecoes titulo="O sucesso do seu negócio" destaque="começa aqui!" />
      <div className="mt-10 flex flex-col gap-4">
        <ul className="flex justify-evenly text-center">
          {conteudo.map((item) => (
            <li className="flex flex-col gap-4">
              <p className="text-2xl">{item.titulo}</p>
              <p className="text-7xl font-bold text-shadow-lg text-shadow-amber-400">
                {item.valor}
              </p>
            </li>
          ))}
        </ul>
        <div className="items-center gap-4 flex flex-col">
          <p className="text-2xl mb-10">
            O recurso mínimo de R$2,5M comprovado em capital próprio
          </p>
          <a href="#formulario-franqueado">
            <Button principal>Quero ser um franqueado</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
