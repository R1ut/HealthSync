import { useState } from "react";
import './Interview.css';
import alarmSound from './Assets/med-alarm.mp3';


export default function Interview() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    takesMedication: '',
    sleepHours: '',
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
    console.log("Form data submitted:", formData);

    if (formData.hydrationReminder) {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          setTimeout(() => {
            new Notification("💧 Time to drink water!");
          }, 5000); // Simulated reminder
        }
      });
    }

    if (formData.medReminder) {
      const audio = new Audio(alarmSound);
      setTimeout(() => {
        audio.play();
      }, 5000); // Simulated alarm
    }

    // Navigate somewhere if you want
    // navigate("/dashboard");
  };

  return (
    <div className="interview-container">
      <h1>Health Interview</h1>
      <div className="underline"></div>
      <form className="interview-form" onSubmit={handleSumbit}>
        
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Choose</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </label>

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
          How many hours do you sleep? (hrs):
          <input type="number" name="sleepHours" value={formData.sleepHours} onChange={handleChange} required />
        </label>

        <label>
          Do you take medication?
          <select name="takesMedication" value={formData.takesMedication} onChange={handleChange} required>
            <option value="">Choose</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>

        <label>
          <input type="checkbox" name="hydrationReminder" checked={formData.hydrationReminder} onChange={handleChange} />
          Enable hydration reminders
        </label>

        <label>
          <input type="checkbox" name="medReminder" checked={formData.medReminder} onChange={handleChange} />
          Enable medication alarms
        </label>

        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}

