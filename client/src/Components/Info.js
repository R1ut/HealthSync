import { useContext } from "react";
import { InterviewContext } from "./InterviewContext";
import { useNavigate } from "react-router-dom";
import './Info.css';

export default function Info() {
  const { formData } = useContext(InterviewContext);
  const navigate = useNavigate();


  if (!formData) return <p>No data submitted.</p>;

  const { age, gender, height, weight, takesMedication, sleepHours, ActivityLevel, } = formData;

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  const waterIntake = (weight * 0.033).toFixed(1);
  const BMR = gender === "Male"
  ? 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age)
  : 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
  let Calorie = 0;
  if (ActivityLevel === "Sedentary") {
    Calorie = BMR * 1.2;
  } else if (ActivityLevel === "Light") {
    Calorie = BMR * 1.375;
  } else if (ActivityLevel === "Moderate") {
    Calorie = BMR * 1.55;
  } else if (ActivityLevel === "VeryActive") {
    Calorie = BMR * 1.725;
  } else if (ActivityLevel === "Intense") {
    Calorie = BMR * 1.9;
  }


  return (
    
    <div style={{ display: "flex" }}>
      <div className="dashboard">
        <div className="titletext">
          <h2>Dashboard</h2>
        </div>
        <div className="sidetext">
          <p>- Notifications</p>
          <p>- Info</p>
          <p onClick={() => navigate("/UserPFP")}>- User Profile</p>
          <p>- Settings</p>
        </div>
      </div>

      <div style={{ marginLeft: "200px", padding: "1rem 2rem 0 2rem", marginTop: "-2rem" }}>
        <h1>Info About Your Health</h1>

        <div className="infostats">
          <h2>Info Stats</h2>
          <p>Weight: {weight} kg</p>
          <p>Height: {height} cm</p>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>Medication: {takesMedication}</p>
          <p>Sleep: {sleepHours} hrs</p>
        </div>

        <div className="calculated" style={{ marginLeft: "300px", marginTop: "-200px" }}>
          <h2>Calculated Stats</h2>
          <p>BMI: {bmi}</p>
          <p>BMR: {BMR} </p>
          <p>Caloric Needs: {Calorie} cal/day</p>
          <p>Water Needed: {waterIntake} L/day</p>
          <p>Recommended Sleep: 7-9 hrs</p>
        </div>
      </div>
    </div>
  );
}
