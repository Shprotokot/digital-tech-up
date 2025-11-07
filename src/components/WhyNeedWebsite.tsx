import { Building2, TrendingUp, Users } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Малому и среднему бизнесу",
    description: "Сайт - это ваша витрина в интернете 24/7. Повышайте узнаваемость бренда, привлекайте новых клиентов и увеличивайте продажи. Современный сайт обеспечивает конкурентное преимущество и доверие аудитории.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Стартапам и предпринимателям",
    description: "Запустите свой продукт быстрее с профессиональным MVP. Валидируйте бизнес-идею, собирайте лиды и масштабируйте проект. Сайт - это фундамент для построения онлайн-присутствия и роста метрик.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Крупным компаниям",
    description: "Комплексные корпоративные решения для управления репутацией, автоматизации бизнес-процессов и коммуникации с клиентами. Интеграция с CRM, ERP и другими системами для максимальной эффективности.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

export function WhyNeedWebsite() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-purple-50/30 to-pink-50/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="mb-4 font-bold text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Кому и зачем нужен сайт?
          </h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-semibold">
            Веб-присутствие критически важно для любого бизнеса в цифровую эпоху
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-transparent relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="mb-4 font-bold text-2xl text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Decorative element */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${reason.gradient} transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
