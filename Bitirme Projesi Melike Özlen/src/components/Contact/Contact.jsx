import React, { useState } from 'react'
import './Contact.scss'
import { FaRegCalendarTimes } from 'react-icons/fa'
const Contact = () => {
  const [visible, setVisible] = useState(1)
  const getDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    //  visible
    if (visible === 1) {
      setVisible(0)
    }
    else {

      document.querySelector('.getdateSpan_date').innerHTML = `${day}/${month}/${year}`
      setVisible(1)
    }
  }
  return (
    <>

      <div id="contact" className="form ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>İLETİŞİM</h2>
              <ul className="list-unstyled li-space-lg">
                <li className="address">Benimle iletişime geçmek için, mail atabilirsiniz.</li>
                <li><i className="fas fa-map-marker-alt"></i>Altıeylül/BALIKESİR</li>
                <li><i className="fas fa-phone"></i><a className="blue" href="tel:003024630820">+555 555 55 55</a></li>
                <li><i className="fas fa-envelope"></i><a className="blue" href="mailto:office@leno.com">melikeozlen@gmail.com</a></li>
              </ul>
            </div>
          </div>
          {/* zamanı getiren buton */}
          <div className=" d-flex justify-content-center align-items-center gap-4 p-2 m-1" >
            <button className="btn btn-outline-info getdateButton" onClick={() => getDate()} style={{ widht: "3rem" }}>
              <FaRegCalendarTimes />
            </button>
            <span id='date' className="getdateSpan_date" style={{ opacity: `${visible}`, width: "3rem" }}></span>
          </div>
          {/* zamanı getiren buton */}
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <form id="contactForm" data-toggle="validator" data-focus="false">
                <div className="form-group">
                  <input type="text" className="form-control-input" id="cname" required />
                  <label className="label-control" htmlFor="cname">İsim</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control-input" id="cemail" required />
                  <label className="label-control" htmlFor="cemail">Email</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <textarea className="form-control-textarea" id="cmessage" required></textarea>
                  <label className="label-control" htmlFor="cmessage">Mesaj</label>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group checkbox">
                  <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />I have read and agree to Melike's stated conditions in <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">GÖNDER</button>
                </div>
                <div className="form-message">
                  <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Contact