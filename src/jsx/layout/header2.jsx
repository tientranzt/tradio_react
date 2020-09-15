import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, } from 'react-bootstrap'

const ProfileToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}

    >
        {children}
        <div className="profile_log">
            <div class="user">
                <span class="thumb"><i class="mdi mdi-account"></i></span>
                <span class="arrow"><i class="la la-angle-down"></i></span>
            </div>
        </div>
    </div>
));

const LanguageToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        ref={ref}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}

    >
        {children}
        <div className="language">
            <div class="icon">
                <i class="flag-icon flag-icon-us"></i>
                <span>English</span>
            </div>
        </div>
    </div>
));



function Header2() {

    return (
        <>
            <div class="header dashboard">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-12">
                            <nav class="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                                <Link class="navbar-brand" to={"./dashboard"}><img src={require('./../../images/logo.png')} alt="" /></Link>

                                <div class="header-right d-flex my-2 align-items-center">
                                    <div class="language">
                                        <Dropdown>
                                            <Dropdown.Toggle as={LanguageToggle} />
                                            <Dropdown.Menu size="sm" title="">
                                                <Link to={'#'} class="dropdown-item">
                                                    <i class="flag-icon flag-icon-bd"></i> Bengali
                                            </Link>
                                                <Link to={'#'} class="dropdown-item">
                                                    <i class="flag-icon flag-icon-fr"></i> French
                                            </Link>
                                                <Link to={'#'} class="dropdown-item">
                                                    <i class="flag-icon flag-icon-cn"></i> China
                                            </Link>

                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div class="dashboard_log">
                                        <Dropdown className="profile_log">
                                            <Dropdown.Toggle as={ProfileToggle} />
                                            <Dropdown.Menu size="sm" title="">
                                                <div class="user-email">
                                                    <div class="user">
                                                        <span class="thumb"><i class="mdi mdi-account"></i></span>
                                                        <div class="user-info">
                                                            <h6>Saiful Islam</h6>
                                                            <span>quixlab.com@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="user-balance">
                                                    <div class="available">
                                                        <p>Available</p>
                                                        <span>0.00 USD</span>
                                                    </div>
                                                    <div class="total">
                                                        <p>Total</p>
                                                        <span>0.00 USD</span>
                                                    </div>
                                                </div>

                                                <Link to={"./account-overview"} class="dropdown-item">
                                                    <i class="mdi mdi-account"></i> Account
                                            </Link>
                                                <Link to={"./data-tbi"} class="dropdown-item">
                                                    <i class="mdi mdi-history"></i> History
                                            </Link>
                                                <Link to={"./settings"} class="dropdown-item">
                                                    <i class="mdi mdi-settings"></i> Setting
                                            </Link>
                                                <Link to={"./lock"} class="dropdown-item">
                                                    <i class="mdi mdi-lock"></i> Lock
                                            </Link>
                                                <Link to={"./signin"} class="dropdown-item logout">
                                                    <i class="mdi mdi-logout"></i> Logout
                                            </Link>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header2;