import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { ArrowUpRight, CheckCircle2, Calendar, Target } from "lucide-react";

const cases = [
  {
    title: "E-commerce платформа",
    category: "Разработка + Маркетинг",
    description: "Создание интернет-магазина с интеграцией платежных систем и настройка контекстной рекламы. ROI 320% за первые 6 месяцев.",
    metrics: [
      { label: "Конверсия", value: "+145%" },
      { label: "Трафик", value: "+280%" }
    ],
    gradient: "from-blue-500 to-cyan-500",
    fullDescription: "Наш клиент — розничная сеть товаров для дома — обратился к нам с задачей создания полноценной e-commerce платформы с нуля. Мы разработали современный интернет-магазин на базе React и Node.js с интеграцией платежных систем (Stripe, PayPal, Яндекс.Касса), системой управления заказами и CRM.",
    timeline: "4 месяца",
    challenges: [
      "Интеграция с 3 различными платежными системами",
      "Синхронизация с офлайн-складом в реальном времени",
      "Создание персонализированной системы рекомендаций"
    ],
    results: [
      "ROI 320% за первые 6 месяцев работы",
      "Конверсия выросла с 1.2% до 2.94%",
      "Средний чек увеличился на 85%",
      "Трафик вырос на 280% благодаря SEO и контекстной рекламе"
    ]
  },
  {
    title: "Корпоративный сайт",
    category: "Веб-разработка",
    description: "Разработка многоязычного корпоративного портала с CMS для управления контентом и интеграцией с внутренними системами.",
    metrics: [
      { label: "PageSpeed", value: "95/100" },
      { label: "Uptime", value: "99.9%" }
    ],
    gradient: "from-purple-500 to-pink-500",
    fullDescription: "Международная производственная компания нуждалась в обновлении устаревшего корпоративного сайта. Мы создали современный многоязычный портал (5 языков) с мощной CMS, каталогом продукции, интеграцией с ERP-системой и личным кабинетом для партнеров.",
    timeline: "3 месяца",
    challenges: [
      "Миграция 10 000+ страниц контента без потери SEO",
      "Интеграция с SAP ERP для синхронизации каталога",
      "Обеспечение высокой производительности при больших объемах данных"
    ],
    results: [
      "PageSpeed Score 95/100 (было 45/100)",
      "Время загрузки сократилось на 78%",
      "Uptime 99.9% за весь год",
      "Запросы в поддержку сократились на 40% благодаря улучшенному UX"
    ]
  },
  {
    title: "Lead-генерация B2B",
    category: "SEO + Контекст",
    description: "Комплексная стратегия продвижения B2B-сервиса: техническое SEO, контент-маркетинг и таргетированная реклама.",
    metrics: [
      { label: "Лиды", value: "+410%" },
      { label: "CPL", value: "-55%" }
    ],
    gradient: "from-green-500 to-emerald-500",
    fullDescription: "B2B SaaS-платформа для автоматизации бухгалтерии обратилась к нам с задачей увеличения потока квалифицированных лидов. Мы разработали комплексную стратегию: техническое SEO, контент-маркетинг, настройка Google Ads и LinkedIn Ads с точным таргетингом на ЛПР.",
    timeline: "6 месяцев",
    challenges: [
      "Высокая конкуренция в нише (CPC до $45)",
      "Длинный цикл сделки (3-6 месяцев)",
      "Необходимость привлечения именно ЛПР, а не рядовых сотрудников"
    ],
    results: [
      "Количество лидов выросло на 410%",
      "Стоимость лида снизилась с $120 до $54",
      "70% лидов от органического трафика (SEO)",
      "Конверсия в демо-презентации увеличилась до 18%"
    ]
  }
];

export function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="cases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Кейсы
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-semibold">
            Примеры успешно реализованных проектов с измеримыми результатами
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full">
              <CardContent className="p-0 flex flex-col h-full">
                <div className={`h-3 bg-gradient-to-r ${caseStudy.gradient}`}></div>
                <div className="p-6 flex flex-col flex-grow">
                  <Badge variant="secondary" className="mb-3 w-fit">
                    {caseStudy.category}
                  </Badge>
                  <h3 className="mb-3 group-hover:text-indigo-600 transition-colors font-bold text-xl">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {caseStudy.description}
                  </p>
                  <div className="mt-auto">
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                      {caseStudy.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-2xl mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    <div 
                      onClick={() => setSelectedCase(index)}
                      className="mt-4 flex items-center text-indigo-600 group-hover:text-purple-600 transition-colors"
                    >
                      <span className="text-sm">Подробнее</span>
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Dialog for case details */}
      <Dialog open={selectedCase !== null} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0">
          {selectedCase !== null && (
            <ScrollArea className="max-h-[90vh]">
              <div className="p-8">
                <DialogHeader className="mb-8">
                  <div className={`h-3 w-full bg-gradient-to-r ${cases[selectedCase].gradient} rounded-t-lg -mt-8 -mx-8 mb-6`}></div>
                  <div>
                    <Badge variant="secondary" className="w-fit mb-4">
                      {cases[selectedCase].category}
                    </Badge>
                    <DialogTitle className="text-3xl mb-4 text-gray-900">
                      {cases[selectedCase].title}
                    </DialogTitle>
                    <DialogDescription className="text-lg text-gray-700 leading-relaxed">
                      {cases[selectedCase].fullDescription}
                    </DialogDescription>
                  </div>
                </DialogHeader>

                <div className="space-y-8">
                  {/* Timeline */}
                  <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 font-semibold mb-1">Сроки реализации</div>
                        <div className="font-bold text-gray-900 text-lg">{cases[selectedCase].timeline}</div>
                      </div>
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-2xl text-gray-900">
                        Задачи и вызовы
                      </h4>
                    </div>
                    <div className="grid gap-4">
                      {cases[selectedCase].challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-start gap-4 bg-orange-50 p-5 rounded-xl border border-orange-200">
                          <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 mt-2"></div>
                          <span className="text-gray-800 font-medium text-base leading-relaxed">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CheckCircle2 className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="font-bold text-2xl text-gray-900">
                        Результаты
                      </h4>
                    </div>
                    <div className="grid gap-4">
                      {cases[selectedCase].results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-green-50 p-5 rounded-xl border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-800 font-medium text-base leading-relaxed">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics highlight */}
                  <div className="grid grid-cols-2 gap-6 pt-6 border-t-2 border-gray-200">
                    {cases[selectedCase].metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
                        <div className="text-4xl mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
                          {metric.value}
                        </div>
                        <div className="text-base text-gray-700 font-semibold">{metric.label}</div>
                      </div>
                    ))}
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
