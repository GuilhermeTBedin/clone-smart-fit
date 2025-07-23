import Logo from "../../ui/Logo/Logo";
import FooterIcons from "./FooterIcons";
import FooterInfo from "./FooterInfo";
import FooterMenu from "./FooterMenu";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 flex flex-col items-center p-8 gap-8">
      <Logo />
      <FooterIcons />
      <FooterMenu />
      <FooterInfo />
    </footer>
  );
}
