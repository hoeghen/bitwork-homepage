import { Link } from "react-router-dom";
import { ArrowRight, Server, Globe, Settings, Cloud, Brain, CheckCircle, UserCheck, Lightbulb, Wrench, HeartHandshake } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";
import { Button } from "@/components/ui/button";
import itIllustration from "@/assets/it-solution-illustration.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tight">
                Fra Kaos<br />
                til Kontrol
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium leading-relaxed">
                Vi løser små og mellemstore virksomheders IT-udfordringer med komplette end-to-end løsninger
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                25 års erfaring • Personlig service • Alt inkluderet
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/kontakt">
                  <Button size="lg" className="text-lg px-10 py-6 font-bold">
                    Få en uforpligtende IT-strategi
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/ydelser">
                  <Button size="lg" variant="outline" className="text-lg px-10 py-6 font-bold">
                    Se vores ydelser
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src={itIllustration} 
                alt="Fra IT-kaos til organiseret løsning - visualisering af bitwork.dk's end-to-end service" 
                className="relative w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-foreground">Vores Ekspertise</h2>
            <p className="text-xl text-muted-foreground">
              Vi leverer IT-løsninger, der virker. Fra strategi til implementering - alt samlet i én pakke.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={Server}
              title="End-to-End Systemer"
              description="Komplette IT-systemer fra start til slut. Vi håndterer hele processen og sikrer problemfri integration."
            />
            <ServiceCard
              icon={Globe}
              title="Web Enabling"
              description="Gør dine interne systemer tilgængelige via web. Arbejd hvor som helst, når som helst."
            />
            <ServiceCard
              icon={Settings}
              title="Interne Håndteringssystemer"
              description="Optimér arbejdsgange med skræddersyede systemer, der passer præcis til jeres behov."
            />
            <ServiceCard
              icon={Cloud}
              title="Cloud & AI Løsninger"
              description="Moderne cloud-løsninger og kunstig intelligens til at automatisere og forbedre din forretning."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-foreground">Sådan arbejder vi</h2>
            <p className="text-xl text-muted-foreground">
              IT er mere end teknologi - det er strategi. Vi starter med et besøg hos jer for at skræddersy den perfekte pakkeløsning.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <ProcessStep
              number={1}
              icon={UserCheck}
              title="Indledende Besøg"
              description="Vi mødes hos jer for at forstå jeres udfordringer og behov"
            />
            <ProcessStep
              number={2}
              icon={Lightbulb}
              title="IT-Strategi"
              description="Vi udarbejder en skræddersyet strategi, der matcher jeres mål"
            />
            <ProcessStep
              number={3}
              icon={Wrench}
              title="Implementering"
              description="Vi udvikler og implementerer løsningen hurtigt og effektivt"
            />
            <ProcessStep
              number={4}
              icon={CheckCircle}
              title="Test & Godkendelse"
              description="Vi sikrer at alt fungerer perfekt før leveringen"
            />
            <ProcessStep
              number={5}
              icon={HeartHandshake}
              title="Support & Vedligehold"
              description="Vi står klar med hosting, vedligehold og support"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <Brain size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold">Strategisk Fokus</h3>
                <p className="opacity-90">
                  Vi starter altid med strategi. Vi laver IT-pakkeløsninger, hvor vi analyserer jeres udfordringer og finder de rigtige løsninger.
                </p>
              </div>
              <div className="space-y-2">
                <CheckCircle size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold">Hurtige & Billige</h3>
                <p className="opacity-90">
                  Vores løsninger er designet til at være både hurtige at implementere og økonomisk fordelagtige for små og mellemstore virksomheder.
                </p>
              </div>
              <div className="space-y-2">
                <HeartHandshake size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold">Alt Inkluderet</h3>
                <p className="opacity-90">
                  Hosting, vedligeholdelse og support er altid inkluderet. Du får én samlet løsning uden overraskelser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-foreground">
              Klar til at transformere jeres IT?
            </h2>
            <p className="text-xl text-muted-foreground">
              Lad os tage en uforpligtende snak om, hvordan vi kan hjælpe jeres virksomhed med de rette IT-løsninger.
            </p>
            <Link to="/kontakt">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium text-lg px-8">
                Kontakt os i dag
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
