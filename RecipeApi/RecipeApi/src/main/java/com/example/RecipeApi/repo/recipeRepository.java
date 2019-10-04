package com.example.RecipeApi.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.RecipeApi.model.Recipe;

public interface recipeRepository extends CrudRepository<Recipe, Integer> {

	@Query(value="select * from recipe where category_id= ?1",nativeQuery=true)
	List<Recipe> findByCategory(int catId);
}
