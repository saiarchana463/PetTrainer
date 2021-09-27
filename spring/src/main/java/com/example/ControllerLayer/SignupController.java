package com.example.ControllerLayer;
import javax.servlet.http.HttpSession;
import com.example.ModelLayer.UserModel;
import com.example.Service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignupController {

	@Autowired
	private Userservice service;

	@PostMapping("/signup")
	@CrossOrigin
	public UserModel saveUser(@RequestBody UserModel user) throws Exception {
		String tempEmail = user.getEmail();
		if(tempEmail!=null && !"".equals(tempEmail)) {
			UserModel obj = service.fetchUserByEmail(tempEmail);
			if(obj!=null) {
				throw new Exception("User with "+tempEmail+ " already exists!!");
			}
		}
		UserModel userObj = null;
		userObj = service.saveUser(user);
		return userObj;
	}
    @PostMapping("/login")
	@CrossOrigin
	public UserModel checkUser(@RequestBody UserModel user) throws Exception {
		String tempEmail = user.getEmail();
		String tempPass = user.getPassword();
		UserModel userObj = null;
		if(tempEmail!=null && tempPass!=null) {
			userObj = service.fetchUserByEmailAndPassword(tempEmail, tempPass);
			userObj.setActive(true);
			service.saveUser(userObj);
		}
		if(userObj==null) {
			throw new Exception("Bad Credentials");
		}
		return userObj;
	}
	@GetMapping(value = "/logout")
	public String logout_user(HttpSession session)
	{
		session.removeAttribute("username");
		session.invalidate();
		return "Logout Success";
	}
}
