import { AFTER_SIGN_IN_URL } from "@/routes";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}
