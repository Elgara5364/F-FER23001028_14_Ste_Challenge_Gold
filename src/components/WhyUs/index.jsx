import { useState } from "react";
import "./style.css";
import ThumbsUp from "../../assets/icon/icon_complete.png";
import Clock from "../../assets/icon/icon_24hrs.png";
import Award from "../../assets/icon/icon_professional.png";
import Tag from "../../assets/icon/icon_price.png";

function WhyUs() {
  // const element = <FontAwesomeIcon icon={faEnvelope} />;
  const [whyUs, setWhyUs] = useState([
    {
      icon: ThumbsUp,
      title: "Mobil Lengkap",
      desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      icon: Tag,
      title: "Harga Murah",
      desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      icon: Clock,
      title: "Layanan 24 Jam",
      desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      icon: Award,
      title: "Sopir Profesional",
      desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ]);

  return (
    <div className="why-us" id="why-us">
      <h1>Why Us?</h1>
      <p className="why-us-desc">Mengapa harus pilih Binar Car Rental?</p>
      <div className="desc">
        {whyUs.map((obj) => (
          <div className="card">
            <img src={obj.icon} />
            <h4>{obj.title}</h4>
            <p>{obj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
