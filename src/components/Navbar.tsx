import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MenuIcon,
  X,
  Database,
  GitBranch,
  Settings,
  LayoutDashboard
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white dark:bg-gray-950">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <GitBranch className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DataSync</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center gap-1">
              <LayoutDashboard className="h-4 w-4" />
              Главная
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/integrations" className="flex items-center gap-1">
              <Database className="h-4 w-4" />
              Интеграции
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/settings" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              Настройки
            </Link>
          </Button>
          <Button>Начать бесплатно</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-b md:hidden">
          <div className="container space-y-1 pb-3">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/" className="flex items-center gap-1">
                <LayoutDashboard className="h-4 w-4" />
                Главная
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/integrations" className="flex items-center gap-1">
                <Database className="h-4 w-4" />
                Интеграции
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link to="/settings" className="flex items-center gap-1">
                <Settings className="h-4 w-4" />
                Настройки
              </Link>
            </Button>
            <Button className="w-full">Начать бесплатно</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;