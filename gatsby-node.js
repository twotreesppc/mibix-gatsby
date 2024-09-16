const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const { data } = await graphql(`
    query {    
        Blogs: allContentfulBlogPost {
            edges {
                node {
                    id
                    slug
                    title
                    category {
                      uid
                    }
                    tags {
                      tag
                      uid
                    }
                }
            }
        }
        Categories : allContentfulCategory {
          edges {
            node {
              uid
              name
              id
            }
          }
        }
        Tags : allContentfulTags {
          edges {
            node {
              id
              uid
              tag
            }
          }
        }
    }
  `)
  const DEFAULT_BLOG_BASE_PATH = '/blog';
  const DEFAULT_BLOG_POSTS_PER_PAGE = 6;

  const basePath = DEFAULT_BLOG_BASE_PATH;
  const blogs = data.Blogs.edges;
  const categories = data.Categories.edges;
  const tags = data.Tags.edges;

  const templatesDir = path.resolve(__dirname, './src/templates');
  const postsPerPage = DEFAULT_BLOG_POSTS_PER_PAGE;

  const numPages = Math.ceil(blogs.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
  createPage({
    path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
    component:  path.resolve(templatesDir, 'BlogListTemplate.js'),
    context: {
      limit: postsPerPage,
      skip: i * postsPerPage,
      numPages,
      currentPage: i + 1,
    },
  })
  })

  tags.forEach((tag) => {
    let blogsWithTag = blogs.filter(
      (blog) => {        
        return blog.node.tags && blog.node.tags.find((item)=>{
          if(item.uid === tag.node.uid)
          {
            return item
          }
        })
      }   
    );

    let tagPath = `${basePath}/${tag.node.uid}`;
    let tnumPages = Math.ceil(blogsWithTag.length / postsPerPage)

    Array.from({ length: tnumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `${tagPath}` : `${tagPath}/${i + 1}`,
        component:  path.resolve(templatesDir, 'BlogTagListTemplate.js'),
        context: {
          uid: tag.node.uid,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages : tnumPages,
          currentPage: i + 1,
        }
      })
    })
  })


  categories.forEach((cat) => {
    let blogsWithCat = blogs.filter(
      (blog) =>
        blog.node.category && blog.node.category.uid === cat.node.uid
    );
    let categoryPath = `${basePath}/${cat.node.uid}`;
    let cnumPages = Math.ceil(blogsWithCat.length / postsPerPage)
    Array.from({ length: cnumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `${categoryPath}` : `${categoryPath}/${i + 1}`,
        component:  path.resolve(templatesDir, 'BlogCategoryListTemplate.js'),
        context: {
          uid: cat.node.uid,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages : cnumPages,
          currentPage: i + 1,
        }
      })
    });    
  });

  



  

  blogs.forEach(({ node }) => {     
    let blogURL = `${node.slug}`;

    createPage({
      path: blogURL,
      component: path.resolve(templatesDir, 'BlogTemplate.js'),
      context: {
        slug: node.slug,
        basePath,
      },
    });
  })
}