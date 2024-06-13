import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import FormInput from "./FormInput";
import "./childCareForm.css";
import "../navBar.css";

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

  const [state, handleSubmit] = useForm("myyrqlkn");

  // handlInput Change  function  to update formData

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target);
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  // handlSubmit function 
  

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
        onChange={handleInputChange}
        value={formData.firstName}
      />

      <FormInput
        labelText="LastName:"
        id="lastName"
        type="text"
        name="lastName"
        errors={state.errors}
        onChange={handleInputChange}
        value={formData.lastName}
      />

      <FormInput
        labelText=" PHONE# "
        id="phoneNumber"
        type="tel"
        name="phoneNumber"
        errors={state.errors}
        onChange={handleInputChange}
        value={formData.phoneNumber}
      />

      <FormInput
        labelText="Email"
        id="email"
        type="email"
        name="email"
        errors={state.errors}
        onChange={handleInputChange}
        value={formData.email}
      />

      <FormInput
        labelText="FirstName of Child"
        id="firstNameChild1"
        type="text"
        name="firstNameChild1"
        errors={state.errors}
        onChange={handleInputChange}
        value={formData.firstNameChild1}
      />

      <FormInput
        labelText="LastName Of Child"
        id="lastNameChild1"
        type="text"
        name="lastNameChild1"
        errors={state.errors}
        onChange={handleInputChange}
        value={formData.lastNameChild1}
      />

      <FormInput
        labelText="childs DOB"
        id="childDOB"
        type="date"
        name="childDOB"
        errors={state.errors}
        onChange={handleInputChange}
        value={formData.childDOB}
      />

      <FormInput
        labelText="Allergies/Diet Restrictions:"
        id="message"
        type="textarea"
        name="message"
        errors={state.errors}
        onChange={handleInputChange}
        value={formData.message}
      />
      <FormInput
        labelText="Not Potty Trained :"
        type="checkbox"
        id="pottyTrained"
        name="pottyTrained"
        errors={state.errors}
        onChange={handleInputChange}
        value={formData.pottyTrained}
      />

      {formData.pottyTrained && <FormInput
        labelText="Pamper/Pull-Up size"
        id="pamperSize"
        type="text"
        name="pamperSize"
        onChange={handleInputChange}
        value={formData.pamperSize}
      />}

      <button className="button"  type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default ChildCareForm;
