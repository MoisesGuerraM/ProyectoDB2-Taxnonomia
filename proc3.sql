-- ============================================================
-- Función: consultar el linaje de un taxón
-- ============================================================

CREATE OR REPLACE FUNCTION fn_get_taxon_lineage(
    p_id_taxon INTEGER
)
RETURNS TABLE (
    result_id_taxon INTEGER,
    result_scientific_name VARCHAR,
    result_rank_name VARCHAR,
    result_rank_order INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Validar que el taxón exista
    IF NOT EXISTS (
        SELECT 1
        FROM taxon
        WHERE id_taxon = p_id_taxon
    ) THEN
        RAISE EXCEPTION 'El taxón con id % no existe.', p_id_taxon;
    END IF;

    -- Consultar el linaje desde el taxón hasta sus ancestros
    RETURN QUERY
    WITH RECURSIVE lineage AS (
        SELECT
            t.id_taxon,
            t.scientific_name,
            t.parent_id,
            r.rank_name,
            r.rank_order
        FROM taxon t
        INNER JOIN rank r ON t.id_rank = r.id_rank
        WHERE t.id_taxon = p_id_taxon

        UNION ALL

        SELECT
            parent.id_taxon,
            parent.scientific_name,
            parent.parent_id,
            r.rank_name,
            r.rank_order
        FROM taxon parent
        INNER JOIN rank r ON parent.id_rank = r.id_rank
        INNER JOIN lineage l ON l.parent_id = parent.id_taxon
    )
    SELECT
        l.id_taxon,
        l.scientific_name,
        l.rank_name,
        l.rank_order
    FROM lineage l
    ORDER BY l.rank_order;
END;
$$;
