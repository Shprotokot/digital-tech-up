import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Code2, Menu, X, Phone, Mail } from "lucide-react";
import { MessageCircle, Send } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="font-bold">DIGITAL</span>TechUp
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Navigation Links */}
            <a 
              onClick={() => scrollToSection('services')}
              className={`cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg font-medium hover:bg-indigo-600 hover:text-white hover:shadow-md hover:scale-105 ${
                isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
              }`}
            >
              Услуги
            </a>
            <a 
              onClick={() => scrollToSection('process')}
              className={`cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg font-medium hover:bg-indigo-600 hover:text-white hover:shadow-md hover:scale-105 ${
                isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
              }`}
            >
              Процесс
            </a>
            <a 
              onClick={() => scrollToSection('cases')}
              className={`cursor-pointer transition-all duration-300 px-3 py-2 rounded-lg font-medium hover:bg-indigo-600 hover:text-white hover:shadow-md hover:scale-105 ${
                isScrolled ? 'text-gray-700' : 'text-white hover:bg-white/20'
              }`}
            >
              Кейсы
            </a>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 hover:from-orange-600 hover:via-pink-600 hover:to-red-600 shadow-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 font-bold text-white border-2 border-white/20 hover:border-white/40"
            >
              Связаться
            </Button>

            <div className={`h-8 w-px ${isScrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>

            {/* Contact Info */}
            <div className="flex items-center gap-4">
              <a 
                href="tel:+79916334455"
                className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-white/80'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+7 (991) 633-44-55</span>
              </a>
              <a 
                href="mailto:info@digital-tu.ru"
                className={`flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white hover:text-white/80'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">info@digital-tu.ru</span>
              </a>
            </div>

            {/* Messengers */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/message/SENHH7DQLVYLA1"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border-2 animate-pulse hover:animate-none ${
                  isScrolled 
                    ? 'bg-green-500 text-white border-green-400 hover:bg-green-600 hover:border-green-500 shadow-green-500/30 hover:shadow-green-500/50' 
                    : 'bg-green-500 text-white border-green-400 hover:bg-green-600 hover:border-green-300 shadow-green-500/40 hover:shadow-green-500/60'
                }`}
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/dtechup"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border-2 animate-pulse hover:animate-none ${
                  isScrolled 
                    ? 'bg-blue-500 text-white border-blue-400 hover:bg-blue-600 hover:border-blue-500 shadow-blue-500/30 hover:shadow-blue-500/50' 
                    : 'bg-blue-500 text-white border-blue-400 hover:bg-blue-600 hover:border-blue-300 shadow-blue-500/40 hover:shadow-blue-500/60'
                }`}
                title="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white rounded-b-xl shadow-lg">
            <div className="flex flex-col gap-2">
              {/* Contact Info Mobile */}
              <div className="mx-4 mb-2 pb-4 border-b border-gray-200">
                <a 
                  href="tel:+79916334455"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+7 (991) 633-44-55</span>
                </a>
                <a 
                  href="mailto:info@digital-tu.ru"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">info@digital-tu.ru</span>
                </a>
                
                {/* Messengers Mobile */}
                <div className="flex items-center gap-3 px-4 pt-3">
                  <a
                    href="https://wa.me/message/SENHH7DQLVYLA1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 border-2 border-green-400 hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                  <a
                    href="https://t.me/dtechup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 border-2 border-blue-400 hover:scale-105"
                  >
                    <Send className="w-4 h-4" />
                    <span className="text-sm font-medium">Telegram</span>
                  </a>
                </div>
              </div>

              <a 
                onClick={() => scrollToSection('services')}
                className="mx-4 px-4 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white rounded-lg cursor-pointer transition-all duration-300"
              >
                Услуги
              </a>
              <a 
                onClick={() => scrollToSection('process')}
                className="mx-4 px-4 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white rounded-lg cursor-pointer transition-all duration-300"
              >
                Процесс
              </a>
              <a 
                onClick={() => scrollToSection('cases')}
                className="mx-4 px-4 py-3 text-gray-700 font-medium hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white rounded-lg cursor-pointer transition-all duration-300"
              >
                Кейсы
              </a>
              <div className="px-4 mt-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 hover:from-orange-600 hover:via-pink-600 hover:to-red-600 shadow-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 font-bold text-white"
                >
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
