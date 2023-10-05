package com.tcc.metodologiasageis.Repositories;

import com.tcc.metodologiasageis.Entities.Metrica;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MetricaRepo extends JpaRepository<Metrica, Integer> {
    Optional<Metrica> findBySigla(String sigla);
}
