package uni.fmi.comment;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.comment.model.CommentScreenModel;

public class CommentSteps {
	
	private CommentScreenModel commentModel;

	@Given("^Потребителя започва да пише коментар$")
	public void userOpensCommentSection() throws Throwable {
	    commentModel = new CommentScreenModel();
	}
	@When("^Пише коментар: \"([^\"]*)\"$")
	public void userSetsComment(final String comment) throws Throwable {
	    commentModel.setComment(comment);
	}
	@When("^Натисне бутона за изпращане на коментар$")
	public void userClicksButton() throws Throwable {
		commentModel.clickSendButton();
	}

	@Then("^Вижда съобщение: \"([^\"]*)\"$")
	public void userSeesMessage(final String excpectedMessage) throws Throwable {
		assertEquals(excpectedMessage, commentModel.getMessage());
	}
}
