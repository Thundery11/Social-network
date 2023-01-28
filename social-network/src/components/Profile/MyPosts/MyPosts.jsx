import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi how are u" />
        <Post message="I`m fine, thanks" />
        <Post message="Hi guys" />
      </div>
    </div>
  );
};

export default MyPosts;
