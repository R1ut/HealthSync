import { useState } from "react";
import './Interview.css'
export default function Interview() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    medication: '',
    sleep: '',
    hydrationReminder: false,
    medReminder: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData)

  }

  return (
    <div className="interview-container">
      <h1>Health Interview</h1>
      <div className ="underline"></div>
      <form className="interview-form" onSubmit={handleSumbit}>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>

        <label>
          Weight (kg): 
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
        </label>

        <label>
          Height (cm): 
          <input type="number" name="height" value={formData.height} onChange={handleChange} required />
        </label>

        <label>
          Home many hours do you sleep? (hrs): 
          <input type="number" name="sleepHours" value={formData.sleepHours} onChange={handleChange} required />
        </label>

        <label>
          Do you take medication?
          <select name ="takesMedication" value={formData.takesMedication} onChange={handleChange} required >
          <option value="">  Chose  </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          </select>
        </label>
        <button type="sumbit">Sumbit</button>
      </form>
    </div>

  )
}
