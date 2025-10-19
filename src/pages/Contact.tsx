import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Besked sendt!",
      description: "Vi vender tilbage til dig hurtigst muligt.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">Kontakt Os</h1>
            <p className="text-xl text-muted-foreground">
              Lad os tage en uforpligtende snak om, hvordan vi kan hjælpe din virksomhed
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Få en gratis IT-konsultation</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Vi tror på den personlige tilgang. Kontakt os i dag, så kommer vi forbi og laver en 
                  grundig analyse af jeres IT-behov. Sammen finder vi den optimale løsning til jeres virksomhed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border shadow-soft">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:kontakt@bitwork.dk" className="text-muted-foreground hover:text-primary transition-colors">
                      kontakt@bitwork.dk
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border shadow-soft">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <a href="tel:+4512345678" className="text-muted-foreground hover:text-primary transition-colors">
                      +45 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-card rounded-xl border border-border shadow-soft">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Lokation</h3>
                    <p className="text-muted-foreground">
                      Danmark
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h3 className="font-semibold text-foreground mb-2">Hvad sker der nu?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">1.</span>
                    <span>Vi kontakter dig inden for 24 timer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">2.</span>
                    <span>Vi aftaler et uforpligtende besøg hos jer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">3.</span>
                    <span>Vi udarbejder en IT-strategi baseret på jeres behov</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">4.</span>
                    <span>Vi præsenterer en skræddersyet løsning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border shadow-medium p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Navn *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Dit fulde navn"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="din@email.dk"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+45 12 34 56 78"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Virksomhed
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Dit firmanavn"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Besked *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Fortæl os om jeres IT-udfordringer og behov..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Send besked
                  <Send className="ml-2" size={18} />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ved at sende denne formular accepterer du vores behandling af dine oplysninger.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
