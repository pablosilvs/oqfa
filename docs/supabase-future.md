# Supabase futuro (não implementado)

Tabelas sugeridas:
- categories (id, slug unique, name, description, icon, image)
- solutions (id, slug unique, category_slug FK, title, description, excerpt, keywords[], difficulty, estimated_time, risk_level, image, updated_at, popular)
- solution_steps (solution_id FK, position, title, description, warning)
- first_actions / avoid_actions / warnings / faq (ou JSONB em solutions para MVP)
- diagnostics (solution_id FK, nodes JSONB: id, question, options[{label,next}], result{title,description,solution_slug})
- feedback (id, solution_slug, vote yes/no, text, created_at)
- analytics_events (id, name, data JSONB, created_at)

Migração: trocar `services/solutions.ts` para ler do Supabase (server) mantendo mesma assinatura:
getAllSolutions, getSolutionBySlug, getSolutionsByCategory, searchSolutions, getRelatedSolutions.

Busca futura: tsvector pt-BR ou pg_trgm. Groq futura só para classificar e sugerir slugs existentes.
