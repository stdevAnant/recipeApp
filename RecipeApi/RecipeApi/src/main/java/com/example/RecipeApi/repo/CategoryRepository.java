package com.example.RecipeApi.repo;

import org.springframework.data.repository.CrudRepository;

import com.example.RecipeApi.model.Category;

public interface CategoryRepository extends CrudRepository<Category, Integer> {

}
