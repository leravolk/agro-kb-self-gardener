import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Users } from "lucide-react";
import harvestMix from "@/assets/harvest-mix.jpg";

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

        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <img 
            src={harvestMix} 
            alt="Урожай моркови, капусты и свеклы" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
            <div className="p-8 text-white">
              <p className="text-xl font-medium mb-2">
                «Качество урожая говорит само за себя»
              </p>
              <p className="text-white/80">
                Мы используем только проверенные методы и материалы
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
