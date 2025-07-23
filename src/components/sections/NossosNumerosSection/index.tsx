import TituloSecoes from "../../ui/TituloSecoes";
import { CiCirclePlus } from "react-icons/ci";

const conteudo = [
  { h2: "3 milhões de clientes", p: "na América Latina" },
  { h2: "3º grupo que mais cresce", p: "no mercado fitness mundialmente*" },
  { h2: "1000 academias", p: "na América latina, sendo 600 só no Brasil" },
  {
    h2: "11º no ranking global",
    p: "das marcas que mais evoluíram em faturamento**",
  },
];

export default function NossosNumeros() {
  return (
    <>
      <TituloSecoes
        titulo="Revolucionamos o"
        destaque="fitness de alto padrão"
      />
      <div className="flex justify-around px-32 gap-4 my-10">
        {conteudo.map((item) => (
          <>
            <CiCirclePlus size={32} color="black" />
            <div>
              <h2 className="font-bold text-3xl">{item.h2}</h2>
              <p className="text-xl">{item.p}</p>
            </div>
          </>
        ))}
      </div>
      <div className="text-center mb-10">
        <p>*Pesquisa final de 2018 em número de clientes.</p>
        <p>**Segundo o relatório da IHRSA Global Report 2021.</p>
      </div>
    </>
  );
}
