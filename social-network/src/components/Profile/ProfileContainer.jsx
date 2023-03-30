import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import {
  setProfile,
  getProfileStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 28039;
    }
    this.props.setProfile(userId);
    this.props.getProfileStatus(userId);
  }
  render() {
    debugger;
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          getProfileStatus={this.props.getProfileStatus}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
  };
};
export default compose(
  connect(mapStateToProps, { setProfile, getProfileStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
