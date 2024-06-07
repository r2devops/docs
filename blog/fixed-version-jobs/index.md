---
title: Using CI/CD templates fixed versions in your pipeline
description: A good practice is to use fixed version of CI/CD templates when building your pipeline? Why? Let's check together!
tags: [CI/CD, Pipelines, Templates, Fixed Versions, Semantic Versioning, Best Practices, R2Devops, Production, Risk Management]
date: 2022-05-16
---
<p hidden>#more</p>

# Why should you use a fixed version of a CI/CD template in your pipeline?

What are fixed version? Is it really dangerous to use the Latest version of a CI/CD template? We answer your questions!

## Some insight about version

Following [semantic versioning](https://go2scale.io/conventional-commits-semantic-versioning/), every time an owner applies changes to their CI/CD template, a new version should be released. They are 3 types of changes, each one corresponding to a number: X.Y.Z.

* Z are patches, meaning bug fixes which don’t change the CI/CD template.
* Y are minor modifications, improving the solution, and are backward compatible.
* X are major changes that are NOT backward compatible.

<!-- truncate -->

### How it works in R2Devops?

When a CI/CD template is imported in R2Devops, our crawler looks at the changelog.md file and the new git tags related to this CI/CD template to retrieve all its versions. You can see in a CI/CD template’s documentation the different versions available and choose the one you want for our pipeline. The documentation and the CI/CD template’s code will update with the information linked to the version.

### What do we call Latest version?

As we said, the different versions of a CI/CD template follow the semantic versioning pattern. The Latest version corresponds to the latest changes pushed on a CI/CD template. Every time new changes are applied, either a git tag have been created or not, it still creates a new latest version. 

:::info 
It creates a new latest version, but if the latest changes don’t have a git tag, it will only push changes to the latest version without creating a semantic version!
:::

## The risk of using the Latest version of a CI/CD template in your pipeline

Using a Latest version, every time the CI/CD template will be updated, you’ll get all the improvements in your pipeline. This can be good if the owner or contributor fixed some minor mistakes or patched bugs. But if it was a major improvement, the modifications might break your pipeline! And it can be quite annoying for your project, or worse, dangerous.

### R2Devops good practice

At R2Devops, we encourage you to choose and use a fixed version of every CI/CD template you put in your pipeline as soon as you launch it in production. This way, you ensure that you’ll always get the same behavior! 

:::info 
You can do your tests using the Latest versions, but once you implement it for real, it’s safer to use fixed version (containing number represented by X.Y.Z).
:::
