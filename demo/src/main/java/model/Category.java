package com.example.demo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
@Entity
public class Category {
    @Id
    @GeneratedValue

    private long id;

    private String name;

    private String icon;
    @JsonIgnore
    @OneToMany(mappedBy="category")//we will have to specify that one post can only be one category
    private List<Post> post;

    public Category() {
    }

    public Category(long id, String name, String icon, List<Post> post) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.post = post;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getIcon() {
        return icon;
    }

    public List<Post> getPost() {
        return post;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public void setPost(List<Post> post) {
        this.post = post;
    }
}
