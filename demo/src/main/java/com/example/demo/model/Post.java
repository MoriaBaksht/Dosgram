package com.example.demo.model;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
@Entity
public class Post {
    @Id
    @GeneratedValue
    private long Id;
    private LocalDate date;
    private String description;
    private String images;
    @ManyToOne//many different posts can be one category
    private Category category;
//    @JsonIgnore
    @OneToMany(mappedBy = "post")//each post can have many comments
    private List<Comment> comments;
//@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
//    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)// a lot of posts from one user
//    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private Users user;

    public Post() {
    }

    public Post(long id, LocalDate date, String description, String images, Category category, List<Comment> comments, Users user) {
        Id = id;
        this.date = date;
        this.description = description;
        this.images = images;
        this.category = category;
        this.comments = comments;
        this.user = user;
    }

    public long getId() {
        return Id;
    }

    public LocalDate getDate() {
        return date;
    }

    public String getDescription() {
        return description;
    }

    public String getImages() {
        return images;
    }

    public Category getCategory() {
        return category;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public Users getUser() {
        return user;
    }

    public void setId(long id) {
        Id = id;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public void setUser(Users user) {
        this.user = user;
    }
}
