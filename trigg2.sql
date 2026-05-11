-- ============================================================
-- Trigger: prevenir ciclos en la jerarquía taxonómica
-- ============================================================

DROP TRIGGER IF EXISTS trg_prevent_taxon_cycle ON taxon;

CREATE TRIGGER trg_prevent_taxon_cycle
BEFORE INSERT OR UPDATE OF parent_id ON taxon
FOR EACH ROW
EXECUTE FUNCTION fn_prevent_taxon_cycle();
