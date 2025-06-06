package com.skillpivot.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillpivot.main.entity.User;
import com.skillpivot.main.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }

    public User createUser(User user) {
        return userRepo.save(user);
    }

    public User updateUser(Long id, User updatedUser) {
        return userRepo.findById(id)
                .map(user -> {
                    user.setName(updatedUser.getName());
                    user.setEmail(updatedUser.getEmail());
                    user.setDob(updatedUser.getDob());
                    user.setGender(updatedUser.getGender());
                    user.setUsername(updatedUser.getUsername());
                    user.setPassword(updatedUser.getPassword());
                    return userRepo.save(user);
                })
                .orElse(null);
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }
}
