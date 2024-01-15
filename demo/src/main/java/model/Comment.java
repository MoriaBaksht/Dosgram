package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
@Entity
public class Comment {
    @Id
    @GeneratedValue
    private long id;

    private String content;

   private String likes;
   private String dislike;

   private String  cntLike;
   private String  cntDislike;

//    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @JsonIgnore
    @ManyToOne// each post can have many comments
    private Post post;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    private Users user;

    public Comment() {
    }

    public Comment(long id, String content, String likes, String dislike, String cntLike, String cntDislike, Post post, Users user) {
        this.id = id;
        this.content = content;
        this.likes = likes;
        this.dislike = dislike;
        this.cntLike = cntLike;
        this.cntDislike = cntDislike;
        this.post = post;
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public String getLike() {
        return likes;
    }

    public String getDislike() {
        return dislike;
    }

    public String getCntLike() {
        return cntLike;
    }

    public String getCntDislike() {
        return cntDislike;
    }

    public Post getPost() {
        return post;
    }

    public Users getUser() {
        return user;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setLike(String like) {
        this.likes = like;
    }

    public void setDislike(String dislike) {
        this.dislike = dislike;
    }

    public void setCntLike(String cntLike) {
        this.cntLike = cntLike;
    }

    public void setCntDislike(String cntDislike) {
        this.cntDislike = cntDislike;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
