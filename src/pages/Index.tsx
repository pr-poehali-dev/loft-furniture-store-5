import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Обеденный стол Industrial',
    price: 45000,
    category: 'Столы',
    images: [
      'https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/1d57a3ca-89b3-4afe-9c20-ba71c8b46fdd.jpg',
      'https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/1d57a3ca-89b3-4afe-9c20-ba71c8b46fdd.jpg',
    ],
  },
  {
    id: 2,
    name: 'Стеллаж Loft Metal',
    price: 32000,
    category: 'Стеллажи',
    images: [
      'https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f4f/files/f230a918-2240-495b-935d-9c3061db020b.jpg',
      'https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/f230a918-2240-495b-935d-9c3061db020b.jpg',
    ],
  },
  {
    id: 3,
    name: 'Диван Urban Leather',
    price: 89000,
    category: 'Диваны',
    images: [
      'https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/3f962a5c-e60f-4b14-91ee-2c2c9f26befe.jpg',
      'https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/3f962a5c-e60f-4b14-91ee-2c2c9f26befe.jpg',
    ],
  },
  {
    id: 4,
    name: 'Обеденный стол Classic',
    price: 52000,
    category: 'Столы',
    images: [
      'https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/1d57a3ca-89b3-4afe-9c20-ba71c8b46fdd.jpg',
    ],
  },
  {
    id: 5,
    name: 'Стеллаж Minimal',
    price: 28000,
    category: 'Стеллажи',
    images: [
      'https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/f230a918-2240-495b-935d-9c3061db020b.jpg',
    ],
  },
  {
    id: 6,
    name: 'Диван Corner Loft',
    price: 95000,
    category: 'Диваны',
    images: [
      'https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/3f962a5c-e60f-4b14-91ee-2c2c9f26befe.jpg',
    ],
  },
];

const categories = ['Все', 'Столы', 'Диваны', 'Стеллажи'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredProducts =
    selectedCategory === 'Все'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/1d57a3ca-89b3-4afe-9c20-ba71c8b46fdd.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            LOFT МЕБЕЛЬ
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Минималистичный дизайн для современных пространств.
            <br />
            Качество, функциональность и стиль.
          </p>
          <Button size="lg" className="animate-scale-in" onClick={() => {
            const catalog = document.querySelector('#catalog');
            catalog?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Смотреть каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Каталог</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наша коллекция мебели в стиле лофт сочетает индустриальную эстетику и комфорт
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">О нас</h2>
              <p className="text-muted-foreground mb-4">
                Мы создаём мебель в стиле лофт для тех, кто ценит минимализм, функциональность и
                качество. Каждый предмет создан с вниманием к деталям.
              </p>
              <p className="text-muted-foreground mb-4">
                Используем только качественные материалы: натуральное дерево, металл и кожу.
                Работаем с проверенными производителями и гарантируем долговечность каждого изделия.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Моделей мебели</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-heading font-bold mb-2">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/6a4e0a7a-497f-42d2-8a49-081f80f60f4f/files/f230a918-2240-495b-935d-9c3061db020b.jpg"
                alt="О нас"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Доставка</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы обеспечим быструю и безопасную доставку вашей мебели
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Бесплатная доставка</h3>
              <p className="text-sm text-muted-foreground">
                При заказе от 50 000 ₽ доставка по Москве бесплатно
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Package" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Упаковка</h3>
              <p className="text-sm text-muted-foreground">
                Надёжная упаковка гарантирует сохранность при транспортировке
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Сроки доставки</h3>
              <p className="text-sm text-muted-foreground">
                Доставка по Москве 1-3 дня, по России 5-14 дней
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-semibold text-xl mb-6">Наши контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium mb-1">Адрес</div>
                      <div className="text-sm text-muted-foreground">
                        Москва, ул. Примерная, д. 1
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium mb-1">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <div className="text-sm text-muted-foreground">info@loft-store.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <div>
                      <div className="font-medium mb-1">Режим работы</div>
                      <div className="text-sm text-muted-foreground">Пн-Вс: 10:00 - 20:00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-xl mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Телефон" />
                  <Textarea placeholder="Сообщение" rows={4} />
                  <Button className="w-full">
                    Отправить
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
