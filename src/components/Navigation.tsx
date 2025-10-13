import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className={`text-2xl font-bold font-serif cursor-pointer ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Сам себе агроном
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["about", "services", "expertise", "team", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                {section === "about" && "О нас"}
                {section === "services" && "Услуги"}
                {section === "expertise" && "Результаты"}
                {section === "team" && "Команда"}
                {section === "contact" && "Контакты"}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              className={`${
                isScrolled 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Связаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background border-t border-border">
            <div className="flex flex-col gap-4">
              {["about", "services", "expertise", "team", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {section === "about" && "О нас"}
                  {section === "services" && "Услуги"}
                  {section === "expertise" && "Результаты"}
                  {section === "team" && "Команда"}
                  {section === "contact" && "Контакты"}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
