import { useState } from "react";

export function MyForm() {
  // form values with initial values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  function handleInputChange(event) {
    setFormValues({
      ...formValues, // the spread operator will add all existing values
      [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formValues.email} onChange={handleInputChange} />
      <p>Current value is: {formValues.name}</p>
      <p>Current value is: {formValues.email}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
