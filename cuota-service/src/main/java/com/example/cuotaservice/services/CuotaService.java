package com.example.cuotaservice.services;

import com.example.cuotaservice.entities.CuotaEntity;
import com.example.cuotaservice.repositories.CuotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CuotaService {
    @Autowired
    CuotaRepository cuotaRepository;
    public ArrayList<CuotaEntity> obtenerCuotas(){
        return (ArrayList<CuotaEntity>) cuotaRepository.findAll();
    }

    public void guardarCuota(CuotaEntity cuota){
        cuotaRepository.save(cuota);
    }
    public void borrarTodo(){
        cuotaRepository.deleteAll();
    }
    public CuotaEntity buscarPorId(long id){
        return cuotaRepository.findById(id);
    }

}
