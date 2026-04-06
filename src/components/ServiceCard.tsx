import ScrollReveal from "./ScrollReveal";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

export default function ServiceCard({ icon, title, description, delay = "" }: ServiceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-crimson/10 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
        <p className="text-dark/60 leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
}
