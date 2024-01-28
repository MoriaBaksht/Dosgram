package com.example.demo.service;

import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface UsersRepository extends JpaRepository<Users,Long> {
    Users findByMail(String mail);
    Users findByMailAndPassword(String mail,String password);
}
