import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const team = [
  {
    name: "Алексей Петров",
    role: "Главный агроном",
    description: "15 лет опыта в агрономии, эксперт по овощным культурам"
  },
  {
    name: "Марина Иванова",
    role: "Специалист по подбору семян",
    description: "Глубокие знания селекции и семенного материала"
  },
  {
    name: "Дмитрий Сидоров",
    role: "Консультант по удобрениям",
    description: "Специалист по агрохимии и почвоведению"
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Наша команда
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессионалы с практическим опытом и глубокими знаниями
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow bg-card/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            «Самостоятельный и практический подход — основа нашего успеха»
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
