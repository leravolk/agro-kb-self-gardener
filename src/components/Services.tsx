import { Card, CardContent } from "@/components/ui/card";
import { Sprout, ShoppingCart, ClipboardCheck, UserCheck } from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Выращивание овощных культур",
    description: "Полный цикл производства овощей на собственных землях с применением современных агротехнологий"
  },
  {
    icon: ShoppingCart,
    title: "Продажа свежих овощей оптом",
    description: "Стабильные поставки качественных овощей для торговых сетей и оптовых покупателей"
  },
  {
    icon: ClipboardCheck,
    title: "Контроль качества урожая",
    description: "Постоянный контроль состояния посевов и зрелости овощей на всех этапах производства"
  },
  {
    icon: UserCheck,
    title: "Сбор и упаковка урожая",
    description: "Профессиональный сбор и упаковка овощей с соблюдением стандартов качества и сроков хранения"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Направления деятельности
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход к сельскому хозяйству — от поля к прилавку.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group bg-card/80 backdrop-blur"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
