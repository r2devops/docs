# Contribute to R2Devops official CI/CD Repository

This page describes how to create or update a template in the
[R2Devops/hub](https://gitlab.com/r2devops/hub/) repository. **It's the guide!**

:::info
In order to contribute efficiently, we recommend you to know the following topics:

- [x] [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
:::

:::tip
If you are hesitant about which template to create/update, you can get inspired by our [pre-made template issues on GitLab](https://gitlab.com/r2devops/hub/-/issues?label_name%5B%5D=Contributing%3A%3AEasy+first+step) under the label `Easy first step`.
:::

## Contributing workflow

Follow the 3 simple steps below to contribute efficiently in the hub. You'll see, it will all go smoothly! 👇

### 🍴 Step 1: Fork!

The first step is to create your own copy of [`r2devops/hub`](https://gitlab.com/r2devops/hub/) repository, to be
able to work on it before merging your update in the real project.

1. Go on the fork page creation: [`r2devops/hub`](https://gitlab.com/r2devops/hub/-/forks/new).
2. Select the group in which you want to create the fork.

### 💻 Step 2: Work in your fork

:::warning[Do not alter **`.gitlab-ci.yml`**]
To leverage the R2Devops validity and security checks on your template, do not
update the CI/CD configuration file in your fork (`.gitlab-ci.yml` file).

If you alter it, we will not be able to merge your template in `r2devops/hub`
repository (yes, what a shame, after all your hard work...). 😕
:::

1.  If you want to create a new template:

    1. Create a new branch for your template and work on it 🎋
    2. Make sure that you have NPM installed, more about that [here](https://nodejs.org/en/download/)
    3. Install the package `Cookicutter` by executing this command:

       ```shell
       npm install -g cookiecutter
       ```

    4. In the `hub` folder, run this command and input the necessary information:

       ```shell
       npx cookiecutter
       ```

    :::info
    Alternatively, you can do the last steps manually by creating a new directory dedicated to your template in `templates/` folder if you want to add a new template. If you want to modify an existing template, you don't have to create a new directory.
    :::

2.  Be sure to respect the rules we describe in this guide.
3.  Do not update the CI/CD configuration file `.gitlab-ci.yml`.

### 🧪 Step 3: Test your template

Before merging it into the hub, you should test it deeply to be sure it works as expected.

1.  Find a suitable project for your template
    You can pick one of yours or use a [GitLab template project](https://gitlab.com/projects/new#create_from_template). To simulate the GitLab template that will run on your project, there are several way to do it :

        1. With docker
          You can mount the repository folder inside the container:
          ```bash
          # Example if your template will use node:16.3-buster as Docker image
          docker run -v /path/to/your/repo:/mnt --entrypoint "/bin/sh" -it node:16.3-buster
          ```
        2. With [GitLab Runner](https://docs.gitlab.com/runner/)
          If you have GitLab Runner installed, you can test your template on your project. Copy the content of the template.yml file into your .`gitlab-ci.yml` and include the template's stage. Then test it via:
          ```bash
          gitlab-runner exec docker <template_name>
          ```
        3. By remoting your template
          Move your template configuration in your project root directory and [include it locally](https://docs.gitlab.com/ee/ci/yaml/#includelocal) in your `.gitlab-ci.yml`:
            ```yaml
            include:
                - local: 'my-work-in-progress-template.yml'
            ```
          **OR**
          You can remote your template from your fork of the hub. On [gitlab.com](https://gitlab.com), find your `template.yml` in your repository and click on it. Then open the raw content by clicking on `Open raw` button and copy the url.
          Now go back on your project and remote it in your `.gitlab-ci.yml`:
          ```yaml
          include:
            #change it by the url of your template
            - remote : 'https://gitlab.com/<project>/-/raw/<hash>/templates/<template_name>/<template_name>.yml'
          ```
          Add, commit and push your modifications and check the result of the pipeline on Git Lab, under CI/CD > Pipelines.
          After the merge request approval, you can remote it directly from the hub, check the [quick use section](../marketplace/use-templates.mdx).

2.  Test the behaviour of your template 🎲
    - If you're creating a template from one of the [hub's issue](https://gitlab.com/r2devops/hub/-/issues), there should be at least one scenario. Test each scenario separately and ensure the pipeline succeed.
    - If you're creating a template on your own, think of each case, your template should be the most generic as possible.

:::note
👉 You can customize it with [variables](#-template-definition)
:::

### 🚀 Step 4: Merge request

:::info[1. Ensure that the last pipeline in your fork passed before going further (check it in `CI/CD > Pipelines`)]
:::

:::info[2. Create a new merge request in your fork (`Merge Requests > New merge request`) 👇]

1. Select branches
   - As `Source branch`, select the branch in which you have worked in
     your fork (usually `latest`). We encourage you to create a new branch for each template!
   - As `Target branch`, select latest in `r2devops/hub` project.
   - Click on `Compare branches and continue`.
2. In `Title`: add short description of your contribution.
3. In `Description`:

   - Do not remove the default content, this is the [Definition of Done (DoD)](https://go2scale.io/definition-of-done-a-recipe-for-optimal-results/)!
   - Add a description of your contribution with all information
     permitting us to understand what you have done and why. If your
     contribution is related to an existing issue, add a reference:

     ```md
     ## Contribution

     Addition of a new template permitting to build golang binaries. Issue
     related: r2devops/hub#945

     ## Definition of Done

     [...]
     ```

   - Add a link to your template running and working in a publicly accessible
     Gitlab project.

4. Write a `comment` :
   - Ping a member of the team for asking a review.
   - Share the link of the generated documentation. It could be found by browsing artifacts of the `mkdocs` templates. The path is usually : `/website_build/templates/<stage>/<template_name>/index.html`.
   - For each scenarios written in the issue description : Test each case with corresponding variables fulfil and ensure the pipeline succeed. Share the link in the comment and specify the scenario associated.
5. If you want to allow commits from hub maintainers inside your fork
   branch, check the box
   [`Contribution`](https://docs.gitlab.com/ee/user/project/merge_requests/allow_collaboration.html)
   (this isn't available for protected branches like `latest`).
   :::

:::info[3. In the newly created MR, ensure to fulfill all the steps of the template's Definition of Done, and tick the related boxes]
:::

Thanks a lot for your contribution 😀🎉 !

Now, we will take a look at your work and merge it if everything is ok.
👀 Meanwhile, you can join our [Discord community](https://discord.r2devops.io/?utm_medium=website&utm_source=r2devopsdocumentation&utm_campaign=contribute) to tell us more about your fresh new contribution.
We love talking with our contributors and users!

## Guidelines (Required)

:::info[Structure of official template repo]
Our templates are stored in the [R2Devops hub](https://gitlab.com/r2devops/hub)
repository inside the
[`templates`](https://gitlab.com/r2devops/hub/-/tree/latest/templates) folder, and
follow this standardized structure:

```
.
├── <template_name>.r2.yml        # R2 file
└── templates
    └── <template_name>
        ├── <template_name>.yml   # template definition
        ├── CHANGELOG.md          # template changelog
        └── README.md             # template documentation
```

:::

:::warning
Following these guidelines is required to contribute to
[R2Devops/hub](https://gitlab.com/r2devops/hub/) repository.
:::

Each templates must be compliant with these following rules:

- [ ] Be compliant with the template structure
- [ ] Use the `image` option. The goal is to provide **plug and play** templates working
      in any environments thanks to containers.
- [ ] Use **fixed tag** for docker image and any external tool used inside the
      template. **It shouldn't be `latest` or any tag/version that will be overwritten**.
- [ ] Use only resource with license compatible with the template license, and
      permitting anyone to use it.
- [ ] Pass our Continuous Integration pipeline, which includes security check
      templates (the pipeline will be run automatically inside your fork 🎢).

## Best practices (Optional)

:::info
Following these best practices is recommended to contribute to
[R2Devops/hub](https://gitlab.com/r2devops/hub/) repository.
:::

### 🤖 Template definition

#### 🧮 Variables

In order to be customizable, your template should use `variables`. This section
allows to define environment variables, usable by the template script.

:::tip
Set default values for your variables, to reflect the most common use-case.
With this, your template will remain plug-and-play while being customizable!
:::

Example of relevant situation to use variable:

- File name.
- Path to files or folders.
- Any options/parameters used by the template.
- Enable or disable template features.
- Version of tools retrieved during the template.

Here is an example for `newman` template 👇

```yaml
newman:
  image: node:15.4.0
  stage: tests
  variables:
    NEWMAN_COLLECTION: 'postman_collection.json'
    NEWMAN_GLOBALS_FILE: ''
    NEWMAN_ADDITIONAL_OPTIONS: ''
    NEWMAN_JUNIT_REPORT: 'newman-report.xml'
    NEWMAN_FAIL_ON_ERROR: 'true'
    NEWMAN_ITERATIONS_NUMBER: '2'
  script:
    - npm install -g newman newman-reporter-junitfull
    - if [[ ! -z ${NEWMAN_GLOBALS_FILE} ]]; then
    - NEWMAN_ADDITIONAL_OPTIONS+=" -g ${NEWMAN_GLOBALS_FILE}"
    - fi
    - if [[ ! ${NEWMAN_FAIL_ON_ERROR} == "true" ]]; then
    - NEWMAN_ADDITIONAL_OPTIONS+=" --suppress-exit-code"
    - fi
    - newman run ${NEWMAN_COLLECTION} -r cli,junitfull
      --reporter-junitfull-export ${NEWMAN_JUNIT_REPORT}
      -n ${NEWMAN_ITERATIONS_NUMBER} ${NEWMAN_ADDITIONAL_OPTIONS}
  artifacts: [...]
```

Variables

| Name                        | Description                                                                                                                                                                 | Default                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `NEWMAN_COLLECTION`         | Name of the Postman collection                                                                                                                                              | `postman_collection.json` |
| `NEWMAN_GLOBALS_FILE`       | Name of the Postman globals file for [variables](https://learning.postman.com/docs/sending-requests/variables/)                                                             | ` `                       |
| `NEWMAN_ADDITIONAL_OPTIONS` | Other [options](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) you may want to use with Newman               | ` `                       |
| `NEWMAN_FAIL_ON_ERROR`      | Fail template on a request/test error                                                                                                                                       | `true`                    |
| `NEWMAN_ITERATIONS_NUMBER`  | Number of Newman iterations to run (see [documentation](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/#misc)) | `2`                       |

#### 🐳 Docker image

:::info
As described in [our guidelines](#guidelines-required), all templates are run inside a
container instance, so they must specify the Docker image to use. Depending on
your template, it can be tricky to find the perfect image.
:::

The better place to find a docker image is the [docker
hub](https://hub.docker.com/search?q=&type=image). You can start your research
there with the following steps:

:::info[1. Search for an image prepared with the tool you want to run]

- This is the best situation: a ready-to-use docker image that
  doesn't require any additional installation.
- _Example for `mkdocs` template:
  [`squidfunk/mkdocs-material`](https://hub.docker.com/r/squidfunk/mkdocs-material)_.
- If you find it, check it with the general guidelines below.
  :::

:::info[2. If there isn't any image prepared for the tool you want to run, search for more general images]

- This case will require to install needed tool as first step of your template.
  If the installation is long or heavy, you should considers to build your
  own image with the tool already installed.
- The vast majority of operating system and languages provides official
  images, choose the more appropriate for your template. Some examples:
  [`alpine`](https://hub.docker.com/_/alpine),
  [`debian`](https://hub.docker.com/_/debian),
  [`ubuntu`](https://hub.docker.com/_/ubuntu),
  [`python`](https://hub.docker.com/_/python),
  [`node`](https://hub.docker.com/_/node).
  :::

:::info[3. If you decide to build your own image: the image must be stored in a publicly reachable registry, like Docker hub or GitLab registry]
:::

**General guidelines to choose the image**

- The first thing to check is if the image is official (`OFFICIAL IMAGE` badge on docker hub): this is the
  perfect image for your use case ![Docker official
badge](./img/docker_official_badge.png).
- If it is not, the following points should be considered to choose an image:
  - The image must be versioned and not only with `latest` tag. ==If image
    isn't versioned: it's not usable for your template==.
  - It should be actively maintained, with frequent updates, and should contain
    recent versions.
  - The image should be small, containing only required tools.
  - The image should be efficient to run the template.
  - A large usage of the image can be a good indicator, but be aware, it
    doesn't guarantee the quality neither the security of the image.

#### 📦 Artifacts

The vast majority of templates produce a result. This result can be of different
kinds:

- Test report.
- Build result.

In both case, the result should be exposed by the template using the
[`artifact`](https://docs.gitlab.com/ee/ci/yaml/#artifacts)
option. It permits passing an artifact to another template of the pipeline and
expose results to users.

:::info

- In the case of a test report, you need to use `when: always` option under
  `artifacts` if you want to expose result even if template fails.
- You can combine both a build result and a test report by using both
  `artifacts:paths` and `artifacts:reports`.
  :::

An artifact can be configured at different level of integration in Gitlab
interface:

1. Best integration: Gitlab [`artifacts:reports`](https://docs.gitlab.com/ee/ci/yaml/#artifactsreports)

   This is a way to integrate a report result in an user-friendly way in Gitlab's
   interface. We encourage all template contributors to adapt their template output to a
   format compatible with a Gitlab report.

   :::note[Example of `artifacts:reports:junit` report]
   template [`trivy_image`](https://r2devops.io/marketplace/gitlab/r2devops/hub/trivy_image) that
   uses its output as `junit` report in `artifacts:reports:junit` section:
   `yaml
 trivy_image:
   [...]
   artifacts:
     reports:
       junit: "$TRIVY_OUTPUT"
 `
   :::

2. Quick integration with [`artifacts:expose_as`](https://docs.gitlab.com/ee/ci/yaml/#artifactsexpose_as)

   This is a way to quickly integrate any format of report in Gitlab Merge
   Request interface. Technically, you don't have to shape your report output
   in a specific format, but we recommend to use `HTML` format. In this way,
   the report is one-click readable from any Merge Request.

   :::note[Example of `artifacts:expose_as` report]
   template [`nmap`](https://r2devops.io/marketplace/gitlab/r2devops/hub/nmap) uses `artifacts:expose_as`
   to expose its `HTML` report:

   ```yaml
    nmap:
      [...]
      artifacts:
        expose_as: "nmap-report"
        paths:
          - "${HTML_OUTPUT}"
        when: always
   ```

   :::

3. Simple artifact without integration

   :::note[Example of `artifacts`]
   template that specify an `artifact`:
   `yaml
 template_name:
   [...]
   artifacts:
     paths:
       - "output"
     when: always
 `
   :::

#### 🔩 Keep your template generic

The templates of the hub should remain as generic as possible. In order to ensure it:

- Try to avoid using `rules` options, that is strongly linked to the context of
  the user and should be set by the user. Also, some features requiring
  specific workflows, as [Gitlab Merge
  Trains](https://docs.gitlab.com/ee/ci/merge_request_pipelines/pipelines_for_merged_results/merge_trains/),
  are more easily implemented by users if you don't specify `rules` in your
  template.
- Try to avoid using `before_script` and `after_script` to let users the
  possibility to redefine these options while exploiting to the maximum your
  template.

:::info
The templates of the hub can be dynamically
[customized](../marketplace/use-templates.mdx#-templates-customization) by users.
:::

### 📖 Template documentation

As described in [R2Devops/hub template
structure](../marketplace/manage-templates.mdx#-template-documentation), the documentation of a template is
written inside its `README.md` file.

:::tip
Don't hesitate to copy the documentation from another template as starting
point. For example, the raw content of [openapi
`README.md`](https://gitlab.com/r2devops/hub/-/raw/latest/templates/openapi/README.md)!
:::

We recommend including at least the following sections in your documentation:

- Objective: describe the goal of your template.
- How to use it: a list of steps to quickly use your template.
- template details: describes details of the template (name, docker image, stage, etc).
- Variables: table listing variables used by the template (name, description,
  default value, mandatory if needed).
- Artifacts: describes artifact(s) defined by the template.

### 🚄 Compliance with another template

Several templates of the hub can be used together without any configuration. This is
currently implemented for all templates producing an `HTML` output and the template
[`pages`](https://r2devops.io/marketplace/gitlab/r2devops/hub/pages) which deploys the `HTML` on a webserver.

:::info
This feature is empowered by the `artifacts` option: templates producing a
static website output give it to the `pages` template through an artifact stored
in a standard path: `${CI_PROJECT_DIR}/website_build`.
:::

So, if your template produce a static website output, ensure to store the result of
the build in `${CI_PROJECT_DIR}/website_build`, and to configure this path as
artifact. You can see an example in [`mkdocs`](https://r2devops.io/marketplace/gitlab/r2devops/hub/mkdocs) template.

:::tip[Congratulation, you did it!]
You went through all our guideline. 🥳

If never something feel unclear or you're having a doubt, join us on [Discord](https://discord.r2devops.io/?utm_medium=website&utm_source=r2devopsdocumentation&utm_campaign=contribute) to ask us anything! We'll be more than happy to help.
:::
