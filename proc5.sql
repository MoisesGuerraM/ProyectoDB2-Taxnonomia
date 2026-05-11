-- ============================================================
-- Función: prevenir ciclos en la jerarquía taxonómica
-- ============================================================

CREATE OR REPLACE FUNCTION fn_prevent_taxon_cycle()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
DECLARE
    v_cycle_count INTEGER;
BEGIN
    -- Permitir taxones sin padre
    IF NEW.parent_id IS NULL THEN
        RETURN NEW;
    END IF;

    -- Validar que un taxón no sea padre de sí mismo
    IF NEW.parent_id = NEW.id_taxon THEN
        RAISE EXCEPTION
            'Jerarquía inválida: un taxón no puede ser padre de sí mismo.';
    END IF;

    -- Buscar si la nueva relación genera un ciclo
    WITH RECURSIVE ancestors AS (
        SELECT
            t.id_taxon,
            t.parent_id
        FROM taxon t
        WHERE t.id_taxon = NEW.parent_id

        UNION ALL

        SELECT
            parent.id_taxon,
            parent.parent_id
        FROM taxon parent
        INNER JOIN ancestors a ON parent.id_taxon = a.parent_id
    )
    SELECT COUNT(*)
    INTO v_cycle_count
    FROM ancestors
    WHERE id_taxon = NEW.id_taxon;

    -- Validar que no exista ciclo
    IF v_cycle_count > 0 THEN
        RAISE EXCEPTION
            'Jerarquía inválida: la asignación del padre genera un ciclo taxonómico.';
    END IF;

    RETURN NEW;
END;
$$;
