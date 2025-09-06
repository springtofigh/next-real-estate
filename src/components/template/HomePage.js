import styles from '@/template/HomePage.module.css';
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from '@/module/CategoryCard';
import { categories, cities, services } from '@/constants/string';

function HomePage() {

  return (
    <div>
        <div className={styles.banner}>
            <div className={styles.desc}>
                <h1>
                    سامانه خرید و اجاره ملک
                </h1>
                {
                    <ul>
                        {services.map((service, index) => (
                            <li key={index}>
                                <FiCircle/>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
        <div className={styles.categories}>
            {
                Object.keys(categories).map(i => (
                    <CategoryCard key={i} title={categories[i]}  name={i} />
                ))
            }
        </div>
        <div className={styles.city}>
            <h3>شهرهای پر بازدید</h3>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>
                    <FaCity/>
                    <span>{city}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default HomePage