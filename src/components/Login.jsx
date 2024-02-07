import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div id="main">
            <div className="box-form">
                <div className="left">
                    <div className="overlay">
                        <h1>Hello World.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur et est sed felis aliquet sollicitudin</p>
                        <span>
                            <p>login with social media</p>
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
                        </span>
                    </div>
                </div>

                <div className="right">
                    <h5>Login</h5>
                    <p>Don't have an account? <Link to="/Signup"  >Create Your Account</Link> it takes less than a minute</p>
                    <div className="inputs">
                        <input type="text" placeholder="Username" />
                        <br />
                        <input type="password" placeholder="Password" />
                    </div>

                    <br /><br />

                    <div className="remember-me--forget-password">
                        <label>
                            <input type="checkbox" name="item" defaultChecked />
                            <span className="text-checkbox">Remember me</span>
                        </label>
                        <p>forget password?</p>
                    </div>

                    <br />
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

