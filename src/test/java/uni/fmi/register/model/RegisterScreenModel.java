package uni.fmi.register.model;

import uni.fmi.register.service.RegisterService;

public class RegisterScreenModel {

	private String username;
	private String password;
	private String message;
	private String secondPassword;
	private String email;
	
	public void setUsername(final String username) {
		this.username = username;
	}

	public void setPassword(final String password) {
		this.password=password;
	}

	public void setSecondPassword(final String password2) {
		this.secondPassword=password2;
	}

	public void setEmail(final String email) {
		this.email=email;
	}

	public void clickRegisterButton() {
		message = RegisterService.register(username, password, secondPassword, email);
	}

	public String getMessage() {
		return message;
	}

}
