import React from "react";
import Header from "./Header";
import { setAuthData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/Api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthData();
    // authAPI.setAuth().then((data) => {
    //   if (data.resultCode === 0) {
    //     let { id, email, login } = data.data;
    //     this.props.setAuthUserData(id, email, login);
    //   }
    // });
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
