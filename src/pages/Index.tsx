
import { Construction, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const content = {
    fr: {
      subtitle: "Producteur de Quartz au Québec",
      maintenance: "🔧 Site en maintenance",
      maintenanceText: "Notre site est actuellement en maintenance afin de vous offrir une meilleure expérience.",
      backSoon: "Nous serons de retour très bientôt !",
      urgentRequests: "Pour toute demande urgente :",
      aboutTitle: "À propos de Quartz SMG",
      aboutText: "SMG se spécialise dans la production et la vente de silice. Nous offrons du quartzite de haute qualité au Québec, avec nos opérations situées près de Montréal. Une variété d'options sont disponibles.",
      footer: "Tous droits réservés.",
      understanding: "Merci de votre compréhension."
    },
    en: {
      subtitle: "Quartz Producer in Quebec",
      maintenance: "🔧 Site under maintenance",
      maintenanceText: "Our site is currently under maintenance to provide you with a better experience.",
      backSoon: "We'll be back very soon!",
      urgentRequests: "For any urgent requests:",
      aboutTitle: "About Quartz SMG",
      aboutText: "SMG specializes in the production and sale of silica. We offer high-quality quartzite in Quebec, with our operations located near Montreal. A variety of options are available.",
      footer: "All rights reserved.",
      understanding: "Thank you for your understanding."
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm text-slate-200 px-4 py-2 rounded-full border border-slate-600/50 transition-all duration-200 hover:scale-105"
        >
          <Globe className="w-4 h-4" />
          <span className="font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
        </button>
      </div>

      {/* Header with company name */}
      <header className="pt-12 pb-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent mb-3">
            Quartz SMG
          </h1>
          <p className="text-xl text-slate-300 font-medium">
            {currentContent.subtitle}
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Maintenance card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-700/50">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full mb-6 border border-amber-500/30">
                <Construction className="w-10 h-10 text-amber-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
                {currentContent.maintenance}
              </h2>
            </div>

            <div className="text-center space-y-6 mb-10">
              <p className="text-lg text-slate-300 leading-relaxed">
                {currentContent.maintenanceText}
              </p>
              <p className="text-xl font-semibold text-slate-200">
                {currentContent.backSoon}
              </p>
            </div>

            {/* Contact information */}
            <div className="space-y-8">
              <div className="bg-slate-700/30 rounded-2xl p-8 border border-slate-600/30">
                <h3 className="font-semibold text-slate-200 mb-6 text-center text-lg">
                  {currentContent.urgentRequests}
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+15143558806" 
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl transition-all duration-200 group shadow-lg hover:shadow-blue-500/25"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">📞 1-514-355-8806</span>
                  </a>

                  <a 
                    href="mailto:info@quartzsmg.com" 
                    className="flex items-center justify-center space-x-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-8 py-4 rounded-xl transition-all duration-200 group shadow-lg hover:shadow-slate-500/25"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">📧 info@quartzsmg.com</span>
                  </a>
                </div>
              </div>

              <p className="text-center text-slate-400 font-medium">
                {currentContent.understanding}
              </p>
            </div>
          </div>

          {/* Company description for SEO */}
          <div className="mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-700/30">
            <h2 className="text-2xl font-bold text-slate-200 mb-6">
              {currentContent.aboutTitle}
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              {currentContent.aboutText}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-500">
        <p>&copy; 2024 Quartz SMG. {currentContent.footer}</p>
      </footer>
    </div>
  );
};

export default Index;
