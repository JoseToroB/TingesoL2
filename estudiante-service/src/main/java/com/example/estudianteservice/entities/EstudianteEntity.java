package com.example.estudianteservice.entities;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "estudiante")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EstudianteEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String apellido;
    private String nombre;
    private String rut;
    private String fechaNacimiento; 
    private String nombreColegio;
    private int anioEgreso;
    private int tipoColegio; 
}
