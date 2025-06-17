
import { Construction, Phone, Mail, Facebook } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Header with company name */}
      <header className="pt-8 pb-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
            Quartz SMG
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Producteur de Quartz au Québec
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Maintenance card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <Construction className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                🔧 Site en maintenance
              </h2>
            </div>

            <div className="text-center space-y-4 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                Notre site est actuellement en maintenance afin de vous offrir une meilleure expérience.
              </p>
              <p className="text-lg font-semibold text-slate-800">
                Nous serons de retour très bientôt !
              </p>
            </div>

            {/* Contact information */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-800 mb-4 text-center">
                  Pour toute demande urgente :
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+15143558806" 
                    className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 group"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">📞 1-514-355-8806</span>
                  </a>

                  <a 
                    href="mailto:info@quartzsmg.com" 
                    className="flex items-center justify-center space-x-3 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">📧 info@quartzsmg.com</span>
                  </a>

                  <a 
                    href="https://facebook.com/quartzsmg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-colors duration-200 group"
                  >
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Notre page Facebook</span>
                  </a>
                </div>
              </div>

              <p className="text-center text-slate-600 font-medium">
                Merci de votre compréhension.
              </p>
            </div>
          </div>

          {/* Company description for SEO */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              À propos de Quartz SMG
            </h2>
            <p className="text-slate-700 leading-relaxed">
              SMG se spécialise dans la production et la vente de silice. Nous offrons du quartzite de haute qualité au Québec, avec nos opérations situées près de Montréal. Une variété d'options sont disponibles.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500">
        <p>&copy; 2024 Quartz SMG. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Index;
