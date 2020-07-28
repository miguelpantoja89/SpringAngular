package com.mgbtech.springAngular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mgbtech.springAngular.model.User;
import com.mgbtech.springAngular.repository.UserRepository;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired
	private final UserRepository userRepository;
	
	 
    public UserController(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@GetMapping(value="/users")
    public List<User> getUsers() {
        return (List<User>) userRepository.findAll();
    }
 
    @PostMapping(value="/register")
    void addUser(@RequestBody User user) {
        userRepository.save(user);
    }
    @DeleteMapping("/delete/{id}")
    public List<User> cancelRegistration(@PathVariable int id) {
    	userRepository.deleteById((long) id);
        return (List<User>) userRepository.findAll();
    }

}
