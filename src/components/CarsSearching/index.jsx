import React, { useEffect, useState } from "react";
import "./style.css";
import Dropdown from "../../assets/chevron-down-solid.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const CarsSearching = () => {
  const [listCar, setListCar] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isRented, setIsRented] = useState("");
  const [isFilter, setisFilter] = useState(false);
  const [slicey, setSlicey] = useState({
    a: 0,
    b: 3,
  });
  const listcarnew = listCar.slice(slicey.a, slicey.b);
  // let modal = document.getElementById("cars-searching");

  useEffect(() => {
    handleGetList(title, category, price, isRented);
  }, []);

  const openModal = () => {
    document.getElementById("myModal").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };

  const handlePrev = (a, b) => {
    setSlicey({
      a: (a -= 3),
      b: (b -= 3),
    });
  };

  const handleNext = (a, b) => {
    setSlicey({
      a: (a += 3),
      b: (b += 3),
    });
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const searchCategory = (e) => {
    setCategory(e.target.value);
  };

  const searchPrice = (e) => {
    setPrice(e.target.value);
  };

  const searchIsRented = (e) => {
    setIsRented(e.target.value);
  };

  const handleSubmit = (e) => {
    if (
      !title.length &&
      !category.length &&
      !price.length &&
      !isRented.length
    ) {
      alert("Form harus diisi!!");
    } else {
      e.preventDefault();
      handleGetList(title, category, price, isRented);
      setisFilter(true);
      closeModal();
    }
    // console.log(title);
  };

  const handleReset = () => {
    setTitle("");
    setCategory("");
    setPrice("");
    setIsRented("");
    handleGetList("", "", "", "");
    setisFilter(false);
    closeModal();
  };

  const handleGetList = (dataTitle, dataCategory, dataPrice, dataIsRented) => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?name=${dataTitle}&category=${dataCategory}&price=${dataPrice}&isRented=${dataIsRented}`
      )
      // .get(`https://api.mudoapi.tech/menus?name=${name}&type=${type}`)
      .then((res) => {
        // console.log(res);
        setListCar(res.data.cars);
        // setCarName(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero">
      <div className="car-searching">
        {/* <h3>Pencarianmu</h3> */}
        <div className="holder">
          <div className="car-find" onClick={openModal}>
            <h4>Nama Mobil</h4>
            <input
              onChange={handleChangeTitle}
              className="title"
              value={title}
              placeholder="Ketik nama/ Tipe Mobil"
            />
          </div>
          <div className="car-category">
            <h4>Kategori</h4>
            <div className="category">
              <select value={category} onChange={searchCategory}>
                <option value="">Masukan Kapasitas Mobil</option>
                <option value="small">1-4 org</option>
                <option value="medium">4-6 org</option>
                <option value="large">6-8 org</option>
              </select>
            </div>
          </div>
          <div className="car-price">
            <h4>Harga</h4>
            <div className="price">
              <select value={price} onChange={searchPrice} onClick={openModal}>
                <option value="">Masukkan Harga Sewa per Hari</option>
                <option value="minPrice=0&maxPrice=400000">
                  &lt; Rp. 400.000
                </option>
                <option value="minPrice=400000&maxPrice=600000">
                  Rp. 400.000 - Rp. 600.000
                </option>
                <option value="minPrice=600000&maxPrice=800000">
                  &gt; Rp. 600.000
                </option>
              </select>
            </div>
          </div>
          <div className="car-status">
            <h4>Status</h4>
            <div className="status">
              <select value={isRented} onChange={searchIsRented}>
                <option value="true">Disewa</option>
                <option value="false">Tidak Disewa</option>
              </select>
            </div>
          </div>
          <div>
            <button
              onClick={isFilter ? handleReset : handleSubmit}
              onClose={closeModal}>
              {isFilter ? "Reset" : "Cari Mobil"}
            </button>
          </div>
        </div>
      </div>
      <div className="list-car">
        {/* ketika datanya habis dan kosong bagaimana agar button di line 195 - 204 tidak naik ke 
        atas?*/}
        {listcarnew.map((data) => (
          <div className="list">
            <img src={data.image} alt="" />
            <div className="desc">
              <h5>{data.name}</h5>
              <h1>{data.price} / hari</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus qui repellendus consequuntur id, suscipit provident
                neque dignissimos nostrum? Culpa, sunt!
              </p>
              <div className="list-btn">
                <Link to={`/cars-details/${data.id}`}>
                  <button>Pilih Mobil</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="pagination" id="pagination">
          <button
            disabled={!slicey.a ? true : false}
            onClick={() => handlePrev(slicey.a, slicey.b)}>
            &lt;
          </button>
          <button
            disabled={!listcarnew.length ? true : false}
            onClick={() => handleNext(slicey.a, slicey.b)}>
            &gt;
          </button>
        </div>
      </div>

      <div id="myModal" className="modal"></div>
    </div>
  );
};

export default CarsSearching;
