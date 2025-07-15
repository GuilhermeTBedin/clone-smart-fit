export default function FooterMenu() {
  return (
    <div className="text-white flex flex-col text-center md:text-left md:flex-row justify-evenly w-full max-w-4xl gap-8 md:gap-4">
      <div>
        <h2 className="text-lg pb-4">Institucional</h2>
        <ul className="text-sm space-y-2">
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Conceito
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Investidores
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Central de ajuda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Fale conosco
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg pb-4">Planos</h2>
        <ul className="text-sm space-y-2">
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Planos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Contratos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Planos corporativos
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg pb-4">Corporativo</h2>
        <ul className="text-sm space-y-2">
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Imprensa
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Quero ser um franqueado
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Divulque sua marca
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Indique um ponto
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Trabalhe conosco
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
