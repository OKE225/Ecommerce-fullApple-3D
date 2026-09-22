"use client";

import {
  ArrowRight,
  Camera,
  Shield,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { IPhone17ProMax } from "./models/IPhone17ProMax";

const IPhone17ProMaxSection = () => {
  return (
    <section className="w-full bg-linear-to-br from-[#FD914B] to-[#EF7838] rounded-4xl border-2 border-[#D15B2E]/60 shadow-lg p-6 selection:bg-orange-700/30! selection:text-orange-900!">
      <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
        <div className="flex flex-col gap-5 py-32 max-lg:py-20">
          <div className="flex items-center gap-2 text-[#fff9f5]">
            <Smartphone className="h-6 w-6 text-white" />
            <span className="text-sm font-medium uppercase tracking-wider text-white">
              New
            </span>
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-white">
            iPhone 17 Pro Max
          </h1>

          <p className="text-xl text-[#fff9f5] max-lg:text-lg">
            Titanium. Forged in Sunset Orange
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#fa9a5e]/70 border border-[#fa9a5e] flex items-center justify-center h-10 w-10 rounded-full shadow">
                <Sparkles className="h-5 w-5 text-[#7a2f06]" />
              </div>
              <span className="text-sm font-medium text-white">
                A18 Pro Chip
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#fa9a5e]/70 border border-[#fa9a5e] flex items-center justify-center h-10 w-10 rounded-full shadow">
                <Camera className="h-5 w-5 text-[#7a2f06]" />
              </div>
              <span className="text-sm font-medium text-white">
                48MP Triple Camera
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#fa9a5e]/70 border border-[#fa9a5e] flex items-center justify-center h-10 w-10 rounded-full shadow">
                <Zap className="h-5 w-5 text-[#7a2f06]" />
              </div>
              <span className="text-sm font-medium text-white">
                All-day Battery
              </span>
            </div>
          </div>

          <Link href="/product/2" className="w-fit mt-2 rounded-full">
            <Button
              size="lg"
              className="bg-[#D15B2E] hover:bg-[#C85B2E] text-white gap-2">
              Buy now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <div className="flex items-center gap-6 pt-5 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-white/95">2-year warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-white" />
              <span className="text-white/95">Free shipping</span>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-[#ca7d46]/20 to-[#D15B2E]/40 rounded-4xl max-lg:h-[65vh] border border-[#F3A874]/60">
          <Canvas camera={{ position: [-Math.PI, 0.7, 0], fov: 50 }}>
            <ambientLight />

            {/* Main front light */}
            <directionalLight
              position={[-1, 0, 0]}
              intensity={1.5}
              color={"#F3A874"}
            />

            {/* Rear light – illuminates the casing (key backlight) */}
            <directionalLight
              position={[1, 0.1, 0]}
              intensity={0.75}
              color={"#F3A874"}
            />

            {/* Additional light at the rear, on the side (rim light) */}
            <directionalLight
              position={[1, -0.1, 1]}
              intensity={0.8}
              color={"#D15B2E"}
            />

            {/* The second rear light on the other side */}
            <directionalLight
              position={[1, -0.1, -1]}
              intensity={0.8}
              color={"#D15B2E"}
            />

            <OrbitControls
              autoRotate
              autoRotateSpeed={3}
              enableDamping={false}
              enablePan={false}
              enableRotate={false}
              enableZoom={false}
            />

            <IPhone17ProMax scale={1.4} position={[0, -0.05, 0]} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default IPhone17ProMaxSection;
