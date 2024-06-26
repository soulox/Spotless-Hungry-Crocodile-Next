import React from 'react'

import PropTypes from 'prop-types'

const Contact = (props) => {
  return (
    <>
      <div className="contact-contact20 thq-section-padding">
        <div className="contact-max-width thq-section-max-width">
          <div className="contact-section-title">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact-content">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <p className="contact-text2 thq-body-large">{props.content1}</p>
            </div>
          </div>
          <div className="contact-row">
            <div className="contact-content1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact-contact-info">
                <div className="contact-content2">
                  <h3 className="contact-text3 thq-heading-3">Email</h3>
                  <p className="contact-text4 thq-body-large">
                    {props.content3}
                  </p>
                </div>
                <span className="contact-email thq-body-small">
                  {props.email1}
                </span>
              </div>
            </div>
            <div className="contact-content3">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <div className="contact-contact-info1">
                <div className="contact-content4">
                  <h3 className="contact-text5 thq-heading-3">Phone</h3>
                  <p className="contact-text6 thq-body-large">
                    {props.content4}
                  </p>
                </div>
                <span className="contact-phone thq-body-small">
                  {props.phone1}
                </span>
              </div>
            </div>
            <div className="contact-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact-contact-info2">
                <div className="contact-content6">
                  <h3 className="contact-text7 thq-heading-3">Office</h3>
                  <p className="contact-text8 thq-body-large">
                    {props.content5}
                  </p>
                </div>
                <span className="contact-address thq-body-small">
                  {props.address1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-contact20 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-section-title {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-text2 {
            text-align: center;
          }
          .contact-row {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .contact-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-contact-info {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-content2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-text3 {
            align-self: stretch;
            text-align: center;
          }
          .contact-text4 {
            text-align: center;
          }
          .contact-email {
            text-align: center;
          }
          .contact-content3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-contact-info1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-content4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-text5 {
            align-self: stretch;
            text-align: center;
          }
          .contact-text6 {
            text-align: center;
          }
          .contact-phone {
            text-align: center;
          }
          .contact-content5 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact-contact-info2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .contact-content6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
          }
          .contact-text7 {
            align-self: stretch;
            text-align: center;
          }
          .contact-text8 {
            text-align: center;
          }
          .contact-address {
            text-align: center;
          }
          @media (max-width: 767px) {
            .contact-row {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .contact-row {
              align-items: stretch;
            }
          }
        `}
      </style>
    </>
  )
}

Contact.defaultProps = {
  content5: 'Connect with us today!',
  content3:
    'Fill out the form below or contact us directly via email or phone.',
  heading1: 'Contact Us',
  content4: 'We are here to assist you in recovering your valuable data.',
  content1: 'Have questions or need assistance? Reach out to us!',
  content2:
    'Our team is available 24/7 to help you with your data recovery needs.',
  address1: '123 Main Street, City, Country',
  email1: 'support@datarecovery.com',
  phone1: '+1-800-123-4567',
}

Contact.propTypes = {
  content5: PropTypes.string,
  content3: PropTypes.string,
  heading1: PropTypes.string,
  content4: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  address1: PropTypes.string,
  email1: PropTypes.string,
  phone1: PropTypes.string,
}

export default Contact
