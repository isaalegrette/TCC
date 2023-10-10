package com.tcc.metodologiasageis.Services;

import com.tcc.metodologiasageis.Entities.Metrica;
import com.tcc.metodologiasageis.Entities.Submetrica;
import com.tcc.metodologiasageis.Repositories.SubmetricaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubmetricaService {
    @Autowired
    private SubmetricaRepo submetricaRepo;

    public Optional<Submetrica> findById(int id) {
        return submetricaRepo.findById(id);
    }

    public List<Submetrica> findByMetrica(Metrica metrica) {
        return submetricaRepo.findByMetrica(metrica);
    }

    public List<Submetrica> findAll() {
        return submetricaRepo.findAll();
    }
}
