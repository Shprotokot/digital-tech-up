import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { toast } from "sonner@2.0.3";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import telegramQR from "figma:asset/fd3921b92113dbebbad59d3440e4ce85b2b3ce03.png";
import whatsappQR from "figma:asset/9e2e89ab5ff89541511d595e19ef11456e91253e.png";

export function ContactForm() {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Функция форматирования телефона
  const formatPhoneNumber = (value: string): string => {
    // Удаляем все нецифровые символы
    const cleaned = value.replace(/\D/g, '');
    
    // Если первая цифра 8, заменяем на 7
    let digits = cleaned;
    if (digits.startsWith('8')) {
      digits = '7' + digits.slice(1);
    }
    
    // Форматируем в +7 (999) 123-45-67
    if (digits.length === 0) {
      return '';
    }
    
    // Добавляем +7
    if (digits.startsWith('7')) {
      let formatted = '+7';
      
      // Добавляем код в скобках (999)
      if (digits.length > 1) {
        formatted += ' (' + digits.slice(1, 4);
        
        if (digits.length > 4) {
          formatted += ') ' + digits.slice(4, 7);
          
          if (digits.length > 7) {
            formatted += '-' + digits.slice(7, 9);
            
            if (digits.length > 9) {
              formatted += '-' + digits.slice(9, 11);
            }
          }
        } else if (digits.length === 4) {
          formatted += ')';
        }
      }
      
      return formatted;
    } else {
      // Если номер не начинается с 7, просто добавляем +7
      return '+7' + (digits ? ' (' + digits.slice(0, 3) : '');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formatted = formatPhoneNumber(inputValue);
    setPhoneValue(formatted);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Проверяем honeypot защиту от спама
      if (formData.get('honeypot')) {
        console.warn('🚫 Spam detected');
        setIsSubmitting(false);
        return;
      }

      console.log('📧 Отправка заявки через Netlify Forms');

      // Кодируем данные формы для Netlify
      const formEncoded = new URLSearchParams(formData as any).toString();

      // Отправляем данные в Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formEncoded,
      });

      if (response.ok) {
        console.log('✅ Заявка успешно отправлена через Netlify Forms');
        setShowSuccessDialog(true);
        toast.success("Заявка успешно отправлена!");
        form.reset();
        setPhoneValue("");
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      console.error("❌ Ошибка при отправке формы:", error);
      toast.error("Не удалось отправить заявку. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="mb-6 text-white font-bold text-4xl">Начните свой проект</h2>
            <p className="text-2xl text-white/95 mb-8 font-semibold">
              Оставьте заявку, и мы проведем бесплатный аудит вашего текущего digital-присутствия 
              с рекомендациями по оптимизации.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="mb-1">Email</div>
                  <a href="mailto:info@digital-tu.ru" className="text-white/90 hover:text-white transition-colors">
                    info@digital-tu.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="mb-1">Телефон</div>
                  <a href="tel:+79916334455" className="text-white/90 hover:text-white transition-colors">
                    +7 (991) 633-44-55
                  </a>
                </div>
              </div>
            </div>

            {/* QR Codes */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="mb-4">
                <p className="text-white/95">Или свяжитесь через мессенджеры:</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Telegram QR */}
                <a 
                  href="https://t.me/dtechup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 border border-white/20 hover:border-blue-400/50">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Send className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-lg">
                        <ImageWithFallback 
                          src={telegramQR} 
                          alt="Telegram QR"
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-white text-sm font-semibold group-hover:text-blue-200 transition-colors">Telegram</div>
                      </div>
                    </div>
                  </div>
                </a>

                {/* WhatsApp QR */}
                <a 
                  href="https://wa.me/message/SENHH7DQLVYLA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 border border-white/20 hover:border-green-400/50">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white rounded-lg p-2 shadow-lg">
                        <ImageWithFallback 
                          src={whatsappQR} 
                          alt="WhatsApp QR"
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-white text-sm font-semibold group-hover:text-green-200 transition-colors">WhatsApp</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form 
              ref={formRef}
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="honeypot"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Скрытое поле для Netlify - идентифицирует форму */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field (защита от спама) */}
              <div style={{ position: 'absolute', width: '1px', height: '1px', margin: '-1px', border: 0, padding: 0, whiteSpace: 'nowrap', clipPath: 'inset(100%)', clip: 'rect(0 0 0 0)', overflow: 'hidden' }}>
                <input type="text" name="honeypot" placeholder="Name" autoComplete="off" tabIndex={-1} />
              </div>

              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="mt-2"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2"
                  placeholder="ivan@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2"
                  placeholder="+7 (999) 123-45-67"
                  value={phoneValue}
                  onChange={handlePhoneChange}
                />
              </div>
              <div>
                <Label htmlFor="message">Сообщение *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="mt-2"
                  rows={4}
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </Button>
              <p className="text-sm text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">Ваша заявка в работе!</DialogTitle>
            <DialogDescription className="text-center text-lg pt-4">
              Команда Digital TechUp свяжется с вами в ближайшее время!
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            >
              Отлично!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
