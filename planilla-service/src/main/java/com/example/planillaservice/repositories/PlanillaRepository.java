package com.example.planillaservice.repositories;
import com.example.planillaservice.entities.PlanillaEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public  interface PlanillaRepository extends CrudRepository<PlanillaEntity,Long>{
    public ArrayList<PlanillaEntity> findAllByIdEstudiante(int id);
}