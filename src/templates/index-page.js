import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import desk from '../img/desk.jpg'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Benefits from '../components/Benefits'
import ServiceSummary from '../components/Service'
import { Helmet } from 'react-helmet'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Helmet>
    <meta name="keywords" content="web development, webatelier, web atelier, new zealand, christchurch, website, design"/>  
    </Helmet>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${desk})`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            borderRadius: `8px`,
          }}
        >
          Business slow? Need a boost? 
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
            borderRadius: `8px`
          }}
        >
          Get a quality WEBSITE and see the benefits!
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h2 className="title">Why WebAtelier?</h2>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle" style={{fontSize:`18px`}}>
                    <br/>
                      Based in Christchurch, WebAtelier bring quality website development to everyday New Zealand businesses looking to gain customers and beat the competition.
                      <br/>
                      <br/>We can help you boost your new or exsisting business at an affordable price.
                      <br/>
                      <br/> <a href="/contact">Contact us</a> now and we'll send you a free quote.
                      <br/>
                      </h3>
                      
                  </div>
                </div>
                <ServiceSummary></ServiceSummary>  
                <div className="content">
                  <div className="tile">
                    <h2 className="title">Do you need a new website?</h2>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle" style={{fontSize:`18px`}}>
                    <br/>
                    The quality of the website often affects the purchasing decisions and exchange, independent of the sector in which you are based. Your website represents the legitimacy of your business. Without a website, people may question the integrity of your business and end up moving to one of your many competitors.  Having a quality website is the best way to make a great first impression and gives peoples the confidence that they are dealing with a real business. 
                    <br/>
                    <br/>
                    <a href="/about">WebAtelier</a> can design and develop a website that allows your business to gain recognition and successfully compete in today's market. 
                      <br/>
                      <br/>When your business shuts for the day things slow down. Your potential customers have no way of discovering your business, you can’t take calls and are unlikely to reply to their questions. However, a website promotes you business 24 hours a day 7 days a week. It provides valuable information about your business, it introduces your products and services, and it can help answer frequently asked questions. 
                      <br/>
                      <br/>
                      <a href="/about">WebAtelier</a> can craft a website that proudly represents you business all hours of the day, both within New Zealand and abroad. We can tailor it to you and your industry needs, displaying vital information in an aesthetically pleasing way. 
                      <br/>
                      <br/> Websites have become essential part of the business world today. WebAtelier strongly recommends having one crafted if you haven’t done so already. You can grow and improve it over time, but the key is to <a href="/contact">start</a>. 
    
                      </h3>
                      
                  </div>
                </div>
                <Benefits></Benefits>              
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
