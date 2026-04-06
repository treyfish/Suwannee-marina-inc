import ScrollReveal from "./ScrollReveal";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-cream-dark/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
        <div className="w-14 h-14 rounded-lg bg-marsh/5 flex items-center justify-center mb-5 group-hover:bg-sunset/10 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-driftwood leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
}
