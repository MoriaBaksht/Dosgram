package com.example.demo.dto;

import com.example.demo.model.Post;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.OneToMany;

import java.util.List;

public class UsersDTO{
    private long Id;
    private String mail;
    private String password;

    private String firstName;

    private String lastName;
    private String phoneNumber;

    private String profileImgPath;
    private String profileImg;

    private List<Post> Posts;

    public long getId() {
        return Id;
    }

    public String getMail() {
        return mail;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getProfileImgPath() {
        return profileImgPath;
    }

    public String getProfileImg() {
        return profileImg;
    }

    public List<Post> getPosts() {
        return Posts;
    }

    public void setId(long id) {
        Id = id;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setProfileImgPath(String profileImgPath) {
        this.profileImgPath = profileImgPath;
    }
    public void setProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }

    public void setPosts(List<Post> posts) {
        Posts = posts;
    }


}





















































































