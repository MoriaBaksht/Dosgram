package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.List;

@Entity
//@Table(name="Users")


public class Users {
    @Id
    @GeneratedValue
    private long Id;
    private String mail;
    private String password;

    private String firstName;

    private String lastName;
    private String phoneNumber;

    private String profileImg;

    @JsonIgnore
    @OneToMany(mappedBy="user")
    private List<Post> Posts;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Comment> comments;

    public Users() {
    }

    public Users(long id, String mail, String password, String firstName, String lastName, String phoneNumber, String profileImg, List<Post> posts, List<Comment> comments) {
        Id = id;
        this.mail = mail;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.profileImg = profileImg;
        Posts = posts;
        this.comments = comments;
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

    public void setProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }

    public void setPosts(List<Post> posts) {
        Posts = posts;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

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

    public String getProfileImg() {
        return profileImg;
    }



    public List<Post> getPosts() {
        return Posts;
    }
}

