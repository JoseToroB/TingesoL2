package com.example.cuotaservice.controllers;

import com.example.cuotaservice.services.CuotaService;
import com.example.cuotaservice.entities.CuotaEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@RestController
@RequestMapping("/cuotas")
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

    @PostMapping
    public void borrarTodo(){
        cuotaService.borrarTodo();
    }

    @PostMapping
    public void crearCuota(@RequestBody CuotaEntity cuota){
        cuotaService.guardarCuota(cuota);
    }
    /*
    listar cuotas por id/rut alumno
     */

    /*
    modificar cuota de alumno
     */

}