// InterviewContext.js
import { createContext, useState } from "react";

export const InterviewContext = createContext();

export function InterviewProvider({ children }) {
  const [formData, setFormData] = useState(null);

  return (
    <InterviewContext.Provider value={{ formData, setFormData }}>
      {children}
    </InterviewContext.Provider>
  );
}

