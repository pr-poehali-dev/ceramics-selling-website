import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handmadeProducts = [
    {
      id: 1,
      name: "Терракотовая ваза",
      price: "3 500 ₽",
      image: "/img/48b14e94-df37-41bc-b047-44b9a098508f.jpg",
      description:
        "Элегантная ваза ручной работы с натуральной терракотовой глазурью",
      category: "handmade",
    },
    {
      id: 2,
      name: "Керамическая скульптура",
      price: "5 800 ₽",
      image: "/img/967c3ba6-c85a-4cee-b137-694f85d65c7c.jpg",
      description:
        "Уникальная художественная керамика, созданная методом ручной лепки",
      category: "handmade",
    },
    {
      id: 3,
      name: "Набор керамических мисок",
      price: "2 800 ₽",
      image: "/img/dec1bc58-fe95-476f-9a7f-846ed76e07f4.jpg",
      description:
        "Коллекция мисок из натуральной глины с уникальной текстурой",
      category: "handmade",
    },
  ];

  const potteryProducts = [
    {
      id: 4,
      name: "Гончарная ваза",
      price: "2 200 ₽",
      image: "/img/cfb8c3b6-1903-437a-acb4-5ca72530396e.jpg",
      description:
        "Классическая ваза, созданная на гончарном круге по традиционной технологии",
      category: "pottery",
    },
    {
      id: 5,
      name: "Посуда из терракоты",
      price: "4 200 ₽",
      image: "/img/d06ff076-e835-4779-b926-f8d495241e5d.jpg",
      description: "Набор тарелок с органичными формами и теплыми оттенками",
      category: "pottery",
    },
    {
      id: 6,
      name: "Горшок на гончарном круге",
      price: "1 800 ₽",
      image: "/img/50b57498-6396-403a-afc2-14f771b91d56.jpg",
      description:
        "Традиционный керамический горшок, выточенный на гончарном круге",
      category: "pottery",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Palette" className="h-8 w-8 text-accent" />
              <h1 className="text-2xl font-bold text-foreground">
                Ceramic Artware
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-foreground hover:text-accent transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-foreground hover:text-accent transition-colors"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-accent transition-colors"
              >
                О керамике
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-accent transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
              Корзина
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="py-20 bg-gradient-to-br from-terracotta-50 to-clay-100"
      >
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-terracotta-100 text-terracotta-800 border-terracotta-200">
            Ручная работа
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Керамические изделия
            <br />
            <span className="text-accent">с душой мастера</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Каждое изделие создается вручную с любовью к керамическому
            искусству. Уникальные формы, натуральные материалы и неповторимая
            энергетика.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Icon name="Eye" className="h-5 w-5 mr-2" />
              Посмотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Icon name="Heart" className="h-5 w-5 mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* About Ceramics Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                История керамики
              </h2>
              <p className="text-xl text-muted-foreground">
                Искусство, которое объединяет тысячелетия традиций
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-terracotta-100 rounded-full p-3">
                    <Icon
                      name="Clock"
                      className="h-6 w-6 text-terracotta-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Древние корни
                    </h3>
                    <p className="text-muted-foreground">
                      Керамика — одно из древнейших искусств человечества.
                      Первые изделия из глины появились более 30 000 лет назад.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-terracotta-100 rounded-full p-3">
                    <Icon
                      name="Flame"
                      className="h-6 w-6 text-terracotta-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Магия огня
                    </h3>
                    <p className="text-muted-foreground">
                      Превращение глины в прочную керамику происходит при
                      высоких температурах, что придает каждому изделию
                      уникальный характер.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-terracotta-100 rounded-full p-3">
                    <Icon
                      name="Sparkles"
                      className="h-6 w-6 text-terracotta-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Живое искусство
                    </h3>
                    <p className="text-muted-foreground">
                      Каждое изделие несет в себе энергию мастера и уникальность
                      процесса создания. Нет двух одинаковых керамических
                      произведений.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-terracotta-50 rounded-2xl p-8">
                <div className="text-center">
                  <Icon
                    name="Quote"
                    className="h-12 w-12 text-terracotta-400 mx-auto mb-4"
                  />
                  <blockquote className="text-lg italic text-foreground mb-4">
                    "Глина — это материал, который помнит прикосновения. Она
                    хранит тепло рук мастера и передает его тому, кто держит
                    готовое изделие."
                  </blockquote>
                  <cite className="text-terracotta-600 font-medium">
                    — Мастер-керамист
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-clay-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Каталог изделий
            </h2>
            <p className="text-xl text-muted-foreground">
              Откройте для себя уникальные керамические произведения
            </p>
          </div>

          {/* Handmade Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Badge className="bg-terracotta-100 text-terracotta-800 border-terracotta-200 text-lg px-4 py-2">
                <Icon name="Palette" className="h-5 w-5 mr-2" />
                Ручная работа
              </Badge>
            </div>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Уникальные произведения, созданные методом ручной лепки. Каждое
              изделие неповторимо и несет в себе индивидуальность мастера.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {handmadeProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-background"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-foreground">
                        {product.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="border-terracotta-300 text-terracotta-700"
                      >
                        Ручная работа
                      </Badge>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-accent">
                        {product.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В
                        корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pottery Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Badge className="bg-clay-100 text-clay-800 border-clay-200 text-lg px-4 py-2">
                <Icon name="RotateCcw" className="h-5 w-5 mr-2" />
                Гончарные изделия
              </Badge>
            </div>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Традиционная керамика, созданная на гончарном круге. Классические
              формы и проверенные временем техники изготовления.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {potteryProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-background"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-foreground">
                        {product.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="border-clay-300 text-clay-700"
                      >
                        Гончарный круг
                      </Badge>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-accent">
                        {product.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В
                        корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Icon name="Grid" className="h-5 w-5 mr-2" />
              Показать больше изделий
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Контакты и доставка
              </h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами для оформления заказа
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-terracotta-100 rounded-full p-3">
                    <Icon
                      name="MapPin"
                      className="h-6 w-6 text-terracotta-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Адрес мастерской
                    </h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Керамическая, 15
                      <br />
                      Работаем ежедневно с 10:00 до 19:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-terracotta-100 rounded-full p-3">
                    <Icon
                      name="Phone"
                      className="h-6 w-6 text-terracotta-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Телефон
                    </h3>
                    <p className="text-muted-foreground">
                      +7 (495) 123-45-67
                      <br />
                      Звоните с 9:00 до 20:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-terracotta-100 rounded-full p-3">
                    <Icon name="Mail" className="h-6 w-6 text-terracotta-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                      info@ceramicartware.ru
                      <br />
                      Ответим в течение 24 часов
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-terracotta-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Доставка
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Truck"
                      className="h-5 w-5 text-terracotta-600"
                    />
                    <span className="text-foreground">
                      Бесплатная доставка от 5000 ₽
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Clock"
                      className="h-5 w-5 text-terracotta-600"
                    />
                    <span className="text-foreground">
                      Доставка по Москве 1-2 дня
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Package"
                      className="h-5 w-5 text-terracotta-600"
                    />
                    <span className="text-foreground">
                      Бережная упаковка каждого изделия
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="Shield"
                      className="h-5 w-5 text-terracotta-600"
                    />
                    <span className="text-foreground">
                      Гарантия на все изделия
                    </span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                  Заказать консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-terracotta-800 text-terracotta-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Palette" className="h-8 w-8 text-terracotta-200" />
                <h3 className="text-xl font-bold">Ceramic Artware</h3>
              </div>
              <p className="text-terracotta-200">
                Создаем уникальные керамические изделия с 2010 года. Каждое
                произведение — это история, рассказанная через глину и огонь.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-terracotta-200">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Главная
                  </a>
                </li>
                <li>
                  <a
                    href="#catalog"
                    className="hover:text-white transition-colors"
                  >
                    Каталог
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    О керамике
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-terracotta-200 hover:text-white hover:bg-terracotta-700"
                >
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-terracotta-200 hover:text-white hover:bg-terracotta-700"
                >
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-terracotta-200 hover:text-white hover:bg-terracotta-700"
                >
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-terracotta-700 mt-8 pt-8 text-center text-terracotta-200">
            <p>&copy; 2024 Ceramic Artware. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
