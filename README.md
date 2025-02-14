# **TinaCMS + Next.js + Azure Blob Storage Example**

This repository demonstrates how to integrate [TinaCMS](https://tina.io/) with [Next.js](https://nextjs.org/) while leveraging **Microsoft Azure Blob Storage** for media asset management using [`next-tinacms-azure`](https://github.com/tinacms/tinacms/tree/main/packages/next-tinacms-azure).

## 🚀 Features

- **Next.js + TinaCMS** – A modern stack for headless content editing.
- **Azure Blob Storage** – Store images and media files in Azure instead of TinaCloud.
- **`next-tinacms-azure`** – A custom integration to connect TinaCMS with Azure Storage.
- **Next.js App Router support** – Works seamlessly with the latest Next.js versions.


## 🛠 Getting Started

### 1️⃣ Install Dependencies

We recommend using [`pnpm`](https://pnpm.io/) for efficiency:

```sh
pnpm install
```

### 2️⃣ Configure Environment Variables

Create a `.env` file (or rename `.env.example`) and set the following values:

```sh
# Retrieved from your project at app.tina.io
NEXT_PUBLIC_TINA_CLIENT_ID=your-tina-client-id
TINA_TOKEN=your-tina-token

# This is set by default in CI/CD pipelines (Netlify/Vercel/GitHub)
NEXT_PUBLIC_TINA_BRANCH=your-git-branch

# Azure Blob Storage Configuration
AZURE_STORAGE_CONNECTION_STRING=your-azure-blob-connection-string
AZURE_STORAGE_CONTAINER_NAME=your-container-name
```

### 3️⃣ Run the Development Server

```sh
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to start editing content with TinaCMS.

