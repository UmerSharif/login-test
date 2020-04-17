import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

const responseGoogle = async (response) => {
  //   let res = await axios.post(
  //     "http://localhost:3001/api/v1/users/google-authenticate",
  //     { id_token: response.tokenObj.id_token }
  //   );
  console.log(response);
  //console.log(res.data);
};

export default function GoogleSign() {
  return (
    <GoogleLogin
      clientId="1060877864557-efi4ju1lkp8bpbpb14grt1o3lj4t1v1u.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
