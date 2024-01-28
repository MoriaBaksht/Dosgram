package com.example.demo.service;

import com.example.demo.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;


@Component

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
