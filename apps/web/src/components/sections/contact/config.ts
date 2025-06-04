import type { Contact } from "@/types/contact";
import {
  SiLinkedin,
  SiX,
  SiYoutube,
  SiArtstation
} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "paulrouviere2@gmail.com",
  socials: [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/paul-rouviere-386677257/",
      Icon: SiLinkedin,
    },
    {
      name: "Artstation",
      href: "https://www.artstation.com/paulrouviere",
      Icon: SiArtstation,
    },
  ],
};

export { contact };
