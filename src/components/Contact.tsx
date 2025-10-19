import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ответим на все ваши вопросы
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Адрес</h3>
                  <p className="text-muted-foreground">
                    Кабардино-Балкарская Республика
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Телефон</h3>
                  <p className="text-muted-foreground">
                    +7 (XXX) XXX-XX-XX
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    info@sam-agronom.ru
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-secondary/30 rounded-xl">
              <p className="text-muted-foreground leading-relaxed">
                Работаем без выходных с 8:00 до 20:00. 
                Готовы выехать на ваше хозяйство для консультации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
