import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import './Techology.scss'
const Techonology = () => {
    return (
        <div id='techology' className='d-flex align-items-center flex-column' style={{ paddingTop: "4rem" }} >
            <h4 className='mt-4 pt-4 text-dark'>What I'm using?</h4>
            <div className="row techonology-con d-flex justify-content-around mx-auto w-75" style={{ minHeight: "80vh", gap: "4rem" }}>
                <div className="item text-danger col-md-3">
                    <AiFillHtml5 />
                    <h4 className='text-dark'>HTML</h4>
                    <p className='text-dark' style={{ fontSize: "1rem" }}>HTML, web tasarımcılarına sayfalar ve uygulamalar için yapı profilleri, bağlantılar, blok alıntılar, paragraflar ve başlıklar oluşturmalarında yardımcıdır. </p>
                </div>
                <div className="item text-primary col-md-3">
                    <DiCss3 />
                    <h4 className='text-dark'>CSS</h4>
                    <p className='text-dark' style={{ fontSize: "1rem" }}>Cascading Style Sheets, HTML'e ek olarak metin ve format biçimlendirme alanında fazladan olanaklar sunan bir işaretleme dilidir.</p>
                </div>
                <div className="item text-warning col-md-3">
                    <IoLogoJavascript />
                    <h4 className='text-dark'>JAVASCRIPT</h4>
                    <p className='text-dark' style={{ fontSize: "1rem" }}>JavaScript, HTML ve CSS ile birlikte World Wide Web'in temel teknolojilerinden biri olan programlama dilidir. Web sitelerinin %97'sinden fazlası, web sayfası hareketleri için istemci tarafında JavaScript kullanırlar.</p>

                </div>
            </div>

        </div>
    )
}

export default Techonology