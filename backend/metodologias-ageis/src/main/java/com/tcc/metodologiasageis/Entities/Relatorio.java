package com.tcc.metodologiasageis.Entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
@Entity
@Table(name = "relatorios")
public class Relatorio {
    @Id
    @Column(name = "rel_id")
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int id;

    @Column(name = "rel_sigla")
    private String sigla;

    @Column(name = "rel_ano")
    private String ano;

    @Column(name = "rel_titulo")
    private String titulo;

}
