import Button from "../../ui/Button";
import TituloSecoes from "../../ui/TituloSecoes";

const conteudo = [
  {
    imagem: "/assets/smart-fit.avif",
    titulo: "Projeto Arquitetônico",
    descricao:
      "A franqueadora oferece tecnologia para escolha do ponto comercial e projeto arquitetônico para as novas unidades franqueadas, respeitando as especificidades locais e atendendo ao design consolidado da marca.",
  },
  {
    imagem: "/assets/motivos-treinar.avif",
    titulo: "Marketing Nacional",
    descricao:
      "Acesso a um plano de Marketing que engloba todo o país, reforçando a presença da marca. Ferramentas de captação, gestão e relacionamento com clientes. Marca Top of Mind e líder de categoria.",
  },
  {
    imagem: "/assets/motivos-treinar.avif",
    titulo: "Gestão Operacional",
    descricao:
      "Acesso a uma equipe de consultoria dedicada às novas unidades, ao longo dos 12 meses iniciais. Após esse período o suporte continua através de um regional para continuarmos garantindo apoio regular e suporte na organização do dia a dia da operação.",
  },
];

export default function FranquiaSucesso() {
  return (
    <div className="flex flex-col items-center my-10">
      <TituloSecoes
        titulo="Tenha todo o suporte para construir uma"
        destaque="franquia de sucesso"
      />
      <div className="flex justify-between gap-10 mx-32 my-10">
        {conteudo.map((item) => (
          <div
            key={item.titulo}
            className="text-center flex flex-col items-center gap-4"
          >
            <img src={item.imagem} alt="" />
            <h3 className="font-bold text-2xl">{item.titulo}</h3>
            <p className="text-xl">{item.descricao}</p>
          </div>
        ))}
      </div>
      <a href="#formulario-franqueado">
        <Button principal>Quero ser um franqueado</Button>
      </a>
    </div>
  );
}
