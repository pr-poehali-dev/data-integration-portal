import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface IntegrationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: "active" | "inactive" | "pending";
  onClick?: () => void;
}

const IntegrationCard = ({
  title,
  description,
  icon,
  status = "inactive",
  onClick,
}: IntegrationCardProps) => {
  const statusColors = {
    active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    inactive: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              {icon}
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          <Badge className={statusColors[status]}>
            {status === "active" ? "Активно" : status === "pending" ? "В процессе" : "Неактивно"}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="pt-2">
        <Button 
          onClick={onClick} 
          variant={status === "active" ? "outline" : "default"}
          className="w-full"
        >
          {status === "active" ? "Настроить" : "Подключить"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IntegrationCard;