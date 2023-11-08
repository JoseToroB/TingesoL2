package com.example.estudianteservice.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.estudianteservice.services.EstudianteService;
import com.example.estudianteservice.entities.EstudianteEntity;

@RestController
@RequestMapping("/estudiante")
public class EstudianteController {
    @Autowired
    EstudianteService estudianteService;

    @GetMapping
    public ResponseEntity<List<EstudianteEntity>> obtenerEstudiantes(){
        List<EstudianteEntity> estudiantes = estudianteService.obtenerEstudiantes();
        if(estudiantes.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(estudiantes);
    }
    @PostMapping("/crearEstudiante")
    public String crearEstudiante(@ModelAttribute("estudiante")EstudianteEntity estudiante, Model model){
        estudianteService.guardarEstudiante(estudiante);
        model.addAttribute("estudiante",estudiante);
        return "index";
    }
    @PostMapping("/borrarEstudiante")
    public void vaciarEstudiantes(){
        estudianteService.borrarTodo();
    }
}