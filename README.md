[![Netlify Status](https://api.netlify.com/api/v1/badges/0f6d0eb6-63af-41a6-94d1-9f81295c9abb/deploy-status)](https://app.netlify.com/sites/roflmypancakes/deploys)

# RoflMyPancakes Website

## Project foundations
This utilized a starter project for Gridsome that comes with many features out of the box. It utilizes Bootstrap that is well known for powerful styling and layout. Ready to be deployed, automagically imports data to CMS and sets up your /admin page for easy access to edit your content.

It is designed to use Netlify, Forestry and Github which all have very fair free tier to their services, so you wont need to pay for monthly subscriptions and costly hosting fees.

## Deployment

[https://www.roflmypancakes.com/](https://www.roflmypancakes.com/)

### Features

This starter project includes some of the latest powerful technologies.

*   **Gridsome -** Vue.js & GraphQL powered framework genrating static files.
*   **Bootstrap & Bootstrap Vue -** Powerful styling and layout with styled Vue components.
*   **Sass -** Professional grade CSS extension with many features.
*   **Forestry.io -** CMS that uses the Github repo for storage.
*   **Markdown -** Easy and widely used format for writing content.
*   **Netlify forms -** Netlify forms ready to be used after deployment.
*   **Google Analytics -** Just add your tracking ID in the config.
*   **Sitemap generator -** Automatically generates a sitemap.xml file.

### Netlify config

Use the following build config for Netlify

Build command: `gridsome build`

Publish directory: `dist`

#### Manually install just the project (without CMS).

If you haven't already installed Gridsome CLI: `npm install --global @gridsome/cli`

1.  `gridsome create my-gridsome-site https://github.com/LokeCarlsson/gridsome-starter-bootstrap.git`
2.  `cd my-gridsome-site` to open folder
3.  `yarn dev` to start local dev server at `http://localhost:8080`
4.  Happy hacking 🎉🙌
