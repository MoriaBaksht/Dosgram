package com.example.demo.Controller;


import com.example.demo.dto.CategoryDTO;

import com.example.demo.model.Category;
import com.example.demo.model.Post;

import com.example.demo.service.CategoryRepository;


import com.example.demo.service.MapStructMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/category")

@CrossOrigin(origins = "*", allowedHeaders = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT , RequestMethod.DELETE  })
public class CategoryController {
    private static String UPLOAD_DIRECTORY=System.getProperty("user.dir")+"\\images\\";
    private MapStructMapper mapper;


    private CategoryRepository categoryRepository;
    @Autowired
    public CategoryController(CategoryRepository categoryRepository,MapStructMapper mapper) {

        this.categoryRepository = categoryRepository;
        this.mapper=mapper;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Category>> getCategories(){
        try{
            List<Category> cat=new ArrayList<>();
            categoryRepository.findAll().forEach(e->cat.add(e));
            return new ResponseEntity<>(cat, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/names")
    public ResponseEntity<List<String>> getCategoriesNames(){
        try{
            List<String> cat=new ArrayList<>();
            categoryRepository.findAll().forEach(e->cat.add(e.getName()));
            return new ResponseEntity<>(cat, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all/icons")
    public ResponseEntity<List<String>> getCategoriesIcons(){
        try{
            List<String> cat=new ArrayList<>();
            categoryRepository.findAll().forEach(e->cat.add(e.getIcon()));
            return new ResponseEntity<>(cat, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @GetMapping("/all/posts")
//    public ResponseEntity<List<Post>> getCategoriesPosts(){
//        try{
//
//            List<Post> cat=new ArrayList<>();
//            categoryRepository.findAll().forEach(e->cat.add((Post) e.getPost()));
//            return new ResponseEntity<>(cat, HttpStatus.OK);
//        }catch (Exception e){
//            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

@GetMapping("/all/{id}/name")
public ResponseEntity<String> getCategoriesNameById(@PathVariable long id){
    Category category = categoryRepository.findById(id).orElse(null);
    if (category != null) {
        String image = category.getName();
        return new ResponseEntity<>(image, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

    @GetMapping("/all/{id}/icon")
    public ResponseEntity<String> getCategoriesIconById(@PathVariable long id){
        Category category = categoryRepository.findById(id).orElse(null);
        if (category != null) {
            String icon = category.getIcon();
            return new ResponseEntity<>(icon, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all/{id}/post")
    public ResponseEntity<List<Post>> getCategoriesPostsById(@PathVariable long id) {
        Category category = categoryRepository.findById(id).orElse(null);
        if (category != null) {
            List<Post> posts = category.getPost();
            return new ResponseEntity<>(posts, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/post")
    public ResponseEntity<Category> createUser(@RequestBody Category c){
        try{
            Category newCategory=categoryRepository.save(c);
            return new ResponseEntity<>(newCategory, HttpStatus.CREATED);
        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable long id,@RequestBody Category category){
        Category c=categoryRepository.findById(id).orElse(null);
        if(category!=null)
        {
            c.setIcon(category.getIcon());

            //...................
            categoryRepository.save(c);
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


        }

    @PostMapping("/uploadCategory")
    public ResponseEntity<Category> uploadCategoryWithImage(@RequestPart("icon") MultipartFile file,
                                                    @RequestPart("category") CategoryDTO c) throws IOException {
        try{
            String filePath=UPLOAD_DIRECTORY+file.getOriginalFilename();
            //הולך להיות הנתיב בו נשמור את התמונה
            Path filename= Paths.get(filePath);//im.jpg
            Files.write(filename,file.getBytes());

            c.setIconPath(filePath);
            Category newCategory=categoryRepository.save(mapper.dtoToCategory(c));
            return new ResponseEntity<>(newCategory,HttpStatus.CREATED);

        }
        catch(Exception e){
            System.out.println(e);
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    @GetMapping("/getdto/{id}")
    public ResponseEntity<CategoryDTO> getDTO(@PathVariable long id) throws IOException {
        Category c=categoryRepository.findById(id).orElse(null);
        if(c!=null){
            return new ResponseEntity<>(mapper.categoryToDto(c),HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }






}
