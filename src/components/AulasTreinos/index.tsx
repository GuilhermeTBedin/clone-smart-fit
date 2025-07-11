import Button from "../Button";
import TituloSecoes from "../TituloSecoes";
import CardAulasTreinos from "./CardAulasTreinos";

export default function AulasTreinos() {
  return (
    <div className="text-center mb-10">
      <TituloSecoes titulo="Aulas e Treinos" destaque="exclusivos!" />
      <div className="flex items-center justify-center gap-8 p-12">
        <CardAulasTreinos
          titulo="Fitdance"
          duracao="45/60 min"
          imagem="fitdance-cover"
          intensidade="alta"
          descricao="Pra você manjar de todos os passinhos, as aulas de dança da Smart Fit são ministradas por professores licenciados pela FitDance."
        />
        <CardAulasTreinos
          titulo="Smart cross"
          duracao="30 min"
          imagem="smart-cross-cover"
          intensidade="alta"
          descricao="Emagrecimento com ganho de condicionamento físico em apenas 30 minutos? Esse é o Smart Cross, nosso treino de funcional coletivo de alta intensidade."
        />
        <CardAulasTreinos
          titulo="Body combat"
          duracao="30/45 min"
          imagem="body-combat-cover"
          intensidade="alta"
          descricao="Karatê, Jiu-jitsu, Capoeira, Kung Fu e Taekwondo são algumas das inspirações para a aula de BodyCombat. Esse treino ainda trabalha todo o corpo."
        />
      </div>
      <Button principal>Ver todas as aulas e treinos</Button>
    </div>
  );
}
