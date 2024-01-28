package com.example.demo.dto;

import com.example.demo.model.Post;


import java.util.List;

public class CategoryDTO {

    private long id;

    private String name;

    private String iconPath;
    private String icon;

    private List<Post> post;

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

    public String getIconPath() {
        return iconPath;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public void setPost(List<Post> post) {
        this.post = post;
    }



    public void setIconPath(String iconPath) {
        this.iconPath = iconPath;
    }
}
