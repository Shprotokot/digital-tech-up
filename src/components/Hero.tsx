import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Award, TrendingUp, Calendar } from "lucide-react";
import heroImg from "../assets/new-hero-image.webp";

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
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 hover:bg-gradient-to-r hover:from-yellow-300 hover:via-pink-300 hover:to-yellow-200 hover:text-indigo-700 px-8 py-4 font-bold rounded-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(251,207,232,0.8)] transition-all duration-300 hover:brightness-110 min-h-[60px]"
                style={{ fontSize: '1.125rem', lineHeight: '1.5' }}
              >
                Начать проект
                <ArrowRight className="w-6 h-6" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-indigo-600 transition-all duration-300 px-8 py-4 font-bold rounded-xl hover:scale-105 hover:shadow-2xl min-h-[60px]"
                style={{ fontSize: '1.125rem', lineHeight: '1.5' }}
              >
                Узнать больше
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-500 border border-white/30 hover:border-white/50 shadow-lg hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="mb-1">
                    <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-pink-100 bg-clip-text text-transparent" style={{ fontSize: '1.875rem', fontWeight: '800', lineHeight: '1.2' }}>250+</div>
                  </div>
                  <div className="text-white" style={{ fontSize: '0.875rem', fontWeight: '800', lineHeight: '1.25' }}>Проектов</div>
                </div>
              </div>
              <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-500 border border-white/30 hover:border-white/50 shadow-lg hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="mb-1">
                    <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-pink-100 bg-clip-text text-transparent" style={{ fontSize: '1.875rem', fontWeight: '800', lineHeight: '1.2' }}>98%</div>
                  </div>
                  <div className="text-white" style={{ fontSize: '0.875rem', fontWeight: '800', lineHeight: '1.25' }}>Удержание</div>
                </div>
              </div>
              <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-4 text-center hover:bg-white/15 transition-all duration-500 border border-white/30 hover:border-white/50 shadow-lg hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="mb-1">
                    <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-pink-100 bg-clip-text text-transparent" style={{ fontSize: '1.875rem', fontWeight: '800', lineHeight: '1.2' }}>5 лет</div>
                  </div>
                  <div className="text-white" style={{ fontSize: '0.875rem', fontWeight: '800', lineHeight: '1.25' }}>На рынке</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative w-full aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-pink-400 blur-3xl opacity-30"></div>
              <img 
                src={heroImg}
                alt="Digital Strategy & Analytics Workspace"
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
