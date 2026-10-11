# Design: buckeyebizhub.com

Sister look to referralens.com: warm paper, ink type, one accent used only
for actions. Source of truth for values is `src/index.css` and
`tailwind.config.ts`; this file says how to use them.

## Palette

| Token | Hex | Use |
|---|---|---|
| paper | #FAF7F1 | Page background |
| cream | #F1EBE0 | Alternate sections, cards on paper |
| ink | #10151D | Headlines, dark panels, footer |
| body | #45433E | Reading text |
| quiet | #6B6A66 | Secondary text, captions |
| line | #DDD4C4 | Hairlines and borders |
| red | #B3141B | Buckeye logo red, deepened. Buttons, links, focus rings. Actions only. |

ReferraLens uses ember (#D9673F) where this site uses red. Everything else
matches. Never introduce a new hue for decoration; a flow or diagram uses
ink, quiet and line, with red on the one step that matters.

## Type

- Display: Newsreader (400/500), the same headline face as ReferraLens.
- Body: Hanken Grotesk.
- Loaded through `next/font`, self-hosted at build time.

## Shape and spacing

- Radius `0.625rem` (`--radius`), smaller on inputs.
- Hairline borders in `line`, no heavy shadows.
- Generous section padding; one idea per section.
- Mobile first. Nothing may scroll sideways on a phone.

## Imagery

Real photos over illustration. Never present a mockup or stock image as our
own work unless the file name ends in `-real`. No AI-generated people.
