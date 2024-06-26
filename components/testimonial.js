import React from 'react'

import PropTypes from 'prop-types'

const Testimonial = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial-max-width thq-section-max-width">
          <div className="testimonial-container">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <span className="testimonial-text01 thq-body-small">
              {props.content1}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div data-animated="true" className="thq-card testimonial-card">
                  <div className="testimonial-container02">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial-image"
                    />
                    <div className="testimonial-container03">
                      <strong className="thq-body-large">
                        {props.author1Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author1Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text04 thq-body-small">
                    {props.review1}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card1"
                >
                  <div className="testimonial-container04">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial-image1"
                    />
                    <div className="testimonial-container05">
                      <strong className="thq-body-large">
                        {props.author2Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author2Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text07 thq-body-small">
                    {props.review2}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card2"
                >
                  <div className="testimonial-container06">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial-image2"
                    />
                    <div className="testimonial-container07">
                      <strong className="thq-body-large">
                        {props.author3Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author3Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text10 thq-body-small">
                    {props.review3}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial-card3"
                >
                  <div className="testimonial-container08">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial-image3"
                    />
                    <div className="testimonial-container09">
                      <strong className="thq-body-large">
                        {props.author4Name}
                      </strong>
                      <span className="thq-body-small">
                        {props.author4Position}
                      </span>
                    </div>
                  </div>
                  <span className="testimonial-text13 thq-body-small">
                    {props.review4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial-text01 {
            text-align: center;
          }
          .testimonial-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text04 {
            text-align: left;
          }
          .testimonial-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text07 {
            text-align: left;
          }
          .testimonial-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text10 {
            text-align: left;
          }
          .testimonial-container08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial-text13 {
            text-align: left;
          }
          @media (max-width: 991px) {
            .testimonial-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial-container {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial-card {
              width: 100%;
            }
            .testimonial-card1 {
              width: 100%;
            }
            .testimonial-card2 {
              width: 100%;
            }
            .testimonial-card3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial.defaultProps = {
  author2Alt: 'Image of Jane Smith',
  heading1: 'Testimonials',
  review1: '5 stars',
  author3Position: 'Small Business Owner',
  author4Alt: 'image',
  review3: '5 stars',
  author4Src:
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxNTkzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'David Johnson',
  author3Alt: 'Image of David Johnson',
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxNTkzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: 'Jane Smith',
  author1Position: 'CEO, Tech Company X',
  author4Position: 'Position, Company name',
  review4:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author2Src:
    'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxNTkzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Author Name',
  author3Src:
    'https://images.unsplash.com/photo-1522972914414-c55f1201e9d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTQxNTkzNXw&ixlib=rb-4.0.3&q=80&w=1080',
  review2: '5 stars',
  author1Name: 'John Doe',
  content1:
    'I thought I had lost all my important data forever, but thanks to the data recovery service, I was able to retrieve everything. Highly recommended!',
  author2Position: 'Freelance Photographer',
  author1Alt: 'Image of John Doe',
}

Testimonial.propTypes = {
  author2Alt: PropTypes.string,
  heading1: PropTypes.string,
  review1: PropTypes.string,
  author3Position: PropTypes.string,
  author4Alt: PropTypes.string,
  review3: PropTypes.string,
  author4Src: PropTypes.string,
  author3Name: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author2Name: PropTypes.string,
  author1Position: PropTypes.string,
  author4Position: PropTypes.string,
  review4: PropTypes.string,
  author2Src: PropTypes.string,
  author4Name: PropTypes.string,
  author3Src: PropTypes.string,
  review2: PropTypes.string,
  author1Name: PropTypes.string,
  content1: PropTypes.string,
  author2Position: PropTypes.string,
  author1Alt: PropTypes.string,
}

export default Testimonial
