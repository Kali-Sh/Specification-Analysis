package uni.fmi.topic;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.models.Role;
import uni.fmi.topic.model.TopicScreenModel;

public class TopicSteps {
	
	private TopicScreenModel topicScreenModel;
	
	
	@Given("^Потребителя отваря тема$")
	public void userOpensTopic() throws Throwable {
	    topicScreenModel = new TopicScreenModel();
	}

	@When("^Потребителя натисне бутона за изтриване на тема с роля: \"([^\"]*)\"$")
	public void userPressesButton(String userRole) throws Throwable {
		topicScreenModel.setRole(new Role(userRole));
		topicScreenModel.clickDeleteButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void userSeesMessage(final String excpectedMessage) throws Throwable {
		assertEquals(excpectedMessage, topicScreenModel.getMessage());
	}
}
