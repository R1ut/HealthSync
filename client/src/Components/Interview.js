import { useState, useContext } from "react";
import './Interview.css';
import { useNavigate } from "react-router-dom";
import { InterviewContext } from "./InterviewContext";

export default function Interview() {
  const { setFormData } = useContext(InterviewContext);
  const navigate = useNavigate();

  const [localData, setLocalData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    takesMedication: '',
    sleepHours: '',
    ActivityLevel: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(localData);
    navigate("/Info");
  };

  return (
    <div className="interview-container">
      <h1>Health Interview</h1>
      <div className="underline"></div>
      <form className="interview-form" onSubmit={handleSubmit}>

        <label>
          Gender:
          <select name="gender" value={localData.gender} onChange={handleChange} required>
            <option value="">Choose</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </label>

        <label>
          Age:
          <input type="number" name="age" value={localData.age} onChange={handleChange} required />
        </label>

        <label>
          Weight (kg):
          <input type="number" name="weight" value={localData.weight} onChange={handleChange} required />
        </label>

        <label>
          Height (cm):
          <input type="number" name="height" value={localData.height} onChange={handleChange} required />
        </label>

        <label>
          How many hours do you sleep? (hrs):
          <input type="number" name="sleepHours" value={localData.sleepHours} onChange={handleChange} required />
        </label>

        <label>
          Do you take medication?
          <select name="takesMedication" value={localData.takesMedication} onChange={handleChange} required>
            <option value="">Choose</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label>
          Activity Level:
          <select name="ActivityLevel" value={localData.ActivityLevel} onChange={handleChange} required>
            <option value="">Choose</option>
            <option value="Sedentary">Sedentary: Little to no excerise</option>
            <option value="Light">Light: 1-3 tiems of excerise per week</option>
            <option value="Moderate">Moderate: 4-5 times of excerise per week</option>
            <option value="VeryActive">Active: Intense or daily excerise 6-7/week</option>
            <option value="Intense">Very Physical Job or Daily Sports</option>
          </select>
        </label>

        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}
