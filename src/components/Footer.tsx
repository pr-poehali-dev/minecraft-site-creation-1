import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center gaming-glow">
                <Icon
                  name="Sword"
                  className="w-6 h-6 text-primary-foreground"
                />
              </div>
              <span className="text-2xl font-bold survival-text">SURVIVAL</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Лучший сервер выживания в Minecraft. Присоединяйся к тысячам
              игроков и создавай свою легенду!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Icon
                  name="MessageCircle"
                  className="w-5 h-5 text-muted-foreground hover:text-primary"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Icon
                  name="Youtube"
                  className="w-5 h-5 text-muted-foreground hover:text-primary"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Icon
                  name="Users"
                  className="w-5 h-5 text-muted-foreground hover:text-primary"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              Быстрые ссылки
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/rules"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Правила сервера
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Поддержать проект
                </Link>
              </li>
              <li>
                <Link
                  to="/stats"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Статистика
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Форум
                </a>
              </li>
            </ul>
          </div>

          {/* Server Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Сервер</h3>
            <div className="space-y-3">
              <div className="pixel-border rounded-lg px-4 py-2 bg-card/30">
                <div className="text-sm text-muted-foreground">IP:</div>
                <div className="font-mono text-primary">play.survival.ru</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">
                  Онлайн:{" "}
                  <span className="text-primary font-semibold">
                    247 игроков
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Survival Server. Все права защищены. Minecraft является
            торговой маркой Mojang Studios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
