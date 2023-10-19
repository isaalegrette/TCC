package com.tcc.metodologiasageis.Services;

import com.tcc.metodologiasageis.Entities.Relatorio;
import com.tcc.metodologiasageis.Entities.Resposta;
import com.tcc.metodologiasageis.Repositories.RespostaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RespostaService {
    @Autowired
    private RespostaRepo respostaRepo;

    public Optional<Resposta> findById(int id) {
        return respostaRepo.findById(id);
    }

    public List<Resposta> findByRelatorio(Relatorio relatorio) {
        return respostaRepo.findByRelatorio(relatorio);
    }

    public List<Resposta> findByMetrica(int metrica) {
        return respostaRepo.findByMetrica(metrica);
    }

    public List<Resposta> findByRelatorioAndMetrica(int relatorio, int metrica) {
        return respostaRepo.findByRelatorioAndMetrica(relatorio, metrica);
    }

    public List<Resposta> findAll() {
        return respostaRepo.findAll();
    }

    public List<Resposta> findAllCompleteInfos() {
        return respostaRepo.findAllCompleteInfos();
    }
}
