import logo from "./logo.svg";
import "./App.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Routes } from "react-router-dom";

function App() {
  const images = [
    {
      img01:
        "https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/gallery6.jpg",
      img02:
        "https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/gallery7.jpg",
      img03:
        "https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/gallery5.jpg",
    },
    { img01: "", img02: "", img03: "" },
  ];
  return (
    <>
      <div className="nav" style={{ display: "flex" }}>
        <div className="logo" style={{ paddingLeft: "30px" }}>
          <h2>Javelin</h2>
        </div>
        <div
          className="page-routes"
          style={{
            display: "flex",
            paddingLeft: "550px",
            gap: "20px",
            paddingTop: "15px",
            fontSize: "25px",
          }}
        >
          <p>
            <b>Home</b>
          </p>
          <p>
            <b>Gallery</b>
          </p>
          <p>
            <b>Features</b>
          </p>
          <p>
            <b>Review</b>
          </p>
          <p>
            <b>Shop</b>
          </p>
        </div>
        <div
          className="cart"
          style={{ fontSize: "25px", paddingLeft: "500px", paddingTop: "40px" }}
        >
          <MdOutlineShoppingCart />
          <s>1</s>
        </div>
        <div className="buy">
          <button
            style={{
              padding: "22px 40px",
              border: "solid",
              borderRadius: "40px",
              backgroundColor: "purple",
              color: "white",
              marginTop: "30px",
              paddingTop: "10px",
              marginLeft: "50px",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="watch-hero">
        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            paddingLeft: "320px",
          }}
        >
          <div className="desc">
            <p
              style={{
                fontSize: "80px",
                color: "whitesmoke",
                paddingTop: "170px",
              }}
            >
              <b>Lifestyle</b>
            </p>
            <p style={{ fontSize: "80px", color: "whitesmoke" }}>
              <b>
                Smart <span style={{ color: "purple" }}>Watch</span>
              </b>
            </p>
            <p style={{ color: "whitesmoke" }}>
              <b>TECHNOLOGY OF THE FUTURE</b>
            </p>
            <p style={{ color: "whitesmoke" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            </p>
            <p style={{ color: "whitesmoke" }}>
              {" "}
              vitae sodales lectus, non ultrices nisi. In varius.
            </p>
          </div>
          <div
            className="watch-img"
            style={{ paddingLeft: "200px", paddingTop: "120px" }}
          >
            <img
              src="https://app-javeline.netlify.app/static/media/Vector-Smart-Object-copy-3.baee2dc31292d10232cf.png"
              alt="watch"
            ></img>
          </div>
        </div>
      </div>
      <div
        className="About"
        style={{ backgroundColor: "whitesmoke", textAlign: "center" }}
      >
        <p style={{ color: "grey" }}>
          <b>ABOUT OUR WATCHES</b>
        </p>
        <p style={{ fontSize: "30px" }}>
          <b>
            <span style={{ color: "purple" }}>New, Improved</span> Design
          </b>
        </p>
        <p style={{ fontSize: "30px" }}>
          <b>and Performance</b>
        </p>
        <p style={{ color: "grey" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        </p>
        <p style={{ color: "grey" }}>
          odales lectus, non ultrices nisi. In varius, leo non gravida.
        </p>
        <div
          className="images"
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          {images.map((el, id) => {
            return(
            <div key={id}>
              <img
                src={el.img01}
                alt="img1"
                style={{ height: "450px", width: "370px" }}
              ></img>
              <img
                src={el.img02}
                alt="img2"
                style={{ height: "450px", width: "370px" }}
              ></img>
              <img
                src={el.img03}
                alt="img3"
                style={{ height: "450px", width: "370px" }}
              ></img>
            </div>;
          )})}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
