package uni.fmi.topic.service;

import java.util.ArrayList;
import java.util.List;

import uni.fmi.models.User;

public class TopicService {
	
	public static String delete(final String role) {

		if(role=="admin") {
			return "Успешно изтрихте темата";
		}
		else if (role=="user") {

			return "Нямате администраторски права за това действие";
		}
		return "Само регистрирани потребители имат права за това действие";
	}
}
