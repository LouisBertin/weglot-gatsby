import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";

const ArticleTemplate = ({ data }) => (
  <Layout>
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {data.strapiPost.title}
            </h1>
            <Img fluid={data.strapiPost.cover.childImageSharp.fluid}/>
            <ReactMarkdown source={data.strapiPost.content} />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiPost(id: { eq: $id }) {
      title
      content
      cover {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
