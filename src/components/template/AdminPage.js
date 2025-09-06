import AdminCard from "@/module/AdminCard";
import styles from "@/template/AdminPage.module.css";

function AdminPage({ profiles }){
  return (
    <div>
        { profiles.length ? null  : <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد</p> }
        { profiles.map(item => (<AdminCard key={item._id} data={JSON.parse(JSON.stringify(item)) } />))}
    </div>
  )
}

export default AdminPage;