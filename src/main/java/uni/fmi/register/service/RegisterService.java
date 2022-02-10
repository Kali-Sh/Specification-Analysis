package uni.fmi.register.service;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import uni.fmi.models.User;

public class RegisterService {

	public static final Pattern VALID_EMAIL_ADDRESS_REGEX = 
		    Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);
	
	private static List<User> usersDb = new ArrayList<User>();
	
	public static String register(String username, String password, String secondPassword, String email) {
		
		if(!password.equals(secondPassword) && !password.isBlank() && !secondPassword.isBlank()) {
			return "Въведете еднакви пароли!";
		}
		
		if(username ==null || username.isBlank()) {
			return "Въведете име!";
		}

		if(username.length()<4) {
			return "Потребителското име трябва да е поне 4 символа!";
		}
		
		if(validate(email)==false) {
			return "Въведете валиден имейл!";
		}
		
		if(password == null || secondPassword==null || password.isBlank() || secondPassword.isBlank()){
			return "Въведете парола!";
		}
		
		final User user = new User(username, password, email);
	
		usersDb.add(user);
		return "Успешна регистрация!";
	}
	
	public static boolean validate(String emailStr) {
        final Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
        return matcher.find();
}
}
