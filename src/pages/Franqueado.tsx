import BannerFranqueado from "../components/sections/BannerFranqueadoSection";
import Empreenda from "../components/sections/EmpreendaSection";
import Formulario from "../components/sections/FormularioSection";
import FranquiaSucesso from "../components/sections/FranquiaSucessoSection";
import NossoMercado from "../components/sections/NossoMercadoSection";
import NossosNumeros from "../components/sections/NossosNumerosSection";
import SeuSucesso from "../components/sections/SeuSucessoSection";

export default function Franqueado() {
  return (
    <main className="scroll-smooth">
      <BannerFranqueado />
      <NossosNumeros />
      <Empreenda />
      <NossoMercado />
      <FranquiaSucesso />
      <SeuSucesso />
      <Formulario />
    </main>
  );
}
