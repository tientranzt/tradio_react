import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase";

function Signup() {
  let history = useHistory();
  let auth = firebase.auth()

  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [errMessage, setErrMessage] = useState("");


  async function submitHandle() {

    if(pass === passConfirm){
      auth.createUserWithEmailAndPassword(email, pass + "@!").then((result) => {
        console.log(result)
      })
      .catch((err)=>{
        console.log(err);
        setErrMessage(err.message)
      })
    }
    else{
      setErrMessage("Password does not match")
    }

    

    // history.push("/signin");
  }

  return (
    <>
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-5">
                <Link to={"./"}>
                  <img src={require("../../images/logo.png")} alt="" />
                </Link>
              </div>
              <div className="auth-form card">
                <div className="card-header justify-content-center">
                  <h4 className="card-title">Sign up your account</h4>
                </div>
                <div className="px-3 text-danger">
                  {errMessage}
                </div>
                <div className="card-body">
                  <form method="post" name="myform" className="signup_validate">
                    {/* <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        name="username"
                        onChange={(e) => setUser(e.target.value)}
                      />
                    </div> */}
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="hello@example.com"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setPass(e.target.value + "endfile")}
                      />
                    </div>
                    <div className="form-group">
                      <label>Password Confirm</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password Confirm"
                        name="password-confirm"
                        onChange={(e) => setPassConfirm(e.target.value)}
                      />
                    </div>
                    <div className="text-center mt-4">
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={submitHandle}
                      >
                        Sign up
                      </button>
                      {/* <Link to={"./signin"} className="btn btn-success btn-block">
                        Sign up
                      </Link> */}
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>
                      Already have an account?{" "}
                      <Link className="text-primary" to={"signin"}>
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
