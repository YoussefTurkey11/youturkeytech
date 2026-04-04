import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Asterisk, LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type Features = {
  icon: LucideIcon;
  title: string;
  content: string;
}[];

const Feature = ({ featureData }: { featureData: Features }) => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8 px-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col gap-8 md:gap-16">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto"
            >
              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">
                Portfolio projects
              </Badge>
              <h2 className="text-foreground text-3xl sm:text-5xl font-bold capitalize">
                Build. Ship. Get hired.
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg font-normal mt-4">
                Every level ends with a real, deployable project — not a
                tutorial clone. Something you own and can show employers.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {featureData.map((value, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
                      show: { opacity: 1, y: 0, filter: "blur(0px)" },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                  >
                    <Card className="py-10 h-full border-t-4 border-t-transparent transition-all duration-300 hover:border-t-primary">
                      <CardContent className="px-8 flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-4 mb-5">
                            <value.icon
                              className="w-8 h-8 text-primary"
                              strokeWidth={1.2}
                            />
                            <h6 className="text-xl font-semibold">
                              {value.title}
                            </h6>
                          </div>
                          <p className="text-base font-normal text-muted-foreground">
                            {value.content}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
