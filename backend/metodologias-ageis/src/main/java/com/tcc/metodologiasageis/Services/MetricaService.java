package com.tcc.metodologiasageis.Services;

import com.tcc.metodologiasageis.Entities.Metrica;
import com.tcc.metodologiasageis.Repositories.MetricaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MetricaService {
    @Autowired
    private MetricaRepo metricaRepo;

    public Optional<Metrica> findById(int id) {
        return metricaRepo.findById(id);
    }

    public List<Metrica> findAll() {
        return metricaRepo.findAll();
    }

    public Optional<Metrica> findBySigla(String sigla) {
        return metricaRepo.findBySigla(sigla);
    }
}
