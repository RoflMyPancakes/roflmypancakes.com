---
title: Website Creation with Gridsome, Netlify, and Forestry
excerpt: Creating a Static Site as a DevOps Engineer
date: 2022-07-30T21:00:00Z
author: RoflMyPancakes
image: "/uploads/depositphotos_51819965_xl.jpg"
tags:
- blog
- " devops"
- vue
- javascript

---
When it comes to making a website I want to have all the bells and whistles with none of the complications of hosting a webserver or CI/CD pipeline or dealing with operational issues like certificate renewals or security.

My search led me to [Gridsome](https://gridsome.org/ "Gridsome") - a Vue.js & GraphQL powered framework for static site generation. There's many starter examples that show how to connect various technologies to get your project started.

This [example](https://github.com/loke-dev/gridsome-starter-bootstrap "Gridsome Starter Bootstrap") uses Forestry and Netlify to make it really easy (and free) to deploy a website.

# **Netlify**

[Netlify ](https://www.netlify.com/pricing/ "Netlify")manages our domains, DNS records, hosts our website, acts as a CDN, and performs CI/CD to build and deploy our website as changes are committed. It also offers edge functions to do things like forward pages for custom URL shortening.

Netlify handles taking changes and deploying them as soon as possible based on what it sees in source control (e.g.: Github).

### Setting Up DNS

You can either register a domain through Netlify or change your nameservers over for Netlify to manage them.

In my case I registered roflmypancakes.com through Google Domains and set the nameservers to point to Netlify.

### Copying the Repository & Setting Up CI

Starting with [this repository](https://github.com/RoflMyPancakes/roflmypancakes.com) forked/cloned:

Click **Add new site**

![](/uploads/netifly-new.png)

**Select your source code repository (e.g. Github)**

![](/uploads/netifly-github.png)

Grant it access to your repository and set the following:  
**Build command**: `gridsome build`  
**Publish directory**: `dist`

# **Forestry**

[Forestry ](https://forestry.io/pricing/ "Forestry")provides a CMS (content management system) on top of that source control.

Forestry saves its own config and the posts/pages you create, and images you upload, to the repository as commits.

To get started after signing up we can import the same repository as before:

1. Click add site
2. Select "Other" for Gridsome
3. Select your git provider (e.g. Github)
4. Sign in & allow
5. Select your repository and branch

With this repository configured we can create new blog posts:

![](/uploads/forestry-create.png)

Blog pages are an arbitrary definition created by us. It is based on the **.forestry** folder in the repository. The [forestry blog template](https://github.com/RoflMyPancakes/roflmypancakes.com/blob/77136862dc93c1f6fe5bbe4190c1ed94ae1e4b39/.forestry/front_matter/templates/blog-post.yml) is what defines the inputs. The [vue blog post template](https://github.com/RoflMyPancakes/roflmypancakes.com/blob/77136862dc93c1f6fe5bbe4190c1ed94ae1e4b39/src/templates/BlogPost.vue) is what uses those inputs to make a common page layout. Where blog posts are stored (in our case, in the **blog** folder in the repository) is defined in the sidebar:

![](/uploads/forestry-sidebar.png)  
And ultimately that config too is saved to the repository [**settings.yml** as defined here.](https://github.com/RoflMyPancakes/roflmypancakes.com/blob/719a361e8abf10c1705f3c6074cc0b174c2cfe7b/.forestry/settings.yml#L12-L18)

Everything we change is synced back to the repository as commits.

![](/uploads/commits.png)

As I upload images using this CMS to put into this post they are committed to the repository as well, uploaded to the [configured uploads folder](https://github.com/RoflMyPancakes/roflmypancakes.com/blob/719a361e8abf10c1705f3c6074cc0b174c2cfe7b/.forestry/settings.yml#L19).

# **Connecting the Dots**

As changes are applied in **Forestry**, commits are generated to the repository, and builds are triggered in **Netlify.** These builds are published and the website is updated for all to see.

We get:

* CMS without a webserver with an admin page or a database
* CI/CD without servers to maintain
* Certificates through LetsEncrypt automagically
* A static webpage deployment 
* CDN 
* Nginx/webserver features (like forwarding, edge functions, form submissions) without a webserver
* Auto reloading development environment with Gridsome

By just plugging these two services into the same github repository. 

Both the Forestry and Netlify plans I use are free.

A **.com** domain costs about $12/year or $1/month.