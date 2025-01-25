package com.rcaf.rcaf.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "requests")
public class Requests {

    @Id
    @Getter
    @Setter
    @Column(name = "request_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generation of the ID
    private int requestId;

    @Getter
    @Setter
    @Column(name = "unique_code", nullable = false, unique = true) // Unique code required
    private String uniqueCode;

    @Getter
    @Setter
    @Column(name = "type", nullable = false) // Type of the RCAF required
    private String type;

    @Getter
    @Setter
    @Column(name = "description", nullable = false) // Description required
    private String description;

    @Getter
    @Setter
    @Column(name = "status", nullable = false, columnDefinition = "VARCHAR(255) DEFAULT 'Open'") // Status with default value
    private String status;

    @Getter
    @Setter
    @Column(name = "created_at", nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;

    @Getter
    @Setter
    @Column(name = "updated_at", nullable = true) // Made nullable
    @Temporal(TemporalType.TIMESTAMP)
    private Date updatedAt;

    @Getter
    @Setter
    @Column(name = "user_id", nullable = true) // Optional field for user
    private Integer userId;

    @Getter
    @Setter
    @Column(name = "is_anonymous", nullable = false, columnDefinition = "BOOLEAN DEFAULT FALSE") // Indicates if the request is anonymous
    private boolean isAnonymous;
}
