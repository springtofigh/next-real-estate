import style from '@/module/RadioList.module.css';

function RadioList({ profileData, setProfileData  }) {
    const { category } = profileData

    const changeHandler = (e) => {
      const { name, value } = e.target;
      setProfileData({...profileData, [name]: value})
  }
  return (
    <div className={style.container }>
        <p>دسته بندی</p>
        <div className={style.main}>
          <div>
              <label htmlFor='villa'>ویلا</label>
              <input 
              type="radio" 
              name='category' 
              value="villa"
              id='villa' 
              checked={category === 'villa' && true}
              onChange={changeHandler} />
          </div>
          <div>
              <label htmlFor='apartment'>آپارتمان</label>
              <input 
              type="radio" 
              name='category' 
              value="apartment"
              id='apartment' 
              checked={category === 'apartment'}
              onChange={changeHandler} />
          </div>
          <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="category"
            value="store"
            id="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="category"
            value="office"
            id="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
        </div>
    </div>
  )
}

export default RadioList;