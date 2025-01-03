package models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Entity
@Table(name = "Users")
public class User {

    @Id
    @Getter @Setter @Column( name = "user_id")
    private int user_id;
    @Getter @Setter @Column( name = "name")
    private String name;
    @Getter @Setter @Column( name = "email")
    private String email;
    @Getter @Setter @Column( name = "password")
    private String password;
    @Getter @Setter @Column( name = "user_type")
    private String user_type;
    @Getter @Setter @Column( name = "identification")
    private String identification;
    @Getter @Setter @Column( name = "registration_date")
    private Date registration_date;


}
