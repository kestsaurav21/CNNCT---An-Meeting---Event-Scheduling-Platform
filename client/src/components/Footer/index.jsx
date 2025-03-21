import React from 'react'
import { Icon } from "@iconify/react";
import "./index.css"

const socials = [
    "mdi:twitter",
    "mdi:facebook",
    "ri:instagram-fill",
    "mdi:youtube"
]

const Footer = ({ links, text }) => {
  return (
    <div>
        <section className="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <button className="btn-login" >Login</button>
                <button className="primary-button" >Sign up free</button>
            </div>
            <div className="footer-content-right">
                {links?.map((item, index) => {
                    return (
                        <label className="footer-content-right-item" key={index}>
                            <b>{item}</b>
                        </label>
                    )
                })}
            </div>
        </div>
        <div className="footer-links">
            <div className="footer-links-content">
                <h5>{text}</h5>
            </div>
            <div className="footer-links-socials">
                {socials?.map((social, index) => {
                    return (
                        <div className="footer-links-social" key={index}>
                            <Icon icon={social} height={32} width={32} color="#000000" />
                        </div>
                    )
                })}
            </div>
        </div>
        </section>
    </div>
  )
}

export default Footer