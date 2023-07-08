import s from "./FormsControls.module.css";



export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {meta.touched && meta.error && (
        <span className={s.error}>{meta.error}</span>
      )}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {meta.touched && meta.error && (
        <span className={s.error}>{meta.error}</span>
      )}
    </div>
  );
};
