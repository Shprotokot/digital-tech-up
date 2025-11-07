import { useState } from "react";
import { Lightbulb, FileText, Code2, Rocket, Clock, Users, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const steps = [
  {
    icon: Lightbulb,
    title: "Анализ и стратегия",
    description: "Исследуем нишу, целевую аудиторию и конкурентов. Формируем техническое задание и маркетинговую стратегию.",
    fullDescription: "На этапе анализа и стратегии мы глубоко погружаемся в ваш бизнес, чтобы понять его уникальные потребности и цели. Проводим комплексное исследование рынка, анализируем конкурентов и изучаем вашу целевую аудиторию.",
    duration: "1-2 недели",
    team: "Аналитик, стратег, проект-менеджер",
    deliverables: [
      "Анализ конкурентов и рынка",
      "Исследование целевой аудитории и personas",
      "Техническое задание (ТЗ)",
      "Маркетинговая стратегия и медиаплан",
      "Определение KPI и метрик успеха",
      "Roadmap проекта с milestone'ами"
    ]
  },
  {
    icon: FileText,
    title: "Проектирование",
    description: "Создаем прототипы, wireframes и UI/UX дизайн. Согласовываем архитектуру и технологический стек.",
    fullDescription: "Этап проектирования включает создание детальной архитектуры проекта, разработку пользовательских сценариев и создание визуальных прототипов. Мы проектируем UI/UX с фокусом на конверсию и удобство использования.",
    duration: "2-3 недели",
    team: "UI/UX дизайнер, архитектор, фронтенд-лид",
    deliverables: [
      "Информационная архитектура сайта",
      "User Flow и Customer Journey Maps",
      "Wireframes всех ключевых страниц",
      "Интерактивные прототипы в Figma",
      "UI Kit и дизайн-система",
      "Спецификация технологического стека",
      "Архитектура базы данных"
    ]
  },
  {
    icon: Code2,
    title: "Разработка",
    description: "Фронтенд и бэкенд разработка с использованием современных фреймворков. Интеграция CMS и необходимых сервисов.",
    fullDescription: "На этапе разработки наша команда воплощает дизайн в жизнь, используя современные технологии и best practices. Мы разрабатываем масштабируемый, безопасный и производительный код с применением CI/CD практик.",
    duration: "4-8 недель",
    team: "Frontend, Backend разработчики, DevOps",
    deliverables: [
      "Адаптивная фронтенд часть (React/Next.js)",
      "Backend API и серверная логика",
      "Интеграция CMS (Strapi/Contentful/WordPress)",
      "Интеграция платежных систем",
      "Подключение аналитики и метрик",
      "Настройка CI/CD pipeline",
      "Документация кода и API",
      "Unit и интеграционные тесты"
    ]
  },
  {
    icon: Rocket,
    title: "Запуск и продвижение",
    description: "Тестирование, оптимизация, деплой проекта. Настройка рекламных кампаний и старт SEO-продвижения.",
    fullDescription: "Финальный этап включает всестороннее тестирование, оптимизацию производительности и развертывание проекта на продакшн. Запускаем маркетинговые активности для привлечения первых пользователей и начинаем SEO-продвижение.",
    duration: "2-3 недели",
    team: "QA инженер, маркетолог, SEO-специалист",
    deliverables: [
      "Функциональное и нагрузочное тестирование",
      "Оптимизация производительности (PageSpeed 90+)",
      "Деплой на production сервер",
      "Настройка SSL и безопасности",
      "Техническое SEO и индексация",
      "Запуск рекламных кампаний (Google Ads/Яндекс.Директ)",
      "Настройка email-маркетинга",
      "Обучение команды работе с CMS",
      "Документация и инструкции"
    ]
  }
];

export function Process() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Процесс работы
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-semibold">
            Структурированный workflow от концепции до запуска проекта
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 transform -translate-y-1/2"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative flex">
                  <div 
                    onClick={() => setSelectedStep(index)}
                    className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-indigo-200 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2 group w-full flex flex-col"
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <h3 className="text-center mb-3 font-bold text-xl group-hover:text-indigo-600 transition-colors">{step.title}</h3>
                    <p className="text-center text-gray-600 flex-grow">
                      {step.description}
                    </p>
                    <div className="mt-4 text-center text-sm text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Нажмите для подробностей →
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dialog for process details */}
      <Dialog open={selectedStep !== null} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
          {selectedStep !== null && (
            <ScrollArea className="max-h-[90vh]">
              <div className="p-8">
                <DialogHeader className="mb-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-xl">
                      {(() => {
                        const Icon = steps[selectedStep].icon;
                        return <Icon className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm mb-3 font-semibold shadow-md">
                        Этап {selectedStep + 1} из 4
                      </div>
                      <DialogTitle className="text-3xl mb-3 text-gray-900">
                        {steps[selectedStep].title}
                      </DialogTitle>
                      <DialogDescription className="text-lg text-gray-700 leading-relaxed">
                        {steps[selectedStep].fullDescription}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-8">
                  {/* Duration & Team - Vertical layout */}
                  <div className="flex flex-col gap-4">
                    <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200 overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-500 flex items-center justify-center shadow-md">
                          <Clock className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm text-gray-600 font-semibold mb-1">Длительность</div>
                          <div className="font-bold text-gray-900 text-xl">
                            {steps[selectedStep].duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 overflow-hidden">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-500 flex items-center justify-center shadow-md">
                          <Users className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm text-gray-600 font-semibold mb-1">Команда</div>
                          <div className="font-bold text-gray-900 text-xl">
                            {steps[selectedStep].team}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CheckCircle2 className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="font-bold text-2xl text-gray-900">
                        Результаты этапа
                      </h4>
                    </div>
                    <div className="grid gap-4">
                      {steps[selectedStep].deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-green-50 p-5 rounded-xl border border-green-200 hover:bg-green-100 hover:border-green-300 transition-all">
                          <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-800 font-medium text-base leading-relaxed">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation hint */}
                  {selectedStep < steps.length - 1 && (
                    <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200">
                      <p className="text-base text-gray-700">
                        <span className="font-bold text-gray-900">Следующий этап:</span> {steps[selectedStep + 1].title}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
