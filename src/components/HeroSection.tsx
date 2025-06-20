import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2300ff00%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M30%2030h30v30H30V30zm15%2015h15v15H45V45z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-black survival-text mb-6 leading-tight">
            SURVIVAL
            <span className="block text-4xl md:text-6xl text-primary mt-2">
              SERVER
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Погрузись в мир настоящего выживания. Стройте, исследуйте,
            сражайтесь и выживайте в суровом блочном мире.
          </p>

          {/* Server Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <div className="pixel-border rounded-lg px-6 py-3 bg-card/50">
              <span className="text-sm text-muted-foreground">IP сервера:</span>
              <div className="text-lg font-bold text-primary font-mono">
                play.survival.ru
              </div>
            </div>
            <div className="pixel-border rounded-lg px-6 py-3 bg-card/50">
              <span className="text-sm text-muted-foreground">Версия:</span>
              <div className="text-lg font-bold text-primary">1.20.1</div>
            </div>
            <div className="pixel-border rounded-lg px-6 py-3 bg-card/50">
              <span className="text-sm text-muted-foreground">Режим:</span>
              <div className="text-lg font-bold text-primary">Survival</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="btn-survival text-lg px-8 py-4 flex items-center space-x-2">
              <Icon name="Play" className="w-5 h-5" />
              <span>Начать играть</span>
            </button>
            <button className="border border-primary/50 text-primary px-8 py-4 rounded-lg font-bold tracking-wide hover:bg-primary/10 transition-all duration-300 flex items-center space-x-2">
              <Icon name="Download" className="w-5 h-5" />
              <span>Скачать лаунчер</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary survival-text">
                247
              </div>
              <div className="text-sm text-muted-foreground">Онлайн</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary survival-text">
                12k
              </div>
              <div className="text-sm text-muted-foreground">Игроков</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary survival-text">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Аптайм</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary survival-text">
                0ms
              </div>
              <div className="text-sm text-muted-foreground">Лаги</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
