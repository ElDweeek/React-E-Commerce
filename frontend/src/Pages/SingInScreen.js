import React from "react";

import { signin } from "../api";
import { getUserInfo, setUserInfo } from "../localStorage";
import { hideLoading, redirectUser, showLoading, showMessage } from "../utils";

const SignInScreen = () => {
  // render: () => {
  if (getUserInfo().fName) {
    redirectUser();
  }
  return (
    <>
      <div className="signinScreen">
        <div className="form-container">
          <div className="form-box">
            <form id="signin-form" className="signin-form">
              <ul className="form-items">
                <li>
                  <h1>Login</h1>
                </li>
                <li>
                  <input type="email" name="email" id="email" placeholder="E-mail" autocomplete="off" />
                </li>
                <li>
                  <input type="password" name="password" id="password" placeholder="Password" />
                </li>
                <li>
                  <button type="submit" className="sub-btn">Sign In</button>
                </li>
                <li>
                  <div>
                    Don't have an account?
                    <a href="/#/register">Sign Up</a>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )






}
//   after_render: () => {
//     document.getElementById("signin-form").addEventListener("submit", async (e) => {
//       e.preventDefault();
//       showLoading();
//       const data = await signin({
//         email: document.getElementById('email').value,
//         password: document.getElementById("password").value,
//       });
//       hideLoading();
//       if (data.error) {
//         showMessage(data.error);
//       } else {
//         setUserInfo(data);
//         redirectUser();
//       }
//     });
//   }
// }


export default SignInScreen;