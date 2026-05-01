import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div>
      <h1>Ecommerce </h1>
      <Button variant="destructive">Boton con Shandcn</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>Andres</AvatarFallback>
      </Avatar>
    </div>
  );
}
