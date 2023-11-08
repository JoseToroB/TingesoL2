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
@RequestMapping
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
    //obtener todas las planillas

    /*listar planillas de un estudiante x idEstudiante*/
   /* @GetMapping("/verResumen/{id}")
    public String getUser(@PathVariable int id, Model model){
        planillaService.calcularPlanillaE(id);
        List<PlanillaEntity>planillas =planillaService.obtenerPlanillasEstudiante(id);
        model.addAttribute("planillas",planillas);
        return "mostrarResumen";
    }*/
    @PostMapping
    public void borrarTodo(){
        planillaService.borrarTodo();
    }





}
