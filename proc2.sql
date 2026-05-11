-- ============================================================
-- Procedimiento almacenado: agregar un sinónimo taxonómico
-- ============================================================

CREATE OR REPLACE PROCEDURE sp_add_taxon_synonym(
    IN p_id_taxon INTEGER,
    IN p_synonym_name VARCHAR,
    IN p_synonym_status VARCHAR,
    IN p_description TEXT
)
LANGUAGE plpgsql
AS $$
DECLARE
    v_scientific_name VARCHAR;
BEGIN
    -- Obtener el nombre científico del taxón
    SELECT scientific_name
    INTO v_scientific_name
    FROM taxon
    WHERE id_taxon = p_id_taxon;

    -- Validar que el taxón exista
    IF v_scientific_name IS NULL THEN
        RAISE EXCEPTION 'El taxón con id % no existe.', p_id_taxon;
    END IF;

    -- Validar que el sinónimo no esté vacío
    IF p_synonym_name IS NULL OR TRIM(p_synonym_name) = '' THEN
        RAISE EXCEPTION 'El nombre del sinónimo no puede estar vacío.';
    END IF;

    -- Validar que el sinónimo no sea igual al nombre científico
    IF LOWER(TRIM(p_synonym_name)) = LOWER(TRIM(v_scientific_name)) THEN
        RAISE EXCEPTION
            'El sinónimo no puede ser igual al nombre científico aceptado del taxón.';
    END IF;

    -- Insertar el sinónimo
    INSERT INTO taxon_synonym (
        id_taxon,
        synonym_name,
        synonym_status,
        description
    )
    VALUES (
        p_id_taxon,
        TRIM(p_synonym_name),
        p_synonym_status,
        p_description
    );
END;
$$;
