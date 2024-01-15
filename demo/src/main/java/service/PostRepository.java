package com.example.demo.service;

import com.example.demo.model.Comment;
import com.example.demo.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface PostRepository extends JpaRepository<Post,Long> {


}
