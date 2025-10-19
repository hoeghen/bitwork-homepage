import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Om bitwork.dk</h1>
              <p className="text-xl text-muted-foreground">
                25 års erfaring med at levere IT-løsninger, der virker
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                bitwork.dk har i over 25 år været en pålidelig partner for små og mellemstore virksomheder i Danmark, 
                der søger professionelle IT-løsninger. Vores mission er at gøre avanceret teknologi tilgængelig og 
                forståelig for virksomheder, der ønsker at vokse og optimere deres processer.
              </p>

              <p className="text-lg leading-relaxed">
                Vi er specialister i end-to-end IT-systemer, hvilket betyder, at vi håndterer hele processen fra 
                strategi til implementering og vedligeholdelse. Dette giver vores kunder ro i sindet og sikkerhed 
                for, at deres IT-infrastruktur fungerer optimalt.
              </p>

              <p className="text-lg leading-relaxed">
                Vores tilgang er unik: Vi starter altid med at besøge vores kunder og forstå deres specifikke 
                udfordringer. Derefter udarbejder vi en skræddersyet IT-strategi, der ikke kun løser dagens problemer, 
                men også forbereder virksomheden på fremtidens muligheder.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-12">
              <div className="p-8 bg-card rounded-xl border border-border shadow-soft">
                <Award className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-semibold text-foreground mb-3">Vores Erfaring</h3>
                <p className="text-muted-foreground">
                  Med 25 års erfaring i IT-branchen har vi set teknologien udvikle sig, og vi har hjulpet 
                  hundredvis af virksomheder med at navigere i dette landskab.
                </p>
              </div>

              <div className="p-8 bg-card rounded-xl border border-border shadow-soft">
                <Users className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-semibold text-foreground mb-3">Vores Team</h3>
                <p className="text-muted-foreground">
                  Vi er et dedikeret team af IT-eksperter, der brænder for at levere løsninger, der skaber 
                  reel værdi for vores kunders forretning.
                </p>
              </div>

              <div className="p-8 bg-card rounded-xl border border-border shadow-soft">
                <Target className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-semibold text-foreground mb-3">Vores Fokus</h3>
                <p className="text-muted-foreground">
                  Vi fokuserer 100% på SMV'er i Danmark. Det betyder, at vi forstår de unikke udfordringer 
                  og muligheder, der findes i denne sektor.
                </p>
              </div>

              <div className="p-8 bg-card rounded-xl border border-border shadow-soft">
                <TrendingUp className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-semibold text-foreground mb-3">Vores Vision</h3>
                <p className="text-muted-foreground">
                  Vi vil være den foretrukne IT-partner for SMV'er, der ønsker at vokse og innovere gennem 
                  strategisk brug af teknologi.
                </p>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-12 mt-16 text-center space-y-4">
              <h2 className="text-3xl font-bold">Hvorfor vælge bitwork.dk?</h2>
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="opacity-90">Års erfaring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="opacity-90">Fokus på SMV'er</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">End-to-End</div>
                  <div className="opacity-90">Komplette løsninger</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
