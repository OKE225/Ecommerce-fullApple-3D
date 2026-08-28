import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CodeXml, Globe, Heart } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t">
      <div className="mx-auto py-8">
        <div className="mb-6 rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-900 dark:bg-orange-950">
          <div className="flex items-start gap-3">
            <Badge variant="destructive" className="shrink-0">
              DISCLAIMER
            </Badge>
            <div>
              <h3 className="font-semibold text-orange-800 dark:text-orange-200">
                This is not an official Apple Store
              </h3>
              <p className="mt-1 text-sm text-orange-700 dark:text-orange-300">
                This is a fan-made project and is not affiliated with, endorsed
                by, or connected to Apple Inc. All product names, logos, and
                brands are property of their respective owners. This is not a
                real store and no actual purchases can be made
              </p>
            </div>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold">About This Project</h3>
            <p className="text-sm text-muted-foreground">
              This is a demo e-commerce project built with Next.js, shadcn/ui,
              and SQLite. It showcases modern web development practices and UI
              design
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Created by{" "}
              <span className="font-medium text-foreground">OKE_225</span>, a
              frontend developer passionate about React, TypeScript, and
              building beautiful user interfaces
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition hover:text-foreground">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground transition hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Connect</h3>
            <div className="flex gap-3">
              <Button variant="outline" size="icon">
                <a href="https://github.com/OKE225" target="_blank">
                  <CodeXml className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" size="icon">
                <a href="https://pj-portfolio-cv.vercel.app/" target="_blank">
                  <Globe className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>
            Built with{" "}
            <Heart className="inline h-4 w-4 fill-red-500 text-red-500" /> using
            Next.js and shadcn/ui
          </p>
          <p>
            © {new Date().getFullYear()} OKE_225. This is a demo project for
            educational purposes only
          </p>
        </div>
      </div>
    </footer>
  );
}
