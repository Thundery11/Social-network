import { connect } from "react-redux";
import {
  unFollow,
  follow,
  setCurrentPage,
  getUsers,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(
      this.props.currentPage,
      this.props.pageSize,
      pageNumber
    );
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users {...this.props} onPageChanged={this.onPageChanged} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  };
};

export default connect(mapStateToProps, {
  unFollow,
  follow,
  setCurrentPage,
  getUsers,
})(UsersContainer);
