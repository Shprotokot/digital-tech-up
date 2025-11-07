import { Code2, Mail, Phone } from "lucide-react";
import { useDialogs } from "./DialogProvider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { openPrivacyPolicy } = useDialogs();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-white">
                <span className="font-bold">DIGITAL</span>TechUp
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Профессиональная разработка сайтов и digital-маркетинг для вашего бизнеса.
            </p>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Веб-разработка</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Интернет-маркетинг</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SEO-продвижение</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX дизайн</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Портфолио</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@digital-tu.ru" className="hover:text-white transition-colors">
                  info@digital-tu.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+79916334455" className="hover:text-white transition-colors">
                  +7 (991) 633-44-55
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            © {currentYear} ИП Захаров Семен Александрович. Все права защищены.
          </div>
          <div className="flex gap-6">
            <button 
              onClick={openPrivacyPolicy}
              className="hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
