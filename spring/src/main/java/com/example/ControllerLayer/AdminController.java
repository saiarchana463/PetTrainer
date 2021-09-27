package com.example.ControllerLayer;

import java.util.List;

import com.example.ModelLayer.AdminModel;
import com.example.ModelLayer.UserModel;
import com.example.Repository.AdminRepository;
import com.example.Repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private UserRepository userrepo;
    

    @PostMapping("/Admin/add")
    public String saveUserInAdmin(@RequestBody AdminModel user) {
		adminRepository.save(user);
		return "Enter";
	}

    public AdminRepository getAdminRepository() {
        return adminRepository;
    }

    public void setAdminRepository(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @GetMapping("/Admin")
    public List<UserModel> getUserInAdmin() {
        return (List<UserModel>) userrepo.findAll();
    }

    @PutMapping("/Admin/update/")
    public String updateUserInAdmin(@RequestBody AdminModel user) {
		adminRepository.save(user);
		return "Update completed";
	}
    @DeleteMapping("/Admin/remove/{id}")
    public String deleteUserInAdmin(@PathVariable Integer id){
        adminRepository.deleteById(id);
        return "Deleted";

    }
    
}
