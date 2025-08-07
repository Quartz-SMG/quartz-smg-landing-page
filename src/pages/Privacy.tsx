import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const toggleLanguage = () => setIsEnglish(!isEnglish);

  // Basic SEO: title, meta description, canonical
  useEffect(() => {
    document.title = "Politique de confidentialité / Privacy Policy | Quartz SMG";

    const desc =
      "Quartz SMG – Politique de confidentialité / Privacy Policy: how we collect, use, and protect personal information. Contact: info@quartzsmg.com";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", "https://www.quartzsmg.com/privacy");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header>
        <Navigation isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      </header>

      <main className="container mx-auto px-4 py-12">
        <article className="prose prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            Politique de confidentialité / Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Dernière mise à jour : 7 août 2025
          </p>

          <section aria-labelledby="fr-title" className="mb-12">
            <h2 id="fr-title" className="text-2xl font-semibold mb-4">FRANÇAIS</h2>

            <h3 className="text-xl font-semibold mt-6">1. Introduction</h3>
            <p>
              Société minière Gerdin Inc. (« nous », « notre », « nos ») accorde une grande importance à la protection de vos renseignements personnels. Cette politique de confidentialité décrit comment nous recueillons, utilisons, divulguons et protégeons vos renseignements lorsque vous visitez notre site web https://www.quartzsmg.com (le « Site ») ou interagissez avec nous.
            </p>

            <h3 className="text-xl font-semibold mt-6">2. Renseignements collectés</h3>
            <p className="font-medium">Renseignements fournis volontairement :</p>
            <p>Nous recueillons les renseignements que vous nous fournissez directement, notamment :</p>
            <ul>
              <li>Prénom et nom</li>
              <li>Adresse courriel</li>
              <li>Numéro de téléphone</li>
              <li>Nom de votre entreprise</li>
              <li>Adresse postale</li>
              <li>Curriculum vitæ (CV) ou autres informations liées à l’emploi</li>
              <li>Informations de paiement</li>
            </ul>
            <p className="font-medium">Renseignements recueillis automatiquement :</p>
            <p>Nous utilisons des outils automatisés comme les cookies pour collecter :</p>
            <ul>
              <li>Adresse IP</li>
              <li>Identifiants d'appareil</li>
              <li>Type de navigateur</li>
              <li>Système d’exploitation</li>
              <li>Pages consultées, durée de visite</li>
              <li>URL de provenance</li>
              <li>Données de géolocalisation approximative</li>
            </ul>
            <p>Ces informations nous permettent de mieux comprendre l’utilisation du Site et d’en améliorer la performance.</p>

            <h3 className="text-xl font-semibold mt-6">3. Témoins (Cookies) et technologies similaires</h3>
            <ul>
              <li>Analyser l’utilisation du site (ex. : Google Analytics)</li>
              <li>Effectuer du remarketing publicitaire (ex. : Meta Pixel)</li>
              <li>Personnaliser votre expérience</li>
            </ul>
            <p className="mt-2">⚠️ Conformément à la Loi 25 du Québec, une bannière de consentement sera prochainement mise en place pour vous permettre de gérer vos préférences de suivi.</p>

            <h3 className="text-xl font-semibold mt-6">4. Utilisation des renseignements</h3>
            <ul>
              <li>Répondre à vos demandes de contact</li>
              <li>Fournir nos services et améliorer notre site</li>
              <li>Vous envoyer des communications marketing (avec votre consentement)</li>
              <li>Traiter des candidatures ou demandes d’emploi</li>
              <li>Analyser le trafic et les tendances</li>
              <li>Respecter les lois applicables</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">5. Partage des renseignements</h3>
            <p>Nous pouvons partager vos données avec :</p>
            <ul>
              <li>Nos filiales et sociétés affiliées</li>
              <li>Nos fournisseurs de services (hébergement, marketing, outils d’analyse)</li>
              <li>Nos partenaires commerciaux</li>
            </ul>
            <p>Nous exigeons de ces tiers qu’ils protègent vos renseignements selon des standards comparables aux nôtres.</p>

            <h3 className="text-xl font-semibold mt-6">6. Conservation</h3>
            <p>Vos renseignements sont conservés pendant une période de 7 ans, sauf obligation légale contraire.</p>

            <h3 className="text-xl font-semibold mt-6">7. Sécurité</h3>
            <p>Nous utilisons des mesures de sécurité raisonnables telles que :</p>
            <ul>
              <li>Certificat SSL</li>
              <li>Hébergement sécurisé via WordPress/Elementor</li>
              <li>Revue annuelle de sécurité</li>
            </ul>
            <p>Cependant, aucune méthode de transmission ou de stockage n’est totalement sécurisée.</p>

            <h3 className="text-xl font-semibold mt-6">8. Vos droits</h3>
            <p>Vous pouvez :</p>
            <ul>
              <li>Accéder à vos renseignements</li>
              <li>Demander leur correction ou suppression</li>
              <li>Retirer votre consentement</li>
              <li>Vous opposer à certaines utilisations</li>
            </ul>
            <p>Pour exercer ces droits, contactez-nous à <a href="mailto:info@quartzsmg.com" className="text-primary underline">info@quartzsmg.com</a>.</p>
          </section>

          <section aria-labelledby="en-title">
            <h2 id="en-title" className="text-2xl font-semibold mb-4">ENGLISH</h2>

            <h3 className="text-xl font-semibold mt-6">1. Introduction</h3>
            <p>
              Société minière Gerdin Inc. ("we", "our", "us") values your privacy. This Privacy Policy describes how we collect, use, disclose, and protect your personal information when you visit our website https://www.quartzsmg.com (the "Site") or otherwise interact with us.
            </p>

            <h3 className="text-xl font-semibold mt-6">2. Information We Collect</h3>
            <p className="font-medium">Information you provide:</p>
            <p>We may collect personal information that you voluntarily submit, including:</p>
            <ul>
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Mailing address</li>
              <li>Résumé (CV) or job application info</li>
              <li>Payment details</li>
            </ul>
            <p className="font-medium">Automatically collected data:</p>
            <p>We may collect information automatically through cookies and similar technologies, such as:</p>
            <ul>
              <li>IP address</li>
              <li>Device identifiers</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited, time spent</li>
              <li>Referring URLs</li>
              <li>Approximate location</li>
            </ul>
            <p>This data helps us analyze Site usage and improve performance.</p>

            <h3 className="text-xl font-semibold mt-6">3. Cookies and Tracking Technologies</h3>
            <ul>
              <li>Analyze site traffic (e.g., Google Analytics)</li>
              <li>Deliver retargeted ads (e.g., Meta Pixel)</li>
              <li>Personalize your experience</li>
            </ul>
            <p className="mt-2">⚠️ In compliance with Quebec’s Law 25, a cookie consent banner will soon be implemented to allow users to manage their preferences.</p>

            <h3 className="text-xl font-semibold mt-6">4. Use of Personal Information</h3>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Provide services and improve our Site</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Process job applications</li>
              <li>Analyze usage trends</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">5. Sharing of Information</h3>
            <p>We may share your information with:</p>
            <ul>
              <li>Our subsidiaries and affiliates</li>
              <li>Third-party service providers (hosting, analytics, marketing)</li>
              <li>Business partners</li>
            </ul>
            <p>We require all parties to maintain privacy standards at least as strict as ours.</p>

            <h3 className="text-xl font-semibold mt-6">6. Data Retention</h3>
            <p>We retain your personal information for 7 years, unless otherwise required by law.</p>

            <h3 className="text-xl font-semibold mt-6">7. Security</h3>
            <p>We implement reasonable safeguards such as:</p>
            <ul>
              <li>SSL encryption</li>
              <li>Secure hosting via WordPress/Elementor</li>
              <li>Annual security reviews</li>
            </ul>
            <p>However, no method of transmission or storage is entirely secure.</p>

            <h3 className="text-xl font-semibold mt-6">8. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw your consent</li>
              <li>Object to certain uses</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:info@quartzsmg.com" className="text-primary underline">info@quartzsmg.com</a>.</p>
          </section>
        </article>
      </main>

      <Footer isEnglish={isEnglish} />
    </div>
  );
};

export default Privacy;
