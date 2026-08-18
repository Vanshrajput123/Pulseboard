# DECISIONS.md

## Why this product and approach
I chose to invent **Pulseboard**, a feedback-to-roadmap product, because the brief rewards product taste and honest UX more than copying an existing brand. The page is intentionally content-led: one value proposition, one CTA, and a real-looking product surface rather than testimonials, fake customer logos, or invented metrics.

I used plain HTML/CSS/JS instead of a framework. For a single marketing page, that is the shortest path to a fast, dependency-light build that I can explain line-by-line. CSS handles the responsive system and visual hierarchy; a tiny JavaScript layer handles scroll reveal, the roadmap interaction, and the easter egg.

## Trade-off
Under the time limit I prioritized the hero, product preview, mobile layout, spacing/type system, and one meaningful interaction over adding more sections. With a real week, I would add a working signup flow, connect the demo card to real application state, run accessibility/performance audits, and test the copy/layout with real users.

## AI usage
AI was used as a coding/design copilot for initial structure, responsive CSS ideas, and copy alternatives. I personally reviewed the implementation, removed fabricated proof points, checked the responsive breakpoints, verified the interaction behavior, and kept the final architecture intentionally simple enough to explain in a follow-up interview.
