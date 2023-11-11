import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    comment: "",
    tnc: false,
    gender: "",
    qualification: ""
  });

  function handleFormData(event) {
    const { name, value, checked, type } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    // console.log(formData);
  }

  function submitTheForm(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitTheForm}>
        <input
          type="text"
          name="firstName"
          placeholder="First name here"
          value={formData.firstName}
          onChange={handleFormData}
        />

        <br />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="Last name here"
          value={formData.lastName}
          onChange={handleFormData}
        />

        <br />
        <br />

        <textarea
          name="comment"
          placeholder="valuable feedback here"
          onChange={handleFormData}
          value={formData.comment}
        >
          
        </textarea>

        <br />
        <br />

        <input
          type="checkbox"
          name="tnc"
          id="tnc"
          checked={formData.tnc}
          onChange={handleFormData}
        />
        <label htmlFor="tnc"> TNC Applied</label>

        <br /><br />

        <input type="radio" name="gender" value="male" id="male" onChange={handleFormData} checked={formData.gender === "male"}/>
        <label htmlFor="male"> Male</label>
        <input type="radio" name="gender" value="female" id="female" onChange={handleFormData} checked = {formData.gender === "female"}/>
        <label htmlFor="female"> Female</label>

        <br /><br />
        
        <select name="qualification" id="" onChange={handleFormData}>
          <option value="" disabled selected>Select</option>
          <option value="BE" selected={formData.qualification === "BE"}>BE</option>
          <option value="UG" selected={formData.qualification === "UG"}>UG</option>
          <option value="ME" selected={formData.qualification === "ME"}>ME</option>
        </select>
        
        <br /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
