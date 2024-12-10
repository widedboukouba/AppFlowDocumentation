---
title: 💡 Introduction
description: Create a doc page with rich content AppFlow Introduction.
sidebar_position: 1
---



# Installation, Configuration, and Deployment

AppFlow is meant to be installed on your local machine, configured, and finally deployed to a remote environment. This documentation section describes these topics, and clicking on any of the following cards will lead you to the corresponding section:

---

## 1️⃣ Installation
[Go to Installation Section](/docs/Setappdeployment/Installation)

Install AppFlow on your local machine using the command line interface (CLI) or create a Docker image.

```bash
# Clone the front-end repository
git clone https://github.com/your-org/frontend-repo.git
cd frontend-repo

# Install dependencies
npm install

# Run the development server
npm run dev
```
:::tip

**Or run the front-end and back-end with Docker as described in the installation section.**

 :::



## 2️⃣ Configuration
[Go to Configuration Section](/docs/Setappdeployment/Configuration)

Configure the AppFlow server, admin panel, and all the built-in features.

To configure AppFlow, you will need to adjust the settings in the .env file for both the front-end and back-end, such as database connections, API keys, and admin credentials.



## 3️⃣ Deployment
[Go to Deployment Section](/docs/Setappdeployment/Deployment)

Deploy AppFlow to your desired environment, such as Strapi Cloud or other remote environments.

Use Docker to create an image of your app and deploy it to your chosen platform:


```bash

# Build the Docker image
docker build -t appflow .

# Run the Docker container
docker run -p 8080:8080 appflow

```

:::note
You can also **deploy** using continuous integration **(CI)** pipelines for automated deployments.
:::


