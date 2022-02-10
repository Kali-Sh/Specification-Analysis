package uni.fmi.login.service;
import java.util.Collections;
import java.util.List;

import uni.fmi.models.User;

public class LoginService {

	private static List<User> userDb = Collections.singletonList(new User("Кирилка", "asdf123!"));
	
	public static String login(final String username,final String password) {

		if(password == null || username == null) {
			return "Въведете име и парола!";
		}
		final boolean isUserExists = userDb.stream()
				.anyMatch(u -> username.equals(u.getUsername()) && password.equals(u.getPassword()));
		
				return isUserExists ? "Успешно влизане!" : "Грешни данни!";
	}
}
