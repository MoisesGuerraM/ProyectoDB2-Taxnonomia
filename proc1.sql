-- ============================================================
-- Procedimiento almacenado: crear un nuevo taxón
-- ============================================================

CREATE OR REPLACE PROCEDURE sp_create_taxon(
    IN p_id_rank INTEGER,
    IN p_id_status INTEGER,
    IN p_parent_id INTEGER,
    IN p_scientific_name VARCHAR
)
LANGUAGE plpgsql
AS $$
BEGIN
    -- Validar que el nombre científico no esté vacío
    IF p_scientific_name IS NULL OR TRIM(p_scientific_name) = '' THEN
        RAISE EXCEPTION 'El nombre científico del taxón no puede estar vacío.';
    END IF;

    -- Validar que el rango exista
    IF NOT EXISTS (
        SELECT 1
        FROM rank
        WHERE id_rank = p_id_rank
    ) THEN
        RAISE EXCEPTION 'El rango con id % no existe.', p_id_rank;
    END IF;

    -- Validar que el estado exista
    IF NOT EXISTS (
        SELECT 1
        FROM status
        WHERE id_status = p_id_status
    ) THEN
        RAISE EXCEPTION 'El estado con id % no existe.', p_id_status;
    END IF;

    -- Validar que el padre exista, si fue enviado
    IF p_parent_id IS NOT NULL AND NOT EXISTS (
        SELECT 1
        FROM taxon
        WHERE id_taxon = p_parent_id
    ) THEN
        RAISE EXCEPTION 'El taxón padre con id % no existe.', p_parent_id;
    END IF;

    -- Insertar el taxón
    INSERT INTO taxon (
        id_rank,
        id_status,
        parent_id,
        scientific_name
    )
    VALUES (
        p_id_rank,
        p_id_status,
        p_parent_id,
        TRIM(p_scientific_name)
    );
END;
$$;
