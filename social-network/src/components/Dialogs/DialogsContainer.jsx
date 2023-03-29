import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    },
  };
};
const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
