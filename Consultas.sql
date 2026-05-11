-- ============================================================
-- Consulta 1: Listar taxones con rango y estado
-- Descripción:
-- Muestra el nombre científico del taxón,
-- el rango biológico y el estado asociado.
-- ============================================================

SELECT 
    t.id_taxon,
    t.scientific_name AS nombre_cientifico,
    r.rank_name AS rango,
    s.status_name AS estado
FROM taxon t
INNER JOIN rank r 
    ON t.id_rank = r.id_rank
INNER JOIN status s 
    ON t.id_status = s.id_status
ORDER BY r.rank_order, t.scientific_name;

-- ============================================================
-- Consulta 2: Nombres comunes y sinónimos
-- Descripción:
-- Muestra el nombre científico junto con
-- su nombre común y sinónimo registrado.
-- ============================================================

SELECT 
    t.scientific_name AS nombre_cientifico,
    cn.common_name AS nombre_comun,
    ts.synonym_name AS sinonimo,
    ts.synonym_status AS estado_sinonimo
FROM taxon t

LEFT JOIN common_name cn
    ON t.id_taxon = cn.id_taxon

LEFT JOIN taxon_synonym ts
    ON t.id_taxon = ts.id_taxon

ORDER BY t.scientific_name;

-- ============================================================
-- Consulta 3: Relación jerárquica de taxones
-- Descripción:
-- Muestra el taxón hijo y su taxón padre
-- dentro de la clasificación taxonómica.
-- ============================================================

SELECT 
    hijo.id_taxon AS id_hijo,
    hijo.scientific_name AS taxon_hijo,
    
    padre.id_taxon AS id_padre,
    padre.scientific_name AS taxon_padre,

    r.rank_name AS rango_hijo

FROM taxon hijo

LEFT JOIN taxon padre
    ON hijo.parent_id = padre.id_taxon

INNER JOIN rank r
    ON hijo.id_rank = r.id_rank

ORDER BY padre.scientific_name, hijo.scientific_name;
