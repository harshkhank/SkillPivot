package com.skillpivot.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillpivot.main.entity.Instructor;

public interface InstructorRepository extends JpaRepository<Instructor, Long> {
}
