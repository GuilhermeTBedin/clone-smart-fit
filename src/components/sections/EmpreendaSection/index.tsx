import Button from "../../ui/Button";
import GroupCard from "../../ui/GroupCard";
import TituloSecoes from "../../ui/TituloSecoes";

const conteudo = [
  {
    imagem: "fachada",
    descricao: "Layout e estrutura padronizados",
  },
  {
    imagem: "equipamentos_alto_padrao",
    descricao: "Equipamentos de alto padrao",
  },
  {
    imagem: "areas-musculacao",
    descricao: "Áreas de musculação e cárdio",
  },
  {
    imagem: "salas-exclusivas",
    descricao: "Salas exclusivas de aulas coletivas",
  },
];

export default function Empreenda() {
  return (
    <div className="text-center items-center">
      <TituloSecoes
        titulo="Empreenda com a"
        destaque="força da marca Fitness Gym"
      />
      <h2 className="mt-4 text-xl">
        Visando o nosso maior propósito de democratizar o fitness de alto padrão
        nossas academias contam <br /> com o melhor que há no mercado com um
        preço acessível.
      </h2>
      <GroupCard conteudo={conteudo} />
      <a href="#formulario-franqueado">
        <Button principal>Quero ser um franqueado</Button>
      </a>
    </div>
  );
}
