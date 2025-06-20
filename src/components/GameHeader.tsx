import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const GameHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center gaming-glow">
              <Icon name="Sword" className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold survival-text">SURVIVAL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/rules"
              className="text-foreground hover:text-primary transition-colors"
            >
              Правила
            </Link>
            <Link
              to="/donate"
              className="text-foreground hover:text-primary transition-colors"
            >
              Донат
            </Link>
            <Link
              to="/stats"
              className="text-foreground hover:text-primary transition-colors"
            >
              Статистика
            </Link>
          </nav>

          {/* Server Status */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                Онлайн: <span className="text-primary font-semibold">247</span>
              </span>
            </div>
            <button className="btn-survival">Играть</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/20">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </Link>
              <Link
                to="/rules"
                className="text-foreground hover:text-primary transition-colors"
              >
                Правила
              </Link>
              <Link
                to="/donate"
                className="text-foreground hover:text-primary transition-colors"
              >
                Донат
              </Link>
              <Link
                to="/stats"
                className="text-foreground hover:text-primary transition-colors"
              >
                Статистика
              </Link>
              <div className="flex items-center justify-between pt-4 border-t border-border/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">
                    Онлайн:{" "}
                    <span className="text-primary font-semibold">247</span>
                  </span>
                </div>
                <button className="btn-survival">Играть</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default GameHeader;
