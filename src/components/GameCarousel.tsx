import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import type { CarouselCard } from "@/lib/utils"
import { calcConn, calcCross } from "@/lib/content"

function CalcCarousel(card: CarouselCard[]){
  return (
    <Carousel className="w-full max-w-2xl" opts={
      {
        align: "start",
      }
    }>
      <CarouselContent>
        {card.map((game, index) => (
          <CarouselItem key={index} className="basis-1/2">
            <div className="p-1">
              <Card className="flex aspect-video items-center justify-center">
                <CardHeader>
                    <CardTitle>{game.title}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center rounded pattern-hexagons dark:pattern-overlapping-hexagons bg-mint transition-colors h-full">
                  <Button asChild>
                    <a href={game.ref} className="transition-colors">Play</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CalcConnect() {
  return CalcCarousel(calcConn)
}

export function CalcCrossword() {
  return CalcCarousel(calcCross)
}