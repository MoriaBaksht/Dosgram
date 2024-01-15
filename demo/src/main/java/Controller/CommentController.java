package com.example.demo.Controller;

import com.example.demo.model.Category;
import com.example.demo.model.Comment;
import com.example.demo.model.Post;
import com.example.demo.model.Users;
import com.example.demo.service.CommentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT , RequestMethod.DELETE  })

public class CommentController {
    private CommentRepository commentRepository;

    public CommentController(CommentRepository commentRepository) {this.commentRepository = commentRepository;}

    @GetMapping("/all")
    public ResponseEntity<List<Comment>> getComments(){
        try{
            List<Comment> comments=new ArrayList<>();
            commentRepository.findAll().forEach(e->comments.add(e));
            return new ResponseEntity<>(comments, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/all/content")
    public ResponseEntity<List<String>> getCommentsContents(){
        try{
            List<String> content=new ArrayList<>();
            commentRepository.findAll().forEach(e->content.add(e.getContent()));
            return new ResponseEntity<>(content, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/like")
    public ResponseEntity<List<String>> getCommentsLike(){
        try{
            List<String> like=new ArrayList<>();
            commentRepository.findAll().forEach(e->like.add(e.getLike()));
            return new ResponseEntity<>(like, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/dislike")
    public ResponseEntity<List<String>> getCommentsDislike(){
        try{
            List<String> dislike=new ArrayList<>();
            commentRepository.findAll().forEach(e->dislike.add(e.getLike()));
            return new ResponseEntity<>(dislike, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable long id){
        Comment e=commentRepository.findById(id).orElse(null);
        if(e!=null){
            return new ResponseEntity<>(e,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/content")
    public ResponseEntity<String> getCommentContentById(@PathVariable long id){
        Comment e=commentRepository.findById(id).orElse(null);
        if(e!=null){
            String content = e.getContent();
            return new ResponseEntity<>(content,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/like")
    public ResponseEntity<String> getCommentLikeById(@PathVariable long id){
        Comment e=commentRepository.findById(id).orElse(null);
        if(e!=null){
            String like = e.getLike();
            return new ResponseEntity<>(like,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/dislike")
    public ResponseEntity<String> getCommentDislikeById(@PathVariable long id){
        Comment e=commentRepository.findById(id).orElse(null);
        if(e!=null){
            String dislike = e.getDislike();
            return new ResponseEntity<>(dislike,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/cntlike")
    public ResponseEntity<String> getCommentCntlikeById(@PathVariable long id){
        Comment e=commentRepository.findById(id).orElse(null);
        if(e!=null){
            String cntlike = e.getCntLike();
            return new ResponseEntity<>(cntlike,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/cntdislike")
    public ResponseEntity<String> getCommentCntdislikeById(@PathVariable long id){
        Comment e=commentRepository.findById(id).orElse(null);
        if(e!=null){
            String cntlike = e.getCntDislike();
            return new ResponseEntity<>(cntlike,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/post")
    public ResponseEntity<Post> getCommentPostById(@PathVariable long id){
        Comment e=commentRepository.findById(id).orElse(null);
        if(e!=null){
            Post post = e.getPost();
            return new ResponseEntity<>(post,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/user")
    public ResponseEntity<Users> getCommentUserById(@PathVariable long id){
        Comment e=commentRepository.findById(id).orElse(null);
        if(e!=null){
            Users user = e.getUser();
            return new ResponseEntity<>(user,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/post")
    public ResponseEntity<Comment> createComment(@RequestBody Comment c){
        try{
            Comment newComment=commentRepository.save(c);
            return new ResponseEntity<>(newComment, HttpStatus.CREATED);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable long id, @RequestBody Comment comment){
        Comment c=commentRepository.findById(id).orElse(null);
        if(comment!=null)
        {
            c.setDislike(comment.getDislike());
            c.setLike(comment.getLike());
            c.setContent(comment.getContent());


            //do I need to let  them do cnt updates or do I do that myself with functions?
            commentRepository.save(c);
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }

    @PutMapping("/update2/{id}")
    public ResponseEntity<Comment> updateLike(@PathVariable long id, @RequestBody Comment comment){
        Comment c=commentRepository.findById(id).orElse(null);
        if(comment!=null)
        {
            c.setDislike(comment.getDislike());
            c.setLike(comment.getLike());
            c.setContent(comment.getContent());


            //do I need to let  them do cnt updates or do I do that myself with functions?
            commentRepository.save(c);
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }
    @GetMapping("/comments/{postId}")
    public ResponseEntity<List<Comment>> getAllCommentsForPost(@PathVariable Long postId) {
        List<Comment> comments = commentRepository.findAllByPostId(postId);

        if (comments.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(comments, HttpStatus.OK);
        }
    }



    }





