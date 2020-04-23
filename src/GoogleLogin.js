import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

const responseGoogle = async (response) => {
    let res = await axios.post(
      "http://localhost:3000/api/v1/students/google-login",
      { id_token: response.tokenObj.id_token }
    );
 
  console.log(res.data);
};

export default function GoogleSign() {
  return (
    <GoogleLogin
      clientId="1060877864557-qqlu057h0mba9tns4k1c6iop4bq7au1r.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
