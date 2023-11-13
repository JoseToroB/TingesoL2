package com.example.planillaservice.controllers;
import com.example.planillaservice.entities.PlanillaEntity;
import com.example.planillaservice.services.PlanillaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/planilla")
public class PlanillaController {
    @Autowired
    PlanillaService planillaService;

    @GetMapping
    public ResponseEntity<List<PlanillaEntity>> obtenerPlanillas(){
        List<PlanillaEntity> planillas = planillaService.obtenerPlanillas();
        if(planillas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(planillas);
    }
   @GetMapping("/calcularPlanilla")
    public PlanillaEntity crearPlanilla(int id){
        return planillaService.calcularPlanillaE(id);
    }

    @PostMapping("/borrarTodo")
    public void borrarTodo(){
        planillaService.borrarTodo();
    }





}
