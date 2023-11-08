package com.example.estudianteservice.services;

import com.example.estudianteservice.entities.EstudianteEntity;
import com.example.estudianteservice.repositories.EstudianteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class EstudianteService {
    @Autowired
    EstudianteRepository estudianteRepository;
    public ArrayList<EstudianteEntity> obtenerEstudiantes(){
        return (ArrayList<EstudianteEntity>) estudianteRepository.findAll();
    }

    public void guardarEstudiante(EstudianteEntity estudiante){
        estudianteRepository.save(estudiante);
    }
    public void borrarTodo(){
        estudianteRepository.deleteAll();
    }
}
