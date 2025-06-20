import GameHeader from "@/components/GameHeader";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Donate = () => {
  const donatePackages = [
    {
      name: "Выживший",
      price: "199₽",
      features: [
        "Префикс [Выживший]",
        "+2 дома",
        "Доступ к /kit survivor",
        "Защита от гриферов",
      ],
      popular: false,
    },
    {
      name: "Воин",
      price: "499₽",
      features: [
        "Префикс [Воин]",
        "+5 домов",
        "Доступ к /kit warrior",
        "Приватные сундуки",
        "Цветной ник",
      ],
      popular: true,
    },
    {
      name: "Легенда",
      price: "999₽",
      features: [
        "Префикс [Легенда]",
        "Безлимитные дома",
        "Доступ к /kit legend",
        "Личный варп",
        "Эксклюзивные предметы",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <GameHeader />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold survival-text mb-4">
              Поддержать проект
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ваша поддержка помогает развивать сервер и добавлять новые
              возможности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {donatePackages.map((pkg, index) => (
              <div
                key={index}
                className={`card-survival relative ${pkg.popular ? "ring-2 ring-primary" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary survival-text">
                    {pkg.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Icon
                        name="Check"
                        className="w-5 h-5 text-primary flex-shrink-0"
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-accent gaming-glow"
                      : "border border-primary/50 text-primary hover:bg-primary/10"
                  }`}
                >
                  Выбрать пакет
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-survival">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="Heart" className="w-6 h-6 text-primary" />
                <span>Зачем донатить?</span>
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Поддержка серверов и их стабильная работа</li>
                <li>• Разработка новых функций и обновлений</li>
                <li>• Оплата хостинга и технической поддержки</li>
                <li>• Проведение ивентов и конкурсов</li>
              </ul>
            </div>

            <div className="card-survival">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="CreditCard" className="w-6 h-6 text-primary" />
                <span>Способы оплаты</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/20 rounded-lg text-center">
                  <Icon
                    name="CreditCard"
                    className="w-8 h-8 text-primary mx-auto mb-2"
                  />
                  <span className="text-sm text-muted-foreground">
                    Банковская карта
                  </span>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg text-center">
                  <Icon
                    name="Smartphone"
                    className="w-8 h-8 text-primary mx-auto mb-2"
                  />
                  <span className="text-sm text-muted-foreground">
                    Мобильный
                  </span>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg text-center">
                  <Icon
                    name="Wallet"
                    className="w-8 h-8 text-primary mx-auto mb-2"
                  />
                  <span className="text-sm text-muted-foreground">
                    Электронные деньги
                  </span>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg text-center">
                  <Icon
                    name="Coins"
                    className="w-8 h-8 text-primary mx-auto mb-2"
                  />
                  <span className="text-sm text-muted-foreground">
                    Криптовалюта
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donate;
