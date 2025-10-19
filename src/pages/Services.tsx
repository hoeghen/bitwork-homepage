import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Server, Globe, Settings, Cloud, Brain, Database, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import servicesImage from "@/assets/services-bg.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Vores Ydelser</h1>
            <p className="text-xl text-muted-foreground">
              Komplette IT-løsninger skræddersyet til små og mellemstore virksomheder
            </p>
          </div>

          {/* Main Services */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            <div className="group p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300">
              <Server className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h2 className="text-3xl font-bold text-foreground mb-4">End-to-End Systemer</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vi leverer komplette IT-systemer fra den første idé til færdig implementering og vedligeholdelse. 
                Vores end-to-end tilgang sikrer, at alle dele af systemet fungerer perfekt sammen.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Komplet systemanalyse og planlægning</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Skræddersyet udvikling og integration</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Implementering og brugertræning</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Løbende support og vedligeholdelse</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300">
              <Globe className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h2 className="text-3xl font-bold text-foreground mb-4">Web Enabling</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gør jeres interne systemer tilgængelige via web. Med web enabling kan jeres medarbejdere arbejde 
                hvor som helst, når som helst, og fra enhver enhed.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Mobil og tablet-venlige løsninger</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Sikker adgang fra hvor som helst</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Integration med eksisterende systemer</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Moderne og brugervenlige interfaces</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300">
              <Settings className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h2 className="text-3xl font-bold text-foreground mb-4">Interne Håndteringssystemer</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Optimer jeres interne arbejdsgange med skræddersyede systemer, der passer præcis til jeres 
                virksomheds behov og processer.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Workflow automation og optimering</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Dokumenthåndtering og arkivering</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Rapport- og dataanalysesystemer</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Integration med ERP og CRM</span>
                </li>
              </ul>
            </div>

            <div className="group p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300">
              <Cloud className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
              <h2 className="text-3xl font-bold text-foreground mb-4">Cloud-Løsninger & AI</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Moderne cloud-løsninger og kunstig intelligens til at automatisere processer, forbedre beslutninger 
                og skabe vækst i jeres forretning.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Cloud-migration og optimering</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>AI-drevne analyser og insights</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Automatisering af gentagne opgaver</span>
                </li>
                <li className="flex items-start">
                  <Zap className="text-accent mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Skalerbare og sikre løsninger</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Yderligere Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border shadow-soft">
                <Database className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold text-foreground mb-2">Database-løsninger</h3>
                <p className="text-muted-foreground text-sm">
                  Professionel database-design, optimering og administration for maksimal performance.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border shadow-soft">
                <Shield className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold text-foreground mb-2">IT-Sikkerhed</h3>
                <p className="text-muted-foreground text-sm">
                  Beskyttelse af jeres data og systemer med moderne sikkerhedsløsninger og -praksisser.
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border shadow-soft">
                <Brain className="text-primary mb-4" size={32} />
                <h3 className="text-xl font-semibold text-foreground mb-2">IT-Konsultering</h3>
                <p className="text-muted-foreground text-sm">
                  Strategisk IT-rådgivning til at identificere muligheder og optimere jeres IT-investeringer.
                </p>
              </div>
            </div>
          </div>

          {/* Services Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <img 
              src={servicesImage} 
              alt="IT-tjenester og løsninger" 
              className="rounded-2xl shadow-strong w-full"
            />
          </div>

          {/* CTA Section */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Alt inkluderet i én pakke</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Alle vores løsninger inkluderer hosting, vedligeholdelse og support. 
              Vi leverer hurtige og billige løsninger, så I kan fokusere på jeres kerneforretning.
            </p>
            <Link to="/kontakt">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Få en skræddersyet løsning
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
