import React from "react";
import Register from "../components/register";

class RegisterContainer extends React.Component {
  render() {
    const initialFormValues = {
      email: "",
      firstName: "",
      secondName: "",
    };

    const OnRegisterUser = (register) => {
      console.log(register, "Params");
    };

    return (
      <Register
        initialFormValues={initialFormValues}
        onRegister={OnRegisterUser}
      />
    );
  }
}

export default RegisterContainer;
