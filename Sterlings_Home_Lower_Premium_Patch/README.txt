STERLINGS STUDIO — HOME LOWER PREMIUM PATCH

WHAT CHANGES
- Leaves the top homepage hero intact.
- Rebuilds "What We Build" into an image-led asymmetric magazine grid.
- Replaces the heavy dark Selected Work slab with a lighter premium portfolio layout.
- Makes Akashi the featured project and stacks Alkebula + Sunscape editorially.
- Adds a compact dark editorial quote card instead of a huge dark background.
- Upgrades Why Sterlings into a magazine-style human-image composition.
- Tightens process, insights and FAQ spacing.

FILES CHANGED
- src/pages/Home.jsx only

POWERSHELL INSTALL
1. Put the ZIP in Downloads (or the project root).
2. From your project root, if the ZIP is one folder above:

   Expand-Archive -Path ..\Sterlings_Home_Lower_Premium_Patch.zip -DestinationPath .\Sterlings_Home_Lower_Premium_Patch -Force

3. Install:

   powershell -ExecutionPolicy Bypass -File .\Sterlings_Home_Lower_Premium_Patch\Install-Sterlings-Home-Lower-Premium.ps1

4. Test:

   npm run build

The installer creates a timestamped Home.jsx backup automatically.
