import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Camera,
  Monitor,
  Laptop,
} from "lucide-react";

export default async function Home() {
  return (
    <main className="flex flex-col gap-25">
      <section className="w-full bg-linear-to-br from-[#4a0e1a] to-[#2d060f] rounded-4xl border-2 border-[#6b1525]/50 shadow-lg p-6">
        <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
          <div className="flex flex-col gap-5 py-32 max-lg:py-20">
            <div className="flex items-center gap-2 text-[#f5d0d8]">
              <Smartphone className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Introducing
              </span>
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white">
              iPhone 18 Pro Max
            </h1>

            <p className="text-xl text-[#f5d0d8] max-lg:text-lg">
              Titanium. Forged in Burgundy
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 text-[#f5d0d8]">
                <div className="bg-[#6b1525]/30 flex items-center justify-center h-10 w-10 rounded-full">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">A19 Pro Chip</span>
              </div>
              <div className="flex items-center gap-2 text-[#f5d0d8]">
                <div className="bg-[#6b1525]/30 flex items-center justify-center h-10 w-10 rounded-full">
                  <Camera className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">64MP Camera</span>
              </div>
              <div className="flex items-center gap-2 text-[#f5d0d8]">
                <div className="bg-[#6b1525]/30 flex items-center justify-center h-10 w-10 rounded-full">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">All-day Battery</span>
              </div>
            </div>

            <Link href="/" className="w-fit mt-2 rounded-full">
              <Button
                size="lg"
                className="bg-[#8a1c31] hover:bg-[#a3223d] text-white gap-2">
                Pre-order now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <div className="flex items-center gap-6 pt-5 text-sm text-[#f5d0d8]/80">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#f5d0d8]" />
                <span>2-year warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-[#f5d0d8]" />
                <span>Free shipping</span>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-[#6b1525]/20 to-[#4a0e1a]/40 rounded-4xl max-lg:h-100 border border-[#6b1525]/30"></div>
        </div>
      </section>

      <section className="w-full bg-linear-to-br from-[#0a1628] to-[#050b14] rounded-4xl border-2 border-[#1a3a5c]/50 shadow-lg p-6">
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-5 py-16">
            <div className="flex items-center gap-2 text-[#d4e4f7]">
              <Smartphone className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Coming Soon
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1">
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-semibold tracking-tight text-white">
                  iPhone Duo
                </h1>

                <p className="text-xl text-[#d4e4f7]">
                  Fold. Unfold. Revolutionize.
                </p>

                <p className="text-base text-[#d4e4f7]/80 leading-relaxed">
                  The future of mobile is here. iPhone Duo combines cutting-edge
                  foldable technology with the power of Apple silicon,
                  delivering an experience that adapts to your life. Compact
                  when folded. Expansive when you need it
                </p>

                <Link href="/" className="w-fit mt-2 rounded-full">
                  <Button
                    size="lg"
                    className="bg-[#2a5a8c] hover:bg-[#356aa5] text-white gap-2">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[#d4e4f7]">
                    <div className="bg-[#1a3a5c]/30 flex items-center justify-center h-10 w-10 rounded-full">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-medium">
                        Foldable Display
                      </span>
                      <p className="text-xs text-[#d4e4f7]/70">
                        7.8&quot; OLED, 120Hz
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[#d4e4f7]">
                    <div className="bg-[#1a3a5c]/30 flex items-center justify-center h-10 w-10 rounded-full">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-medium">A18 Fold Chip</span>
                      <p className="text-xs text-[#d4e4f7]/70">
                        Next-gen performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[#d4e4f7]">
                    <div className="bg-[#1a3a5c]/30 flex items-center justify-center h-10 w-10 rounded-full">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-medium">
                        Ultra-thin Glass
                      </span>
                      <p className="text-xs text-[#d4e4f7]/70">
                        200,000+ fold tested
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4 border-t border-[#1a3a5c]/30">
                  <div className="flex items-center gap-2 text-sm text-[#d4e4f7]/80">
                    <Shield className="h-4 w-4 text-[#d4e4f7]" />
                    <span>2-year warranty</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#d4e4f7]/80">
                    <Zap className="h-4 w-4 text-[#d4e4f7]" />
                    <span>Free shipping</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#d4e4f7]/80">
                    <Smartphone className="h-4 w-4 text-[#d4e4f7]" />
                    <span>Trade-in available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-[#1a3a5c]/20 to-[#0a1628]/40 rounded-4xl h-120 border border-[#1a3a5c]/30"></div>
        </div>
      </section>

      <section className="w-full bg-linear-to-br from-[#F6FCA0] to-[#FFFFCD] rounded-4xl border-2 border-[#ECEF96]/50 shadow-lg shadow-zinc-100 p-6">
        <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
          <div className="flex flex-col gap-5 py-32 max-lg:py-20">
            <div className="flex items-center gap-2 text-[#5a6b1f]">
              <Laptop className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                New
              </span>
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-[#2d350a]">
              MacBook Neo
            </h1>

            <p className="text-xl text-[#5a6b1f] max-lg:text-lg">
              Power. Perfected in Green
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 text-[#5a6b1f]">
                <div className="bg-[#ECEF96]/50 flex items-center justify-center h-10 w-10 rounded-full">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">M4 Pro Chip</span>
              </div>
              <div className="flex items-center gap-2 text-[#5a6b1f]">
                <div className="bg-[#ECEF96]/50 flex items-center justify-center h-10 w-10 rounded-full">
                  <Monitor className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">
                  14&quot; Liquid Retina
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#5a6b1f]">
                <div className="bg-[#ECEF96]/50 flex items-center justify-center h-10 w-10 rounded-full">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">22hr Battery</span>
              </div>
            </div>

            <Link href="/" className="w-fit mt-2 rounded-full">
              <Button
                size="lg"
                className="bg-[#9dae28] hover:bg-[#a9b830] text-white gap-2">
                Buy now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <div className="flex items-center gap-6 pt-5 text-sm text-[#5a6b1f]/80">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#5a6b1f]" />
                <span>2-year warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-[#5a6b1f]" />
                <span>Free shipping</span>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-[#F6FCA0]/70 to-[#ECEF96]/80 rounded-4xl max-lg:h-100 border border-[#ECEF96]/50"></div>
        </div>
      </section>
    </main>
  );
}
