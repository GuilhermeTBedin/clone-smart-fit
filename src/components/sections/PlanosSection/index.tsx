import TituloSecoes from "../../ui/TituloSecoes";
import CardPlanos from "./Card";

export default function Planos() {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="flex flex-col items-center justify-center gap-4 p-12">
        <TituloSecoes
          titulo="Venha treinar na"
          destaque="maior rede de academias da América Latina"
        />
        <p>
          Os melhores equipamentos e infraestrutura com mensalidades acessíveis.
        </p>
      </div>
      <div className="flex flex-row gap-6">
        <CardPlanos
          nomePlano="Plano Black"
          descricao="Treine em qualquer academia da Smart Fit, seja no Brasil ou na América Latina. São +1.700 unidades em 15 países!"
          precoPromocional="19,00"
          preco="149,90"
          fidelidade="12 meses de fidelidade"
          destaque
        />
        <CardPlanos
          nomePlano="Plano Fit"
          descricao="Nosso plano mais econômico para você se exercitar quando e quanto quiser
        na academia que escolher!"
          precoPromocional="19,00"
          preco="99,90"
          fidelidade="12 meses de fidelidade"
        />
        <CardPlanos
          nomePlano="Plano Smart"
          descricao="Nosso plano mensal para você que não quer se comprometer, mas quer treinar em uma academia de alto padrão!"
          precoPromocional="119,90"
          preco="119,90"
        />
      </div>
    </div>
  );
}
