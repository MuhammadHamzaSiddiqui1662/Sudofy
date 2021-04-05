const Login =()=>{
    return(
        <div className="login">
            <div id="loginContainer">
                <div id="login1"></div>
                <div id="login2">
                    <h2 style={{color: '#056b47'}}>Welcom To HLX</h2>
                    <input className="abc" type="email" placeholder="Enter Your Email" />
                    <input className="abc" type="password" placeholder="Enter Password" />
                    <div id="loginButtons">
                        <a><button>Login</button></a>
                        <a><button>Sign Up</button></a>
                    </div>
                    <p style={{color: "#056b47"}}>Forgot Password: <a>Reset Now</a></p>
                </div>
            </div>
        </div>
    )
}
export default Login;