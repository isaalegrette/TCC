package com.tcc.metodologiasageis.Controllers;

import com.tcc.metodologiasageis.Entities.Resposta;
import com.tcc.metodologiasageis.Services.RespostaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/resposta")
public class RespostaController {
    @Autowired
    private RespostaService respostaService;

    @GetMapping("/{id}")
    public Resposta getRespostaById(@PathVariable int id) {
        return respostaService.findById(id).orElseThrow(() -> new ResourceNotFoundException("Não existe resposta com o ID inserido"));
    }

    @GetMapping("/all")
    public List<Resposta> getAllRespostas() {
        return respostaService.findAll();
    }

    //TODO: fazer um get resposta a partir das outras entidades
}
