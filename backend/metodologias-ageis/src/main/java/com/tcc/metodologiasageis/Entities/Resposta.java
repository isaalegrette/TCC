package com.tcc.metodologiasageis.Entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
@Entity
@Table(name = "respostas")
public class Resposta {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "res_id")
   private int id;

   @Column(name = "res_valor")
   private int valor;

   @JoinColumn(name = "fk_Submetricas_sub_id")
   @ManyToOne
   private Submetrica submetrica;

   @JoinColumn(name = "fk_Relatorios_rel_id")
   @ManyToOne
   private Relatorio relatorio;

}
