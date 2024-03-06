
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
const page = async () => {
  const authObject = await auth();
  const { user } = authObject?authObject:{};
  return (
    <form>
      <h1>Sign In</h1>
      <p>
        Current user: <code>{user?JSON.stringify(user?.token?.token?.name):null}</code>
      </p>
    </form>
  );
};

export default page;
