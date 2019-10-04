package com.example.RecipeApi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.RecipeApi.model.Recipe;
import com.example.RecipeApi.repo.recipeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/recipe")
public class RecipeController {

	@Autowired
	private recipeRepository racipeRepository;

	@GetMapping(path="/all/{id}")
    private List<Recipe> findByCategory(@PathVariable int id) {
		System.out.println("ID:"+id);
		List<Recipe> reciperList =  racipeRepository.findByCategory(id);
		return reciperList;
	}
	
	
	


}
