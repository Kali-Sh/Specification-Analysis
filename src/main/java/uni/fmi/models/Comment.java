package uni.fmi.models;
import java.util.*;


public class Comment {
    
	public String content;
	private Set<Comment> subComments;
	private Comment mainComment;
	private Topic topic;
    public Comment() {
    }
    
    public String getContent() {
        return content;
    }
    
    public void setContent(String content) {
        this.content=content;
    }
    
    public Comment getMainComment() {
        return mainComment;
    }
    
    public void setMainComment(Comment mainComment) {
      this.mainComment=mainComment;
    }
    
    public Set<Comment> getSubComments() {
        return subComments;
    }
    
    public void setSubComments(Set<Comment> subComment) {
       this.subComments=subComment;
    }
    
    public Topic getTopic() {
        return topic;
    }
    
    public void setTopic(Topic topic) {
        this.topic=topic;
    }
}