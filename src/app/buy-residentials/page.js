import BuyResidentialsPage from "@/template/BuyResidentialsPage";


async function BuyResidentials({ searchParams }) {
        // این حالت زیاد توصیه نمیشه استفاده کنیم. بهتر است در کامپوننت های سرور ساید از ای پی آی استفاده نکنیم
        const res = await fetch("http://localhost:3000/api/profile" , { cache: "no-store" });
        const data = await res.json();

        if(data.error) return <h3>متأسفانه مشکلی پیش آمده است...</h3>

        let finalData = data.data
        if (searchParams.category) {
            finalData = finalData.filter(i => i.category === searchParams.category);
        }

  return (
    <BuyResidentialsPage data={data.data} />
  )
}

export default BuyResidentials;