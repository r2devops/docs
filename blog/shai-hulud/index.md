---
title: "Shai-Hulud 2.0: When npm install Becomes a CI/CD Attack"
description: "Shai-Hulud 2.0 is a massive supply chain attack targeting CI/CD pipelines via malicious npm packages. Learn how to detect it and secure your GitLab & GitHub workflows immediately."
tags: ["CI/CD", "Security", "GitLab", "DevOps", "Supply Chain Security", "Shai-Hulud", "GitHub Actions", "npm", "Malware"]
date: 2025-11-25
image: "/assets/shai-hulud-header.jpg"
schema: |
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Shai-Hulud 2.0: When npm install Becomes a CI/CD Attack",
    "description": "Shai-Hulud 2.0 is a massive supply chain attack targeting CI/CD pipelines via malicious npm packages. Learn how to detect it and secure your GitLab & GitHub workflows immediately.",
    "image": "https://r2devops.io/assets/shai-hulud-header.jpg",
    "datePublished": "2025-11-25",
    "keywords": "CI/CD, Security, GitLab, DevOps, Supply Chain Security, Shai-Hulud, npm",
    "author": {
      "@type": "Organization",
      "name": "R2Devops",
      "url": "https://r2devops.io"
    }
  }
---

# Shai-Hulud 2.0: When `npm install` Becomes a CI/CD Attack


**Between November 21 and 23, 2025**, attackers compromised maintainer accounts to publish trojanized versions of popular npm packages. Unlike typical malware that might run quietly in the background, this variant is aggressively designed to harvest credentials and establish persistence within build environments.

## What is Shai-Hulud 2.0?

### The Attack Vector: `preinstall` Scripts
The malware executes during the `preinstall` phase of `npm install`. This is particularly dangerous because it runs immediately when a developer or a CI runner installs dependencies—often before any tests or security scans have a chance to run.

Once executed, the malware:

1.  **Detects the Environment**: It checks if it is running in a CI environment (looking for variables like `GITHUB_ACTIONS`, `BUILDKITE`, `CIRCLE_SHA1`, etc.) or a local developer machine.
2.  **Exfiltrates Secrets**: It scans for AWS, Azure, and GCP credentials, as well as GitHub tokens and local environment variables.
3.  **Establishes Persistence**: It attempts to create a backdoor workflow (`.github/workflows/discussion.yaml`) that allows attackers to execute arbitrary commands on self-hosted runners simply by opening a GitHub Discussion.

## Why This Matters for CI/CD

This attack is not just stealing data; it is weaponizing the pipeline itself.

### 1. CI-Specific Behavior
The malware behaves differently in CI environments. On local machines, it runs in the background to avoid detection. In CI environments, it runs **synchronously**, ensuring the runner stays active long enough to complete the data exfiltration. This shows a sophisticated understanding of how build agents operate.

### 2. Cross-Victim Exfiltration
Researchers have observed "cross-victim exfiltration," where secrets stolen from one victim are uploaded to public repositories owned by *another* unrelated victim. This obfuscation makes tracing the attack source significantly harder.

### 3. The "Discussion" Backdoor
The introduction of a malicious GitHub workflow (`discussion.yaml`) is a clever persistence mechanism. It turns a standard community feature (Discussions) into a command-and-control channel, specifically targeting self-hosted runners which often have higher privileges or access to internal networks.

## And for GitLab CI/CD Teams?

Even though Shai-Hulud targets npm and GitHub, the lesson is universal: **Attackers go where pipelines download, execute, and publish.**

For GitLab-based organizations, protecting your infrastructure boils down to three critical questions:

*   **What exactly runs in our install jobs?** Are you blindly trusting `npm install`, or do you have controls in place to vet scripts before execution?
*   **Which secrets can each job/runner access?** Are your runners over-privileged? Can a simple install job access production deployment keys?
*   **Can we prove continuously that pipelines remain compliant?** Security isn't a one-time check. It requires continuous monitoring to ensure no unauthorized changes or risky behaviors are introduced.

When those answers are measured continuously, your exposure to the next wave of supply-chain attacks drops sharply.

## Immediate Action Plan

If your projects use npm, assume you are potentially exposed. We recommend the following immediate steps:

### 🔍 Audit Your Dependencies
Check if you are using any of the impacted packages. Key targets included `@postman/tunnel-agent`, `posthog-node`, and various `@zapier` packages.

### 🛑 Clear Caches & Reinstall
If you suspect exposure:

```bash
npm cache clean --force
rm -rf node_modules
# Regenerate package-lock.json to ensure clean versions
rm package-lock.json && npm install
````

### 🔄 Rotate Credentials
If you ran a compromised build, consider all environment variables and secrets exposed.

Revoke and regenerate npm tokens, GitHub PATs, and SSH keys.
Rotate AWS/Azure/GCP credentials used in your pipelines.

### 🛡️ Harden Your Pipelines
- Disable Scripts: Where possible, use npm install --ignore-scripts in CI environments to prevent preinstall execution, or use tools that allowlisting specific scripts.

- Network Segmentation: Restrict outbound network access for your CI runners. They should only be able to talk to trusted domains (e.g., your package registry and source control), not arbitrary attacker-controlled repos.

- Monitor Workflows: Audit your repositories for unexpected workflow files, specifically looking for .github/workflows/discussion.yaml or commits referencing "Shai-Hulud".