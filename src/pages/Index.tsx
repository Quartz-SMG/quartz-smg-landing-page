import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Pickaxe, Truck, Factory } from "lucide-react";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen bg-background">
      <Navigation isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {t.hero.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <Link to="/services">
                <Button size="lg" className="flex items-center gap-2">
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/bcd7da19-fd60-4ad5-9338-dec3a84f5160.png"
                alt="Pile de silice avec équipement industriel"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/f4d30f29-5fef-4273-a3c9-817e1655e8f6.png"
                alt="Équipement Komatsu dans la carrière"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {t.about.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t.about.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            {t.services.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Pickaxe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t.services.extraction.title}</h3>
                <p className="text-muted-foreground">{t.services.extraction.description}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t.services.processing.title}</h3>
                <p className="text-muted-foreground">{t.services.processing.description}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{t.services.delivery.title}</h3>
                <p className="text-muted-foreground">{t.services.delivery.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quartz Specimen Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                {isEnglish ? "High-Quality Quartzite" : "Quartzite de Haute Qualité"}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {isEnglish 
                  ? "Our quartzite specimens demonstrate the exceptional quality and purity of our silica products. Each piece is carefully extracted and processed to meet the highest industry standards."
                  : "Nos spécimens de quartzite démontrent la qualité exceptionnelle et la pureté de nos produits de silice. Chaque pièce est soigneusement extraite et traitée pour répondre aux plus hautes normes de l'industrie."
                }
              </p>
              <Link to="/contact">
                <Button variant="outline" className="flex items-center gap-2">
                  {t.contact.title}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="/lovable-uploads/77f6a516-80dd-4ef8-9b9f-6dd507e475ef.png"
                alt="Spécimen de quartz blanc"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
          <Link to="/contact">
            <Button size="lg" className="flex items-center gap-2 mx-auto">
              {t.contact.title}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer isEnglish={isEnglish} />
    </div>
  );
};

export default Index;