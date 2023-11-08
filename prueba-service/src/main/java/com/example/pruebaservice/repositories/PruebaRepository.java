package com.example.pruebaservice.repositories;
import com.example.pruebaservice.entities.PruebaEntity;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PruebaRepository extends CrudRepository<PruebaEntity,Long>{
    public ArrayList<PruebaEntity> findAllByIdEstudiante(int idEstudiante);
}