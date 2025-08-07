import { MapPin, Phone, Mail } from "lucide-react";

interface FooterProps {
  isEnglish: boolean;
}

const Footer = ({ isEnglish }: FooterProps) => {
  const content = {
    fr: {
      company: "Quartz SMG",
      description: "Spécialiste en production et vente de silice de haute qualité au Québec",
      contact: "Contactez-nous",
      address: "Région de Montréal, Québec",
      rights: "Tous droits réservés."
    },
    en: {
      company: "Quartz SMG", 
      description: "Specialist in high-quality silica production and sales in Quebec",
      contact: "Contact Us",
      address: "Montreal Region, Quebec",
      rights: "All rights reserved."
    }
  };

  const t = isEnglish ? content.en : content.fr;

  return (
    <footer className="glass border-t border-slate-700/50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold gradient-text mb-4">{t.company}</h3>
            <p className="text-slate-300 mb-4">{t.description}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{t.address}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(514) 000-0000</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@quartzsmg.com</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mine Kirouac</h3>
            <p className="text-muted-foreground">
              {isEnglish 
                ? "Our main quartzite extraction site providing high-quality silica for various industrial applications."
                : "Notre site principal d'extraction de quartzite fournissant de la silice de haute qualité pour diverses applications industrielles."
              }
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {t.company}. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;