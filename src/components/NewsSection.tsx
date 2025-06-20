import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Обновление 2.1: Новые подземелья",
      content:
        "Добавлены 5 новых подземелий с уникальными боссами и редкими наградами. Исследуйте Темные катакомбы и Кристальные пещеры!",
      date: "2 дня назад",
      author: "Admin",
      category: "Обновления",
    },
    {
      id: 2,
      title: "Турнир PvP: Битва кланов",
      content:
        "Приближается грандиозный турнир между кланами! Призовой фонд: 50,000 игровых монет и эксклюзивные предметы.",
      date: "5 дней назад",
      author: "EventMaster",
      category: "События",
    },
    {
      id: 3,
      title: "Новая система крафта",
      content:
        "Переработана система крафта - теперь доступны новые рецепты и возможность улучшения предметов до легендарного уровня.",
      date: "1 неделя назад",
      author: "Developer",
      category: "Игровые механики",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold survival-text mb-4">
            Последние новости
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Будь в курсе всех обновлений и событий на сервере
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="card-survival group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                  {item.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.content}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="User" className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {item.author}
                  </span>
                </div>
                <button className="text-primary hover:text-accent transition-colors flex items-center space-x-1">
                  <span className="text-sm">Читать далее</span>
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-primary/50 text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary/10 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <Icon name="Newspaper" className="w-5 h-5" />
            <span>Все новости</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
