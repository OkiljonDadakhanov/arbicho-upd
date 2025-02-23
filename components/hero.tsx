import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Trophy, Globe2, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#011c2c]">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-[#012c43]/95 to-[#011c2c]/90" />

      {/* Floating chemistry elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full border-2 border-emerald-400" />
        <div className="absolute left-[8%] top-[18%] h-40 w-40 rounded-full border border-emerald-400" />
        <div className="absolute right-[15%] top-[30%] h-24 w-24 rounded-full border-2 border-blue-400" />
        <div className="absolute right-[13%] top-[28%] h-32 w-32 rounded-full border border-blue-400" />
        <div className="absolute bottom-[20%] left-[20%] h-36 w-36 rounded-full border-2 border-cyan-400" />
        <div className="absolute bottom-[18%] left-[18%] h-44 w-44 rounded-full border border-cyan-400" />
      </div>

      {/* Floating chemistry elements with glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute left-[10%] top-20 h-24 w-24 rounded-full border-2 border-emerald-400/30 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]" />
        <div className="animate-float-delayed absolute right-[15%] top-40 h-16 w-16 rounded-full border-2 border-blue-400/30 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]" />
        <div className="animate-float absolute bottom-20 left-[20%] h-20 w-20 rounded-full border-2 border-cyan-400/30 bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]" />
      </div>

      <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="w-fit animate-fade-in bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
              >
                International Chemistry Olympiad
              </Badge>
              <h1 className="animate-fade-in text-4xl font-bold tracking-tight text-white sm:text-6xl">
                ARBIChO 2025
              </h1>
            </div>

            {/* Image moved here for mobile, hidden on larger screens */}
            <div className="lg:hidden">
              <div className="relative mx-auto h-[300px] w-full max-w-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 backdrop-blur shadow-[0_0_30px_rgba(16,185,129,0.1)] sm:h-[400px]">
                <Image
                  src="/images/main-page.jpg"
                  alt="Scientist working in a laboratory"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011c2c]/50 via-transparent to-transparent" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="max-w-xl text-xl text-emerald-100/80">
                Join the prestigious International Abu Reikhan Beruniy Chemistry
                Olympiad and showcase your chemistry prowess on a global stage.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-emerald-100/90">
                <CalendarDays className="h-5 w-5 text-emerald-400" />
                <span>June 01-08, 2025</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-100/90">
                <Trophy className="h-5 w-5 text-emerald-400" />
                <span>$5,000 in Prizes</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-100/90">
                <Globe2 className="h-5 w-5 text-emerald-400" />
                <span>30+ Countries</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-100/90">
                <GraduationCap className="h-5 w-5 text-emerald-400" />
                <span>Ages 14-19 Eligible</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-emerald-500 text-white hover:bg-emerald-600"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-400/50 text-emerald-100 hover:bg-emerald-950/50 hover:text-emerald-50"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image container for larger screens */}
          <div className="hidden items-center justify-center lg:flex lg:justify-start">
            <div className="relative h-[500px] w-full max-w-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 backdrop-blur shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <Image
                src="/images/main-page.jpg"
                alt="Scientist working in a laboratory"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#011c2c]/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}