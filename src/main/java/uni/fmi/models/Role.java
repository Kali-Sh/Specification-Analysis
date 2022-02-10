package uni.fmi.models;

import java.util.Set;

public class Role {

	public String role;
	private Set<User> users;
    
    public Role() {
    }
    
    public Role(String role) {
    	this.role=role;
    }
    
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role=role;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
    	this.users=users;
    }

}