package com.example.planillaservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EstudianteModel {
    private Long id;
    private String apellido;
    private String nombre;
    private String rut;
    private String fechaNacimiento; //dd-mm-yyyy
    private String nombreColegio;
    private int anioEgreso;
    private int tipoColegio; //1 muni - 2 sub  - 3 priv
}
