# 🍔 CRAV — Premium Burger Restaurant Website

![Website](https://img.shields.io/badge/Website-CRAV-orange?style=for-the-badge)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-success?style=for-the-badge)

**A premium, modern, and visually engaging burger restaurant website featuring bold visuals, responsive layouts, smooth user interactions, and a polished digital dining experience.**

Inspired by the visual experience of [CRAV Burgers](https://www.cravburgers.shop/).

---

## 🌟 Project Overview

**CRAV Website** is a responsive, multi-page restaurant website designed to showcase a modern burger brand with an immersive browsing experience.

The project focuses on modern web design, strong visual presentation, intuitive navigation, and responsive user interfaces.

This repository contains a **static export of the published website**, including HTML, CSS, compiled JavaScript, images, and fonts.

> **Important:** This is a static website export, not the original editable React or Next.js source code.

## ✨ Key Features

- 🍔 **Modern Restaurant UI** — Bold typography, premium imagery, and engaging visual layouts.
- 📱 **Responsive Experience** — Designed for mobile, tablet, and desktop browsing.
- ⚡ **Static Website** — Compiled assets that can be served without a Node.js build process.
- 🎨 **Custom Visual Styling** — Carefully styled pages with a cohesive restaurant aesthetic.
- 🧭 **Multi-Page Navigation** — Dedicated sections for the menu, spices, and contact information.
- 📝 **Contact Form Demo** — A visual contact form interface for demonstration purposes.
- 🌐 **Static Hosting Ready** — Includes Apache URL rewriting configuration for clean routes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS | Styling and responsive layout |
| JavaScript | Compiled client-side functionality |
| Images & Fonts | Visual identity and presentation |
| Python 3 | Local development server |
| Apache `.htaccess` | Clean URL routing |

## 📂 Project Structure

```text
CRAV-Website/
│
├── index.html
├── menu.html
├── spices.html
├── contact.html
│
├── assets/                # Compiled assets and media
│
├── serve.py               # Local Python server
├── START-WINDOWS.bat      # Windows server launcher
├── .htaccess              # Apache URL configuration
│
└── README.md              # Project documentation
```

*The structure above highlights the main project files. Other exported asset directories may also be present.*

## 🚀 Getting Started

### Prerequisites

Make sure **Python 3** is installed on your computer.

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/CRAV-Website.git
```

### 2. Open the Project

```bash
cd CRAV-Website
```

### 3. Start the Development Server

```bash
python serve.py
```

### 4. Open in Your Browser

Visit:

```text
http://localhost:8000
```

**Windows users:** You can also start the website by double-clicking `START-WINDOWS.bat`.

> ⚠️ Do not open `index.html` directly using the `file://` protocol. Website assets use root-relative paths and require a local web server.

## 📄 Website Pages

| Page | URL |
|---|---|
| 🏠 Home | `/` |
| 🍔 Menu | `/menu` |
| 🌶️ Spices | `/spices` |
| 📞 Contact | `/contact` |

## 🌍 Deployment

The CRAV website can be deployed to a static hosting service that supports its asset paths and routing requirements.

### Deployment Steps

1. Extract the website package.
2. Upload the website files to your hosting root directory.
3. Preserve the exported assets and folder structure.
4. Configure clean URL rewriting.
5. Verify that all pages, images, fonts, and scripts load correctly.

For **Apache hosting**, the included `.htaccess` file provides the required clean URL mappings:

```text
/menu     → /menu.html
/spices   → /spices.html
/contact  → /contact.html
```

**Note:** Do not upload `serve.py` or `START-WINDOWS.bat` to public hosting.

For platforms that do not support Apache `.htaccess`, equivalent redirects or rewrite rules must be configured separately.

## ⚠️ Current Limitations

This project is a front-end demonstration.

- The contact form does not send real messages.
- No backend API or database is connected.
- Online payments are not implemented.
- Real customer orders are not processed.
- Original framework source files are not included in this static export.

## 🎯 Project Purpose

This website demonstrates a visually focused restaurant web experience, emphasizing:

- Modern front-end presentation
- Responsive interface design
- Multi-page website organization
- Static deployment workflows
- Restaurant brand storytelling

## 🔗 Website Reference

**Original website:** https://www.cravburgers.shop/

The reference branding and assets have been retained for this recreation. This repository should not be interpreted as an official CRAV Burgers repository unless authorized by the brand owner.

## 👨‍💻 Developer

**Basheer Bilal**

*Web Developer | Front-End Enthusiast | UI/UX Explorer*

Passionate about building modern, visually appealing, responsive websites and creative digital experiences.

⭐ **If you like this project, consider giving the repository a star!**

---

**Made with ❤️ by Basheer Bilal**
