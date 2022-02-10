package uni.fmi.register;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.register.model.RegisterScreenModel;

public class RegisterSteps {

	private RegisterScreenModel registerModel;
	
	@Given("^Потребителя отваря екрана за регистрация на нов потребител$")
	public void userOpensRegisterScreen() throws Throwable {
	    registerModel = new RegisterScreenModel();
	}

	@When("^Въведе потребителско име: \"([^\"]*)\"$")
	public void userEntersUsername(final String username) throws Throwable {
	    registerModel.setUsername(username);
	}

	@When("^Въведе парола: \"([^\"]*)\"$")
	public void userEntersPassword(final String password) throws Throwable {
	    registerModel.setPassword(password);
	}

	@When("^Въведе втора парола: \"([^\"]*)\"$")
	public void userReEntersPassword(final String password2) throws Throwable {
	    registerModel.setSecondPassword(password2);
	}

	@When("^Въведе електронна поща: \"([^\"]*)\"$")
	public void userEntersEmail(final String email) throws Throwable {
	    registerModel.setEmail(email);
	}

	@When("^Натисне бутона за регистрация$")
	public void userClicksButton() throws Throwable {
	    registerModel.clickRegisterButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void userSeesMessage(final String excpectedMessage) throws Throwable {
		assertEquals(excpectedMessage, registerModel.getMessage());
	}
}
