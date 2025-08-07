import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import EmailCopy from "@/components/EmailCopy";

const Contact = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const content = {
    fr: {
      title: "Contactez-nous",
      subtitle: "Demandez un devis de quartz de haute pureté 99% et des informations techniques. Fournisseur au Québec (Lanaudière) et à l’international.",
      form: {
        title: "Envoyez-nous un message",
        name: "Nom complet",
        email: "Adresse e-mail",
        company: "Entreprise",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer le message"
      },
      info: {
        title: "Informations de contact",
        address: "Adresse",
        addressValue: "10222 Bd Saint-Michel, Montréal-Nord, QC H1H 5H1",
        phone: "Téléphone",
        email: "E-mail",
        hours: "Heures d'ouverture",
        hoursValue: "Lundi - Vendredi: 8h00 - 17h00\nSamedi: 9h00 - 12h00"
      },
      mine: {
        title: "Mine Kirouac",
        description: "Notre site principal d'extraction est situé stratégiquement près de Montréal pour un service efficace dans toute la région."
      }
    },
    en: {
      title: "Contact Us",
      subtitle: "Request a quote for 99% high‑purity quartz and technical info. Supplier in Quebec (Lanaudière) and internationally.",
      form: {
        title: "Send us a message",
        name: "Full Name",
        email: "Email Address",
        company: "Company",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      },
      info: {
        title: "Contact Information",
        address: "Address",
        addressValue: "10222 Bd Saint-Michel, Montréal-Nord, QC H1H 5H1",
        phone: "Phone",
        email: "Email",
        hours: "Business Hours",
        hoursValue: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 12:00 PM"
      },
      mine: {
        title: "Kirouac Mine",
        description: "Our main extraction site is strategically located near Montreal for efficient service throughout the region."
      }
    }
  };

  const t = isEnglish ? content.en : content.fr;

  const placeQuery = "10222 Bd Saint-Michel, Montréal-Nord, QC H1H 5H1";

  const toggleLanguage = () => setIsEnglish(!isEnglish);

  useEffect(() => {
    const src = "https://js.hsforms.net/forms/embed/46952133.js";
    const existing = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
    if (!existing) {
      const s = document.createElement("script");
      s.src = src;
      s.defer = true;
      document.body.appendChild(s);
    }
  }, []);

  useEffect(() => {
    const title = isEnglish
      ? "Contact High‑Quality Quartz Supplier | Quebec – SMG"
      : "Contact Fournisseur Quartz Haute Qualité | Québec – SMG";
    const desc = isEnglish
      ? "Quotes for 99% high‑purity quartz, samples and technical info. Serving Quebec (Lanaudière) and international markets."
      : "Devis pour quartz de haute pureté 99%, échantillons et infos techniques. Service au Québec (Lanaudière) et marché international.";

    document.title = title;

    const upsertMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name=\"${name}\"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const upsertProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property=\"${property}\"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const url = window.location.origin + window.location.pathname;

    upsertMeta("description", desc);
    upsertMeta(
      "keywords",
      isEnglish
        ? "high‑purity quartz, Quebec quartz, Lanaudière quartz, quartz extraction, quartz processing, construction‑grade quartz, landscaping quartz, energy‑sector quartz, durable quartzite, scratch‑resistant quartz, stain‑resistant quartz, quartz countertops, quartz flooring, quartz shower surfaces, high‑quality quartz supplier, 99% pure quartz, quartz innovation, customer satisfaction quartz, Quebec quartz company, stable quartz production, quartz machinery development, quartz product diversification, Quartz SMG growth, quartz competitors, quartz value for money, personalized quartz customer service, quartz website, quartz website improvement, online visibility quartz, international quartz market"
        : "quartz de haute pureté, quartz Québec, quartz Lanaudière, extraction quartz, transformation quartz, quartz pour construction, quartz aménagement paysager, quartz secteurs énergétiques, quartzite durable, résistance aux rayures quartz, résistance aux taches quartz, quartz pour surfaces de travail, quartz pour sols, quartz pour douches, fournisseur quartz haute qualité, quartz pur 99%, innovation quartz, satisfaction client quartz, entreprise quartz Québec, production quartz stable, développement machinerie quartz, diversification produits quartz, croissance Quartz SMG, concurrents quartz, qualité prix quartz, service client personnalisé quartz, site web quartz, amélioration site web quartz, visibilité en ligne quartz, marché international quartz"
    );

    upsertProperty("og:title", title);
    upsertProperty("og:description", desc);
    upsertProperty("og:type", "website");
    upsertProperty("og:url", url);
    const ogImagePath = "/lovable-uploads/bcd7da19-fd60-4ad5-9338-dec3a84f5160.png";
    upsertProperty("og:image", window.location.origin + ogImagePath);

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", desc);

    let linkCanonical = document.querySelector('link[rel=\"canonical\"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", url);
  }, [isEnglish]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-2xl p-6 bg-foreground text-background shadow-lg">
                  <div
                    className="hs-form-frame"
                    data-region="na1"
                    data-form-id="275c81c5-5fc9-49f9-bb89-d2da705cbd77"
                    data-portal-id="46952133"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  {isEnglish
                    ? "This form is provided by HubSpot. By submitting, you consent to processing per our Privacy Policy."
                    : "Ce formulaire est fourni par HubSpot. En le soumettant, vous consentez au traitement selon notre Politique de confidentialité."}
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t.info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t.info.address}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {t.info.addressValue}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t.info.phone}</h3>
                      <p className="text-muted-foreground">514-355-8806</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t.info.email}</h3>
                      <div className="text-muted-foreground">
                        <EmailCopy email="info@quartzsmg.com" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t.info.hours}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {t.info.hoursValue}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mine Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">{t.mine.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.mine.description}
                  </p>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {isEnglish ? "Location" : "Localisation"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <GoogleMapEmbed
                    apiKey="AIzaSyDnavn3Px5y8XvuF1zq2U5ld7kbvJeCnqo"
                    query={placeQuery}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {isEnglish ? "Visit Our Operations" : "Visitez nos Opérations"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {isEnglish 
                  ? "We welcome visits to our Kirouac mine site. Contact us to arrange a tour and see our state-of-the-art quartzite extraction and processing operations firsthand."
                  : "Nous accueillons les visites de notre site minier Kirouac. Contactez-nous pour organiser une visite et voir de près nos opérations d'extraction et de traitement de quartzite de pointe."
                }
              </p>
            </div>
            <div>
              <img 
                src="/lovable-uploads/77f6a516-80dd-4ef8-9b9f-6dd507e475ef.png"
                alt="Échantillon de quartz de haute pureté 99%"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer isEnglish={isEnglish} />
    </div>
  );
};

export default Contact;