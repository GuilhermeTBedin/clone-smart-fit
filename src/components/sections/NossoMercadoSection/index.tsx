import Button from "../../ui/Button";
import TituloSecoes from "../../ui/TituloSecoes";
import { FaArrowAltCircleRight } from "react-icons/fa";

const conteudo = [
  "O mercado fitness cresce média de 8,7% anualmente no mundo*;",
  "Brasil é o 2º segundo maior país no ranking mundial;",
  "O setor movimentou + de U$2 bilhões de dólares no país e ocupa 3º posição no ranking de faturamento do mundo;",
  "As academias representam 60% do faturamento total do setor no país**.",
];

export default function NossoMercado() {
  return (
    <div className="my-10 flex flex-col items-center">
      <TituloSecoes titulo="Conheça" destaque="o nosso Mercado!" />
      <div className="flex justify-center items-top mt-10 gap-20 mb-4">
        <img
          src="/assets/stonks.avif"
          alt="imagem de um grafico em crescimento"
          className="w-125 h-80"
        />
        <div className="w-1/3">
          <ul className="flex flex-col gap-2">
            {conteudo.map((item, index) => (
              <li className="flex gap-2 items-center" key={index}>
                <FaArrowAltCircleRight
                  size={40}
                  className="mt-1 flex-shrink-0"
                />
                <p className="text-xl">{item}</p>
              </li>
            ))}
          </ul>
          <div className="my-4 ml-4">
            <p>*Fonte: facebook.com.br</p>
            <p>**Segundo o relatório da IHRSA Global Report 2021.</p>
          </div>
        </div>
      </div>
      <a href="#formulario-franqueado">
        <Button principal>Quero ser um franqueado</Button>
      </a>
    </div>
  );
}
