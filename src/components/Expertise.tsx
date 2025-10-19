import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo7 from "@/assets/photo-7.jpg";

const results = [
  {
    icon: TrendingUp,
    value: "+35%",
    label: "Средний прирост урожайности у клиентов"
  },
  {
    icon: Award,
    value: "6 лет",
    label: "Успешной работы на рынке"
  },
  {
    icon: Users,
    value: "50+",
    label: "Довольных партнёров"
  }
];

const Expertise = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Реальные результаты нашей работы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Цифры и факты, подтверждающие нашу экспертизу
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <Card key={index} className="border-border/50 bg-gradient-to-br from-card to-secondary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {result.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {result.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Carousel className="max-w-2xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={photo1} 
                  alt="Урожай моркови" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Сбор урожая моркови на наших полях
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={photo2} 
                  alt="Обработка полей" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Современная техника для обработки полей
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={photo3} 
                  alt="Капуста на поле" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Выращивание капусты в Кабардино-Балкарии
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={photo4} 
                  alt="Упакованная морковь" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Свежая морковь готова к отправке
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={photo5} 
                  alt="Молодые посадки" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Молодые посадки на наших землях
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={photo6} 
                  alt="Команда за работой" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Наша команда во время сборки урожая
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={photo7} 
                  alt="Редис в почве" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Свежий урожай редиса прямо с поля
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        {/* Mobile navigation arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <CarouselPrevious className="static translate-y-0 h-8 w-8" />
          <CarouselNext className="static translate-y-0 h-8 w-8" />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
