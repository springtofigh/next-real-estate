import connectDB from '@/utils/connectDB';
import Profile from "@/models/Profile";
import DetailsPage from '@/template/DetailsPage';


async function ProfileDetails({ params : { profileId } }) {
  
  connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>متاسافنه مشکلی پیش آمده....</h3>
    return (
      <DetailsPage data={profile} />
    )
  }
  
  export default ProfileDetails;

  export const generateMetadata = async ({ params : { profileId } }) => {
    connectDB();
    const profile = await Profile.findOne({ _id: profileId });
    return {
      title: profile.title,
      description: profile.description,
      authors : { name: profile.realState },
      other : { myTag: "Test Tag" },

    }
  }