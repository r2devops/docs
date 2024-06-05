---
title: Why doing CI/CD?
description: Continuous Integration and Continuous Deployment aren’t just 2 keywords to add to your curriculum vitae when you’re looking for a job. They can really improve your development process and help you automate time-consuming tasks! Let’s see why you should include CI/CD in your development workflow.
tags: ["CI/CD", "Development Workflow", "Automation", "Supply chain"]
date: 2022-05-24
---
<p hidden>#more</p>


# Why doing CI/CD?

You are not sure if you should implement a CI/CD pipeline in your development project? We explain to you why indeed you should! Check all the benefits you can pull from [Continuous Integration](https://go2scale.io/continuous-integration-key-step-of-devopss-process/), Delivery and [Deployment](https://go2scale.io/continuous-deployment-in-devops-process-a-must-have/). 👇

## Improve your code quality and processes

First things first: continuous integration, or CI. It’s the process to continuously have faith and control of the lifecycle of your code (I know, it’s quite obvious). 

### Continuous and safe integration of your code

The CI part of your pipeline is where you test your code to ensure its quality and safety. You can do different kinds of tests: static or dynamic! They can all be in the same stage of your pipeline, or you can create 2 stages and realize your static tests before the dynamic ones.

Plus, you can easily add linters, to ensure a certain level of quality in your code, and make sure all your team respects the same standards.

:::info "What is it important to realize tests on your code?"
First, you ensure its quality. Then, you secure it, and finally, you make sure it won’t break the code already in production! 
:::
Obviously, you can do both things by hand, but it will take hours! With the rights jobs in your CI pipeline (for example: [megalinter](https://r2devops.io/_/r2devops-bot/mega_linter), [python test](https://r2devops.io/_/r2devops-bot/python_test), … ), it would be done automatically in a few minutes. ✌️

<!-- truncate -->

### Enhance your process working alone or in team

Of course, testing your code is a behavior you should implement even when working alone. But it’s even more mandatory (if it’s possible) when you are working with other people on the same project!

:::info
Automatically testing your code before asking for a review will help the whole team to save time . It will prevent dozens of round-trips between teammates.
:::
## Deliver and deploy without stress

It’s time to take a look at the steps following the Continuous Integration: the Delivery and Deployment! 

### Deliver your work when it’s ready

The delivery phase comes just before the deployment: all the modifications you needed to do are ready to go, but you don’t want to push them to the main branch right now (you have your reason, I won’t ask you why).

Thanks to your CI/CD pipeline, your tests were done, your documentation is built, the team and client have checked the changes in a staging environment that was destroyed once everyone agreed... It seems like you are ready to deploy!

### Deploy from where ever you want

Your boss calls you and ask you to deploy a Friday at 5pm? Well, it isn’t a problem anymore! Once you’ve passed all the previous steps of your CI/CD pipeline, the deployment become a no-event!

:::info[What do you call a no-event?]
In some companies, the deployment process can be really complicated and a lot of issues might emerge when doing it. Using CI/CD, you already have ensured your new code won’t break the existing solution (because you’ve tested it in a staging environment).

Deploying becomes easy-peasy: you just have to launch your final pipeline by pushing your code in the main branch. A few minutes later, it will be automatically online and running. 🎉
:::

### Build your pipeline in one click

The harder part in CI/CD is actually to build the pipeline. It requires time, a lot of knowledge, and once it’s done you still have to maintain it. 🥵

Lucky you, we’ve created an AI that will analyze your git project and build the best CI/CD pipeline for it! 

The times you spent hours finding the right jobs for your pipeline are over!

:::info
It relies on open source CI/CD jobs maintained by R2Devops’ team and the community members: the [hub](https://r2devops.io/_/hub)!
:::
Want to give it a try? Go to [R2Devops](https://r2devops.io)!
