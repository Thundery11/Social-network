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
        <Post message="Hi how are u" likescount="10" />
        <Post message="I`m fine, thanks" likescount="4" />
        <Post message="Hi guys" likescount="1" />
      </div>
    </div>
  );
};

export default MyPosts;
