package com.tcc.metodologiasageis.Controllers;

import com.tcc.metodologiasageis.Entities.Submetrica;
import com.tcc.metodologiasageis.Services.SubmetricaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/submetrica")
public class SubmetricaController {
    @Autowired
    private SubmetricaService submetricaService;

    @GetMapping("/{id}")
    public Submetrica getSubmetricaById(@PathVariable int id) {
        return submetricaService.findById(id).orElseThrow(() -> new ResourceNotFoundException("Não existe submetrica com o ID inserido"));
    }

    @GetMapping("/all")
    public List<Submetrica> getAllSubmetricas() {
        return submetricaService.findAll();
    }

    //TODO: fazer um get submetricas by metrica e um by metrica e relatorio
}
