import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Pickaxe, Truck, Factory } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const content = {
    fr: {
      hero: {
        title: "Producteur de Quartz au Québec",
        subtitle: "SMG se spécialise dans la production et la vente de silice. Nous offrons du quartzite de haute qualité au Québec, avec nos opérations situées près de Montréal.",
        cta: "Nos Services"
      },
      about: {
        title: "À propos de SMG",
        description: "Avec des années d'expérience dans l'extraction et la production de silice, SMG est votre partenaire de confiance pour tous vos besoins en quartzite de haute qualité. Notre mine Kirouac est située stratégiquement près de Montréal pour un service efficace."
      },
      services: {
        title: "Nos Services",
        extraction: {
          title: "Extraction",
          description: "Extraction professionnelle de quartzite de haute qualité"
        },
        processing: {
          title: "Traitement",
          description: "Traitement et raffinement de la silice selon vos spécifications"
        },
        delivery: {
          title: "Livraison",
          description: "Service de livraison fiable dans toute la région de Montréal"
        }
      },
      contact: {
        title: "Contactez-nous",
        description: "Prêt à discuter de vos besoins en quartz? Contactez notre équipe dès aujourd'hui."
      }
    },
    en: {
      hero: {
        title: "Quartz Producer in Quebec",
        subtitle: "SMG specializes in the production and sale of silica. We offer high-quality quartzite in Quebec, with our operations located near Montreal.",
        cta: "Our Services"
      },
      about: {
        title: "About SMG",
        description: "With years of experience in silica extraction and production, SMG is your trusted partner for all your high-quality quartzite needs. Our Kirouac mine is strategically located near Montreal for efficient service."
      },
      services: {
        title: "Our Services",
        extraction: {
          title: "Extraction",
          description: "Professional extraction of high-quality quartzite"
        },
        processing: {
          title: "Processing",
          description: "Processing and refining silica to your specifications"
        },
        delivery: {
          title: "Delivery",
          description: "Reliable delivery service throughout the Montreal region"
        }
      },
      contact: {
        title: "Contact Us",
        description: "Ready to discuss your quartz needs? Contact our team today."
      }
    }
  };

  const t = isEnglish ? content.en : content.fr;

  const toggleLanguage = () => setIsEnglish(!isEnglish);

  return (
    <div className="min-h-screen">
      <Navigation isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
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
                alt="Équipement Komatsu dans la carrière"
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
                alt="Pile de silice avec équipement industriel"
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
                alt="Spécimen de quartz blanc"
                className="rounded-3xl shadow-glass w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer isEnglish={isEnglish} />
    </div>
  );
};

export default Index;