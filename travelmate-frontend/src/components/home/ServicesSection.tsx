import { Ticket, Hotel, Send } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Ticket Booking",
      description:
        "We book all kind of national or international ticket for your destination.",
      icon: Ticket,
      iconColor: "text-emerald-400",
      cardStyle:
        "bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700",
    },
    {
      title: "Hotel Booking",
      description:
        "You can easily book your according to your budget hotel by our website.",
      icon: Hotel,
      iconColor: "text-sky-400",
      cardStyle:
        "bg-zinc-900 border border-zinc-700/80 shadow-2xl shadow-black/60 hover:border-zinc-600",
    },
    {
      title: "Tour Plan",
      description:
        "We provide you the best plan within a short time explore more.",
      icon: Send,
      iconColor: "text-orange-400",
      cardStyle:
        "bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 tracking-tight">
          Our Service
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${service.cardStyle}`}
              >
                <div className="mb-6 inline-block">
                  <Icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}