package com.tcc.metodologiasageis.Controllers;

import com.tcc.metodologiasageis.Entities.Metrica;
import com.tcc.metodologiasageis.Entities.Submetrica;
import com.tcc.metodologiasageis.Services.SubmetricaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/submetrica")
public class SubmetricaController {
    @Autowired
    private SubmetricaService submetricaService;

    @GetMapping("/{id}")
    public Submetrica getSubmetricaById(@PathVariable int id) {
        return submetricaService.findById(id).orElseThrow(() -> new ResourceNotFoundException("Não existe submétrica com o ID inserido"));
    }

    @GetMapping("/metrica/{m}")
    public List<Submetrica> getSubmetricaByMetrica(@PathVariable Metrica m) {
        return submetricaService.findByMetrica(m);
    }

    @GetMapping("/all")
    public List<Submetrica> getAllSubmetricas() {
        return submetricaService.findAll();
    }
}
