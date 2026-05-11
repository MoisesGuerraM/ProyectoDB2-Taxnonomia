-- ============================================================
-- Función: consultar los descendientes de un taxón
-- ============================================================

CREATE OR REPLACE FUNCTION fn_get_taxon_descendants(
    p_id_taxon INTEGER
)
RETURNS TABLE (
    result_id_taxon INTEGER,
    result_scientific_name VARCHAR,
    result_rank_name VARCHAR,
    result_rank_order INTEGER,
    result_parent_id INTEGER
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

    -- Consultar todos los descendientes del taxón
    RETURN QUERY
    WITH RECURSIVE descendants AS (
        -- Hijos directos del taxón consultado
        SELECT
            t.id_taxon,
            t.scientific_name,
            t.id_rank,
            t.parent_id
        FROM taxon t
        WHERE t.parent_id = p_id_taxon

        UNION ALL

        -- Hijos de los hijos encontrados
        SELECT
            child.id_taxon,
            child.scientific_name,
            child.id_rank,
            child.parent_id
        FROM taxon child
        INNER JOIN descendants d ON child.parent_id = d.id_taxon
    )
    SELECT
        d.id_taxon,
        d.scientific_name,
        r.rank_name,
        r.rank_order,
        d.parent_id
    FROM descendants d
    INNER JOIN rank r ON d.id_rank = r.id_rank
    ORDER BY r.rank_order, d.scientific_name;
END;
$$;
