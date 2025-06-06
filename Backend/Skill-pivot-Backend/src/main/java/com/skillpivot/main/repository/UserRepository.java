package com.skillpivot.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillpivot.main.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
