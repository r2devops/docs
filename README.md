# R2Devops documentation

This is the official R2Devops documentation, built with Docusaurus. It serves as a comprehensive guide to using the R2Devops platform, providing detailed instructions on installation, local development, building, and deployment. In addition to the technical documentation, it also features a blog section where you can find articles on a variety of topics related to CI/CD, DevOps, and more. Whether you're a new user or an experienced developer, this documentation is a valuable resource for understanding and making the most of the R2Devops platform.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator and it's using `@docusaurus/preset-classic` theme.

## Documentation section

Everything you need to know about customizing the documentation sections is detailed in the [Docusaurus docs documentation](https://docusaurus.io/docs/docs-introduction)

### Required when creating a new page

1. Found the right folder, every folders is a section inside the documentation
2. Create your page file inside it (The name will be the sub path in the url, if your create `my-page` in the `intro` folder, the url will be `intro/my-page`)
3. You can use two types of file extension, `md` or `mdx`. Only use `mdx` when you need to put react component or html tags inside your markdown file
4. Define the position of the page inside the sidebar with this configuration at the top of your file:
    ```
    ---
    sidebar_position: 3
    ---
    ```
5. Define a h1 title at the top of the file (in markdown it's like that: `# My title`), that will be the main title of your page that will be used as meta-data

## Blog section

Everything you need to know about customizing blog sections is detailed in the [Docusaurus blog documentation](https://docusaurus.io/docs/blog)

### Required when creating a new page

1. If the page is a new `R2Devops release` you need to create a folder inside the [releases folder](./blog/releases/), this folder should have the name of the version. If it's not a `R2Devops release`, create a folder with the technical name of your blog article (The name will be the sub path in the url, if your create `my-folder-blog-page`, the url will be `my-folder-blog-page`)
2. Create your page file inside this folder, the name of the page should always be `index.md` or `index.mdx`
3. You can use two types of file extension, `md` or `mdx`. Only use `mdx` when you need to put react component or html tags inside your markdown file
4. Define the meta-data of the page at the top of your file:
    ```
    ---
    title: My awesome blog post
    description: Found information about all things awesome
    authors: thomas_boni 
    tags: ["Startup Journey", "Founder Experience", "Business Challenges", "Startup Mistakes", "Business Growth"]
    date: 2023-04-14
    ---
    ```
5. The `authors` attribute is defined inside the [authors file](./blog/authors.yml), if you need to create a new author, follow the same syntax than the existing ones
6. Define a h1 title at the top of the file (in markdown it's like that: `# My title`), that will be the main title of your page that will be used as meta-data
7. Blog article previews when visualizing all the blog articles should be manually defined, you just have the put this `<!-- truncate -->` where you want the preview of the blog post to stop

## Local Development

First install the dependencies: 

```
$ npm install
```

Then starts a local development server and opens up a browser window

```
$ npm start
```

