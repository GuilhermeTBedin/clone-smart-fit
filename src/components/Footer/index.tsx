import FooterIcons from "./FooterIcons";
import FooterInfo from "./FooterInfo";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 flex flex-col items-center p-8 gap-8">
      <FooterLogo />
      <FooterIcons />
      <FooterMenu />
      <FooterInfo />
    </footer>
  );
}
