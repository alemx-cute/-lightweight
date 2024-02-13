import React from 'react';
import { Link } from 'react-router-dom';

import 'C:/Users/Ameen/Mits React/-lightweight/src/styles/log.css'


export const Signup = () => {
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
                    <h5>Sign Up</h5>
                    <p>
                        Already have an account? <Link to="/login" >Log In to your Account</Link> it takes less than a minute
                    </p>
                    <div className="inputs">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <input type="email" placeholder="Email" />
                    </div>

                    <br/><br/>

                    <div className="remember-me--forget-password">
                        {/* Angular */}
                        <label>
                            <input type="checkbox" name="item" defaultChecked />
                            <span className="text-checkbox">Remember me</span>
                        </label>
                    </div>

                    <br/>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    );
};
