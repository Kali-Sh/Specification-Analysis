package uni.fmi.topic.model;

import uni.fmi.models.Role;
import uni.fmi.topic.service.TopicService;

public class TopicScreenModel {
	
	private String message;
	private Role role;

	public void setRole(final Role role) {
		this.role=role;
	}
	public void clickDeleteButton() {
		
		message = TopicService.delete(role.getRole());
	}

	public String getMessage() {
		return message;
	}
}
