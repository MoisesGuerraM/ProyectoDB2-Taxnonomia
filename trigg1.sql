-- ============================================================
-- Trigger: validar jerarquía taxonómica
-- ============================================================

DROP TRIGGER IF EXISTS trg_validate_taxon_hierarchy ON taxon;

CREATE TRIGGER trg_validate_taxon_hierarchy
BEFORE INSERT OR UPDATE OF id_rank, parent_id ON taxon
FOR EACH ROW
EXECUTE FUNCTION fn_validate_taxon_hierarchy();
