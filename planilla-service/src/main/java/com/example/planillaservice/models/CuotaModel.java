package com.example.planillaservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CuotaModel {
    private int idEstudiante;
    private int numeroCuota;//numero de esta cuota     1 de
    private int cantidadCuota;//cantidad de cuotas       3
    private float montoOriginal;
    private float montoApagar;
    private String fechaPago;//dd-mm-yyyy
    private int estaAtrasada;
    private int estaPagado;
    private int rebajada;//indica si ya se aplico su dcto correspondiente
}
