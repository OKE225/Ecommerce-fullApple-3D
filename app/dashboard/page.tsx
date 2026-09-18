"use client";

import { getUserRoleClient } from "@/lib/supabase/client-role";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { name: "iPhone", sales: 120 },
  { name: "MacBook", sales: 80 },
  { name: "iPad", sales: 95 },
  { name: "AirPods", sales: 60 },
  { name: "Apple Watch", sales: 70 },
];

export default function DashboardPage() {
  const [role, setRole] = useState<"admin" | "user" | null | undefined>(
    undefined,
  );

  useEffect(() => {
    getUserRoleClient().then((role) => {
      if (role !== "admin") {
        redirect("/");
      }
      setRole(role);
    });
  }, []);

  if (role === undefined) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Total sales" value="425" />
        <StatCard title="Revenue" value="$128,450" />
        <StatCard title="Orders" value="183" />
      </div>

      <div className="bg-card border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Sales by category</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-card border rounded-lg p-4">
      <div className="text-sm text-muted-foreground">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}
