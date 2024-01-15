package com.example.demo.service;

import com.example.demo.dto.CategoryDTO;
import com.example.demo.dto.PostDTO;
import com.example.demo.dto.UsersDTO;
import com.example.demo.model.Category;
import com.example.demo.model.Post;
import com.example.demo.model.Users;
import org.apache.catalina.User;
import org.mapstruct.Mapper;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Mapper(componentModel = "spring")
public interface MapStructMapper {
    List<PostDTO> postToDto(List<Post> posts);
    List<CategoryDTO> categoryToDto(List<Category> categories);
    List<UsersDTO> usersToDto(List<Users> users);
//    default Post dtoToPost(PostDTO p) throws IOException {
//        Post posts=new Post();
//        posts.setId(p.getId());
////        List<Content> list=new ArrayList<>();
////        List<String> strings=p.getContents();
////        for (int i = 0; i < strings.size(); i++) {
////            list.add(new Content(0,strings.get(i),i,posts));
////        }
////        posts.setContents(list);
//        //......................................
//        posts.setImages(p.getImagePath());
//        return posts;
//
//    }

    default Post dtoToPost(PostDTO p) throws IOException {
        Post posts=new Post();
        posts.setId(p.getId());
        posts.setImages(p.getImagesPath());
        return posts;

    }

    default PostDTO postToDto(Post p) throws IOException {
        PostDTO postDTO=new PostDTO();
        postDTO.setId(p.getId());
        postDTO.setCategory(p.getCategory());
        postDTO.setDate(p.getDate());
        postDTO.setComments(p.getComments());
        postDTO.setUser(p.getUser());
        postDTO.setDescription(p.getDescription());
        //...............................

        //כאן נוכל לבצע את ההמרה של התמונה שלנו לביטים כדי שיחזרו לריאקט בהצלחה
        Path filename= Paths.get(p.getImages());
        //הופך את התמונה למערך של ביטים
        byte[] byteImage= Files.readAllBytes(filename);
        postDTO.setImages(Base64.getEncoder().encodeToString(byteImage));
        return postDTO;
    }

    default Category dtoToCategory(CategoryDTO c) throws IOException {
        Category category=new Category();
        category.setId(c.getId());
        category.setIcon(c.getIconPath());
        return category;

    }
    default CategoryDTO categoryToDto(Category c) throws IOException {
        CategoryDTO categoryDTO=new CategoryDTO();
        categoryDTO.setId(c.getId());
        categoryDTO.setName(c.getName());
        categoryDTO.setPost(c.getPost());

        //...............................
        Path filename= Paths.get(c.getIcon());

        byte[] byteImage= Files.readAllBytes(filename);

        categoryDTO.setIcon(Base64.getEncoder().encodeToString(byteImage));

        return categoryDTO;
    }

    default Users dtoToUsers(UsersDTO u) throws IOException {
        Users users=new Users();
        users.setId(u.getId());
        users.setProfileImg(u.getProfileImgPath());
        return users;

    }

    default UsersDTO usersToDto(Users u) throws IOException {
        UsersDTO usersDTO=new UsersDTO();
        usersDTO.setId(u.getId());
        usersDTO.setMail(u.getMail());
        usersDTO.setFirstName(u.getFirstName());
        usersDTO.setLastName(u.getLastName());
        usersDTO.setPhoneNumber(u.getPhoneNumber());


        //...............................
        Path filename= Paths.get(u.getProfileImg());

        byte[] byteImage= Files.readAllBytes(filename);

        usersDTO.setProfileImg(Base64.getEncoder().encodeToString(byteImage));

        return usersDTO;
    }






//enter after  dots
    //אובייקט שיכול לייצר שרשור של מחרוזות ללא צורך בכל פעם עותק חדש בזיכרון
//        StringBuilder builder=new StringBuilder();
//        List<Content> list=r.getContents();
//        for (int i = 0; i < list.size(); i++) {
//            builder.append(list.get(i).getText()+"\n");
//        }
//        recipeDTO.setContents(builder.toString());

//        List<Content> list=p.getContents();
//        List<String> list1=new ArrayList<>();
//        for (int i = 0; i < list.size(); i++) {
//            list1.add(list.get(i).getText());
//        }
//        postDTO.setContents(list1);

}
