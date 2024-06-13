import { ValidationError } from "@formspree/react";
import "./childCareForm.css";

const FormInput = ({ name, id, type, labelText, errors, onChange, value }) => {
  return (
    <div className="formInput">
      <label htmlFor="firstName">{labelText}</label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows="5"
          cols="33"
          onChange={onChange}
          value={value}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        />
      )}

      <ValidationError prefix={name} field={name} errors={errors} />
    </div>
  );
};
export default FormInput;
