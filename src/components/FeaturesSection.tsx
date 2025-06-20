import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Sword",
      title: "PvP Сражения",
      description:
        "Эпичные битвы с другими игроками в специальных PvP-зонах. Докажи свое мастерство в бою!",
    },
    {
      icon: "Hammer",
      title: "Крафт & Строительство",
      description:
        "Создавай уникальные предметы и строй невероятные сооружения. Только твоя фантазия - предел!",
    },
    {
      icon: "Users",
      title: "Кланы & Альянсы",
      description:
        "Объединяйся с друзьями, создавай могущественные кланы и завоевывай территории вместе.",
    },
    {
      icon: "Treasure",
      title: "Сокровища",
      description:
        "Исследуй подземелья, находи редкие артефакты и собирай коллекции уникальных предметов.",
    },
    {
      icon: "Shield",
      title: "Защита территорий",
      description:
        "Создай неприступную крепость и защищай свои земли от набегов других игроков.",
    },
    {
      icon: "Zap",
      title: "Магия & Зелья",
      description:
        "Изучай древние заклинания, варя мощные зелья и овладей тайными искусствами магии.",
    },
  ];

  return (
    <section className="py-24 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold survival-text mb-4">
            Особенности сервера
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Погрузись в мир бесконечных возможностей и адреналиновых приключений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-survival group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon name={feature.icon} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-survival text-lg px-8 py-4 flex items-center space-x-2 mx-auto">
            <Icon name="Rocket" className="w-5 h-5" />
            <span>Присоединиться к приключению</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
