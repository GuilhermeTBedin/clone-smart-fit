import TituloSecoes from "../TituloSecoes";
import CardExperiencia from "./CardExperiencia";

export default function Experiencia() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-12">
      <TituloSecoes titulo="Experiencia" destaque="FitnessGym" />
      <ul className="flex gap-8">
        <li>
          <CardExperiencia
            imagem="equipamentos_alto_padrao"
            descricao="Equipamentos de alto padrao"
          />
        </li>
        <li>
          <CardExperiencia
            imagem="salas-exclusivas"
            descricao="Salas exclusivas de aulas coletivas"
          />
        </li>
        <li>
          <CardExperiencia
            imagem="areas-musculacao"
            descricao="Áreas de musculação e cárdio"
          />
        </li>
      </ul>
    </div>
  );
}
