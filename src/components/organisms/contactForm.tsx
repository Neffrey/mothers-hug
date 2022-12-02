// LIBRARIES
import React from "react";

// COMPONENTS

// PROPS
interface FormValuesProps {
  email: string;
  message: string;
}
export interface ErrorProps {
  id?: string | number | undefined;
  message?: string | undefined;
}

// FORM VALUES
const initialValues = {
  email: "",
  message: "",
};

// FC
const ContactForm = () => {
  return (
    <div
      // contact form wrapper
      className="min-w-full"
    >
    </div>
  );
};

export default ContactForm;
