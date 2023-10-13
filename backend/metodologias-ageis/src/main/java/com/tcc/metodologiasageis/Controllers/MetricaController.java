package com.tcc.metodologiasageis.Controllers;

import com.tcc.metodologiasageis.Entities.Metrica;
import com.tcc.metodologiasageis.Services.MetricaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/metrica")
public class MetricaController {
    @Autowired
    private MetricaService metricaService;

    @GetMapping("/{id}")
    public Metrica getMetricaById(@PathVariable int id) {
        return metricaService.findById(id).orElseThrow(() -> new ResourceNotFoundException("Não existe métrica com o ID inserido"));
    }

    @GetMapping("/all")
    public List<Metrica> getAllMetricas() {
        return metricaService.findAll();
    }

    @GetMapping("/sigla/{s}")
    public Metrica getMetricaBySigla(@PathVariable String s) {
        return metricaService.findBySigla(s).orElseThrow(() -> new ResourceNotFoundException("Não existe métrica com a sigla inserida"));
    }
}
