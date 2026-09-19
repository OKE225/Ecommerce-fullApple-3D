"use client";

import {
  ArrowRight,
  Laptop,
  Monitor,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const MacBookNeoSection = () => {
  return (
    <section className="w-full bg-linear-to-br from-[#F6FCA0] to-[#FFFFCD] rounded-4xl border-2 border-[#ECEF96]/50 shadow-lg shadow-zinc-100 p-6 selection:bg-lime-500/20! selection:text-lime-700!">
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

          <Link href="/product/12" className="w-fit mt-2 rounded-full">
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

        <div className="relative bg-linear-to-br from-[#F6FCA0]/70 to-[#ECEF96]/80 rounded-4xl max-lg:h-100 border border-[#ECEF96]/50">
          <Image
            src="/macbook-neo.png"
            alt="Test image"
            fill
            className="p-5 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MacBookNeoSection;
