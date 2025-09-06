import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from 'next-auth';
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';
import connectDB from '@/utils/connectDB';
import User from '@/models/User';

export const metadata = {
  title: 'پنل کاربری | پروژه بوتواستارت',
}


async function DashboardLayout({children}) {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session) redirect('/signin');

  const user = await User.findOne({ email: session.user.email })
  
  if (!user) return <h3>مشکلی در دریافت اطلاعات شما پیش آمده</h3>

  return (
    <DashboardSidebar role={user.role} email={user.email}>{children}</DashboardSidebar>
  )
}

export default DashboardLayout;