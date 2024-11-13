import { Boxes, ExternalLink } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AstroLogo, ShadCNLogo, TailwindLogo, VercelLogo } from '@/components/Icons';

const Hero = () => {
  return (
    <section className="overflow-hidden flex items-center h-full pattern-voxel-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center bg-background/75 p-12 rounded-lg border-2">
          <div className="flex flex-col items-center gap-3 text-center">
            <Boxes className="h-24" />
            <Badge variant="outline">Hyperion2.0</Badge>
            <div>
              <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
                Build / Access the future of <br /> Hyperion University
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Home to some of the largest projects, like Nota-Set, HULive / HUVirtual, BCGrad, and more.
              </p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Button>Get Started</Button>
              <Button variant="outline">
                Learn more <ExternalLink className="ml-2 h-4" />
              </Button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-4">
              <p className="text-center: text-muted-foreground lg:text-left">
                Built with some of the best technologies.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-current">
                <a
                  href="https://vercel.com"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'group px-3',
                  )}
                >
                  <VercelLogo />
                </a>
                <a
                  href="https://astro.build"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'group px-3',
                  )}
                >
                  <AstroLogo />
                </a>

                <a
                  href="https://tailwindcss.com/"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'group px-3',
                  )}
                >
                  <TailwindLogo />
                </a>
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'group px-3',
                  )}
                >
                  <ShadCNLogo />
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
