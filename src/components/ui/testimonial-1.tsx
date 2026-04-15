"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import * as React from "react";

type EmblaEventType =
  | "init"
  | "pointerDown"
  | "pointerUp"
  | "scroll"
  | "select"
  | "settle"
  | "destroy"
  | "reInit"
  | "resize";

type CarouselApi = {
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
  on: (event: EmblaEventType, callback: () => void) => void;
  off: (event: EmblaEventType, callback: () => void) => void;
};
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { testimonials } from "@/data/db";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image?: string;
  review: string;
  rating: number;
}

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={cn(
          "size-4",
          index < Math.floor(rating) ? "fill-foreground" : "fill-none",
        )}
      />
    ))}
    <span className="text-muted-foreground ms-2 text-sm">({rating})</span>
  </div>
);

export function TestimonialPage({ className }: { className?: string }) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const locale = useLocale();

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className={cn("py-12 lg:py-20", className)}>
      <div className="container mx-auto max-w-7xl px-6 lg:px-16 flex flex-col items-center">
        <header className="mb-16 text-center sm:w-150">
          <h2 className="text-3xl font-bold text-balance md:text-4xl">
            {locale === "ar" ? "ماذا يقول طلابنا؟" : "What Our Students Say"}
          </h2>
          <p className="text-muted-foreground mt-4 text-md">
            {locale === "ar"
              ? "اكتشف تجارب طلابنا الذين استفادوا من مسارنا التعليمي."
              : "Discover the experiences of our students who have benefited from our learning path."}
          </p>
        </header>

        <Carousel
          className="w-full"
          dir="ltr"
          setApi={(api) => {
            if (api) {
              setApi(api);
            } else {
              setApi(null);
            }
          }}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="group basis-full px-4 last:pe-0 sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full overflow-hidden">
                  <CardHeader className="gap-0">
                    <div className="flex items-center gap-4">
                      <Avatar className="bg-muted size-12">
                        {testimonial.image && (
                          <AvatarImage
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="size-12"
                          />
                        )}
                        <AvatarFallback className="bg-card">
                          {testimonial.name}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground font-semibold">
                          {testimonial.name}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-right text-muted-foreground line-clamp-4 overflow-hidden max-h-24 transition-all duration-300 ease-in-out group-hover:line-clamp-none group-hover:max-h-80">
                      {testimonial.review}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <RatingStars rating={testimonial.rating} />
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="outline"
            className="hidden cursor-pointer lg:flex"
          />
          <CarouselNext
            variant="outline"
            className="hidden cursor-pointer lg:flex"
          />
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <Button
                variant="ghost"
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "size-2 cursor-pointer rounded-full p-0! transition-all",
                  current === index ? "bg-foreground w-6" : "bg-muted",
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={current === index ? "true" : "false"}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
export default TestimonialPage;
