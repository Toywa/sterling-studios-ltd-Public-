STERLINGS STUDIO — PREMIUM TYPOGRAPHY PATCH

Contains:
  src/index.css

What it does:
- Makes headings across the whole site smaller, quieter and more premium.
- Matches the restrained typography direction used on the Services page.
- Keeps component-specific colours intact, including white headings on dark sections.
- Keeps mobile headings compact and helps prevent clipping.
- Does not change the Services-page quote or its wording.

POWERSHELL INSTALL — RUN FROM PROJECT ROOT

1. Back up your current CSS:
   Copy-Item .\src\index.css .\src\index.css.backup

2. Extract this ZIP over the project root:
   Expand-Archive -Path .\Sterlings_Premium_Typography_Patch.zip -DestinationPath . -Force

3. Build:
   npm run build

4. If happy:
   git add .
   git commit -m "Apply premium site-wide typography"
   git push origin main

ROLLBACK
   Copy-Item .\src\index.css.backup .\src\index.css -Force
