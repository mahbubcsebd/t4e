---
description: Design system guidelines for the Think4Ever marketing site (Tailwind, Container, SectionHeading)
---

# Design System Guidelines

When modifying existing sections or creating new sections for this project, you MUST strictly adhere to the following design system rules to maintain the unified "premium, minimal, editorial SaaS" aesthetic.

## 1. Core Layout Structure

Every new marketing page section MUST follow this structural pattern:

```jsx
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";

export default function NewFeatureSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-zinc-200/60">
      {/* Background decorations go here (absolute inset-0) */}
      
      <Container className="relative z-10">
        <SectionHeading 
          align="center" // or "split" or "left"
          eyebrow={t("section.eyebrow")}
          title={t("section.title")}
          subtitle={t("section.subtitle")}
        />
        
        {/* Your section content grid goes here */}
        
      </Container>
    </section>
  );
}
```

### Layout Constraints
- **`<section>` wrapper**: Must include vertical padding (`py-24 md:py-32`), a background color, and `relative overflow-hidden`.
- **`Container` component**: You MUST wrap your actual content inside `<Container>` imported from `@/components/layout/Container`. Do not use raw div containers for horizontal constraints.
- **`SectionHeading` component**: You MUST use `<SectionHeading>` imported from `@/components/layout/SectionHeading` instead of writing custom header HTML.

## 2. Using SectionHeading

The `SectionHeading` component centralizes the "editorial header" style. 
- **Props**: `align`, `eyebrow`, `title`, `subtitle`, `animatePulse`, `className`, `titleClassName`, `subtitleClassName`, `eyebrowClassName`.
- **`align="center"`**: Default. Centered eyebrow, huge centered title, and centered subtitle. 
- **`align="split"`**: Left-aligned eyebrow and title, right-aligned subtitle (two columns on desktop).
- **`align="left"`**: Simple left-aligned text stack.
- **Gradient Titles**: You can pass JSX into the `title` prop to highlight specific words (e.g., `<>{t("titlePrefix")} <span className="text-gradient">{t("titleHighlight")}</span></>`).
- **Pulsing Dot**: Pass `animatePulse={true}` to include the animated blue dot next to the eyebrow.

## 3. Styling & Aesthetics

- **Colors**: Use the predefined brand colors instead of default tailwind colors. 
  - Brand Blue: `#093cad`
  - Brand Cyan: `#07A7E1`
  - Text Dark: `#09090d`
  - Text Muted: `#465a75`
  - Borders/Lines: `#c8d9ed`
  - Soft Backgrounds: `#f2f7ff`, `#e7f7fc`
- **Gradients**: Use `.text-gradient` for highlighted text. Avoid excessive background gradients; use clean white or `#f8fbff` backgrounds with subtle `#c8d9ed` borders.
- **Borders & Shadows**: Use `rounded-2xl` or `rounded-3xl` for large cards. Use subtle shadows like `shadow-[0_8px_30px_rgb(0,0,0,0.04)]` instead of harsh dark shadows.
- **Typography**: The site uses `font-poppins`. Ensure headings use `tracking-tight` and `font-extrabold`. Use `leading-relaxed` for long paragraphs.

## 4. Internationalization

- NEVER hardcode English strings in the UI. 
- Always use `const { t } = useLanguage()` from `@/context/LanguageContext`.
- If creating a new section, assume its keys will be added to the dictionaries (e.g., `t("newSection.title")`).
