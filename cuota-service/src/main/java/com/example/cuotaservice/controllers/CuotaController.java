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

    @PostMapping("/modificarCuota")
    public void modificarCuota(long id) {
        // Obtiene la cuota a modificar
        CuotaEntity cuota = cuotaService.buscarPorId(id);

        // Verifica si la cuota existe
        if (cuota != null) {
            // Modifica el parámetro deseado de la cuota en este caso, el parametro de pagado se cambia a "1"
            cuota.setEstaPagado(1);
            cuotaService.guardarCuota(cuota);
        } else {

        }
    }
}

}