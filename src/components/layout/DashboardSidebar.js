import styles from "@/layout/DashboardSidebar.module.css";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from '@/module/LogoutButton';

async function DashboardSidebar({ children, role, email }) {

  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <CgProfile/>
            { role === "ADMIN" ? "ادمین" : null }
            {/* خارج شدیم، پس توکن نداریم، پس ایمیلی هم نداریم */}
              {/* بررسی وجود ایمیل به روشی دیگر */}
            {email ? <p>{email}</p> : null}
            <span></span>
            <Link href="/dashboard">حساب کاربری</Link>
            <Link href="/dashboard/my-profiles">آگهی های من</Link>
            <Link href="/dashboard/add">ثبت آگهی</Link>
            { role === "ADMIN" ? (<Link href="/admin">در انتظار تایید</Link>) : null }
            <LogoutButton/>
        </div>
        <div className={styles.main}>{children}</div>
    </div>
  )
}

export default DashboardSidebar