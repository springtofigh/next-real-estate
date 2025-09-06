import DashboardCard from '@/module/DashboardCard';
import styles from '@/template/MyProfilesPage.module.css';

function MyProfilesPage({ profiles }) {

  return (
    <div>
        {
            profiles.length ? null : <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        }
        {
          profiles.map(item => (
            <DashboardCard id={item._id} data={JSON.parse(JSON.stringify(item))} />
          ))
        }
    </div>
  )
}

export default MyProfilesPage;