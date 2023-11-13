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
  const [isRented, setIsRented] = useState();

  useEffect(() => {
    handleGetList();
  }, []);

  const handleChangeTitle = (e) => {
    console.log(e);
    setTitle(e.target.value);
  };

  const searchCategory = (e) => {
    setCategory(e.target.value);
  };

  const searchPrice = (e) => {
    setPrice(e.target.value);
  };

  const searchIsRented = () => {
    setIsRented(e.target.value);
  };

  const handleGetList = () => {
    axios
      .get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?name=${title}&category=${category}&price=${price}&isRented=${isRented}`
      )
      // .get(`https://api.mudoapi.tech/menus?name=${name}&type=${type}`)
      .then((res) => {
        console.log(res);
        setListCar(res.data.cars);
        // setCarName(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    // console.log(title);
    handleGetList();
  };

  return (
    <div className="hero">
      <div className="car-searching">
        <h3>Pencarianmu</h3>
        <div className="holder">
          <div className="car-find">
            <h4>Nama Mobil</h4>
            <input
              onChange={handleChangeTitle}
              className="title"
              placeholder="Ketik nama/ Tipe Mobil"
            />
          </div>
          <div className="car-category">
            <h4>Kategori</h4>
            <div className="category">
              <select value={category} onChange={searchCategory}>
                <option className="title" value="">
                  Masukan Kapasitas Mobil
                </option>
                <option value="small">1-4 org</option>
                <option value="medium">4-6 org</option>
                <option value="large">6-8 org</option>
              </select>
            </div>
          </div>
          <div className="car-price">
            <h4>Harga</h4>
            <div className="price">
              <select value={price} onChange={searchPrice}>
                <option className="title" value="">
                  Masukkan Harga Sewa per Hari
                </option>
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
                <option value={true}>Disewa</option>
                <option value={false}>Tidak Disewa</option>
              </select>
            </div>
          </div>
          <div className="btn">
            <button onClick={handleSubmit}>Cari Mobil</button>
          </div>
        </div>
      </div>
      <div className="list-car">
        {title.length ? (
          <h1>Data Kosong</h1>
        ) : (
          listCar.map((data) => (
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
                    <button>pilih mobil</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CarsSearching;
