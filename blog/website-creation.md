---
title: Website Creation with Gridsome, Netlify, and Forestry
excerpt: Creating a Static Site as a DevOps Engineer
date: 2021-07-30T21:00:00.000+00:00
author: RoflMyPancakes
image: "/uploads/depositphotos_51819965_xl.jpg"

---
When it comes to making a website I want to have all the bells and whistles with none of the complications of hosting a webserver or CI/CD pipeline or dealing with operational issues like certificate renewals or security.

My search led me to [Gridsome](https://gridsome.org/ "Gridsome") - a Vue.js & GraphQL powered framework for static site generation. There's many starter examples that show how to connect various technologies to get your project started.

This [example](https://github.com/loke-dev/gridsome-starter-bootstrap "Gridsome Starter Bootstrap") uses Forestry and Netlify to make it really easy (and free) to deploy a website. This uses free plans for everything from hosting, CMS, CDN, DNS, to CI/CD, edge functions, SSL/certificates and more.

# **Netlify**

[Netlify ](https://www.netlify.com/pricing/ "Netlify")manages our domains, DNS records, hosts our website, acts as a CDN, and performs CI/CD to build and deploy our website as changes are committed. It also offers edge functions to do things like forward pages to other domains (similar to Rebrandly style shortcuts on a custom domain).

### Setting Up DNS

You can either register a domain through Netlify or change your nameservers over for Netlify to manage them.

In my case I registered roflmypancakes.com through Google Domains and set the nameservers to point to Netlify.

### Copying the Repository & Setting Up CI

Starting with [https://github.com/RoflMyPancakes/roflmypancakes.com](https://github.com/RoflMyPancakes/roflmypancakes.com "RoflMyPancakes.com Github") forked/cloned:

Click **Add new site**

![](/uploads/netifly-new.png)

**Select your source code repository (in my case, github)**

![](/uploads/netifly-github.png)

Grant it access to your repository and set the following:  
**Build command**: `gridsome build`  
**Publish directory**: `dist`

# **Forestry**

Netlify handles taking changes and deploying them as soon as possible based on what it sees in source control (e.g.: Github).

[Forestry ](https://forestry.io/pricing/ "Forestry")provides a CMS (content management system) on top of that source control. It's all based around templates and you can define the inputs through Forestry.

Forestry saves the config and the posts/pages you create, and images you upload, to the repository as commits.

For example, this is going to create blog pages:

![](/uploads/forestry-create.png)

How it does this is based on the **.forestry** folder in the repository. The [blog template is defined here.](https://github.com/RoflMyPancakes/roflmypancakes.com/blob/77136862dc93c1f6fe5bbe4190c1ed94ae1e4b39/.forestry/front_matter/templates/blog-post.yml)

Where blog posts are stored is defined in the sidebar:

![](/uploads/forestry-sidebar.png)

And ultimately that config is saved to the repository [**settings.yml** as defined here.](https://github.com/RoflMyPancakes/roflmypancakes.com/blob/719a361e8abf10c1705f3c6074cc0b174c2cfe7b/.forestry/settings.yml#L12-L18)

# **Result**

As changes are applied in **Forestry**, commits are generated to the repository, and builds are triggered in **Netlify.** These builds are published and the website is updated for all to see.

Both the Forestry and Netlify plans I use are free. A **.com** domain costs about $12/year or $1/month.