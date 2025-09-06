import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from 'next-auth';
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "@/template/AdminPage";
import Profile from "@/models/Profile";

export const metadata = {
  title: 'پنل کاربری مدیر | پروژه بوتواستارت',
}

async function Admin() {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session) redirect('/signin');

    const user = await User.findOne({ email: session.user.email })
    if (user.role !== "ADMIN") return redirect('/dashboard');

    const profiles = await Profile.find({ published: false })
  return (
    <DashboardSidebar role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DashboardSidebar>
  )
}

export default Admin;