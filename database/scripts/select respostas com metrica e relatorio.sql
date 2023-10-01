SELECT * FROM tcc.respostas;

SELECT rel_sigla, met_sigla, sub_descricao, res_valor, res_id FROM Relatorios 
INNER JOIN Respostas ON  rel_id = fk_Relatorios_rel_id 
INNER JOIN Submetricas ON fk_Submetricas_sub_id = sub_id
INNER JOIN Metricas ON fk_Metricas_met_id = met_id
ORDER BY res_id;