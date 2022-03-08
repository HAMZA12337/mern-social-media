import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';
import ParticlesBg from 'particles-bg';
import icon from "./icon";
const SignInForm = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const recaptchaRef = React.createRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [.1, 0.9],
    body: icon,
    position: "all",
    //color: ["random", "#ff0000"],
    cross: "dead",
    random: 10
  }

  



  return (
    <div>
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <br />
      <div className="recaptcha" style={{marginLeft : 180,marginBottom:10}}>
      <ReCAPTCHA
      ref={recaptchaRef}
    sitekey="6LcwWVwaAAAAADbi4Zom6rq5lwfa85jx63laFwpy"
    render="explicit"
    
  />
  </div>
<input type="submit" value="Se connecter" />
</form>
<ParticlesBg type="custom" config={config} bg={true} />
</div>
  );
};
  

export default SignInForm;
