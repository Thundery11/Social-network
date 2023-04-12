import { Field, reduxForm } from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import { Navigate } from "react-router-dom";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, requiered } from "../../utils/validators/validators";

const maxLength = maxLengthCreator(50);
const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newMesageBody"
          component={Textarea}
          validate={[requiered, maxLength]}
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(DialogsForm);

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addNewMessage = (values) => {
    props.addMessage(values.newMesageBody);
  };
  if (!props.isAuth) return <Navigate to="/login" />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
