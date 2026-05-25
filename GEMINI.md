# Gemini CLI Project Context: juhonamnam.github.io

This project is the personal website and blog of **Juho Nam (남주호)**, an AI engineer. It is built using the **Jekyll** static site generator and is based on a customized version of the **Minimal Mistakes** theme.

## Project Overview

- **Purpose:** Personal portfolio, blog, and showcase of professional experience/projects.
- **Base URL:** [https://juhonamnam.github.io](https://juhonamnam.github.io)
- **Primary Technologies:**
  - **Jekyll:** Static site generation.
  - **Ruby:** Dependency management via Bundler.
  - **Sass/SCSS:** Custom styling (located in `_sass/custom/`).
  - **Markdown:** Content authoring (posts and pages).
  - **Liquid:** Templating language for Jekyll layouts and includes.

## Building and Running

The project uses standard Jekyll and Bundler commands.

- **Install Dependencies:**
  ```bash
  bundle install
  ```
- **Local Development Server:**
  Starts a local server (usually at `http://localhost:4000`) with live reloading.
  ```bash
  bundle exec jekyll serve
  ```
- **Build Site:**
  Generates the static site into the `_site/` directory.
  ```bash
  bundle exec jekyll build
  ```
- **JavaScript Minification (Optional):**
  Uses `uglify-js` (via Rake) to minify frontend scripts.
  ```bash
  rake js
  ```

## Project Structure

- `_posts/`: Contains blog posts in Markdown format, following the `YYYY-MM-DD-title.md` naming convention.
- `_data/`: YAML files containing structured site data:
  - `navigation.yml`: Main menu links.
  - `about-me/`: Details for the portfolio sections (projects, work experience).
  - `site_info.yml`: General site metadata.
- `_layouts/`: Custom HTML layouts, primarily under `_layouts/blog/`.
- `_includes/`: Reusable HTML components and scripts.
- `_sass/`: SCSS files. Custom overrides are in `_sass/custom/`.
- `assets/`: Static assets such as images (in `images/`), CSS, and JS.
- `blog/` & `about-me/`: Top-level directories for specific site sections.

## Development Conventions

- **Content Authoring:** Blog posts should include YAML front matter specifying the layout, title, categories, and tags.
- **Customization:** Prefer modifying `_data/` YAML files for content updates and `_sass/custom/` for styling changes to keep the core theme files clean.
- **Images:** Organized by post index in `images/` (e.g., `images/1/`, `images/2/`) or by category (e.g., `images/projects/`).
- **Language:** The site's primary locale is `ko-KR` (Korean).
