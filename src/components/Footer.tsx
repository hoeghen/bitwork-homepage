import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">b</span>
              </div>
              <span className="font-bold text-xl text-foreground">bitwork.dk</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professionelle IT-løsninger til SMV'er i Danmark. 25 års erfaring med end-to-end systemer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hurtige Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Forside
                </Link>
              </li>
              <li>
                <Link to="/om-os" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Om Os
                </Link>
              </li>
              <li>
                <Link to="/ydelser" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ydelser
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Ydelser</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>End-to-End Systemer</li>
              <li>Web Enabling</li>
              <li>Interne Systemer</li>
              <li>Cloud-Løsninger</li>
              <li>Kunstig Intelligens</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">kontakt@bitwork.dk</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+45 12 34 56 78</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Danmark</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} bitwork.dk. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
