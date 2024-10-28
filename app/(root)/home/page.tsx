import { initialProfile } from "@/lib/initial-profile";
import React from "react";

export default async function HomePage() {
  const newUser = await initialProfile();
  return <div>HomePage</div>;
}
