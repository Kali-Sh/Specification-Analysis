package uni.fmi.models;
import java.util.*;

public class Topic {

	public String title;
	public String content;
	private Set<Topic> subTopics;
	private Topic mainTopic;
	private User topicOwner;
	private Set<Comment> comments;

	public Topic() {
		
	}
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title=title;
    }
    
    public String getContent() {
        return content;
    }
    
    public void setContent(String content) {
        this.content=content;
    }
    
    public Topic getMainTopic() {
        return mainTopic;
    }
    
    public void setMainTopic(Topic mainTopic) {
        this.mainTopic=mainTopic;
    }
    
    public Set<Topic> getSubTopic() {
        return subTopics;
    }
    
    public void setSubTopics(Set<Topic> subTopics) {
        this.subTopics=subTopics;
    }
    
    public User getTopicOwner() {
        return topicOwner;
    }
    
    public void setTopicOwner(User topicOwner) {
        this.topicOwner=topicOwner;

    }
    
    public Set<Comment> getComments() {
        return comments;
    }
    
    public void setComments(Set<Comment> comments) {
        this.comments=comments;

    }

}