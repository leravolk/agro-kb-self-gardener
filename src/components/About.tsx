import radishField from "@/assets/radish-field.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              О компании
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Сам себе агроном</strong> — это аграрная компания, 
                основанная в 2019 году. Мы выращиваем овощи на собственных землях 
                в Кабардино-Балкарской Республике и помогаем другим хозяйствам 
                повышать урожайность.
              </p>
              <p>
                За годы работы мы накопили экспертизу в области агротехнологий, 
                подбора семян и удобрений. Наша цель — обеспечить стабильные 
                поставки качественных овощей и делиться знаниями с коллегами 
                по отрасли.
              </p>
              <p>
                Мы гордимся самостоятельным подходом к делу — от планирования 
                посадок до сбора урожая и консультирования партнёров.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2019</div>
                <div className="text-sm text-muted-foreground">Год основания</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Га земли</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">КБР</div>
                <div className="text-sm text-muted-foreground">Регион работы</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={radishField} 
              alt="Поля редиски компании" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
