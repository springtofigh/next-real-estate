import SigninPage from "@/template/SigninPage";
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from "next/navigation";

async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect('/');

  return (
    <div>
        <SigninPage/>
    </div>
  )
}

export default Signin;