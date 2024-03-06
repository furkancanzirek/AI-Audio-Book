import { cn } from "@/app/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineLoading } from "react-icons/ai";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { SignInButton } from "@/components/auth.buttons";
import { signIn } from "@/auth";
export async function UserAuthForm({ className }) {
  const isLoading = false;
  async function onSubmit(type = "credentials") {
    "use server";
    let data = await signIn(type);
  }

  return (
    <div className={cn("grid gap-6", className)}>
      <form action={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {
              isLoading && "loading"
              /*     <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> */
            }
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <form
          className="w-full"
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <Button className="w-full" variant="outline" disabled={isLoading}>
            {isLoading ? (
              <AiOutlineLoading className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <FaGithub className="mr-2 h-4 w-4" />
            )}{" "}
            Github
          </Button>
        </form>
        <form
          className="w-full"
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button className="w-full" variant="outline" disabled={isLoading}>
            {isLoading ? (
              <AiOutlineLoading className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <FaGoogle className="mr-2 h-4 w-4" />
            )}{" "}
            Google
          </Button>
        </form>
      </div>
    </div>
  );
}
