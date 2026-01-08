package com.example.demo.controller;

import com.example.demo.model.CV;
import com.example.demo.repository.CVRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import java.util.List;

/**
 * REST controller exposing CV CRUD operations.
 */
@RestController
@RequestMapping("/api/cvs")
public class CVController {

    private final CVRepository repository;

    public CVController(CVRepository repository) {
        this.repository = repository;
    }

    /**
     * Create a new CV document. Requires authentication via Keycloak.
     *
     * @param cv the CV payload
     * @return created CV
     */
    @PostMapping
    public ResponseEntity<CV> createCV(@RequestBody CV cv) {
        CV saved = repository.save(cv);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    /**
     * Retrieve all CV documents. Requires authentication via Keycloak.
     *
     * @return list of CVs
     */
    @GetMapping
    public ResponseEntity<List<CV>> getAll() {
        List<CV> cvs = repository.findAll();
        return ResponseEntity.ok(cvs);
    }

    /**
     * Retrieve a single CV by ID.
     *
     * @param id the CV identifier
     * @return the requested CV or 404 if not found
     */
    @GetMapping("/{id}")
    public ResponseEntity<CV> getById(@PathVariable String id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "CV not found"));
    }
}
