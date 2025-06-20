import GameHeader from "@/components/GameHeader";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Stats = () => {
  const topPlayers = [
    { name: "DragonSlayer", level: 99, kills: 1337, deaths: 42 },
    { name: "BuilderPro", level: 87, kills: 892, deaths: 156 },
    { name: "SurvivalKing", level: 76, kills: 654, deaths: 201 },
    { name: "CraftMaster", level: 69, kills: 543, deaths: 289 },
    { name: "PvPLegend", level: 65, kills: 1001, deaths: 334 },
  ];

  const serverStats = [
    { label: "Всего игроков", value: "12,847", icon: "Users" },
    { label: "Онлайн сейчас", value: "247", icon: "Zap" },
    { label: "Построек создано", value: "85,432", icon: "Home" },
    { label: "Дней аптайма", value: "365", icon: "Clock" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <GameHeader />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold survival-text mb-4">
              Статистика сервера
            </h1>
            <p className="text-xl text-muted-foreground">
              Следи за достижениями лучших игроков и статистикой сервера
            </p>
          </div>

          {/* Server Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {serverStats.map((stat, index) => (
              <div key={index} className="card-survival text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary survival-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Players */}
            <div className="card-survival">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Trophy" className="w-6 h-6 text-primary" />
                <span>Топ игроков</span>
              </h2>

              <div className="space-y-4">
                {topPlayers.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          index === 0
                            ? "bg-yellow-500 text-black"
                            : index === 1
                              ? "bg-gray-400 text-white"
                              : index === 2
                                ? "bg-amber-600 text-white"
                                : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">
                          {player.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Уровень {player.level}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-primary font-semibold">
                        {player.kills} убийств
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {player.deaths} смертей
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Online Activity */}
            <div className="card-survival">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
                <Icon name="Activity" className="w-6 h-6 text-primary" />
                <span>Активность онлайн</span>
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">
                      Пиковый онлайн
                    </span>
                    <span className="text-primary font-bold">512 игроков</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">
                      Средний онлайн
                    </span>
                    <span className="text-primary font-bold">284 игрока</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Сейчас онлайн</span>
                    <span className="text-primary font-bold">247 игроков</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: "52%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary survival-text">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">Аптайм</div>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="text-2xl font-bold text-primary survival-text">
                      0ms
                    </div>
                    <div className="text-sm text-muted-foreground">Пинг</div>
                  </div>
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

export default Stats;
