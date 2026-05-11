-- ============================================================
-- Función: validar la jerarquía taxonómica
-- ============================================================

CREATE OR REPLACE FUNCTION fn_validate_taxon_hierarchy()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
    v_parent_rank_order INTEGER;
    v_child_rank_order INTEGER;
BEGIN
    -- Permitir taxones sin padre
    IF NEW.parent_id IS NULL THEN
        RETURN NEW;
    END IF;

    -- Obtener el orden del rango del padre
    SELECT r.rank_order
    INTO v_parent_rank_order
    FROM taxon t
    INNER JOIN rank r ON t.id_rank = r.id_rank
    WHERE t.id_taxon = NEW.parent_id;

    -- Obtener el orden del rango del hijo
    SELECT r.rank_order
    INTO v_child_rank_order
    FROM rank r
    WHERE r.id_rank = NEW.id_rank;

    -- Validar que el hijo tenga un rango inferior al padre
    IF v_child_rank_order <= v_parent_rank_order THEN
        RAISE EXCEPTION
            'Jerarquía taxonómica inválida: el rango del hijo debe ser inferior al rango del padre.';
    END IF;

    RETURN NEW;
END;
$$;
