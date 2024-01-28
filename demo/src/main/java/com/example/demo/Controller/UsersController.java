package com.example.demo.Controller;

import com.example.demo.dto.PostDTO;
import com.example.demo.dto.UsersDTO;
import com.example.demo.model.Post;
import com.example.demo.model.Users;
import com.example.demo.service.CategoryRepository;
import com.example.demo.service.MapStructMapper;
import com.example.demo.service.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT , RequestMethod.DELETE  })

public class UsersController {
    private static String UPLOAD_DIRECTORY=System.getProperty("user.dir")+"\\images\\";

    private MapStructMapper mapper;
    private UsersRepository usersRepository;

    @Autowired
    public UsersController(UsersRepository usersRepository,MapStructMapper mapper) {
        this.usersRepository = usersRepository;
        this.mapper=mapper;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Users>> getUser(){
        try{
            List<Users> users=new ArrayList<>();
            usersRepository.findAll().forEach(e->users.add(e));
            return new ResponseEntity<>(users, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/mail")
    public ResponseEntity<List<String>> getUserMail(){
        try{
            List<String> mail=new ArrayList<>();
            usersRepository.findAll().forEach(e->mail.add(e.getMail()));
            return new ResponseEntity<>(mail, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/password")
    public ResponseEntity<List<String>> getUserPassword(){
        try{
            List<String> password=new ArrayList<>();
            usersRepository.findAll().forEach(e->password.add(e.getMail()));
            return new ResponseEntity<>(password, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/firstname")
    public ResponseEntity<List<String>> getUserFirstname(){
        try{
            List<String> firstname=new ArrayList<>();
            usersRepository.findAll().forEach(e->firstname.add(e.getMail()));
            return new ResponseEntity<>(firstname, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/lastname")
    public ResponseEntity<List<String>> getUserLastname(){
        try{
            List<String> lastname=new ArrayList<>();
            usersRepository.findAll().forEach(e->lastname.add(e.getMail()));
            return new ResponseEntity<>(lastname, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/phoneNumber")
    public ResponseEntity<List<String>> getUserPhoneNumber(){
        try{
            List<String> phoneNumber=new ArrayList<>();
            usersRepository.findAll().forEach(e->phoneNumber.add(e.getMail()));
            return new ResponseEntity<>(phoneNumber, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/profileImg")
    public ResponseEntity<List<String>> getUserProfileImg(){
        try{
            List<String> profileImg=new ArrayList<>();
            usersRepository.findAll().forEach(e->profileImg.add(e.getMail()));
            return new ResponseEntity<>(profileImg, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Users> getPostById(@PathVariable long id){
        Users e=usersRepository.findById(id).orElse(null);
        if(e!=null){
            return new ResponseEntity<>(e,HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/mail")
    public ResponseEntity<String> getMailById(@PathVariable long id) {
        Users users = usersRepository.findById(id).orElse(null);
        if (users != null) {
            String image = users.getMail();
            return new ResponseEntity<>(image, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/password")
    public ResponseEntity<String> getPasswordById(@PathVariable long id) {
        Users users = usersRepository.findById(id).orElse(null);
        if (users != null) {
            String password = users.getPassword();
            return new ResponseEntity<>(password, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/firstname")
    public ResponseEntity<String> getFirstnameById(@PathVariable long id) {
        Users users = usersRepository.findById(id).orElse(null);
        if (users != null) {
            String password = users.getFirstName();
            return new ResponseEntity<>(password, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/lastname")
    public ResponseEntity<String> getLastnameById(@PathVariable long id) {
        Users users = usersRepository.findById(id).orElse(null);
        if (users != null) {
            String lastname = users.getLastName();
            return new ResponseEntity<>(lastname, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/phoneNumber")
    public ResponseEntity<String> getPhoneNumberById(@PathVariable long id) {
        Users users = usersRepository.findById(id).orElse(null);
        if (users != null) {
            String phoneNumber = users.getPhoneNumber();
            return new ResponseEntity<>(phoneNumber, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{id}/profileImg")
    public ResponseEntity<String> getProfileImgById(@PathVariable long id) {
        Users users = usersRepository.findById(id).orElse(null);
        if (users != null) {
            String profileImg = users.getProfileImg();
            return new ResponseEntity<>(profileImg, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Users> login(@RequestBody Map<String, String> loginRequest) {
        try {
            String mail = loginRequest.get("mail");
            String password = loginRequest.get("password");

            Users user = usersRepository.findByMailAndPassword(mail, password);

            if (user != null) {
                // You might want to return a token or user details here
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            System.err.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/createUser")
    public ResponseEntity<Users> createUser(@RequestBody Users u) {
        try {
            Users user = usersRepository.findByMail(u.getMail());

            if (user == null) {
                Users newUser = usersRepository.save(u);
                return new ResponseEntity<>(newUser, HttpStatus.CREATED);


            } else {
                return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Users> updateComment(@PathVariable long id, @RequestBody Users users){
        Users u=usersRepository.findById(id).orElse(null);
        if(users!=null)
        {
            u.setProfileImg(users.getProfileImg());
            u.setMail(users.getMail());
            u.setPassword(users.getPassword());



            //do I need to let  them do cnt updates or do I do that myself with functions?
            usersRepository.save(u);
            return new ResponseEntity<>(u,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }

    @PostMapping("/uploadUsers")
    public ResponseEntity<Users> uploadPostWithImage(@RequestPart("image") MultipartFile file,
                                                    @RequestPart("user") UsersDTO u) throws IOException {
        try{
            String filePath=UPLOAD_DIRECTORY+file.getOriginalFilename();
            //הולך להיות הנתיב בו נשמור את התמונה
            Path filename= Paths.get(filePath);//im.jpg
            Files.write(filename,file.getBytes());

            u.setProfileImgPath(filePath);
            Users newUser=usersRepository.save(mapper.dtoToUsers(u));
            return new ResponseEntity<>(newUser,HttpStatus.CREATED);

        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    @GetMapping("/getdto/{id}")
    public ResponseEntity<UsersDTO> getDTO(@PathVariable long id) throws IOException {
        Users u=usersRepository.findById(id).orElse(null);
        if(u!=null){
            return new ResponseEntity<>(mapper.usersToDto(u),HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

}
