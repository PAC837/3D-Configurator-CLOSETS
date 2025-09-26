# 3D Configurator — PAC Closets (MVP)

A streamlined 2D-first closet design tool for designers using the PAC Closet Library, with real-time pricing and one-click export to Mozaik. Phase 2 will add 3D visualization.

Important
- Do NOT commit the Mozaik 14 folder to Git. It is already in .gitignore.
- Workflow is materials-first, then component selection and left-to-right auto snapping, with live pricing while designing.

Project Goals
- Rapid 2D plan/elevation design for closets using standardized PAC components.
- Materials/finishes/hardware pre-selection that propagates to all components.
- Auto-snap layout from left to right with intelligent gaps/fillers and end caps.
- Live pricing as components are added/removed/modified.
- Export to Mozaik (.mzkord) for production.

Repository Structure (initial)
- clinerules/         Rules for coding, file size, memory, decisions
- memory/             Project working memory (kept up to date)
- 1 PAC Closet Library V2/  Source SKU references and parameters
- Mozaik 14/          Local Mozaik installation/files (IGNORED IN GIT)
- app/                Frontend app (React+TS+Vite) — scaffolded next

MVP Scope (Phase 1)
1) Materials & Finishes first (global palette)
   - Door style/finish, case material, hardware selection
2) Component Library
   - PAC components browser (categories, filters, thumbnails)
   - Drag to canvas to place
3) 2D Design Canvas
   - Walls/room dims, grid, guides
   - Auto-snap left→right, spacing, end caps/fillers
   - Elevations (front/side)
4) Real-time Pricing
   - Per component, per linear foot, by materials/hardware
   - Live updates as design changes
5) Mozaik Export
   - .mzkord XML generation with component/param mapping

Tech Stack
- Frontend: React + TypeScript + Vite
- Styling: TailwindCSS + shadcn/ui
- State: Zustand
- 3D (Phase 2): Three.js + React Three Fiber
- Backend (later): Node + Express + Prisma + Postgres (if/when needed)

Local Dev (after scaffold)
- Prereqs: Node 18+
- Commands:
  - cd app
  - npm install
  - npm run dev
- Tailwind setup is included during scaffold

Contributing
- Keep files ≤300 lines where practical (see clinerules/FILES.md)
- Keep ViewerContainer-type components thin; move logic to lib/ or hooks/
- Write small tests for new features (fast; seconds to run)
- Follow the memory protocol: update memory/memory.md with decisions, next actions, dates

Mozaik
- Folder Mozaik 14/ is ignored by git.
- Exporter will target .mzkord order format (see Mozaik 14/Sample Order.mzkord example).
- Library mapping will use PAC parameters and product naming conventions.

License
TBD
