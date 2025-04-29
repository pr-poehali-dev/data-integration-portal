import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import IntegrationCard from "@/components/IntegrationCard";
import Navbar from "@/components/Navbar";
import { 
  ArrowRight, 
  ChevronRight, 
  Database, 
  GitBranch,
  BarChart3,
  FileSpreadsheet,
  Zap,
  Server, 
  ShoppingCart
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent to-background py-16 md:py-24">
          <div className="container flex flex-col items-center text-center">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Объединяйте данные между всеми вашими платформами
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              DataSync упрощает интеграцию и синхронизацию данных между вашими приложениями, 
              платформами и сервисами без написания единой строчки кода.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/integrations">
                  Начать интеграцию <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                Посмотреть демо
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Мощный инструмент для работы с данными
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Все необходимые инструменты для интеграции в одном месте
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Мгновенная синхронизация</h3>
                  <p className="mt-2 text-muted-foreground">
                    Автоматическая двусторонняя синхронизация в реальном времени между платформами
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Множество коннекторов</h3>
                  <p className="mt-2 text-muted-foreground">
                    Более 200+ готовых интеграций с популярными сервисами и платформами
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Аналитика данных</h3>
                  <p className="mt-2 text-muted-foreground">
                    Отслеживайте потоки данных и получайте статистику в реальном времени
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integrations Preview Section */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Популярные интеграции
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Подключите свои любимые инструменты за считанные минуты
                </p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={activeTab === "popular" ? "default" : "outline"}
                  onClick={() => setActiveTab("popular")}
                >
                  Популярные
                </Button>
                <Button 
                  variant={activeTab === "new" ? "default" : "outline"}
                  onClick={() => setActiveTab("new")}
                >
                  Новые
                </Button>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <IntegrationCard 
                title="CRM системы" 
                description="Интегрируйтесь с популярными CRM системами для синхронизации клиентов и сделок."
                icon={<Server className="h-6 w-6 text-primary" />}
                status="active"
              />
              <IntegrationCard 
                title="Электронная коммерция" 
                description="Подключите свои интернет-магазины и маркетплейсы для работы с заказами и товарами."
                icon={<ShoppingCart className="h-6 w-6 text-primary" />}
              />
              <IntegrationCard 
                title="Таблицы и документы" 
                description="Синхронизируйте данные с Excel, Google Sheets и другими табличными процессорами."
                icon={<FileSpreadsheet className="h-6 w-6 text-primary" />}
                status="pending"
              />
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/integrations" className="flex items-center gap-1">
                  Смотреть все интеграции <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t py-8">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">DataSync</span>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} DataSync. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;