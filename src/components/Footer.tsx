const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Сам себе агроном</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Аграрная компания в Кабардино-Балкарской Республике. 
              Выращиваем, продаём, консультируем с 2019 года.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Направления</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Выращивание овощей</li>
              <li>Оптовые продажи</li>
              <li>Подбор семян и удобрений</li>
              <li>Агроконсалтинг</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>КБР, Россия</li>
              <li>+7 (XXX) XXX-XX-XX</li>
              <li>info@sam-agronom.ru</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2019-2025 Сам себе агроном. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
