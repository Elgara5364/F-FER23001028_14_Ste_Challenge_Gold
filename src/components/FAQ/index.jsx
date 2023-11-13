import React, { useState } from "react";
import "./style.css";
import dropDown from "../../assets/chevron-down-solid.svg";

function FrequentlyaQuestion() {
  const [frequentlyaq, setFrequentlyaq] = useState([
    "Apa saja syarat yang dibutuhkan?",
    "Berapa hari minimal sewa mobil lepas kunci?",
    "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
    "Apakah Ada biaya antar-jemput?",
    "Bagaimana jika terjadi kecelakaan",
  ]);

  return (
    <div className="faq" id="faq">
      <div className="container">
        <div className="desc">
          <h1>Frequently Asked Question</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="list-faq">
          {frequentlyaq.map((data) => {
            return (
              <div className="faq-desc">
                <h5>{data}</h5>
                <a href="">
                  <img src={dropDown} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FrequentlyaQuestion;
