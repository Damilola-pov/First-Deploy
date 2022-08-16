import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import img1 from "../public/img1.png";
import clickup from "../public/clickup.png";
import dropbox from "../public/dropbox-blue.png";
import elastic from "../public/Elastic.png";
import slack from "../public/slack.png";
import email from "../public/email.png";
import webdev from "../public/web-dev.png";
import www from "../public/www.png";
import charmmi from "../public/charmmi.png";
import coco from "../public/coco.png";
import abtm from "../public/abtm.png";
import badge from "../public/badge.png";
import lightbulb from "../public/lightbulb.png";
import thinking from "../public/thinking.png";
import handshake from "../public/handshake.png";
import worldmap from "../public/worldmap.png";
import solana from "../public/solana.png";
import ai from "../public/ai.png";
import soulbound from "../public/soulbound.png";
import hermes from "../public/hermes.png";


export default function Index() {
    return <div className="container">

        <div className="header">
            <div className="Image focus">
                <Image src={logo.src} layout='fill' objectFit="contain" />
            </div>
            <ul>
                <li>SERVICES</li>
                <li>WORK</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li id="contact">CONTACT US</li>
            </ul>
        </div>

        <div className="main-box">
            <div className="introduction">
                <div className="motto">
                    Serving Ingenuinty and Originality
                </div>
                <div className="description">
                    Focus is a full-service agency thats been purpose-built to help organizations thrive in an increasingly complex landscape.
                </div>
                <button>Lets Talk</button>
            </div>
            <div className="Image man">
                <Image src={img1.src} layout='fill' objectFit="contain" />
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="curved-bottom">
            <path fill="#fff" fillOpacity="1" d="M0,192L48,213.3C96,235,192,277,288,293.3C384,309,480,299,576,266.7C672,235,768,181,864,138.7C960,96,1056,64,1152,69.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <div className="section">
            <div className="trust">
                <p>Trusted by over +5000 clients accross the globe, including:</p>
            </div>
            <div className="companies">
                <div className="Image clickup">
                    <Image src={clickup.src} layout='fill' objectFit="contain" />
                </div>
                <div className="Image dropbox">
                    <Image src={dropbox.src} layout='fill' objectFit="contain" />
                </div>
                <div className="Image elastic">
                    <Image src={elastic.src} layout='fill' objectFit="contain" />
                </div>
                <div className="Image slack">
                    <Image src={slack.src} layout='fill' objectFit="contain" />
                </div>
            </div>
        </div>

        <div className="services">
            <p>Our Best</p>
            <p className="feature">Features and Services</p>
            <div className="services-list">
                <div className="webdev">
                    <div className="Image icon"><Image src={email.src} layout='fill' objectFit="contain" /></div>
                    <p>Email Marketing</p>
                    <span>Unlock the power of AI-Driven email tool and start delivering conversion driven results.</span>
                    <button>Learn More</button>
                </div>
                <div className="webdev">
                    <div className="Image icon"><Image src={webdev.src} layout='fill' objectFit="contain" /></div>
                    <p>Web Development</p>
                    <span>Let us create beautiful and user-friendly websites.</span>
                    <button id="btn-purple">Learn More</button>
                </div>
                <div className="webdev">
                    <div className="Image icon"><Image src={www.src} layout='fill' objectFit="contain" /></div>
                    <p>Search Engine Optimization</p>
                    <span>Improvement in the quantity of your website’s traffic</span>
                    <button>Learn More</button>
                </div>
            </div>
        </div>


        <div className="works">
            <div className="recent-desc">
                <p id="r-works">Works</p>
                <p>Our most recent projects</p>
            </div>

            <div className="work-list">
                <div className="project">
                    <div className="Image p-image"><Image src={charmmi.src} layout='fill' objectFit="contain" /></div>
                    <p>Charmmi Construct</p>
                    <span>Charmmi Construct is an architectural firm and design studio.</span>
                    <p id="view">VIEW</p>
                </div>
                <div className="project">
                    <div className="Image p-image"><Image src={coco.src} layout='fill' objectFit="contain" /></div>
                    <p>Coco Logo</p>
                    <span>We created a personal brand identity for coco.</span>
                    <p id="view">VIEW</p>
                </div>
                <div className="project">
                    <div className="Image p-image"><Image src={abtm.src} layout='fill' objectFit="contain" /></div>
                    <p>ABTM Branding</p>
                    <span>Above the Moon(ABTM) is a street wear brand.</span>
                    <p id="view">VIEW</p>
                </div>
            </div>
        </div>



        <div className="about">
            <p id="about-desc">About</p>
            <p id="text2">We provide <span style={{color:"#27024F"}}>world-class</span> services</p>
            <div className="about-box">
                <div className="about-text">
                    <p>We’re west coast change-makers, in a complex world. The brands we support are positioned to be purposeful and powerful while also fluid and free-forming.</p>
                    <p> We’re embracers of change. When we drive the change, a brand can connect with its audience, captivate the hearts and minds of customers, and convert cross-channel..</p>
                    <p id="discover">DISCOVER OUR CAPABILITIES</p>
                </div>

                <div className="about-boxes">
                    <div className="boxes-about1">
                        <div className="box1">
                            <div className="Image badge"><Image src={badge.src} layout='fill' objectFit="cover" /></div>
                            <p>Professional and Certified Company</p>
                        </div>
                        <div className="box1">
                            <div className="Image badge"><Image src={thinking.src} layout='fill' objectFit="cover" /></div>
                            <p>Pixel and Perfect Design</p>
                        </div>
                    </div>

                    <div className="boxes-about2">
                        <div className="box1">
                            <div className="Image badge"><Image src={lightbulb.src} layout='fill' objectFit="cover" /></div>
                            <p>Business and Product Concept</p>
                        </div>
                        <div className="box1">
                            <div className="Image badge"><Image src={handshake.src} layout='fill' objectFit="cover" /></div>
                            <p>Good Partnership</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="testimonials">
            <div className="testimonials-head">
                <p id="testimonials-header">Testimonials</p>
                <p>What our Clients Says</p>
            </div>

            <div className="Image testimonials-map">
                <Image src={worldmap.src} layout='fill' objectFit="contain" />
            </div>
        </div>



        <div className="blog">
            <div className="blog-head">
                <p>Blog</p>
                <p className="blog-header">News and Insights</p>
            </div>

            <div className="blog-list">
                <div className="blog-posts">
                    <div className="blog-post1">
                        <p>Solana Ventures Launches $100 Million Fund Focused on Web3 Projects in South Korea</p>
                        <div className="Image solana"><Image src={solana.src} layout='fill' objectFit="contain" /></div>
                    </div>
                    <div className="blog-post2">
                        <p>AI will turn Graphic Design on its head.</p>
                        <div className="Image solana"><Image src={ai.src} layout='fill' objectFit="contain" /></div>
                    </div>
                </div>

                <div className="blog-posts">
                    <div className="blog-post3">
                        <p>What are Soulbound Tokens? Building Blocks for a Web3 Decentralized Society</p>
                        <div className="Image solana"><Image src={soulbound.src} layout='fill' objectFit="contain" /></div>
                    </div>
                    <div className="blog-post4">
                        <p>Superunion designs variable font logo for Hermes as part of Evri-rebrand</p>
                        <div className="Image solana"><Image src={hermes.src} layout='fill' objectFit="contain" /></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}