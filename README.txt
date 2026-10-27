CRAV WEBSITE — STATIC EXPORT

This ZIP contains the current published website: HTML, CSS, compiled JavaScript, images and fonts. It is a static export, not an editable React/Next.js source project.

RUN LOCALLY (Python 3 required)
1. Extract the ZIP.
2. Open a terminal inside CRAV-Website.
3. Run: python serve.py
4. Open http://localhost:8000
Windows: you can also double-click START-WINDOWS.bat.
Do not open index.html directly: assets use root-relative paths.

HOSTING
Upload the website folder contents to the root of your static host. Enable clean URLs so /menu serves menu.html, /spices serves spices.html, and /contact serves contact.html. This package includes an Apache .htaccess file for that mapping. Do not upload serve.py or START-WINDOWS.bat to public hosting.

The contact form is a local demo and sends no messages. No payments or real orders are processed. Reference branding and assets are retained from cravburgers.shop as requested.
