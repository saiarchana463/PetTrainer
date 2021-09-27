package com.example.Repository;


import com.example.ModelLayer.UserModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Integer> {

    public UserModel findByEmail(String email);

    public UserModel findByEmailAndPassword(String email, String password);

    public UserModel findByUsernameAndEmail(String username, String email);
    
}