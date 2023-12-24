import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Artistic Super Ibex</title>
        <meta property="og:title" content="Artistic Super Ibex" />
      </Helmet>
      <div className="home-header"></div>
      <div className="home-hero">
        <img
          alt="image"
          src="https://i.postimg.cc/4d5Zz877/temp-Image2q-Rwju.jpg"
          className="home-details-image"
        />
        <div className="home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">Welcome to Esau Labs</h1>
            <span className="home-hero-sub-heading">
              Esau Labs is a leading lab and engineering company.
            </span>
            <div className="home-btn-group"></div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container02">
              <span className="home-text sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">Key Features</h2>
              <span className="home-features-sub-heading">
                Discover the powerful features that make Esau Labs website stand
                out from the competition.
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                Heading="Responsive Design"
                SubHeading="Our website is designed to adapt to different screen sizes and devices, ensuring a seamless user experience."
              ></FeatureCard>
              <FeatureCard
                Heading="Advanced Analytics"
                SubHeading="Track and analyze user behavior, website performance, and other key metrics to make data-driven decisions."
              ></FeatureCard>
              <FeatureCard
                Heading="Secure Data Management"
                SubHeading="We prioritize the security of your data, implementing robust measures to protect sensitive information."
              ></FeatureCard>
              <FeatureCard
                Heading="Customizable Templates"
                SubHeading="Choose from a variety of professionally designed templates and customize them to match your brand identity."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container04">
            <span className="home-text03 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">
              Choose the Perfect Plan for Your Lab or Engineering Company
            </h2>
            <span className="home-pricing-sub-heading">
              Explore our pricing options and find the best fit for your needs
            </span>
          </div>
          <div className="home-container05">
            <div className="home-pricing-card">
              <div className="home-container06">
                <span className="home-text06 heading3">Free</span>
                <span className="home-free-plan-description">
                  A basic website package for small labs and engineering
                  companies
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text07">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text10">✔</span>
                  <span className="home-free-plan-features">5 web pages</span>
                </div>
                <div className="home-container10">
                  <span className="home-text11">✔</span>
                  <span className="home-free-plan-features1">
                    Basic design customization
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text12">✔</span>
                  <span className="home-free-plan-features2">
                    Mobile responsive
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text13">✔</span>
                  <span className="home-free-plan-features3">Contact form</span>
                </div>
              </div>
              <button className="home-button button">Continue with Free</button>
            </div>
            <div className="home-pricing-card1">
              <div className="home-container13">
                <span className="home-text14 heading3">BASIC</span>
                <span className="home-basic-plan-description">
                  An enhanced website package for growing labs and engineering
                  companies
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text15">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">15</span>
                <span className="home-text18">/ month</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text19">✔</span>
                  <span className="home-text20">All features of FREE plan</span>
                </div>
                <div className="home-container17">
                  <span className="home-text21">✔</span>
                  <span className="home-basic-plan-features">10 web pages</span>
                </div>
                <div className="home-container18">
                  <span className="home-text22">✔</span>
                  <span className="home-basic-plan-features1">
                    Custom design options
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text23">✔</span>
                  <span className="home-basic-plan-features2">
                    Mobile responsive
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text24">✔</span>
                  <span className="home-basic-plan-features3">
                    Contact form with advanced features
                  </span>
                </div>
              </div>
              <button className="home-button1 button">
                Try the Basic plan
              </button>
            </div>
            <div className="home-pricing-card2">
              <div className="home-container21">
                <span className="home-text25 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="home-pro-plan-description">
                  A premium website package for established labs and engineering
                  companies
                </span>
              </div>
              <div className="home-container22">
                <span className="home-text28">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">30</span>
                <span className="home-text31">/ month</span>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <span className="home-text32">✔</span>
                  <span className="home-text33">
                     All features of BASIC plan
                  </span>
                </div>
                <div className="home-container25">
                  <span className="home-text34">✔</span>
                  <span className="home-pro-plan-features">
                    Unlimited web pages
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-text35">✔</span>
                  <span className="home-pro-plan-features1">
                    Fully customized design
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text36">✔</span>
                  <span className="home-pro-plan-features2">
                    Mobile responsive
                  </span>
                </div>
              </div>
              <button className="home-button2 button">Try the PRO plan</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Explore Our Lab and Engineering Projects
          </h1>
          <span className="home-gallery-sub-heading">
            Take a look at some of our innovative projects and cutting-edge
            technologies.
          </span>
          <div className="home-container28">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1580982333389-cca46f167381?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581094271453-1298de1aa392?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581092802212-36559f37c39d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581089789966-df27db014448?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1583361703488-e3987b862ef1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581094487815-d1df47182343?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581091008169-bd240defc21f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581091013158-5c7184f43b62?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1492107376256-4026437926cd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMzM4NTY3NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Transforming Ideas into Reality
          </h1>
          <span className="home-banner-sub-heading">
            Providing cutting-edge solutions for your lab and engineering needs.
          </span>
          <button className="home-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container29">
              <span className="home-text37 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text40 heading2">Common questions</h2>
              <span className="home-text41">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container30">
              <Question
                Answer="Esau Labs offers a wide range of services including laboratory testing, engineering consulting, and product development."
                Question="What services does Esau Labs offer?"
              ></Question>
              <Question
                Answer="You can contact Esau Labs by phone at (123) 456-7890 or by email at info@esaulabs.com."
                Question="How can I contact Esau Labs?"
              ></Question>
              <Question
                Answer="Yes, Esau Labs works with clients from all around the world."
                Question="Does Esau Labs work with clients outside of the United States?"
              ></Question>
              <Question
                Answer="Yes, Esau Labs has extensive experience in handling large-scale projects and has the necessary resources to successfully complete them."
                Question="Can Esau Labs handle large-scale projects?"
              ></Question>
              <Question
                Answer="Esau Labs specializes in serving industries such as pharmaceuticals, biotechnology, chemical engineering, and materials science."
                Question="What industries does Esau Labs specialize in?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-separator"></div>
          <div className="home-container31">
            <span className="home-text58">
              © 2023 Esau Engineering LLC, All Rights Reserved.
            </span>
            <div className="home-icon-group"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
