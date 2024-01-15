package com.example.demo.Controller;

import com.example.demo.dto.PostDTO;
import com.example.demo.model.Category;
import com.example.demo.model.Comment;
import com.example.demo.model.Post;
import com.example.demo.model.Users;
import com.example.demo.service.MapStructMapper;
import com.example.demo.service.PostRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT , RequestMethod.DELETE  })

public class PostController {

    private PostRepository postRepository;

    private MapStructMapper mapper;

    private static String UPLOAD_DIRECTORY=System.getProperty("user.dir")+"\\images\\";

    @Autowired
    public PostController(PostRepository postRepository, MapStructMapper mapper) {
        this.postRepository = postRepository;
        this.mapper=mapper;
    }

//    @GetMapping("/all")
//    public List<Post> getPosts(){
//        return postRepository.findAll();
//    }

    @GetMapping("/all")
    public ResponseEntity<List<Post>> getPosts(){
        try{
            List<Post> posts=new ArrayList<>();
            postRepository.findAll().forEach(e->posts.add(e));
            return new ResponseEntity<>(posts, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/all/images")
    public ResponseEntity<List<String>> getPostsImages(){
        try{
            List<String> posts=new ArrayList<>();
            postRepository.findAll().forEach(e->posts.add(e.getImages()));
            return new ResponseEntity<>(posts, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/all/description")
    public ResponseEntity<List<String>> getPostsDescriptions(){
        try{
            List<String> posts=new ArrayList<>();
            postRepository.findAll().forEach(e->posts.add(e.getDescription()));
            return new ResponseEntity<>(posts, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/all/dates")
    public ResponseEntity<List<LocalDate>> getPostsDates(){
        try{
            List<LocalDate> posts=new ArrayList<>();
            postRepository.findAll().forEach(e->posts.add(e.getDate()));
            return new ResponseEntity<>(posts, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @GetMapping("/all/comments")
//    public ResponseEntity<List<Comment>> getPostsComments(){
//        try{
//            List<Comment> posts=new ArrayList<>();
//            postRepository.findAll().forEach(e->posts.add(e.getComments()));
//            return new ResponseEntity<>(posts, HttpStatus.OK);
//        }catch (Exception e){
//            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

//    @GetMapping("/all/users")
//    public ResponseEntity<List<User>> getPostsUsers(){
//        try{
//            List<User> posts=new ArrayList<>();
//            postRepository.findAll().forEach(e->posts.add(e.getUser()));
//            return new ResponseEntity<>(posts, HttpStatus.OK);
//        }catch (Exception e){
//            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }


    @GetMapping("/get/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable long id){
        Post e=postRepository.findById(id).orElse(null);
        if(e!=null){
            return new ResponseEntity<>(e,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/image")
    public ResponseEntity<String> getImageById(@PathVariable long id) {
        Post post = postRepository.findById(id).orElse(null);
        if (post != null) {
            String image = post.getImages();
            return new ResponseEntity<>(image, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/date")
    public ResponseEntity<LocalDate> getDateById(@PathVariable long id) {
        Post post = postRepository.findById(id).orElse(null);
        if (post != null) {
            LocalDate date = post.getDate();
            return new ResponseEntity<>(date, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/Category")
    public ResponseEntity<Category> getCategoryById(@PathVariable long id) {
        Post post = postRepository.findById(id).orElse(null);
        if (post != null) {
            Category category = post.getCategory();
            return new ResponseEntity<>(category, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/description")
    public ResponseEntity<String> getDescriptionById(@PathVariable long id) {
        Post post = postRepository.findById(id).orElse(null);
        if (post != null) {
            String desc = post.getDescription();
            return new ResponseEntity<>(desc, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/comments")
    public ResponseEntity<List<Comment>> getCommentsById(@PathVariable long id) {
        Post post = postRepository.findById(id).orElse(null);
        if (post != null) {
            List<Comment> comments = post.getComments();
            return new ResponseEntity<>(comments, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/user")
    public ResponseEntity<Users> getUserById(@PathVariable long id) {
        Post post = postRepository.findById(id).orElse(null);
        if (post != null) {
            Users user = post.getUser();
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/post")
    public ResponseEntity<Post> createPost(@RequestBody Post p){
        try{
            Post newPost=postRepository.save(p);
            return new ResponseEntity<>(newPost, HttpStatus.CREATED);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Post> updateComment(@PathVariable long id, @RequestBody Post post){
        Post p=postRepository.findById(id).orElse(null);
        if(post!=null)
        {
            p.setDate(post.getDate());
            p.setDescription(post.getDescription());



            //do I need to let  them do cnt updates or do I do that myself with functions?
            postRepository.save(p);
            return new ResponseEntity<>(p,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }

    @PostMapping("/uploadPost")
    public ResponseEntity<Post> uploadPostWithImage(@RequestPart("image") MultipartFile file,
                                                        @RequestPart("post") PostDTO p) throws IOException {
        try{
            String filePath=UPLOAD_DIRECTORY+file.getOriginalFilename();
            //הולך להיות הנתיב בו נשמור את התמונה
            Path filename= Paths.get(filePath);//im.jpg
            Files.write(filename,file.getBytes());

            p.setImagesPath(filePath);
            Post newPost=postRepository.save(mapper.dtoToPost(p));
            return new ResponseEntity<>(newPost,HttpStatus.CREATED);

        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    @GetMapping("/getdto/{id}")
    public ResponseEntity<PostDTO> getDTO(@PathVariable long id) throws IOException {
       Post p=postRepository.findById(id).orElse(null);
        if(p!=null){
            return new ResponseEntity<>(mapper.postToDto(p),HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }



}
