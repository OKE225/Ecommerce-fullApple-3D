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
import { IPhone18ProMax } from "./models/IPhone18ProMax";

const IPhone18ProMaxSection = () => {
  return (
    <section className="w-full bg-linear-to-br from-[#4a0e1a] to-[#2d060f] rounded-4xl border-2 border-[#6b1525]/50 shadow-lg p-6 selection:bg-rose-900/30! selection:text-rose-700!">
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

        <div className="bg-linear-to-br from-[#6b1525]/20 to-[#4a0e1a]/40 rounded-4xl max-lg:h-[65vh] border border-[#6b1525]/30">
          <Canvas camera={{ position: [0, 0.1, 0.5], fov: 50 }}>
            {/* Main front light */}
            <directionalLight
              position={[3, 3, 5]}
              intensity={2}
              color={"#8a1c31"}
            />

            {/* Rear light – illuminates the casing (key backlight) */}
            <directionalLight
              position={[0, 3, -5]}
              intensity={3.5}
              color={"#fda4af"}
            />

            {/* Additional light at the rear, on the side (rim light) */}
            <directionalLight
              position={[5, 0, -5]}
              intensity={1.25}
              color={"#fda4af"}
            />

            {/* The second rear light on the other side */}
            <directionalLight
              position={[-5, 0, -5]}
              intensity={1.25}
              color={"#fda4af"}
            />

            {/* Light on the LEFT-hand side – illuminates the buttons */}
            <directionalLight
              position={[-5, 0, 0]}
              intensity={2}
              color={"#fda4af"}
            />

            {/* Light on the RIGHT-hand side – illuminates the buttons */}
            <directionalLight
              position={[5, 0, 0]}
              intensity={3}
              color={"#fda4af"}
            />

            {/* Spot lighting from behind to create depth */}
            <pointLight
              position={[0, -0.5, -5]}
              intensity={3}
              color={"#fb7185"}
            />

            <OrbitControls
              autoRotate
              autoRotateSpeed={3}
              enableDamping={false}
              enablePan={false}
              enableRotate={false}
              enableZoom={false}
            />

            <IPhone18ProMax scale={2.3} position={[0, -0.188, 0]} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default IPhone18ProMaxSection;
