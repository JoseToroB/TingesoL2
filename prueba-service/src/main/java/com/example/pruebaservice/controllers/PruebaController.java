package com.example.pruebaservice.controllers;
import com.example.pruebaservice.entities.PruebaEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import com.example.pruebaservice.services.PruebaService;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@RequestMapping
public class PruebaController {
    @Autowired
    PruebaService pruebaService;
    /*
    @PostMapping("/crearPrueba")
    public String crearPrueba(@ModelAttribute("prueba") PruebaEntity prueba, Model model){
        pruebaService.guardarPrueba(prueba);
        model.addAttribute("prueba",prueba);
        return "index";
    }*/
    @GetMapping
    public ResponseEntity<List<PruebaEntity>> obtenerPruebas(){
        List<PruebaEntity> pruebas = pruebaService.obtenerPruebas();
        if(pruebas.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(pruebas);
    }
    @PostMapping
    public void borrarTodo(){
        pruebaService.borrarTodo();
    }
    @PostMapping("/subirNotas")
    public String cargarExcel(@RequestParam("prueba") MultipartFile file, RedirectAttributes ms){
        pruebaService.save(file);
        ms.addFlashAttribute("mensaje","Archivo subido!");
        return "index";
    }

}
