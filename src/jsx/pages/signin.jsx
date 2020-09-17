import React from "react"
import { Link } from "react-router-dom"
// import { Link, Redirect } from "react-router-dom"
// import Homepage from "."
import firebase from "../firebase"
// import Dashboard from "./dashboard"

class Signin extends React.Component {
  constructor(props) {
    super()
    this.state = { user: "", pass: "", errorMessage: "" }

    this.handleChangeUser = this.handleChangeUser.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {}

  componentDidUpdate() {}  

  componentWillUnmount() {}

  handleChangeUser(event) {
    this.setState({ user: event.target.value })
  }

  handleChangePass(event) {
    this.setState({ pass: event.target.value })
  }

  async login(email, pass) {
    // const db = firebase.firestore()
    // var data = await db.collection("account").get()
    // console.log(data)

    const auth = firebase.auth()


  

    auth
      .signInWithEmailAndPassword(email, pass)
      .then((result) => {
        console.log(result)
        this.setState({ errorMessage: "" })
        let { history } = this.props
        history.push("/dashboard")
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message })
        console.log(auth.currentUser)   
        // console.log(error.message)
      })
  }

  handleSubmit(event) {
    this.login(this.state.user, this.state.pass)
    event.preventDefault()
  }

  render() {
    return (
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
                  <h4 className="card-title">Sign in</h4>
                </div>
                <div className="px-3 text-danger">
                  {this.state.errorMessage}
                </div>
                <div className="card-body">
                  <form method="post" name="myform" class="signin_validate">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="hello@example.com"
                        name="email"
                        onChange={this.handleChangeUser}
                      />
                    </div>

                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChangePass}
                      />
                    </div>

                    <div className="form-row d-flex justify-content-between mt-4 mb-2">
                      <div className="form-group mb-0">
                        <label className="toggle">
                          <input className="toggle-checkbox" type="checkbox" />
                          {/* <span className="toggle-switch"></span>
                          <span className="toggle-label">Remember me</span> */}
                        </label>
                      </div>
                      <div class="form-group mb-0">
                        <Link to={"./reset"}>Forgot Password?</Link>
                      </div>
                    </div>

                    <div class="text-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={this.handleSubmit}
                      >
                        Sign in
                      </button>
                      {/* <Link to={"./"} className="btn btn-success btn-block">
                        Sign in
                      </Link> */}
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>
                      Don't have an account?{" "}
                      <Link className="text-primary" to={"./signup"}>
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//   render() {
//     return this.state.isOk ? (
//       Dashboard()
//     ) : (
//       <div className="authincation section-padding">
//         <div className="container h-100">
//           <div className="row justify-content-center h-100 align-items-center">
//             <div className="col-xl-5 col-md-6">
//               <div className="mini-logo text-center my-5">
//                 <Link to={"./"}>
//                   <img src={require("../../images/logo.png")} alt="" />
//                 </Link>
//               </div>
//               <div className="auth-form card">
//                 <div className="card-header justify-content-center">
//                   <h4 className="card-title">Sign in</h4>
//                 </div>
//                 <div className="px-3 text-danger">
//                   {this.state.errorMessage}
//                 </div>
//                 <div className="card-body">
//                   <form method="post" name="myform" class="signin_validate">
//                     <div className="form-group">
//                       <label>Email</label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         placeholder="hello@example.com"
//                         name="email"
//                         onChange={this.handleChangeUser}
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label>Password</label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Password"
//                         name="password"
//                         onChange={this.handleChangePass}
//                       />
//                     </div>

//                     <div className="form-row d-flex justify-content-between mt-4 mb-2">
//                       <div className="form-group mb-0">
//                         <label className="toggle">
//                           <input className="toggle-checkbox" type="checkbox" />
//                           <span className="toggle-switch"></span>
//                           <span className="toggle-label">Remember me</span>
//                         </label>
//                       </div>
//                       <div class="form-group mb-0">
//                         <Link to={"./reset"}>Forgot Password?</Link>
//                       </div>
//                     </div>

//                     <div class="text-center">
//                       <button
//                         className="btn btn-success btn-block"
//                         onClick={this.handleSubmit}
//                       >
//                         Sign in
//                       </button>

//                       {/* <Link to={"./"} className="btn btn-success btn-block">
//                         Sign in
//                       </Link> */}

//                     </div>
//                   </form>
//                   <div className="new-account mt-3">
//                     <p>
//                       Don't have an account?{" "}
//                       <Link className="text-primary" to={"./signup"}>
//                         Sign up
//                       </Link>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// function Signin() {
//     return (
//         <>
//             <div class="authincation section-padding">
//                 <div class="container h-100">
//                     <div class="row justify-content-center h-100 align-items-center">
//                         <div class="col-xl-5 col-md-6">
//                             <div class="mini-logo text-center my-5">
//                                 <Link to={"./"}><img src={require("../../images/logo.png")} alt="" /></Link>
//                             </div>
//                             <div class="auth-form card">
//                                 <div class="card-header justify-content-center">
//                                     <h4 class="card-title">Sign in</h4>
//                                 </div>
//                                 <div class="card-body">
//                                     <form method="post" name="myform" class="signin_validate">
//                                         <div class="form-group">
//                                             <label>Email</label>
//                                             <input type="email" class="form-control" placeholder="hello@example.com"
//                                                 name="email" />
//                                         </div>
//                                         <div class="form-group">
//                                             <label>Password</label>
//                                             <input type="password" class="form-control" placeholder="Password"
//                                                 name="password" />
//                                         </div>
//                                         <div class="form-row d-flex justify-content-between mt-4 mb-2">
//                                             <div class="form-group mb-0">
//                                                 <label class="toggle">
//                                                     <input class="toggle-checkbox" type="checkbox" />
//                                                     <span class="toggle-switch"></span>
//                                                     <span class="toggle-label">Remember me</span>
//                                                 </label>
//                                             </div>
//                                             <div class="form-group mb-0">
//                                                 <Link to={"./reset"}>Forgot Password?</Link>
//                                             </div>
//                                         </div>
//                                         <div class="text-center">
//                                             <Link  to={"./otp-1"} class="btn btn-success btn-block">Sign in</Link>
//                                         </div>
//                                     </form>
//                                     <div class="new-account mt-3">
//                                         <p>Don't have an account? <Link class="text-primary" to={"./signup"}>Sign
//                                             up</Link></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

export default Signin
