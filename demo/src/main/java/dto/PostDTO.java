package com.example.demo.dto;

import com.example.demo.model.Category;
import com.example.demo.model.Comment;
import com.example.demo.model.Users;


import java.time.LocalDate;
import java.util.List;

public class PostDTO {
    private long Id;
    private LocalDate date;
    private String description;
    private String imagesPath;

    private String images;
    private Category category;
    private List<Comment> comments;
    private Users user;

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

    public String getImagesPath() {
        return imagesPath;
    }

    public void setImagesPath(String imagesPath) {
        this.imagesPath = imagesPath;
    }
}
