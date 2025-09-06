"use client"

import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "@/layout/Header.module.css"
import Link from "next/link";
import { useSession } from "next-auth/react";


function Header() {
    const { data } = useSession();
    
  return (
    <header className={styles.header}>
        <div>
            <ul>
                <li>
                    <Link href='/'>صفحه اصلی</Link>
                </li>
                <li>
                    <Link href='/buy-residentials'>آگهی‌ها</Link>
                </li>
            </ul>
        </div>
        {
            data ? ( <div className={styles.login}>
                <Link href='/dashboard'>
                <FaUserAlt/>
                </Link>
            </div>) : ( <div className={styles.login}>
                <Link href='/signup'>
                <FiLogIn/>
                <span>ثبت‌نام</span>
                </Link>
            </div>)
        }
    </header>
  )
}

export default Header;