package com.rcaf.rcaf.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name="requests")
public class Requests {

    @Id
    @Getter @Setter @Column( name = "request_id")
    private int request_id;

    @Getter @Setter @Column( name = "unique_code")
    private String unique_code;

    @Getter @Setter @Column( name = "type")
    private String type;

    @Getter @Setter @Column( name = "description")
    private String description;

    @Getter @Setter @Column( name = "status")
    private String status;

    @Getter @Setter @Column( name = "created_at")
    private Date created_at;

    @Getter @Setter @Column( name = "updated_at")
    private Date updated_at;

    @Getter @Setter @Column( name = "user_id")
    private int user_id;

    @Getter @Setter @Column( name = "is_anonymous")
    private boolean is_anonymous;


}
