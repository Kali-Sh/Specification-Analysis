package uni.fmi.login;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import uni.fmi.login.model.LoginScreenModel;

public class LoginSteps {
	
	private LoginScreenModel loginModel;

	@Given("^Потребителя отваря екрана за вход в системата$")
	public void userOpensLoginScreen() throws Throwable {
		loginModel = new LoginScreenModel();
	}

	@When("^Въведе потребителско име: \"([^\"]*)\"$")
	public void userAddsUsername(final String username) throws Throwable {
	    loginModel.setUsername(username);
	}

	@When("^Въведе потребителска парола: \"([^\"]*)\"$")
	public void userAddsPassword(final String password) throws Throwable {
	    loginModel.setPassword(password);
	}

	@When("^Натисне бутона за вход в системата$")
	public void userClicksLoginButton() throws Throwable {
	    loginModel.clickLoginButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void userChecksMessage(final String excpectedMessage) throws Throwable {
	    assertEquals(excpectedMessage, loginModel.getMessage());
	}
}
