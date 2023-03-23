import s from "./Users.module.css";
import userPhoto from "../../assets/images/default-user.jpg";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => (
          <span
            className={props.currentPage === p && s.selectedPage}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="sdsds"
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unFollow(u.id);
                    // props.toggleFollowingProgress(true, u.id);
                    // usersAPI.unFollow(u.id).then((data) => {
                    //   if (data.resultCode === 0) {
                    //     props.unFollow(u.id);
                    //   }
                    //   props.toggleFollowingProgress(false, u.id);
                    // });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                    // props.toggleFollowingProgress(true, u.id);
                    // usersAPI.follow(u.id).then((data) => {
                    //   if (data.resultCode === 0) {
                    //     props.follow(u.id);
                    //   }
                    //   props.toggleFollowingProgress(false, u.id);
                    // });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
