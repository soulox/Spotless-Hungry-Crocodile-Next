import React from 'react'

import PropTypes from 'prop-types'

const Steps = (props) => {
  return (
    <>
      <div className="steps-container thq-section-padding">
        <div className="steps-max-width thq-section-max-width">
          <div className="steps-container1 thq-grid-2">
            <div className="steps-section-header">
              <h2 className="thq-heading-2">
                Discover the Power of Our Products
              </h2>
              <p className="thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <div className="steps-actions">
                <button className="thq-button-animated thq-button-filled steps-button">
                  <span className="thq-body-small">Main action</span>
                </button>
              </div>
            </div>
            <div className="steps-container2">
              <div className="steps-container3 thq-card">
                <h2 className="thq-heading-2">{props.step1Title}</h2>
                <span className="steps-text04 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps-text05 thq-heading-3">01</label>
              </div>
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <span className="steps-text07 thq-body-small">
                  {props.step2Description}
                </span>
                <label className="steps-text08 thq-heading-3">02</label>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="steps-text10 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps-text11 thq-heading-3">03</label>
              </div>
              <div className="steps-container6 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="steps-text13 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps-text14 thq-heading-3">04</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps-container1 {
            align-items: start;
          }
          .steps-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .steps-container2 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps-container3 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text04 {
            text-align: center;
          }
          .steps-text05 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text07 {
            text-align: center;
          }
          .steps-text08 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text10 {
            text-align: center;
          }
          .steps-text11 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text13 {
            text-align: center;
          }
          .steps-text14 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .steps-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps-actions {
              width: 100%;
              align-self: flex-start;
            }
            .steps-container3 {
              width: 100%;
            }
            .steps-container4 {
              width: 100%;
            }
            .steps-container5 {
              width: 100%;
            }
            .steps-container6 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .steps-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps.defaultProps = {
  step4Title: 'Data Retrieval',
  step2Description:
    'Our experts will assess the extent of data loss and provide you with a detailed evaluation.',
  step2Title: 'Assessment',
  step1Title: 'Contact Us',
  step4Description:
    'Upon successful recovery, we will securely deliver your recovered data to you.',
  step1Description:
    'Reach out to our team via phone or email to discuss your data recovery needs.',
  step3Description:
    'Once approved, we will initiate the data recovery process using advanced techniques and tools.',
  step3Title: 'Recovery Process',
}

Steps.propTypes = {
  step4Title: PropTypes.string,
  step2Description: PropTypes.string,
  step2Title: PropTypes.string,
  step1Title: PropTypes.string,
  step4Description: PropTypes.string,
  step1Description: PropTypes.string,
  step3Description: PropTypes.string,
  step3Title: PropTypes.string,
}

export default Steps
