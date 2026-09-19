import IPhone17ProMaxSection from "@/components/IPhone17ProMaxSection";
import IPhone18ProMaxSection from "@/components/IPhone18ProMaxSection";
import MacBookNeoSection from "@/components/MacBookNeoSection";

export default async function Home() {
  return (
    <main className="flex flex-col gap-25">
      <IPhone18ProMaxSection />

      <IPhone17ProMaxSection />

      <MacBookNeoSection />
    </main>
  );
}
