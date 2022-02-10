package uni.fmi.models;
import java.util.*;

public class User {

	public String username;
	public String password;
	public String email;
	public Role role;
	private Set<Role> roles;
	private Set<Topic> topics;
	private Set<User> users;
	private Set<User> friendsOfUsers;

	public User() {
		this(null,null,null);
    }
	
    public User(final String username, final String password) {
		this.username = username;
		this.password=password;
	}
    
    public User(Role role) {
    	this.role = role;
    }

	public User(String username2, String password2, String email2) {
		this.username = username2;
		this.password=password2;
		this.email = email2;
	}
	
	public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username=username;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password=password;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email=email;
    }
    
    public Set<Role> getRoles() {
        return roles;
    }
    
    public void setRoles(Set<Role> roles) {
        this.roles=roles;
    }
    
    public Set<Topic> getTopics() {
        return topics;
    }
    
    public void setTopics(Set<Topic> topics) {
        this.topics=topics;
    }
    
    public Set<User> getUsers() {
        return users;
    }
    
    public void setUsers(Set<User> users) {
        this.users=users;
    }
    
    public Set<User> getFriendsOfUsers() {
        return friendsOfUsers;
    }
    
    public void setFriendsOfUsers(Set<User> friendsOfUsers) {
        this.friendsOfUsers=friendsOfUsers;
    }
}