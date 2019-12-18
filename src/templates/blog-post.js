import React from "react"
import { Link, graphql } from "gatsby"
import Carousel from '../components/Carousel.js'

import Layout from "../layouts"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    // const siteTitle = this.props.data.site.siteMetadata.title
    var siteTitle = "testTitle"
    const { previous, next } = this.props.pageContext
    var pageType = post.frontmatter.type;
    if (!pageType) {
      pageType = 'blog;'
    }
    var noHeader = false;
    if (pageType === 'blog') {
      noHeader = true;
    }
    var carouselImages = null;
    if (post.frontmatter.carousel) {
      carouselImages = post.frontmatter.carousel.split(',')
    }
    return (
    <Layout noHeader={noHeader} pageType={pageType}>
        <article className={"markdownWrapper"}>
          <header>
            <h2
              style={{
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h2>
            <p
              style={{
                display: `block`,
              }}
            >
              {post.frontmatter.date}
            </p>
            {post.frontmatter.tags ?
              <p
              style={{
                display: `block`,
              }}
            >
              {post.frontmatter.tags}
            </p>
            : null}
             {post.frontmatter.note ?
              <p
              style={{
                display: `block`,
              }}
            >
              {post.frontmatter.note}
            </p>
            : null}
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          {carouselImages ?
            <Carousel images={carouselImages}></Carousel>
            : null
          }
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        type
        tags
        note
        carousel
      }
    }
  }
`