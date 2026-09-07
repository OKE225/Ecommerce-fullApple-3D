import { getUserRole } from "@/lib/supabase/server-role";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const role = await getUserRole();

  if (role !== "admin") {
    redirect("/");
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
    </div>
  );
};

export default DashboardPage;
