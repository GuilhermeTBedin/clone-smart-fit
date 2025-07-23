import Card from "../Card";

interface CardItem {
  imagem: string;
  descricao: string;
}

interface GroupCardProps {
  conteudo: CardItem[];
}

export default function GroupCard({ conteudo }: GroupCardProps) {
  return (
    <ul className="flex gap-8 my-12 justify-center">
      {conteudo.map((item) => (
        <li key={item.descricao}>
          <Card imagem={item.imagem} descricao={item.descricao} />
        </li>
      ))}
    </ul>
  );
}
