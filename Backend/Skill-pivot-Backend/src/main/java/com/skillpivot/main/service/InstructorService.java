package com.skillpivot.main.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillpivot.main.entity.Instructor;
import com.skillpivot.main.repository.InstructorRepository;

@Service
public class InstructorService {

    @Autowired
    private InstructorRepository instructorRepo;

    public List<Instructor> getAllInstructors() {
        return instructorRepo.findAll();
    }

    public Optional<Instructor> getInstructorById(Long id) {
        return instructorRepo.findById(id);
    }

    public Instructor createInstructor(Instructor instructor) {
        return instructorRepo.save(instructor);
    }

    public Instructor updateInstructor(Long id, Instructor updatedInstructor) {
        return instructorRepo.findById(id)
                .map(instructor -> {
                    instructor.setName(updatedInstructor.getName());
                    instructor.setEmail(updatedInstructor.getEmail());
                    instructor.setExpertise(updatedInstructor.getExpertise());
                    return instructorRepo.save(instructor);
                })
                .orElse(null);
    }

    public void deleteInstructor(Long id) {
        instructorRepo.deleteById(id);
    }
}
