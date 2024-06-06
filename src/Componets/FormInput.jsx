import { ValidationError } from "@formspree/react";

const FormInput = ({ name, id, type, labelText, errors }) => {
  return (
    <div>
      <label htmlFor="firstName">{labelText}</label>

      {type === "textarea" ? (
        <textarea id={id} name={name} rows="5" cols="33"></textarea>
      ) : (
        <input id={id} type={type} name={name} />
      )}
      
      <ValidationError prefix={name} field={name} errors={errors} />
    </div>
  );
};
export default FormInput;
