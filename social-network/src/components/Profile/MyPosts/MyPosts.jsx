import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
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
