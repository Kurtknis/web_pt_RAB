import { headers } from "next/headers";
import { notFound } from "next/navigation";

export async function assertAdminAccess() {
  const adminToken = process.env.ADMIN_PREVIEW_TOKEN;
  if (!adminToken) notFound();

  const headerStore = await headers();
  if (headerStore.get("x-admin-preview") !== adminToken) notFound();
}
