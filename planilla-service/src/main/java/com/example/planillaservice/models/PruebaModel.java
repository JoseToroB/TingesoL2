package com.example.planillaservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PruebaModel {
    private int idEstudiante;
    private int puntaje;
    private String fecha;//dd-mm-yyyy
}
