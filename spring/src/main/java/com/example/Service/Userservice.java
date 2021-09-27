package com.example.Service;



import java.util.List;

import com.example.ModelLayer.UserModel;
import com.example.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Userservice {
    @Autowired
    private UserRepository repo;

    public UserModel saveUser(UserModel user) {
        return repo.save(user);
    }

    public UserModel fetchUserByEmail(String email) {
        return repo.findByEmail(email);
    }

    public UserModel fetchUserByEmailAndPassword(String email, String password) {
        return repo.findByEmailAndPassword(email,password);
    }

    public List<UserModel> findAll() {
        return null;
    }

    public UserModel fetchForAdmin(String username,String email) {
        return repo.findByUsernameAndEmail(username,email);
    }


}
