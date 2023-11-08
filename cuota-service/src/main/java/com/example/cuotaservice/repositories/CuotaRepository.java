package com.example.cuotaservice.repositories;
import com.example.cuotaservice.entities.CuotaEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CuotaRepository extends CrudRepository<CuotaEntity,Long>{
}
