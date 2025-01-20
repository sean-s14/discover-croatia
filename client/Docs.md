# Project Architecture Overview

## Table of Contents

1. [Introduction](#introduction)
2. [Folder Structure](#folder-structure)
3. [Key Files Explained](#key-files-explained)

---

## Introduction

This document provides an overview of the structure and architecture of the project. It is intended to help developers understand the organization of the codebase, the purpose of various components, and how different parts of the application interact.

---

## Folder Structure

├── index.html\
├── public\
├── src\
│ ├── assets\
│ │ └── styles\
│ ├── components\
│ │ ├── common\
│ │ ├── layout\
│ │ └── ui\
│ ├── lib\
│ │ └── utils.ts\
│ ├── pages\
│ │ ├── auth\
│ │ ├── error-page.tsx\
│ │ ├── home-page.tsx\
│ │ └── root-page.tsx\
│ ├── utils\
│ │ └── logging.ts\
│ ├── main.tsx\
│ ├── App.css\
│ ├── App.tsx\
│ ├── Routes.tsx\
│ ├── index.css\
│ └── vite-env.d.ts\

---

## Key Files Explained

### public

For assets which are:

- Never referenced in source code (e.g. `robots.txt`)
- Must retain the exact same file name (without hashing)
- ...or you simply don't want to have to import an asset first just to get its URL

Assets in this directory will be served at root path / during dev, and copied to the root of the dist directory as-is.

The directory defaults to `<root>/public`, but can be configured via the `publicDir` option.

Note that you should always reference public assets using root absolute path - for example, `public/icon.png` should be referenced in source code as `/icon.png`.

[Learn More | Vite Doc Reference](https://vite.dev/guide/assets.html#the-public-directory)

### src

#### assets

> For assets such as images and (sometimes) videos.

##### styles

> Contains constants for consistent styling across the app.

#### components

##### common

> Generic components (buttons, inputs, etc.)

Components in this file will likely be built of the shadcn components in the `ui` folder.

##### layout

> Layout-specific components (headers, footers, etc.)

##### ui

> Contains installed shadcn components.

#### lib

> Contains modules that provide reusable logic across the app. (with the exception of `utils.ts` which was setup by shadcn)

This folder will contains modules such as axios, i18n, redux, etc.

#### pages

#### utils

> Contains pure utility functions.

##### logging.ts

This file contains a class `Log` that provides methods which suppress logs in production.
