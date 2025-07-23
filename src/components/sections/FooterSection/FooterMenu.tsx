export default function FooterMenu() {
  const institucional = [
    "Sobre",
    "Conceito",
    "Investidores",
    "Central de ajuda",
    "Fale conosco",
  ];
  const planos = ["Planos", "Contratos", "Planos corporativos"];
  const corporativo = [
    "Imprensa",
    "Quero ser um franqueado",
    "Divulque sua marca",
    "Indique um ponto",
    "Trabalhe conosco",
  ];

  return (
    <div className="text-white flex flex-col text-center md:text-left md:flex-row justify-evenly w-full max-w-4xl gap-8 md:gap-4">
      <div>
        <h2 className="text-lg pb-4">Institucional</h2>
        <ul className="text-sm space-y-2">
          {institucional.map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-amber-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg pb-4">Planos</h2>
        <ul className="text-sm space-y-2">
          {planos.map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-amber-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg pb-4">Corporativo</h2>
        <ul className="text-sm space-y-2">
          {corporativo.map((item, index) => (
            <li key={index}>
              <a href="#" className="hover:text-amber-400 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
