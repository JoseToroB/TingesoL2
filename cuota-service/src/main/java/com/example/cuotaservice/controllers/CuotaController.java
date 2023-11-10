package com.example.cuotaservice.controllers;

import com.example.cuotaservice.services.CuotaService;
import com.example.cuotaservice.entities.CuotaEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

import java.util.List;

@RestController
@RequestMapping("/cuota")
public class CuotaController{
    @Autowired
    CuotaService cuotaService;

    @GetMapping
    public ResponseEntity<List<CuotaEntity>> obtenerCuotas(){
       List<CuotaEntity> cuotas = cuotaService.obtenerCuotas();
       if(cuotas.isEmpty()){
           return ResponseEntity.noContent().build();
       }
       return ResponseEntity.ok(cuotas);
    }

    @PostMapping("/borrarCuotas")
    public void borrarTodo(){
        cuotaService.borrarTodo();
    }

    @PostMapping("/crearCuota")
    public void crearCuota(@RequestBody CuotaEntity cuota){
        cuotaService.guardarCuota(cuota);
    }

    /*
    modificar cuota segun la id
     */

}