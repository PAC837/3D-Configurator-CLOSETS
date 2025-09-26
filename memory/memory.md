# Project Memory — 3D Configurator (PAC Closets)
Last updated: 2025-09-26 14:02 ET

## Project Overview
A streamlined, materials-first closet design tool using the PAC Closet Library. The MVP focuses on a 2D plan/elevation configurator with left-to-right auto-snapping layout, real-time pricing, and export to Mozaik (.mzkord). Phase 2 adds 3D visualization.

## Big Goals
- Fast on-site designer workflow comparable to VividWorks/ClosetPro UX
- Materials/hardware pre-selection that propagates across the design
- Left-to-right auto snapping with smart gaps/fillers and end caps
- Accurate, real-time pricing during design
- Direct export to Mozaik for manufacturing handoff

## Phases and Milestones
- Phase 1 (Active): MVP 2D Configurator + Pricing + Mozaik export
- Phase 2: 3D viewer, enhanced outputs (PDFs, renders)
- Phase 3: Collaboration, analytics, and advanced integrations

## Current Status
- Repo initialized on main
- .gitignore created with “Mozaik 14/” excluded from version control
- README added with scope, workflow, and stack
- GitHub remote set: PAC837/3D-Configurator-CLOSETS
- Next: initial commit and push; scaffold app (React+TS+Vite)

## Next Actions (Immediate)
1) Commit and push initial repo state to GitHub main
2) Scaffold frontend app in ./app (Vite React + TS)
3) Install TailwindCSS, base config, and minimal UI shell for workflow
4) Create initial data structures (PAC parameters ingestion plan, component types)
5) Stub auto-snapping algorithm and pricing engine interfaces

## Key Decisions and Changes (Log)
- 2025-09-26 13:57: Materials-first workflow prioritized (user feedback)
- 2025-09-26 13:58: Auto-snapping left-to-right placement is mandatory
- 2025-09-26 14:01: “Mozaik 14/” explicitly ignored in git
- 2025-09-26 14:02: Initial repo scaffolding tasks queued

## Resources and References
- GitHub: https://github.com/PAC837/3D-Configurator-CLOSETS.git
- PAC Library: ./1 PAC Closet Library V2/
- Mozaik Example: ./Mozaik 14/Sample Order.mzkord
- Reference UX: vividworks.com, innosaw.shop, phillanton.com
- Internal Rules: ./clinerules/

## Glossary and Shortcuts
- PAC: Phill Anton Consulting closet library
- MVP: Minimum Viable Product (2D-first)
- Mozaik: Manufacturing software target (.mzkord orders)

## Metrics & KPIs (initial)
- Time to assemble a standard closet wall: target < 10 minutes
- Pricing accuracy: 95%+ alignment with configured rules
- Zero Mozaik integration blockers for exported orders
