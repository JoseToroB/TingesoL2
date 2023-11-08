package com.example.estudianteservice.repositories;
import com.example.estudianteservice.entities.EstudianteEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface EstudianteRepository extends CrudRepository<EstudianteEntity,Long>{

}