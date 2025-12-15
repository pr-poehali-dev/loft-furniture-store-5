import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">LOFT</h3>
            <p className="text-sm text-muted-foreground">
              Интернет-магазин дизайнерской мебели в стиле лофт. Качество и минимализм.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#catalog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#delivery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Доставка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@loft-store.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 LOFT. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
