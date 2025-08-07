import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pickaxe, Factory, Truck, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const content = {
    fr: {
      title: "Nos Services",
      subtitle: "SMG offre une gamme complète de services pour répondre à tous vos besoins en silice et quartzite.",
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
      title: "Our Services",
      subtitle: "SMG offers a complete range of services to meet all your silica and quartzite needs.",
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Extraction Service */}
            <Card className="h-full">
              <CardHeader>
                <Pickaxe className="h-12 w-12 text-primary mb-4" />
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
                <Factory className="h-12 w-12 text-primary mb-4" />
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
                <Truck className="h-12 w-12 text-primary mb-4" />
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

      {/* Mine Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/f4d30f29-5fef-4273-a3c9-817e1655e8f6.png"
                alt="Mine Kirouac - Équipement Komatsu"
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                alt="Opérations de traitement de silice"
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