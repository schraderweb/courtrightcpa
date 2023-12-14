# Eleventy Project

## Introduction

This guide will walk you through setting up and starting an Eleventy project. Eleventy is a simple static site generator that allows you to build static websites using various templating languages.

## Prerequisites

Before starting with Eleventy, make sure you have the following installed:

- Node.js: Eleventy requires Node.js to be installed on your machine. You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)

## Getting Started

1. Create a new directory for your Eleventy project.
2. Open a terminal or command prompt and navigate to the project directory.

## Project Initialization

1. Initialize a new Node.js project by running the following command in your project directory:

`npm install`

2. Install Eleventy as a dev dependency by running the following command:

`npm install --save-dev @11ty/eleventy`

## Building and Running the Project

Eleventy provides npm scripts that make it easy to build and run your project.

To build your project, run the following command:

`npm run build`

To start a local development server and watch for changes, run the following command:

`npm start`

Eleventy will compile your templates and generate the output files in the specified output directory (default: \_site).
use this folder for your server

Congratulations! You've set up an Eleventy project. You can now start creating your templates and content.

## Structure of the app

\Src->
\includes

- \layouts

  -base.layout # this is basic layout which your index.html is using

- footer.html # this is your seperated footer include

- header.html # this is your seperated header file nav in there

index.html # this file this main content file basic this the part of where your content is this part between header and footer

if you want to create more files just copy this index file and change stuff in the new file.

make sure in first line you inlude the base.html just like index.html

For more information and advanced usage of Eleventy, refer to the official Eleventy documentation: https://www.11ty.dev/docs/
