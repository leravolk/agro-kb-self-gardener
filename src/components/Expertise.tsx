import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import fieldSpraying from "@/assets/field-spraying.jpg";
import carrotHarvest from "@/assets/carrot-harvest.jpg";
import teamHarvest from "@/assets/team-harvest.jpg";
import carrotBox from "@/assets/carrot-box.jpg";
import radishSoil from "@/assets/radish-soil.jpg";
import youngCrops from "@/assets/young-crops.jpg";
import cabbageField from "@/assets/cabbage-field.jpg";

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

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={fieldSpraying} 
                  alt="Обработка полей" 
                  className="w-full max-h-[600px] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Современная техника для обработки полей
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={carrotHarvest} 
                  alt="Урожай моркови" 
                  className="w-full max-h-[600px] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Сбор урожая моркови на наших полях
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={teamHarvest} 
                  alt="Команда за работой" 
                  className="w-full max-h-[600px] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Наша команда во время сборки урожая
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={carrotBox} 
                  alt="Упакованная морковь" 
                  className="w-full max-h-[600px] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Свежая морковь готова к отправке
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={radishSoil} 
                  alt="Редис в почве" 
                  className="w-full max-h-[600px] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Свежий урожай редиса прямо с поля
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={youngCrops} 
                  alt="Молодые посадки" 
                  className="w-full max-h-[600px] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Молодые посадки на наших землях
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src={cabbageField} 
                  alt="Капуста на поле" 
                  className="w-full max-h-[600px] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    Выращивание капусты в Кабардино-Балкарии
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Expertise;
