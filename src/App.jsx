import React, { Component } from "react";
import Logo from "./logo.png";
// get our fontawesome imports
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      email:null,
      password: null,
      showPass: false,
      showPassIcon: faEye,
    };
    // these refs to :
    // [change class on submitting to be .error and .error-border] and,
    // [remove d-none of errorSpan]
    this.labelEmail = React.createRef();
    this.labelPassword = React.createRef();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.errorSpan = React.createRef();
  }

	handleInputChange = ev => {
    // prevent default submitting
    ev.preventDefault();
    // remove errors
    this.emailInput.current.classList.remove('error-border');
    this.passwordInput.current.classList.remove('error-border');
    this.errorSpan.current.classList.add('d-none');
    this.labelEmail.current.classList.remove('error');
    this.labelPassword.current.classList.remove('error');

    const { name, value } = ev.target;
    this.setState({
      [name]: value
    })
  }
  handleShowPassword = ev => {
    const showPassCurrent = this.state.showPass;
    let icon = this.state.showPassIcon;
    showPassCurrent === false ? icon = faEyeSlash: icon=faEye;
    this.setState({
      showPass: !showPassCurrent,
      showPassIcon:icon
    })
  }
	handleSubmit = ev => {
    // prevent default submitting
    ev.preventDefault();
    // show error
    this.emailInput.current.classList.add('error-border');
    this.passwordInput.current.classList.add('error-border');
    this.errorSpan.current.classList.remove('d-none');
    this.labelEmail.current.classList.add('error');
    this.labelPassword.current.classList.add('error');
	}
	render() {
		return (
			<>
				<header className="header">
					<a
						className="header-link"
						href="https://mostafaabobakr7.github.io/bloopark/"
						target="_blank"
						rel="noopener noreferrer">
						<img src={Logo} className="App-logo" alt="logo" />
					</a>
					<button className="header-btn" title="menu">
						<span className="header-btn__menu">
							<span>&nbsp;</span>
						</span>
					</button>
				</header>
				<main className="main">
        <div className="container">
					<section className="gretting">
						<h1 className="gretting__name">Hello, John!</h1>
						<p className="gretting__text">
							Please log in with your credentials.
						</p>
					</section>
					<form  className="form" noValidate onSubmit={this.handleSubmit}>
						<fieldset className="form-control">
							<input
								id="email"
								type="email"
								name="email"
								className={this.state.email !== null && this.state.email !== "" ? "notempty form-control__input":"form-control__input"}
								value ={this.state.email}
								noValidate
								onChange ={this.handleInputChange}
                ref={this.emailInput}
							/>
							<label
                htmlFor="email"
                className="form-control__label"
                ref={this.labelEmail}
                >
								Email address
							</label>
						</fieldset>
						<fieldset className="form-control">
							<input
								id="password"
								type={this.state.showPass === true ? "text": "password"}
								name="password"
                className={this.state.password !== null && this.state.password !== "" ? "notempty form-control__input":"form-control__input"}
								value={this.state.password}
								noValidate
								onChange={this.handleInputChange}
                ref={this.passwordInput}

							/>
							<label
                htmlFor="password"
                className="form-control__label"
                ref={this.labelPassword}
                >
								Password
							</label>
							<button
                type="button"
                className="form-control__icon"
                onClick={this.handleShowPassword}
              >
								<FontAwesomeIcon icon={this.state.showPassIcon} />
							</button>
						</fieldset>
            <span
            className="error__span error d-none"
            ref={this.errorSpan}
            >Please check your email address or your password</span>
						<button
							type="submit"
							id="submit"
              className={this.state.email !== null && this.state.email !== "" || this.state.password !== null && this.state.password !== "" ? "form-control__btn active":"form-control__btn"}
							>
							Login
						</button>
						<a href="/" className="form-control__forget">
							Forgot your password?
						</a>
					</form>
          </div>
				</main>
				<footer className="footer">
					<h2 className="footer-head">
						<span>Not yet a</span>
						GOLD TRADER?
					</h2>
					<p className="footer-bottom">
						By creating an account with our store, you will be able to move
						through the checkout process faster
					</p>
				</footer>
			</>
		);
	}
}

export default App;
