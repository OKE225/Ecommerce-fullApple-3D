"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";
import ProductItem from "@/components/ProductItem";

export default function Home() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      setUserEmail(user?.email ?? null);
      setLoading(false);
    });
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUserEmail(null);
    router.refresh(); // refreshes server data if you use it
  }

  return (
    <main>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati,
        ratione illum distinctio facilis impedit quisquam tempore ab delectus
        veritatis nisi maxime quas modi optio eligendi praesentium natus animi
        a.
      </p>
      <ProductItem />
    </main>
  );
}
