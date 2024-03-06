import { signOut, signIn } from "@/auth";
import { Button } from "./ui/button";
import Link from "next/link";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0">
        Sign In
      </Button>
    </form>
  );
}

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0">
        Sign Out
      </Button>
    </form>
  );
}
