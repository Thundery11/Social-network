import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { setProfile } from "../../redux/profile-reducer";
import { Navigate, useParams } from "react-router-dom";

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
  }
  render() {
    if (!this.props.isAuth) return <Navigate to="/login" />;
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
  };
};
let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setProfile })(
  withUrlDataContainerComponent
);
