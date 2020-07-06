import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return <Layout>
    <SEO title="Contact" />
    <section className="contact-page">
      <article className="contact-form">
        <h3>Get In Touch</h3>
        <form>
          <div className="form-group">
            <input type="text" placeholder="name" className="form-control" />
            <input type="email" placeholder="email" className="form-control" />
            <textarea type="text" rows="5" placeholder="message" className="form-control" />
          </div>
          <button type="submit" className="submit-btn btn">Submit here</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
