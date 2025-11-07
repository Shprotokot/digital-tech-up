import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Кросс-браузерная совместимость",
  "Высокая производительность (PageSpeed 90+)",
  "Защита от DDoS и SQL-инъекций",
  "Интеграция с CRM-системами",
  "A/B тестирование элементов",
  "Техническая поддержка 24/7"
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 to-purple-100/40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <h2 className="mb-6 font-bold text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Почему выбирают нас
              </h2>
              <p className="text-2xl text-gray-700 mb-8 font-semibold">
                Мы используем передовые технологии и best practices индустрии для создания продуктов, 
                которые масштабируются и обеспечивают бизнес-результаты.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg border border-indigo-100 hover:border-indigo-300 group h-full">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-800 font-semibold leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 p-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl text-white shadow-xl">
              <p className="text-2xl mb-2 font-bold">Гарантия качества</p>
              <p className="text-white/90 text-lg">
                Предоставляем гарантийное обслуживание и бесплатные исправления в течение 3 месяцев после запуска проекта.
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-square lg:aspect-[4/5]">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-purple-200 blur-3xl opacity-30"></div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTkzMjU0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Digital Marketing Analytics"
              className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
