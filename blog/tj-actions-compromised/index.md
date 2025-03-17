---
title: "Could a Supply Chain Attack Like tj-actions/change-files Hit GitLab CI/CD Pipelines?"
description: "Critical security alert: Learn about the TJ Actions supply chain attack and how to protect your CI/CD pipelines from similar threats."
tags: ["CI/CD", "Security", "GitLab", "DevOps", "Supply Chain Security", "TJ Actions", "GitHub Actions", "CI/CD Security"]
date: 2025-03-19
schema: |
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Could a Supply Chain Attack Like tj-actions/change-files Hit GitLab CI/CD Pipelines?",
    "description": "Critical security alert: Learn about the TJ Actions supply chain attack and how to protect your CI/CD pipelines from similar threats.",
    "datePublished": "2025-03-19",
    "author": {
      "@type": "Organization",
      "name": "R2Devops"
    }
  }
---

# Could the TJ Actions Compromise Happen on GitLab?

## What Happened?

A critical **supply chain attack** has impacted the **GitHub Actions ecosystem**, specifically targeting the widely used [`tj-actions/changed-files`](https://github.com/tj-actions/changed-files) workflow. 
This action, commonly used in **CI/CD pipelines** to detect modified files in pull requests, was compromised, allowing attackers to **steal secrets** and potentially gain control over repositories.

[CVE-2025-30066](https://www.cve.org/CVERecord?id=CVE-2025-30066) has been assigned to this incident.

## How the Attack Worked

The attack followed a **classic software supply chain compromise** strategy:

1️⃣ **Takeover of an Open-Source Repository**  
   The attacker gained unauthorized access by compromising the maintainer's personal access token.

2️⃣ **Injection of Malicious Code**  
   A new version of the action was published with an embedded backdoor, allowing exfiltration of secrets from GitHub runners.

3️⃣ **Stealing CI/CD Secrets & Credentials**  
   Any pipeline using this compromised action unknowingly leaked secrets, potentially exposing API keys, cloud credentials, and private repository tokens.

4️⃣ **Full Repository & Infrastructure Compromise**  
   Attackers could modify source code, deploy backdoors, or gain persistence inside production environments.



## The Impact

- **Secrets Exposure** 🔓  
  Any organization using the affected action could have **leaked sensitive credentials**, putting production environments at risk.  

- **Code Integrity Compromised** 🛑  
  Attackers with access to secrets could **modify repository content**, leading to **code injection or backdoors** in critical applications.  

- **Regulatory & Compliance Violations** ⚠️  
  Leaked secrets and unauthorized changes violate key **security frameworks** such as **ISO 27001, NIS2, and SOC 2**, leading to **audit failures and potential legal consequences**.  

- **Reputation & Financial Damage** 💸  
  Organizations affected by this attack may face **downtime, data breaches, or even customer trust loss**, resulting in **significant financial impact**.

## Immediate Actions for GitHub Users

- **Audit Your CI/CD Pipelines** – Identify and remove any usage of `tj-actions/changed-files`, replacing it with a trusted alternative.
- **Lock Actions Versions** – Avoid using `latest` tags; always specify exact versions to prevent unwanted updates.
- **Limit Secret Exposure** – Use **scoped tokens** and **fine-grained permissions** for GitHub Actions to limit damage in case of compromise.  
- **Enable Dependency Monitoring** – Regularly **scan and audit** third-party actions for security risks.
- **Verify Trusted Sources** – Ensure all dependencies come from reliable and secure repositories.


## Could This Happen on GitLab?  

Yes, and it’s a real risk for any CI/CD platform. This attack exploited **blind trust in third-party dependencies**, highlighting the need for strict validation and security in CI/CD pipelines.

The `tj-actions/changed-files` compromise wasn’t a GitHub-specific issue—it was a **supply chain attack that could happen anywhere**, including **GitLab CI/CD**. 

Any shared **templates, scripts, or dependencies** used across projects could be **manipulated** to expose secrets, inject vulnerabilities, or execute unauthorized code.

### Why GitLab CI/CD Pipelines Are Also at Risk:  
- **Unverified Dependencies** – Like GitHub Actions, GitLab CI/CD relies on external scripts, container images, and templates that can be compromised.  
- **Hardcoded Credentials** – Storing secrets in unprotected GitLab CI/CD variables increases the risk of exposure through unauthorized access or malicious modifications
- **Lack of Version Pinning** – Using **floating tags (e.g., `latest`)** in scripts or images makes pipelines vulnerable to unexpected changes and compromises.
- **Limited Visibility** – Without continuous monitoring, unauthorized pipeline changes or security policy violations might go unnoticed, increasing the risk of supply chain attacks.
- **Excessive Permissions & Privileges** – If user roles and permissions are not carefully managed, unintended modifications to pipelines can occur, creating opportunities for exploitation.

The takeaway? **GitLab CI/CD pipelines need real-time security monitoring and proactive controls** to prevent **supply chain attacks** before they happen.



## How can R2Devops help?

[R2Devops](https://r2devops.io) helps organizations **secure their GitLab CI/CD pipelines** by automating compliance and security checks:


- **Continuous CI/CD Compliance** – Ensure CI/CD pipelines meet security policies with automated checks across **essentials compliance controls**, covering secret detection, untrusted dependencies, hardcoded credentials, outdated templates, and misconfigurations.

- **Stay Secure & Audit-Ready** – Ensure continuous adherence to **ISO 27001, OWASP, and NIS2** with minimal effort, reducing non-compliance penalties and strengthening security posture.



🔄 **Share this with your security teams** to help them anticipate the risks in CI/CD pipelines.


## References 

- [Step Security blog](https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised)
- [Wiz blog](https://www.wiz.io/blog/github-action-tj-actions-changed-files-supply-chain-attack-cve-2025-30066)


