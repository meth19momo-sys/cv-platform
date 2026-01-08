package com.example.demo.repository;

import com.example.demo.model.CV;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Spring Data repository for CV documents.
 */
@Repository
public interface CVRepository extends MongoRepository<CV, String> {
    // Additional query methods can be defined here if needed
}
