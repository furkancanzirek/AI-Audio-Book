"use client";

import { SessionProvider } from "next-auth/react";

export const Providers = ({
  children,
  session,
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};