import React from 'react'
import './index.css';


const Integration = ({ integrations }) => {
  return (
    <section className="link-apps-section">
          <div className="link-apps-section-title">
            <h2>All Link Apps and Integrations</h2>
          </div>
          <div className="link-apps-section-content">
            {
                integrations?.map((app) => {
                  return (
                    <div className="link-app-card" key={app.id}>
                      <div className="link-app-card-image">
                        <img src={app.url} alt={app.name} />
                      </div>
                      <div className="link-app-card-content">
                        <h3>{app.name}</h3>
                        <p>{app.description}</p>
                      </div>
                    </div>
                  )
                })
            }
          </div>
        </section>
  )
}

export default Integration