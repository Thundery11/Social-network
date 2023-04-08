import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostBody"
          component="textarea"
          placeholder="write here"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostReduxForm = reduxForm({ form: "forAddPostsForm" })(MyPostsForm);

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map((p) => (
    <Post message={p.message} id={p.id} likesCount={p.likesCount} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newPostBody);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <MyPostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
