import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Полный цикл digital-решений</span>
            </div>
            <h1 className="mb-6 text-white font-bold text-5xl lg:text-6xl leading-tight">
              Разработка сайтов и&nbsp;стратегия <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-100 bg-clip-text text-transparent">интернет-маркетинга</span>
            </h1>
            <p className="text-2xl mb-8 text-white/95 font-medium leading-relaxed">
              Создаем высокопроизводительные веб-платформы с интегрированной маркетинговой стратегией. 
              Применяем data-driven подход для достижения измеримых KPI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                Начать проект
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Узнать больше
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="text-5xl mb-1 font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">150+</div>
                <div className="text-white font-semibold">Проектов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="text-5xl mb-1 font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">98%</div>
                <div className="text-white font-semibold">Удержание</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="text-5xl mb-1 font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">5 лет</div>
                <div className="text-white font-semibold">На рынке</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative w-full aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-pink-400 blur-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE5MzU1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Web Development"
                className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
