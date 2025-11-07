import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useDialogs } from "./DialogProvider";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { openPrivacyPolicy } = useDialogs();

  useEffect(() => {
    // Проверяем, принял ли пользователь cookie
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t-4 border-indigo-500 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1 pr-4">
              <p className="text-white text-sm sm:text-base leading-relaxed">
                Мы используем cookie-файлы для персонализации контента и удобства пользователей. 
                Вы можете запретить их в настройках своего браузера. Продолжая пользоваться сайтом, 
                вы соглашаетесь с{" "}
                <button
                  onClick={openPrivacyPolicy}
                  className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors font-medium"
                >
                  Политикой конфиденциальности
                </button>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                onClick={handleAccept}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold px-6"
              >
                OK
              </Button>
              <button
                onClick={handleAccept}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                aria-label="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
