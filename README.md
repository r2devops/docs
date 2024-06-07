# R2Devops Documentation

Welcome to the official R2Devops documentation. This resource, built with Docusaurus, serves as a comprehensive guide for using the R2Devops platform. It provides detailed instructions on installation, local development, building, and deployment. In addition to the technical documentation, we also feature a blog section where you can find articles on a variety of topics related to CI/CD, DevOps, and more. This documentation is a valuable resource for both new users and experienced developers looking to understand and maximize the potential of the R2Devops platform.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator, and utilizes the `@docusaurus/preset-classic` theme.

## Documentation Section

This section provides a step-by-step guide on how to create a new documentation page. For more advanced customization options, please refer to the [Docusaurus docs documentation](https://docusaurus.io/docs/docs-introduction).

### Creating a New Documentation Page

Follow these steps to create a new documentation page:

1. **Identify the appropriate folder**: Each folder corresponds to a section within the documentation. Choose the one that best fits your new page.

2. **Create your page file**: Within the chosen folder, create a new file. The filename will form part of the URL. For example, a file named `my-page` in the `intro` folder will result in the URL `intro/my-page`.

3. **Choose the file extension**: Use `md` for standard markdown files. If your content includes React components or HTML tags, use `mdx`.

4. **Set the sidebar position**: To define the page's position in the sidebar, add the following configuration at the top of your file:
    ```markdown
    ---
    sidebar_position: 3
    ---
    ```
   Adjust the number to change the position as needed.

5. **Add a title**: Define a H1 title at the top of the file (in markdown, use `# My title`). This will be the main title of your page and will be used as metadata.

6. **Adding Images**: If your documentation requires images, create a directory named `img` in the same location as your documentation page. Use this directory to store and manage all the necessary images.

## Blog Section

For detailed information on customizing blog sections, refer to the [Docusaurus blog documentation](https://docusaurus.io/docs/blog).

### Creating a New Page

To create a new page, follow these steps:

1. **Determine the type of page**: If the page is a new `R2Devops release`, create a folder within the [releases folder](./blog/releases/). The folder should be named after the version. For other blog articles, create a folder with a descriptive name. The folder name will form part of the URL. For example, a folder named `my-folder-blog-page` will result in the URL `my-folder-blog-page`.

2. **Create the page file**: Within this folder, create a file named `index.md` or `index.mdx`.

3. **Choose the file extension**: Use `md` for standard markdown files. If your content includes React components or HTML tags, use `mdx`.

4. **Define the page metadata**: At the top of your file, include the following metadata:
    ```markdown
    ---
    title: My awesome blog post
    description: Found information about all things awesome
    authors: thomas_boni 
    tags: ["Startup Journey", "Founder Experience", "Business Challenges", "Startup Mistakes", "Business Growth"]
    date: 2023-04-14
    ---
    ```
5. **Specify the author**: The `authors` attribute should match an entry in the [authors file](./blog/authors.yml). If you need to add a new author, follow the existing syntax in the file.

6. **Add a title**: Define a H1 title at the top of the file (in markdown, use `# My title`). This will be the main title of your page and will be used as metadata.

7. **Set the preview point**: To define where the preview of the blog post ends when viewing all blog articles, insert `<!-- truncate -->` at the desired cutoff point.

8. **For Release Notes**: When listing features in a release note, it's important to indicate their availability based on the R2Devops instance (SaaS or Self-managed) and license type (Free, Small Business, Enterprise). To do this, implement a React component after the feature title. Here are some examples:

    | Example: A feature only available with the ENTERPRISE license on a Self-managed instance
    ```mdx
    ## 🔍 Enhanced CI/CD Compliance

    <ReleaseLabels licenses={[2]} selfManagedOnly />
    ```

    | Example: A feature available for all cases
    ```mdx "Example: A feature available for all cases"
    ## 📚 Streamlined Dashboard Documentation & New Certifications Section

    <ReleaseLabels licenses={[ 0, 1, 2 ]} />
    ```


## Local Development

First install the dependencies: 

```
$ npm install
```

Then starts a local development server and opens up a browser window

```
$ npm start
```

