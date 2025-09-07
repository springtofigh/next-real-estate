import BuyResidentialsPage from "@/template/BuyResidentialsPage";


async function BuyResidentials({ searchParams }) {
        // این حالت زیاد توصیه نمیشه استفاده کنیم. بهتر است در کامپوننت های سرور ساید از ای پی آی استفاده نکنیم
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/profile` , { cache: "no-store" });

        if (!res.ok) {
          console.error("API Error:", res.status, await res.text());
          return <h3>مشکلی در دریافت اطلاعات پیش آمده است...</h3>;
        }
        const data = await res.json();

        let finalData = data.data
        if (searchParams.category) {
            finalData = finalData.filter(i => i.category === searchParams.category);
        }

  return (
    <BuyResidentialsPage data={finalData} />
  )
}

export default BuyResidentials;