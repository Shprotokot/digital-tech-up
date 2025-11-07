import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Code2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface PrivacyPolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyPolicyDialog({ open, onOpenChange }: PrivacyPolicyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Политика конфиденциальности
            </DialogTitle>
          </div>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(90vh-120px)] pr-4">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
              <p className="mb-3">
                Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) 
                действует в отношении всей информации, которую DIGITALTechUp может получить о Пользователе во время 
                использования сайта.
              </p>
              <p>
                Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и 
                указанными в ней условиями обработки его персональной информации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Персональная информация пользователей</h2>
              <p className="mb-3">
                В рамках настоящей Политики под «персональной информацией пользователя» понимаются:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Персональная информация, которую пользователь предоставляет о себе самостоятельно при 
                заполнении форм обратной связи, включая персональные данные пользователя (ФИО, адрес электронной 
                почты, номер телефона);</li>
                <li>Данные, которые автоматически передаются в процессе их использования с помощью установленного 
                на устройстве пользователя программного обеспечения, в том числе IP-адрес, информация из cookies, 
                информация о браузере пользователя;</li>
                <li>Иные данные о пользователе, сбор и/или предоставление которых определено в документах, 
                регламентирующих использование отдельных сервисов сайта.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Цели сбора и обработки персональной информации</h2>
              <p className="mb-3">
                DIGITALTechUp собирает и хранит только те персональные данные, которые необходимы для:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Связи с пользователем для предоставления услуг;</li>
                <li>Улучшения качества услуг и разработки новых сервисов;</li>
                <li>Анализа поведения пользователей и статистической обработки данных;</li>
                <li>Направления рекламных и информационных материалов (с согласия пользователя);</li>
                <li>Выполнения обязательств перед пользователем.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Условия обработки персональной информации</h2>
              <p className="mb-3">
                Обработка персональных данных пользователя осуществляется в соответствии с законодательством 
                Российской Федерации. DIGITALTechUp обрабатывает персональные данные пользователя только в случае 
                их заполнения и/или отправки пользователем самостоятельно через специальные формы, расположенные 
                на сайте.
              </p>
              <p className="mb-3">
                Заполняя соответствующие формы и/или отправляя свои персональные данные, пользователь выражает 
                свое согласие с данной Политикой.
              </p>
              <p>
                DIGITALTechUp обрабатывает обезличенные данные о пользователе в случае, если это разрешено в 
                настройках браузера пользователя (включено сохранение файлов «cookie» и использование технологии 
                JavaScript).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Использование cookies</h2>
              <p className="mb-3">
                Сайт использует файлы cookies для персонализации контента, анализа трафика и улучшения 
                пользовательского опыта. Cookie-файлы – это небольшие текстовые файлы, которые сохраняются на 
                вашем устройстве при посещении сайта.
              </p>
              <p className="mb-3">
                Мы используем следующие типы cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Необходимые cookies:</strong> обеспечивают работу основных функций сайта;</li>
                <li><strong>Функциональные cookies:</strong> запоминают ваши предпочтения;</li>
                <li><strong>Аналитические cookies:</strong> помогают понять, как посетители взаимодействуют с сайтом;</li>
                <li><strong>Рекламные cookies:</strong> используются для показа релевантной рекламы.</li>
              </ul>
              <p className="mt-3">
                Вы можете управлять использованием cookies в настройках своего браузера.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Защита персональной информации</h2>
              <p className="mb-3">
                DIGITALTechUp применяет необходимые и достаточные организационные и технические меры для защиты 
                персональной информации пользователя от неправомерного доступа, уничтожения, изменения, 
                блокирования, копирования, распространения, а также от иных неправомерных действий с ней третьих лиц.
              </p>
              <p>
                Мы используем SSL-шифрование для защиты данных, передаваемых между вашим браузером и нашим сервером.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Передача персональных данных третьим лицам</h2>
              <p className="mb-3">
                DIGITALTechUp не передает персональные данные пользователей третьим лицам, за исключением случаев:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>По запросу уполномоченных государственных органов в случаях, предусмотренных законодательством;</li>
                <li>При передаче партнерам для выполнения обязательств перед пользователем (с согласия пользователя);</li>
                <li>В случае продажи сайта или компании новому владельцу.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Права пользователя</h2>
              <p className="mb-3">
                Пользователь имеет право:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Получать информацию, касающуюся обработки его персональных данных;</li>
                <li>Требовать уточнения, блокирования или удаления своих персональных данных;</li>
                <li>Отозвать согласие на обработку персональных данных;</li>
                <li>Обжаловать действия или бездействие Компании в уполномоченном органе по защите прав субъектов 
                персональных данных или в судебном порядке.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Изменения Политики конфиденциальности</h2>
              <p>
                DIGITALTechUp имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении 
                изменений в актуальной редакции указывается дата последнего обновления. Новая редакция Политики 
                вступает в силу с момента ее размещения на сайте.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Контактная информация</h2>
              <p className="mb-3">
                По всем вопросам, касающимся настоящей Политики конфиденциальности, вы можете обращаться:
              </p>
              <ul className="space-y-2">
                <li>Email: <a href="mailto:info@digital-tu.ru" className="text-indigo-600 hover:text-indigo-700 font-medium">info@digital-tu.ru</a></li>
                <li>Телефон: <a href="tel:+79916334455" className="text-indigo-600 hover:text-indigo-700 font-medium">+7 (991) 633-44-55</a></li>
              </ul>
            </section>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Дата последнего обновления: 04 ноября 2025 г.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
