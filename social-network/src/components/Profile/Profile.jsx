import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        getProfileStatus={props.getProfileStatus}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
