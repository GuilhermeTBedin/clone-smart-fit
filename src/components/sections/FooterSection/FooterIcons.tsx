import {
  FaFacebook,
  FaInstagram,
  FaRegNewspaper,
  FaSpotify,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function FooterIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para o Facebook"
      >
        <FaFacebook color="white" size={32} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para o Instagram"
      >
        <FaInstagram color="white" size={32} />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para o YouTube"
      >
        <FaYoutube color="white" size={32} />
      </a>
      <a
        href="https://www.tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para o TikTok"
      >
        <FaTiktok color="white" size={32} />
      </a>
      <a
        href="https://www.spotify.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para o Spotify"
      >
        <FaSpotify color="white" size={32} />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link para o Twitter"
      >
        <FaTwitter color="white" size={32} />
      </a>
      <a href="#" aria-label="Link para o Blog ou Notícias">
        <FaRegNewspaper color="white" size={32} />
      </a>
    </div>
  );
}
