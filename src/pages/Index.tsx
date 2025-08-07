import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Pickaxe, Truck, Factory } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const content = {
    fr: {
      hero: {
        title: "Quartz de haute pureté 99% au Québec",
        subtitle: "Extraction, transformation et livraison de quartz en Lanaudière, Québec — pour la construction, l’énergie et l’aménagement paysager.",
        cta: "Nos Services"
      },
      about: {
        title: "À propos de SMG",
        description: "Entreprise quartz au Québec axée sur l’innovation, une production stable et la satisfaction client. Notre mine Kirouac, en Lanaudière, fournit du quartz de haute qualité (jusqu’à 99% de pureté) avec un excellent rapport qualité‑prix."
      },
      services: {
        title: "Nos Services",
        extraction: {
          title: "Extraction",
          description: "Extraction de quartz (quartzite) de haute pureté au Québec"
        },
        processing: {
          title: "Traitement",
          description: "Transformation et raffinage du quartz selon vos spécifications"
        },
        delivery: {
          title: "Livraison",
          description: "Livraison fiable au Québec et vers le marché international"
        }
      },
      contact: {
        title: "Contactez-nous",
        description: "Prêt à obtenir un devis pour du quartz de haute pureté ? Contactez‑nous dès aujourd’hui."
      }
    },
    en: {
      hero: {
        title: "99% High‑Purity Quartz in Quebec",
        subtitle: "Quartz extraction, processing and delivery in Lanaudière, Quebec — for construction, energy and landscaping.",
        cta: "Our Services"
      },
      about: {
        title: "About SMG",
        description: "Quebec quartz company focused on innovation, stable production and customer satisfaction. Our Kirouac mine in Lanaudière supplies high‑quality quartz (up to 99% purity) with great value for money."
      },
      services: {
        title: "Our Services",
        extraction: {
          title: "Extraction",
          description: "High‑purity quartz (quartzite) extraction in Quebec"
        },
        processing: {
          title: "Processing",
          description: "Quartz processing and refining to your specifications"
        },
        delivery: {
          title: "Delivery",
          description: "Reliable delivery across Quebec and to international markets"
        }
      },
      contact: {
        title: "Contact Us",
        description: "Ready to request a quote for high‑purity quartz? Get in touch today."
      }
    }
  };
  const t = isEnglish ? content.en : content.fr;

  const toggleLanguage = () => setIsEnglish(!isEnglish);

  useEffect(() => {
    const title = isEnglish
      ? "High‑Purity Quartz in Quebec | 99% Supplier – SMG"
      : "Quartz de haute pureté au Québec | Fournisseur 99% – SMG";
    const desc = isEnglish
      ? "99% high‑purity quartz from Lanaudière, Quebec. Quartz extraction, processing and delivery for construction, energy and landscaping."
      : "Quartz de haute pureté 99% en Lanaudière (Québec). Extraction, transformation et livraison pour la construction, l’énergie et l’aménagement paysager.";

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

    // JSON-LD: Organization
    const ldId = "ld-org";
    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SMG",
      url,
      description: desc,
      areaServed: ["Lanaudière", "Quebec", "Canada"],
      availableLanguage: ["fr", "en"],
      keywords: isEnglish
        ? "high‑purity quartz, Quebec, Lanaudière, extraction, processing, delivery"
        : "quartz de haute pureté, Québec, Lanaudière, extraction, transformation, livraison"
    } as const;

    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.id = ldId;
      document.head.appendChild(ld);
    }
    ld.text = JSON.stringify(org);

    // JSON-LD: FAQPage
    const faqId = "ld-faq";
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: (isEnglish
        ? [
            {
              "@type": "Question",
              name: "Is SMG quartz 99% pure?",
              acceptedAnswer: { "@type": "Answer", text: "Yes, we offer up to 99% high‑purity quartz with certificates available upon request." }
            },
            {
              "@type": "Question",
              name: "Is it scratch‑ and stain‑resistant?",
              acceptedAnswer: { "@type": "Answer", text: "Our quartzite is engineered for durability and is suitable for countertops, flooring and shower surfaces." }
            },
            {
              "@type": "Question",
              name: "Do you deliver internationally?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. We deliver across Quebec and serve international markets depending on volumes." }
            },
            {
              "@type": "Question",
              name: "Which sectors do you serve?",
              acceptedAnswer: { "@type": "Answer", text: "Construction, energy sector, and landscaping, with stable production and personalized customer service." }
            }
          ]
        : [
            {
              "@type": "Question",
              name: "Le quartz SMG est‑il 99% pur ?",
              acceptedAnswer: { "@type": "Answer", text: "Oui, nous offrons jusqu’à 99% de quartz de haute pureté avec certificats disponibles sur demande." }
            },
            {
              "@type": "Question",
              name: "Résiste‑t‑il aux rayures et aux taches ?",
              acceptedAnswer: { "@type": "Answer", text: "Notre quartzite est conçu pour la durabilité et convient aux surfaces de travail, aux sols et aux douches." }
            },
            {
              "@type": "Question",
              name: "Livrez‑vous à l’international ?",
              acceptedAnswer: { "@type": "Answer", text: "Oui. Nous livrons partout au Québec et desservons le marché international selon les volumes." }
            },
            {
              "@type": "Question",
              name: "Quels secteurs desservez‑vous ?",
              acceptedAnswer: { "@type": "Answer", text: "Construction, secteurs énergétiques et aménagement paysager, avec une production stable et un service client personnalisé." }
            }
          ])
    } as const;

    let ldFaq = document.getElementById(faqId) as HTMLScriptElement | null;
    if (!ldFaq) {
      ldFaq = document.createElement("script");
      ldFaq.type = "application/ld+json";
      ldFaq.id = faqId;
      document.head.appendChild(ldFaq);
    }
    ldFaq.text = JSON.stringify(faq);
  }, [isEnglish]);

  return (
    <div className="min-h-screen">
      <Navigation isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      
      <main>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/lovable-uploads/bcd7da19-fd60-4ad5-9338-dec3a84f5160.png"
          onTimeUpdate={(e) => {
            const v = e.currentTarget;
            if (v.duration && v.duration - v.currentTime < 0.06) {
              v.currentTime = 0.01; // seamless loop, avoids decode stall at end
            }
          }}
          className="absolute inset-0 w-full h-full object-cover z-0 transform-gpu will-change-transform"
        >
          <source src="https://ixapoibuyumuuhamvost.supabase.co/storage/v1/object/public/public-assets/app-assets/videos/background-low.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold gradient-text mb-8 animate-fade-in">
            {t.hero.title}
          </h1>
          <p
            className={`${isEnglish ? "text-xl lg:text-2xl" : "text-[1.375rem] lg:text-[1.65rem]"} text-slate-200 mb-12 leading-relaxed animate-fade-in animation-delay-200`}
          >
            {t.hero.subtitle}
          </p>
          <a href="/services">
            <Button size="lg" className="text-lg px-8 py-4 animate-fade-in animation-delay-400">
              {t.hero.cta}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-8">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/lovable-uploads/f4d30f29-5fef-4273-a3c9-817e1655e8f6.png"
                alt={isEnglish ? "Komatsu equipment in quarry — 99% high‑purity quartz in Lanaudière, Quebec" : "Équipement Komatsu dans la carrière — quartz de haute pureté 99% en Lanaudière, Québec"}
                loading="lazy"
                decoding="async"
                className="rounded-3xl shadow-glass w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-center gradient-text mb-16">
            {t.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 border-amber-500/20">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full mb-6 border border-amber-500/30">
                  <Pickaxe className="h-10 w-10 text-amber-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">{t.services.extraction.title}</h3>
                <p className="text-slate-300">{t.services.extraction.description}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 border-amber-500/20">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full mb-6 border border-amber-500/30">
                  <Factory className="h-10 w-10 text-amber-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">{t.services.processing.title}</h3>
                <p className="text-slate-300">{t.services.processing.description}</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card p-8 text-center hover:shadow-glow transition-all duration-300 hover:scale-105 border-amber-500/20">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full mb-6 border border-amber-500/30">
                  <Truck className="h-10 w-10 text-amber-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-100 mb-4">{t.services.delivery.title}</h3>
                <p className="text-slate-300">{t.services.delivery.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-scale-in">
              <img 
                src="/lovable-uploads/bcd7da19-fd60-4ad5-9338-dec3a84f5160.png"
                alt={isEnglish ? "High‑purity quartz stockpile in Lanaudière, Quebec — industrial equipment" : "Stock de quartz de haute pureté en Lanaudière, Québec — équipement industriel"}
                loading="lazy"
                decoding="async"
                className="rounded-3xl shadow-glass w-full h-auto"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-8">
                {isEnglish ? "Premium Silica Production" : "Production de Silice Premium"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {isEnglish 
                  ? "Our state-of-the-art equipment and proven extraction methods ensure the highest quality silica production. Located strategically near Montreal for efficient distribution across Quebec."
                  : "Nos équipements de pointe et nos méthodes d'extraction éprouvées garantissent une production de silice de la plus haute qualité. Situés stratégiquement près de Montréal pour une distribution efficace à travers le Québec."
                }
              </p>
              <a href="/services">
                <Button variant="outline" size="lg" className="flex items-center gap-3">
                  {isEnglish ? "Learn More" : "En Savoir Plus"}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-8">
                {isEnglish ? "Exceptional Purity" : "Pureté Exceptionnelle"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {isEnglish 
                  ? "Our quartzite specimens demonstrate the exceptional quality and purity of our silica products. Each piece is carefully extracted and processed to meet the highest industry standards."
                  : "Nos spécimens de quartzite démontrent la qualité exceptionnelle et la pureté de nos produits de silice. Chaque pièce est soigneusement extraite et traitée pour répondre aux plus hautes normes de l'industrie."
                }
              </p>
              <a href="/contact">
                <Button size="lg" className="flex items-center gap-3">
                  {t.contact.title}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/lovable-uploads/77f6a516-80dd-4ef8-9b9f-6dd507e475ef.png"
                alt={isEnglish ? "White quartz specimen — 99% high‑purity quartz supplier in Quebec (Lanaudière)" : "Spécimen de quartz blanc — fournisseur de quartz de haute pureté 99% au Québec (Lanaudière)"}
                loading="lazy"
                decoding="async"
                className="rounded-3xl shadow-glass w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            {isEnglish ? "Quartz FAQ" : "FAQ Quartz"}
          </h2>
          <div className="space-y-4">
            <details className="rounded-lg border p-4 bg-background/60">
              <summary className="cursor-pointer font-semibold">{isEnglish ? "Is SMG quartz 99% pure?" : "Le quartz SMG est‑il 99% pur ?"}</summary>
              <p className="mt-2 text-muted-foreground">{isEnglish ? "Yes, up to 99% purity. Certificates available on request." : "Oui, jusqu’à 99% de pureté. Certificats disponibles sur demande."}</p>
            </details>
            <details className="rounded-lg border p-4 bg-background/60">
              <summary className="cursor-pointer font-semibold">{isEnglish ? "Scratch‑ and stain‑resistant?" : "Résistance aux rayures et aux taches ?"}</summary>
              <p className="mt-2 text-muted-foreground">{isEnglish ? "Suitable for countertops, flooring and showers." : "Adapté aux surfaces de travail, aux sols et aux douches."}</p>
            </details>
            <details className="rounded-lg border p-4 bg-background/60">
              <summary className="cursor-pointer font-semibold">{isEnglish ? "International delivery?" : "Livraison internationale ?"}</summary>
              <p className="mt-2 text-muted-foreground">{isEnglish ? "We deliver across Quebec and serve international markets depending on volumes." : "Nous livrons partout au Québec et desservons le marché international selon les volumes."}</p>
            </details>
            <details className="rounded-lg border p-4 bg-background/60">
              <summary className="cursor-pointer font-semibold">{isEnglish ? "Which sectors do you serve?" : "Quels secteurs desservez‑vous ?"}</summary>
              <p className="mt-2 text-muted-foreground">{isEnglish ? "Construction, energy and landscaping, with stable production and personalized service." : "Construction, secteurs énergétiques et aménagement paysager, avec une production stable et un service personnalisé."}</p>
            </details>
          </div>
          <div className="mt-8">
            <a href="/contact" className="underline text-primary">{isEnglish ? "Request a quote" : "Demander un devis"}</a>
          </div>
        </div>
      </section>

      </main>

      <Footer isEnglish={isEnglish} />
    </div>
  );
};

export default Index;