package uni.fmi.comment.model;

import uni.fmi.comment.service.CommentService;

public class CommentScreenModel {
	private String comment;
	private String message;
	
	public void setComment(final String comment) {
		this.comment = comment;
	}

	public void clickSendButton() {
		message = CommentService.send(comment);
	}

	public String getMessage() {
		return message;
	}
}
