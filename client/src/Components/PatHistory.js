import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './PatHistory.css'

export default function PatHistory() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [permission, setPermission] = useState(false);
  

  function handleFileChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setStatus("idle");
    }
    setPermission(true);
  }

  function handlePermissionResponse(response) {
    setPermission(false);
  }

  function handleFakeUpload() {
    if (!file) return;
    setStatus("uploading");

    setTimeout(() => {
      // simulate a success
      setStatus("success");
    }, 1500);
  }

  return (
    <div style={{ display: "flex" }}>
      <div className="dashboard">
        <div className="titletext">
          <h2>Dashboard</h2>
        </div>
        <div className="sidetext">
          <p onClick={() => navigate("/notifications")}>- Notifications</p>
          <p onClick={() => navigate("/info")}>- Info</p>
          <p onClick={() => navigate("/UserPFP")}>- User Profile</p>
          <p onClick={() => navigate("/history")}>- Patient History</p>
          <p onClick={() => navigate("/settings")}>- Settings</p>
        </div>
      </div>

      <div
        style={{
          marginLeft: "200px",
          padding: "1rem 2rem 0 2rem",
          marginTop: "-2rem",
          
        }}
      >
        <h1>Upload Your Report</h1>

        
        <input className='file' type="file" accept="" onChange={handleFileChange} />

        {permission && (
          <div className='overlay'>
            <div className="PerBox">
              <div className='together'>
                <h2>Upload</h2>
                <button className='X' onClick={()=> handlePermissionResponse('yes')}>X</button>
              </div>
              {file && (
                <div className='fileupload' style={{ marginTop: "1rem" }}>
                  <p><strong>File name:</strong> {file.name}</p>
                  <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
                  <p><strong>Type:</strong> {file.type}</p>

                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    style={{ marginTop: "1rem", width: "300px", height: "300px", borderRadius: "10px", boxShadow: "0 0 5px gray" }}
                  />

                  <div style={{ marginTop: "1rem" }}>
                    {status !== "uploading" && (
                      <button onClick={handleFakeUpload}>Upload</button>
                    )}

                    {status === "uploading" && <p>Uploading...</p>}
                    {status === "success" && <p style={{ color: "green" }}>Upload successful ✅</p>}
                    {status === "error" && <p style={{ color: "red" }}>Upload failed ❌</p>}
                  </div>
                </div>
              )}
            </div>
            </div>
        )}
        <div style={{marginLeft: "800px", marginTop: "-95px"}}>
          <div className="uploadA">
            <h1 style={{alignContent: "center", alignItems: "center"}}>Upload Bay</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
