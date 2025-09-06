import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";
import AddProfilePage from '@/template/AddProfilePage';

async function EditPage({ params: { profileId } }) {
    await connectDB();

    const profile = await Profile.findOne({ _id: profileId });

    if(!profile) {
      <h3>مشکلی پیش آمده لطفا دوباره امتحان کنید...</h3>
    }

  return (
    <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />
  )
}

export default EditPage;