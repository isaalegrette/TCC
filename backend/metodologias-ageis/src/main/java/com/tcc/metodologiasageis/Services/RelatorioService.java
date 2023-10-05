package com.tcc.metodologiasageis.Services;

import com.tcc.metodologiasageis.Entities.Relatorio;
import com.tcc.metodologiasageis.Repositories.RelatorioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RelatorioService {
    @Autowired
    private RelatorioRepo relatorioRepo;

    public Optional<Relatorio> findById(int id) {
        return relatorioRepo.findById(id);
    }

    public List<Relatorio> findAll() {
        return relatorioRepo.findAll();
    }
}
