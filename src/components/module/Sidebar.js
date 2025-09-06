import styles from "@/module/Sidebar.module.css";
import { HiFilter } from "react-icons/hi";
import Link from "next/link";
import { categories } from "@/constants/string";

function Sidebar() {
    // const queries = [ { villa: "ویلایی" }, { apartment: "آپارتمان" }, { store: "مغازه" }, { office: "دفتر" } ]
  return (
    <div className={styles.container}>
        <p>
            <HiFilter/>
            دسته‌بندی
        </p>
        <Link href='/buy-residentials'>همه</Link>
        {
          Object.keys(categories).map(i => (
            <Link href={{ pathname: "/buy-residentials", query: { category: i } }}>
              {categories[i]}
            </Link>
          ))
        }
    </div>
  )
}

export default Sidebar;