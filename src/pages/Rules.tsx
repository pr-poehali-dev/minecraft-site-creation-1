import GameHeader from "@/components/GameHeader";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Rules = () => {
  const rules = [
    {
      title: "Уважение к игрокам",
      description:
        "Запрещены оскорбления, угрозы, спам и любые формы харассмента.",
      icon: "Heart",
    },
    {
      title: "Честная игра",
      description:
        "Использование читов, дюпов, эксплойтов и сторонних программ запрещено.",
      icon: "Shield",
    },
    {
      title: "Гриферство",
      description:
        "Разрушение чужих построек без разрешения владельца запрещено.",
      icon: "Ban",
    },
    {
      title: "PvP правила",
      description:
        "PvP разрешено только в специальных зонах. Убийство в мирных зонах карается.",
      icon: "Swords",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <GameHeader />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold survival-text mb-4">
              Правила сервера
            </h1>
            <p className="text-xl text-muted-foreground">
              Соблюдение правил гарантирует комфортную игру для всех
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {rules.map((rule, index) => (
              <div key={index} className="card-survival">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={rule.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {rule.title}
                    </h3>
                    <p className="text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-survival">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Наказания
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-muted/20 rounded-lg">
                <span className="text-foreground">Первое нарушение</span>
                <span className="text-yellow-500 font-semibold">
                  Предупреждение
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/20 rounded-lg">
                <span className="text-foreground">Повторное нарушение</span>
                <span className="text-orange-500 font-semibold">
                  Мут на 1 час
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/20 rounded-lg">
                <span className="text-foreground">Серьезное нарушение</span>
                <span className="text-red-500 font-semibold">
                  Бан на 1-7 дней
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-muted/20 rounded-lg">
                <span className="text-foreground">Критическое нарушение</span>
                <span className="text-red-700 font-semibold">
                  Перманентный бан
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rules;
