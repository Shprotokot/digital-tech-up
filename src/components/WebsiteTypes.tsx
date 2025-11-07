import { useState } from "react";
import { Zap, FileText, ShoppingCart, Building, Clock, DollarSign, Target, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const websiteTypes = [
  {
    icon: Zap,
    title: "Лендинг",
    shortDescription: "Одностраничный сайт для конкретного предложения или акции",
    fullDescription: "Landing Page - это эффективный инструмент для продвижения одного продукта, услуги или акции. Фокусируется на конверсии посетителей в клиентов через четкий Call-to-Action.",
    gradient: "from-orange-500 to-red-500",
    features: [
      "Высокая конверсия в заявки",
      "Быстрая разработка (1-2 недели)",
      "Идеален для рекламных кампаний",
      "Оптимизирован под одну цель",
      "A/B тестирование элементов"
    ],
    timeframe: "1-2 недели",
    priceRange: "от 150 000 ₽",
    useCases: "Запуск нового продукта, специальные акции, регистрация на мероприятия, сбор лидов"
  },
  {
    icon: FileText,
    title: "Сайт-визитка",
    shortDescription: "Компактный многостраничный сайт для представления компании",
    fullDescription: "Сайт-визитка - это цифровое представительство вашей компании в интернете. Содержит ключевую информацию о бизнесе, услугах, команде и контактах.",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "5-10 страниц с информацией",
      "Презентация услуг и команды",
      "Форма обратной связи",
      "Адаптивный дизайн",
      "SEO-оптимизация"
    ],
    timeframe: "2-3 недели",
    priceRange: "от 130 000 ₽",
    useCases: "Малый бизнес, услуги B2B, фрилансеры, локальные компании, профессионалы"
  },
  {
    icon: ShoppingCart,
    title: "Интернет-магазин",
    shortDescription: "Полнофункциональная платформа для онлайн-продаж",
    fullDescription: "E-commerce платформа для продажи товаров и услуг онлайн с системой каталога, корзины, оплаты и управления заказами. Интеграция с платежными системами и службами доставки.",
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Каталог с фильтрами и поиском",
      "Корзина и личный кабинет",
      "Интеграция платежных систем",
      "Система заказов и складской учет",
      "CRM и email-маркетинг",
      "Мобильное приложение (опционально)"
    ],
    timeframe: "6-12 недель",
    priceRange: "от 300 000 ₽",
    useCases: "Розничная торговля, оптовые продажи, продажа услуг, маркетплейсы, дропшиппинг"
  },
  {
    icon: Building,
    title: "Корпоративный сайт",
    shortDescription: "Комплексное решение для крупного бизнеса и холдингов",
    fullDescription: "Многофункциональный портал для крупных компаний с расширенной структурой, интеграциями, личными кабинетами, корпоративным блогом и системой управления контентом.",
    gradient: "from-indigo-500 to-purple-500",
    features: [
      "Многоуровневая структура",
      "Корпоративный блог и новости",
      "Личные кабинеты сотрудников",
      "Интеграция с ERP/CRM",
      "Многоязычность",
      "Раздел для инвесторов",
      "API для партнеров"
    ],
    timeframe: "8-16 недель",
    priceRange: "от 200 000 ₽",
    useCases: "Крупный бизнес, холдинги, производственные компании, франшизы, корпорации"
  }
];

export function WebsiteTypes() {
  const [selectedType, setSelectedType] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Какие типы сайтов бывают и зачем нужны?
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-semibold">
            Выберите оптимальное решение для ваших бизнес-задач
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {websiteTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedType(index)}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 border border-gray-200 hover:border-transparent relative overflow-hidden flex flex-col"
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative flex flex-col flex-grow">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="mb-3 font-bold text-xl text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                    {type.shortDescription}
                  </p>

                  {/* Call to action hint */}
                  <div className="text-sm text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    <span>Подробнее</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>

                  {/* Decorative line */}
                  <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${type.gradient} transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dialog with detailed information */}
      <Dialog open={selectedType !== null} onOpenChange={() => setSelectedType(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
          {selectedType !== null && (
            <ScrollArea className="max-h-[90vh]">
              <div className="p-8">
                <DialogHeader className="mb-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${websiteTypes[selectedType].gradient} shadow-xl`}>
                      {(() => {
                        const Icon = websiteTypes[selectedType].icon;
                        return <Icon className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                    <div className="flex-grow min-w-0">
                      <DialogTitle className="text-3xl mb-3 text-gray-900">
                        {websiteTypes[selectedType].title}
                      </DialogTitle>
                      <DialogDescription className="text-lg text-gray-700 leading-relaxed">
                        {websiteTypes[selectedType].fullDescription}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-8">
                  {/* Key info cards - Vertical layout */}
                  <div className="flex flex-col gap-4">
                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
                          <Clock className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm text-gray-600 font-semibold mb-1">Срок разработки</div>
                          <div className="font-bold text-gray-900 text-xl">
                            {websiteTypes[selectedType].timeframe}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-md">
                          <DollarSign className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm text-gray-600 font-semibold mb-1">Стоимость</div>
                          <div className="font-bold text-gray-900 text-xl">
                            {websiteTypes[selectedType].priceRange}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-purple-500 flex items-center justify-center flex-shrink-0 shadow-md">
                          <Target className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm text-gray-600 font-semibold mb-1">Тип проекта</div>
                          <div className="font-bold text-gray-900 text-xl">
                            {websiteTypes[selectedType].title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="font-bold text-2xl text-gray-900">
                        Ключевые возможности
                      </h4>
                    </div>
                    <div className="grid gap-4">
                      {websiteTypes[selectedType].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-green-50 p-5 rounded-xl border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-800 font-medium text-base leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use cases */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border-2 border-indigo-200">
                    <h4 className="font-bold text-xl mb-4 text-gray-900">Для кого подходит?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {websiteTypes[selectedType].useCases}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
