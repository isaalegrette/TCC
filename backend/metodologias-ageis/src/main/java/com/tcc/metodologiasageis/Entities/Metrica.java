package com.tcc.metodologiasageis.Entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
@Entity
@Table(name = "metricas")
public class Metrica {
    @Id
    @Column(name = "met_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "met_sigla")
    private String sigla;

    @Column(name = "met_descricao")
    private String descricao;

    @Column(name = "met_breve_descricao")
    private String breveDescricao;

}
