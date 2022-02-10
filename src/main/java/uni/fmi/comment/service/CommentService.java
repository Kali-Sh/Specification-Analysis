package uni.fmi.comment.service;

public class CommentService {
	
	public static String send(final String comment) {
		if(comment == null || comment.isBlank()) {
			return "Неуспешно изпращане";
		}
		else {
			return "Успешно изпращане";
		}
	}
}
