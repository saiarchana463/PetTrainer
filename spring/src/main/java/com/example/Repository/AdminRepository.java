package com.example.Repository;


import java.util.Optional;

import com.example.ModelLayer.AdminModel;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AdminRepository extends CrudRepository<AdminModel, Integer> {
 
 AdminModel findByEmail(String email);

void save(String string);

Optional<AdminModel> findById(Long id);





}