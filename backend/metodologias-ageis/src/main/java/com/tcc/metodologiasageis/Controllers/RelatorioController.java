package com.tcc.metodologiasageis.Controllers;

import com.tcc.metodologiasageis.Entities.Relatorio;
import com.tcc.metodologiasageis.Services.RelatorioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/relatorio")
public class RelatorioController {
    @Autowired
    private RelatorioService relatorioService;

    @GetMapping("/{id}")
    public Relatorio getRelatorioById(@PathVariable int id) {
        return relatorioService.findById(id).orElseThrow(() -> new ResourceNotFoundException("Não existe relatório com o ID inserido"));
    }

    @GetMapping("/all")
    public List<Relatorio> getAllRelatorios() {
        return relatorioService.findAll();
    }

}