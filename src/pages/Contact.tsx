import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const content = {
    fr: {
      title: "Contactez-nous",
      subtitle: "Prêt à discuter de vos besoins en quartz? Notre équipe est là pour vous aider.",
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
        addressValue: "Région de Montréal\nQuébec, Canada",
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
      subtitle: "Ready to discuss your quartz needs? Our team is here to help.",
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
        addressValue: "Montreal Region\nQuebec, Canada",
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
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t.form.name}
                      </label>
                      <Input placeholder={t.form.name} />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        {t.form.email}
                      </label>
                      <Input type="email" placeholder={t.form.email} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t.form.company}
                    </label>
                    <Input placeholder={t.form.company} />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t.form.subject}
                    </label>
                    <Input placeholder={t.form.subject} />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      {t.form.message}
                    </label>
                    <Textarea 
                      placeholder={t.form.message}
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    {t.form.send}
                  </Button>
                </form>
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
                      <p className="text-muted-foreground">(514) 000-0000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t.info.email}</h3>
                      <p className="text-muted-foreground">info@quartzsmg.com</p>
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
                alt="Échantillon de quartz de haute qualité"
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