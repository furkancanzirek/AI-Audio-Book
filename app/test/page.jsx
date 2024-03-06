import { SignInButton,SignOutButton } from "@/components/auth.buttons";
import Link from "next/link";
const page = () => {
    
  return (
    <div>
        <SignInButton />
      <SignOutButton />
      <Link href="/auth">
        giriş yap
      </Link>
    </div>
  )
}

export default page