package com.tcc.metodologiasageis.Repositories;

import com.tcc.metodologiasageis.Entities.Relatorio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RelatorioRepo extends JpaRepository<Relatorio, Integer> {
    Optional<Relatorio> findBySigla(String sigla);
}
