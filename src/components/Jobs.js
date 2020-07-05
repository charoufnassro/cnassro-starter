import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      edges {
        node {
          id
          company
          date
          position
          desc {
            id
            name
          }
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { edges: jobs },
  } = data
  const [value, setValue] = React.useState(0)

  const { company, position, date, desc } = jobs[value].node
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.node.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && `active-btn`}`}
              >
                {item.node.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            console.log(item.id)
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>{" "}
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>

      <Link to="/about" className="btn center-btn">
        More info
      </Link>
    </section>
  )
}

export default Jobs
