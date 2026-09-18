import { createClient } from "@/lib/supabase/client";

export type UserRole = "user" | "admin";

export async function getUserRoleClient(): Promise<UserRole | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .single();

  if (error || !data) return "user";

  return data.role as UserRole;
}
