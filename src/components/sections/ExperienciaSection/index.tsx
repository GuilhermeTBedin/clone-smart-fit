import GroupCard from "../../ui/GroupCard";
import TituloSecoes from "../../ui/TituloSecoes";

const conteudo = [
  {
    imagem: "equipamentos_alto_padrao",
    descricao: "Equipamentos de alto padrao",
  },
  {
    imagem: "salas-exclusivas",
    descricao: "Salas exclusivas de aulas coletivas",
  },
  {
    imagem: "areas-musculacao",
    descricao: "Áreas de musculação e cárdio",
  },
];

export default function Experiencia() {
  return (
    <div className="flex flex-col items-center justify-center p-12">
      <TituloSecoes titulo="Experiencia" destaque="FitnessGym" />
      <GroupCard conteudo={conteudo} />
    </div>
  );
}
