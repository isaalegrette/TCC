package com.tcc.metodologiasageis.Controllers;

import com.tcc.metodologiasageis.Entities.Relatorio;
import com.tcc.metodologiasageis.Entities.Resposta;
import com.tcc.metodologiasageis.Services.RespostaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/resposta")
public class RespostaController {
    @Autowired
    private RespostaService respostaService;

    @GetMapping("/{id}")
    public Resposta getRespostaById(@PathVariable int id) {
        return respostaService.findById(id).orElseThrow(() -> new ResourceNotFoundException("Não existe resposta com o ID inserido"));
    }

    @GetMapping("/relatorio/{r}")
    public List<Resposta> getRespostaByRelatorio(@PathVariable Relatorio r) {
        return respostaService.findByRelatorio(r);
    }

    @GetMapping("/relatorio/{r}/metrica/{m}")
    public List<Resposta> getRespostaByRelatorioAndMetrica(@PathVariable int r, @PathVariable int m) {
        return respostaService.findByRelatorioAndMetrica(r, m);
    }

    @GetMapping("/all")
    public List<Resposta> getAllRespostas() {
        return respostaService.findAll();
    }

   @GetMapping("/all-complete")
    public List<Resposta> getAllCompleteInfoRespostas() {
        return respostaService.findAllCompleteInfos();
   }
}
