import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SearchIcon, Filter, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  logo: string;
  status: "connected" | "available";
}

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных с сервера
    const fetchIntegrations = () => {
      setIsLoading(true);
      // В реальном приложении здесь был бы запрос к API
      setTimeout(() => {
        setIntegrations([
          {
            id: "1",
            name: "Salesforce",
            description: "Интеграция с CRM Salesforce для синхронизации контактов и сделок",
            category: "CRM",
            logo: "https://images.unsplash.com/photo-1640552435557-010ccd4b312c?w=250&h=250&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            status: "connected"
          },
          {
            id: "2",
            name: "Google Sheets",
            description: "Автоматический экспорт и импорт данных в таблицы Google",
            category: "Аналитика",
            logo: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=250&h=250&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            status: "available"
          },
          {
            id: "3",
            name: "Mailchimp",
            description: "Синхронизация списков рассылок и автоматизация email-маркетинга",
            category: "Маркетинг",
            logo: "https://images.unsplash.com/photo-1618038483079-bfe64dcb17f1?w=250&h=250&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            status: "available"
          },
          {
            id: "4",
            name: "Slack",
            description: "Уведомления и команды для управления данными через Slack",
            category: "Коммуникации",
            logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=250&h=250&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            status: "connected"
          },
          {
            id: "5",
            name: "Shopify",
            description: "Интеграция с магазином Shopify для работы с товарами и заказами",
            category: "Электронная коммерция",
            logo: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=250&h=250&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            status: "available"
          },
          {
            id: "6",
            name: "Zapier",
            description: "Подключение к тысячам сервисов через Zapier для автоматизации",
            category: "Автоматизация",
            logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=250&h=250&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
            status: "available"
          }
        ]);
        setIsLoading(false);
      }, 1000);
    };

    fetchIntegrations();
  }, []);

  const filteredIntegrations = integrations.filter(
    (integration) =>
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Интеграции</h1>
              <p className="text-gray-500 mt-1">
                Подключайте свои данные к внешним сервисам и платформам
              </p>
            </div>
            <Button className="hidden md:flex">
              <PlusCircle className="mr-2 h-4 w-4" />
              Новая интеграция
            </Button>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative grow">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Поиск интеграций..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="shrink-0">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="connected">Подключенные</TabsTrigger>
              <TabsTrigger value="available">Доступные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              {isLoading ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardHeader className="h-32 bg-gray-200" />
                      <CardContent className="pt-4">
                        <div className="h-4 bg-gray-200 mb-2 rounded" />
                        <div className="h-4 bg-gray-200 w-2/3 rounded" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : filteredIntegrations.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredIntegrations.map((integration) => (
                    <Card key={integration.id} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="aspect-[2/1] relative overflow-hidden">
                          <img
                            src={integration.logo}
                            alt={integration.name}
                            className="object-cover w-full h-full"
                          />
                          <Badge 
                            className="absolute top-3 right-3"
                            variant={integration.status === "connected" ? "default" : "secondary"}
                          >
                            {integration.status === "connected" ? "Подключено" : "Доступно"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="mb-1 flex items-center gap-2">
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <Badge variant="outline">{integration.category}</Badge>
                        </div>
                        <CardDescription>{integration.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button 
                          variant={integration.status === "connected" ? "outline" : "default"}
                        >
                          {integration.status === "connected" ? "Настроить" : "Подключить"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-gray-100 p-6 mb-4">
                    <SearchIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-lg">Интеграции не найдены</h3>
                  <p className="text-gray-500 mt-1 max-w-md">
                    По вашему запросу не найдено ни одной интеграции. Попробуйте изменить параметры поиска.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="connected">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredIntegrations
                  .filter((i) => i.status === "connected")
                  .map((integration) => (
                    <Card key={integration.id} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="aspect-[2/1] relative overflow-hidden">
                          <img
                            src={integration.logo}
                            alt={integration.name}
                            className="object-cover w-full h-full"
                          />
                          <Badge className="absolute top-3 right-3">Подключено</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="mb-1 flex items-center gap-2">
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <Badge variant="outline">{integration.category}</Badge>
                        </div>
                        <CardDescription>{integration.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button variant="outline">Настроить</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="available">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredIntegrations
                  .filter((i) => i.status === "available")
                  .map((integration) => (
                    <Card key={integration.id} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="aspect-[2/1] relative overflow-hidden">
                          <img
                            src={integration.logo}
                            alt={integration.name}
                            className="object-cover w-full h-full"
                          />
                          <Badge className="absolute top-3 right-3" variant="secondary">Доступно</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="mb-1 flex items-center gap-2">
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <Badge variant="outline">{integration.category}</Badge>
                        </div>
                        <CardDescription>{integration.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-end">
                        <Button>Подключить</Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Integrations;