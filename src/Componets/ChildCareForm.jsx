import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import FormInput from "./FormInput";
import "./childCareForm.css";

function ChildCareForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    firstNameChild1: "",
    lastNameChild1: "",
    childDOB: "",
    message: "",
    pottyTrained: "",
    pamperSize: "",
  });

  // handlInput Change  function  to update formData

  const [state, handleSubmit] = useForm("myyrqlkn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        labelText="First Name:"
        name="firstName"
        id="firstName"
        type="text"
        errors={state.errors}
      />

      <FormInput
        labelText="LastName:"
        id="lastName"
        type="text"
        name="lastName"
        errors={state.errors}
      />

      <FormInput
        labelText=" PHONE# "
        id="phoneNumber"
        type="number"
        name="phoneNumber"
        errors={state.errors}
      />

      <FormInput
        labelText="Email"
        id="email"
        type="email"
        name="email"
        errors={state.errors}
      />

      <FormInput
        labelText="FirstName of Child"
        id="firstNameChild1"
        type="text"
        name="firstNameChild1"
        errors={state.errors}
      />

      <FormInput
        labelText="LastName Of Child"
        id="lastNameChild1"
        type="text"
        name="lastNameChild1"
        errors={state.errors}
      />

      <FormInput
        labelText="childs DOB"
        id="childDOB"
        type="date"
        name="childDOB"
        errors={state.errors}
      />

      <FormInput
        labelText="Allergies/Diet Restrictions:"
        id="message"
        type="textarea"
        name="message"
        errors={state.errors}
      />
      <FormInput
        labelText="Potty Trained :"
        type="checkbox"
        id="pottyTrained"
        name="pottyTrained"
        errors={state.errors}
      />

      <FormInput
        labelText="Pamper/Pull-Up size"
        id="pamperSize"
        type="text"
        name="pamperSize"
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ChildCareForm;
