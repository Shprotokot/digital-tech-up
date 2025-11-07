import { Code, TrendingUp, Smartphone, Search, BarChart3, Palette } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Code,
    title: "Веб-разработка",
    description: "Полный стек разработки от landing page до сложных SaaS-платформ. Используем React, Next.js, TypeScript для создания масштабируемых решений.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Интернет-маркетинг",
    description: "Комплексная стратегия продвижения: SEO-оптимизация, контекстная реклама, SMM. Фокус на конверсии и ROI.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Smartphone,
    title: "Адаптивный дизайн",
    description: "Mobile-first подход с responsive design. Обеспечиваем корректное отображение на всех устройствах и разрешениях экрана.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Search,
    title: "SEO-оптимизация",
    description: "Техническая и контентная SEO. Semantic HTML, оптимизация Core Web Vitals, структурированные данные для поисковых систем.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: BarChart3,
    title: "Аналитика и метрики",
    description: "Внедрение систем аналитики (Google Analytics, Яндекс.Метрика). Настройка отслеживания целей и событий для принятия решений на основе данных.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Palette,
    title: "UI/UX дизайн",
    description: "Пользовательский интерфейс на основе UX-исследований. Проектирование user journey, прототипирование и создание дизайн-систем.",
    color: "from-pink-500 to-rose-500"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-semibold">
            Предоставляем полный спектр услуг для успешного запуска и развития вашего digital-присутствия
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:border-transparent overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <CardContent className="p-6 relative">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-3 font-bold text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">{service.title}</h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${service.color} transition-all duration-500 rounded-full`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
