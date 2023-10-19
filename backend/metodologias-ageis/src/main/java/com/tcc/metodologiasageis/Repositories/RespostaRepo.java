package com.tcc.metodologiasageis.Repositories;

import com.tcc.metodologiasageis.Entities.Relatorio;
import com.tcc.metodologiasageis.Entities.Resposta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RespostaRepo extends JpaRepository<Resposta, Integer> {
    List<Resposta> findByRelatorio(Relatorio relatorio);

    @Query(value = "SELECT fk_Relatorios_rel_id, fk_Submetricas_sub_id, fk_Metricas_met_id, rel_sigla, met_sigla, met_id, sub_descricao, res_valor, res_id FROM Respostas " +
            "INNER JOIN Relatorios ON  rel_id = fk_Relatorios_rel_id " +
            "INNER JOIN Submetricas ON fk_Submetricas_sub_id = sub_id " +
            "INNER JOIN Metricas ON fk_Metricas_met_id = met_id " +
            "WHERE met_id = :metrica " +
            "ORDER BY res_id;", nativeQuery = true)
    List<Resposta> findByMetrica(@Param("metrica") int metrica);

    @Query(value = "SELECT fk_Relatorios_rel_id, fk_Submetricas_sub_id, fk_Metricas_met_id, rel_sigla, met_sigla, met_id, sub_descricao, res_valor, res_id FROM Respostas " +
            "INNER JOIN Relatorios ON  rel_id = fk_Relatorios_rel_id " +
            "INNER JOIN Submetricas ON fk_Submetricas_sub_id = sub_id " +
            "INNER JOIN Metricas ON fk_Metricas_met_id = met_id " +
            "WHERE rel_id = :relatorio AND met_id = :metrica " +
            "ORDER BY res_id", nativeQuery = true)
    List<Resposta> findByRelatorioAndMetrica(@Param("relatorio") int relatorio, @Param("metrica") int metrica);

    @Query(value = "SELECT fk_Relatorios_rel_id, fk_Submetricas_sub_id, fk_Metricas_met_id, rel_sigla, met_sigla, met_id, sub_descricao, res_valor, res_id FROM Respostas " +
            "INNER JOIN Relatorios ON  rel_id = fk_Relatorios_rel_id " +
            "INNER JOIN Submetricas ON fk_Submetricas_sub_id = sub_id " +
            "INNER JOIN Metricas ON fk_Metricas_met_id = met_id " +
            "ORDER BY res_id", nativeQuery = true)
    List<Resposta> findAllCompleteInfos();
}
