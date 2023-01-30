import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postsData = [
    { message: "Hi how are u", id: 1, likesCount: 10 },
    { message: "I`m fine, thanks", id: 2, likesCount: 5 },
    { message: "Hi guys", id: 3, likesCount: 33 },
  ];
  let postsElements = postsData.map((p) => (
    <Post message={p.message} id={p.id} likesCount={p.likesCount} />
  ));
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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
