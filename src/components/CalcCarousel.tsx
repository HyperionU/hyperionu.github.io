import * as React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"

type Card = {ref: string, title: string, description: string}

const calcGame: Card[] = [
    {
        title: "Connections I",
        ref: "https://custom-connections-game.vercel.app/h7EDn6I0DL8gyq7QvNyZ",
        description: "The very basics of Calculus."
    },
    {
        title: "Connections II",
        ref: "https://custom-connections-game.vercel.app/87SUcmyfbq4ujzsnGUWp",
        description: "Definitions and off-standard."
    },
    {
        title: "Connections III",
        ref: "https://custom-connections-game.vercel.app/yZ4CavZNSEuEpj10XSO9",
        description: "Warning: This one is very hard."
    },
    {
        title: "Connections IV",
        ref: "https://custom-connections-game.vercel.app/InYhBIBctPPQrZc0MQRc",
        description: "I genuinely think this one is impossible."
    },
    {
        title: "Connections V",
        ref: "https://custom-connections-game.vercel.app/mU2YdnkTumJgm7YSMYMo",
        description: "It's all starting to blend."
    },
    {
        title: "Connections VI",
        ref: "https://custom-connections-game.vercel.app/IkuwlB1dFlWjPGUwbj3U",
        description: "The Finale. Single and Multivariable."
    },
]

export function CalcCarousel() {
  return (
    <Carousel className="w-full max-w-2xl" opts={
      {
        align: "start"
      }
    }>
      <CarouselContent>
        {calcGame.map((game, index) => (
          <CarouselItem key={index} className="md:basis-1/2 basis-1/3">
            <div className="p-1">
              <Card>
                <CardHeader>
                    <CardTitle>{game.title}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex aspect-video items-center justify-center pattern-hexagons dark:pattern-overlapping-hexagons bg-mint transition-colors">
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
