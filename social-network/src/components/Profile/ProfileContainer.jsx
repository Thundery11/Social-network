import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { userProfileAPI } from "../../api/Api";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    // if (!userId) {
    //   userId = 28039;
    // }
    userProfileAPI.setUserProfile(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }
  render() {
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
  };
};
let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  withUrlDataContainerComponent
);
