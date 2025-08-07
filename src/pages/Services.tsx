import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pickaxe, Factory, Truck, MapPin, ArrowRight, Hammer, Zap, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const content = {
    fr: {
      title: "Services d’extraction, transformation et livraison de quartz",
      subtitle: "Extraction quartz et transformation quartz en Lanaudière (Québec). Production stable, machinerie dédiée et livraison pour construction, énergie et aménagement paysager.",
      extraction: {
        title: "Extraction de Quartzite",
        description: "Extraction professionnelle de quartzite de haute qualité à partir de notre mine Kirouac. Nous utilisons des équipements modernes et des techniques d'extraction respectueuses de l'environnement.",
        features: [
          "Extraction à ciel ouvert",
          "Équipement Komatsu moderne",
          "Contrôle qualité rigoureux",
          "Respect des normes environnementales"
        ]
      },
      processing: {
        title: "Traitement et Raffinage",
        description: "Notre usine de traitement moderne transforme le quartzite brut en silice de qualité industrielle selon vos spécifications exactes.",
        features: [
          "Concassage et criblage",
          "Purification de la silice",
          "Granulométries personnalisées",
          "Contrôle qualité en laboratoire"
        ]
      },
      delivery: {
        title: "Livraison et Logistique",
        description: "Service de livraison fiable dans toute la région de Montréal et au-delà. Nous nous adaptons à vos besoins de volume et de calendrier.",
        features: [
          "Camions de différentes capacités",
          "Livraison en vrac ou ensachée",
          "Planification flexible",
          "Service dans tout le Québec"
        ]
      },
      mine: {
        title: "Mine Kirouac",
        description: "Notre site d'extraction principal est stratégiquement situé près de Montréal, permettant un accès facile et des coûts de transport réduits.",
        location: "Région de Montréal, Québec"
      },
      cta: "Demander un devis"
    },
    en: {
      title: "Quartz Extraction, Processing and Delivery Services",
      subtitle: "Quartz extraction and processing in Lanaudière, Quebec. Stable production, dedicated machinery and delivery for construction, energy and landscaping.",
      extraction: {
        title: "Quartzite Extraction",
        description: "Professional extraction of high-quality quartzite from our Kirouac mine. We use modern equipment and environmentally responsible extraction techniques.",
        features: [
          "Open-pit extraction",
          "Modern Komatsu equipment",
          "Rigorous quality control",
          "Environmental compliance"
        ]
      },
      processing: {
        title: "Processing and Refining",
        description: "Our modern processing plant transforms raw quartzite into industrial-grade silica according to your exact specifications.",
        features: [
          "Crushing and screening",
          "Silica purification",
          "Custom particle sizes",
          "Laboratory quality control"
        ]
      },
      delivery: {
        title: "Delivery and Logistics",
        description: "Reliable delivery service throughout the Montreal region and beyond. We adapt to your volume and scheduling needs.",
        features: [
          "Various capacity trucks",
          "Bulk or bagged delivery",
          "Flexible scheduling",
          "Service throughout Quebec"
        ]
      },
      mine: {
        title: "Kirouac Mine",
        description: "Our main extraction site is strategically located near Montreal, allowing easy access and reduced transportation costs.",
        location: "Montreal Region, Quebec"
      },
      cta: "Request a quote"
    }
  };

  const t = isEnglish ? content.en : content.fr;

  const toggleLanguage = () => setIsEnglish(!isEnglish);

  useEffect(() => {
    const title = isEnglish
      ? "Quartz Extraction & Processing | Lanaudière – SMG"
      : "Extraction & Transformation de Quartz | Lanaudière – SMG";
    const desc = isEnglish
      ? "Quartz extraction and processing in Quebec (Lanaudière). Stable production, product diversification and personalized customer service."
      : "Extraction quartz et transformation quartz au Québec (Lanaudière). Production stable, diversification produits et service client personnalisé.";

    document.title = title;

    const upsertMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const upsertProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
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

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", url);

    // JSON-LD: Service
    const ldServiceId = "ld-service";
    const serviceLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEnglish
        ? "Quartz Extraction, Processing and Delivery"
        : "Extraction, Transformation et Livraison de Quartz",
      description: desc,
      serviceType: "Quartzite & high-purity silica (≈99%)",
      areaServed: ["Lanaudière", "Québec", "Canada"],
      provider: {
        "@type": "Organization",
        name: "SMG",
        url
      },
      offers: {
        "@type": "Offer",
        url
      }
    } as const;

    let ldService = document.getElementById(ldServiceId) as HTMLScriptElement | null;
    if (!ldService) {
      ldService = document.createElement("script");
      ldService.type = "application/ld+json";
      ldService.id = ldServiceId;
      document.head.appendChild(ldService);
    }
    ldService.text = JSON.stringify(serviceLd);
  }, [isEnglish]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-3 sm:px-4">
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

      {/* Services Grid */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Extraction Service */}
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://ixapoibuyumuuhamvost.supabase.co/storage/v1/object/public/public-assets/app-assets/old_photos/YGYV17641.jpeg"
                    alt="Extraction de quartz de haute pureté au Québec (Lanaudière)"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <CardTitle className="text-xl">{t.extraction.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {t.extraction.description}
                </p>
                <ul className="space-y-2">
                  {t.extraction.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Processing Service */}
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://ixapoibuyumuuhamvost.supabase.co/storage/v1/object/public/public-assets/app-assets/old_photos/IMG_3874-EDIT.jpg"
                    alt="Transformation et traitement du quartz – pureté 99%"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <CardTitle className="text-xl">{t.processing.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {t.processing.description}
                </p>
                <ul className="space-y-2">
                  {t.processing.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Delivery Service */}
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://ixapoibuyumuuhamvost.supabase.co/storage/v1/object/public/public-assets/app-assets/old_photos/truck1.jpg"
                    alt="Livraison de quartz au Québec et à l’international"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <CardTitle className="text-xl">{t.delivery.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {t.delivery.description}
                </p>
                <ul className="space-y-2">
                  {t.delivery.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            {isEnglish ? "Applications" : "Applications"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Hammer className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{isEnglish ? "Construction" : "Construction"}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{isEnglish ? "Countertops, flooring, shower surfaces" : "Surfaces de travail, sols, douches"}</li>
                  <li>{isEnglish ? "Durable quartzite; scratch- and stain-resistant" : "Quartzite durable; résistance aux rayures et aux taches"}</li>
                  <li>{isEnglish ? "Custom particle sizes for mixes" : "Granulométries personnalisées pour mélanges"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{isEnglish ? "Energy Sector" : "Secteurs Énergétiques"}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{isEnglish ? "High‑purity silica (≈99%) for industrial uses" : "Silice de haute pureté (≈99%) pour usages industriels"}</li>
                  <li>{isEnglish ? "Stable production and quality control" : "Production stable et contrôle qualité"}</li>
                  <li>{isEnglish ? "Reliable logistics across Quebec" : "Logistique fiable partout au Québec"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Leaf className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{isEnglish ? "Landscaping" : "Aménagement Paysager"}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>{isEnglish ? "Decorative aggregates and durable quartzite" : "Agrégats décoratifs et quartzite durable"}</li>
                  <li>{isEnglish ? "Bulk or bagged delivery" : "Livraison en vrac ou ensachée"}</li>
                  <li>{isEnglish ? "Flexible scheduling" : "Planification flexible"}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mine Information */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/f4d30f29-5fef-4273-a3c9-817e1655e8f6.png"
                alt="Mine Kirouac – extraction quartz Lanaudière"
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t.mine.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {t.mine.description}
              </p>
              <div className="flex items-center gap-3 text-muted-foreground mb-8">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">{t.mine.location}</span>
              </div>
              <Link to="/contact">
                <Button className="flex items-center gap-2">
                  {t.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Image */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {isEnglish ? "State-of-the-Art Operations" : "Opérations de Pointe"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {isEnglish 
                  ? "Our mining operations utilize the latest technology and equipment to ensure efficient extraction while maintaining the highest safety and environmental standards."
                  : "Nos opérations minières utilisent les dernières technologies et équipements pour assurer une extraction efficace tout en maintenant les plus hautes normes de sécurité et environnementales."
                }
              </p>
              <Link to="/contact">
                <Button variant="outline" className="flex items-center gap-2">
                  {isEnglish ? "Learn More" : "En savoir plus"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="/lovable-uploads/bcd7da19-fd60-4ad5-9338-dec3a84f5160.png"
                alt="Opérations de traitement du quartz au Québec"
                loading="lazy"
                decoding="async"
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

export default Services;