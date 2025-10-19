import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessStep = ({ number, icon: Icon, title, description }: ProcessStepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="relative mb-4">
        <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
        <div className="relative w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium">
          <Icon className="text-primary-foreground" size={32} />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shadow-soft">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
};

export default ProcessStep;
