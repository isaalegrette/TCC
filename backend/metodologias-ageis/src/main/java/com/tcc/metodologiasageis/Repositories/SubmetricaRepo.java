package com.tcc.metodologiasageis.Repositories;

import com.tcc.metodologiasageis.Entities.Metrica;
import com.tcc.metodologiasageis.Entities.Submetrica;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubmetricaRepo extends JpaRepository<Submetrica, Integer> {
    List<Submetrica> findByMetrica(Metrica metrica);
}
