package com.example.RecipeApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.RecipeApi.model.Category;
import com.example.RecipeApi.repo.CategoryRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/category")
public class MainController {
	@Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
private CategoryRepository catRepository;



	@GetMapping(path="/all")
    public @ResponseBody Iterable<Category> getAllUsers() {
        // This returns a JSON or XML with the users
        return catRepository.findAll();
    }
}
