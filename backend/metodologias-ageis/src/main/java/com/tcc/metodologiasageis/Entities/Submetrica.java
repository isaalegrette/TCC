package com.tcc.metodologiasageis.Entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
@Entity
@Table(name = "submetricas")
public class Submetrica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sub_id")
    private int id;

    @Column(name = "sub_descricao")
    private String descricao;

    @JoinColumn(name = "fk_Metricas_met_id")
    @ManyToOne
    private Metrica metrica;

}
