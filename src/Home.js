import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={1245345}
          title="Tanjun Racer Walking Shoes For Men  (Grey)"
          rating={4}
          price={2599}
          image="https://rukminim1.flixcart.com/image/800/960/jve4pe80/shoe/g/e/7/921669-005-7-nike-vast-grey-black-navy-white-original-imafgb2hpphby7dw.jpeg?q=50"
        />

        <Product
          id={1245345}
          title="NG38003PP13J Tees Analog Watch - For Men & Women"
          rating={4}
          price={20}
          image="https://rukminim1.flixcart.com/image/800/960/watch/8/s/v/ng38003pp13j-fastrack-original-imaer5m8gx7aazby.jpeg?q=50"
        />
      </div>
      <div className="home__row">
        <Product
          id={1245345}
          title="POCO M2 Pro (Green and Greener, 64 GB)  (4 GB RAM)"
          rating={4}
          price={10999}
          image="https://rukminim1.flixcart.com/image/416/416/kcauaa80/mobile/c/w/a/poco-m2-pro-mzb9625in-original-imaftga28tsxehve.jpeg?q=70"
        />

        <Product
          id={1245345}
          title="Redmi Note 8 (Moonlight White, 64 GB)  (4 GB RAM)"
          rating={3}
          price={12999}
          image="https://rukminim1.flixcart.com/image/416/416/k5lcvbk0pkrrdj/mobile-refurbished/a/k/t/redmi-note-8-64-d-m1908c3ji-mi-4-original-imafhgz7vvywsfbk.jpeg?q=70"
        />
      </div>
      <div className="home__row">
        <Product
          id={1245345}
          title="OPPO A9 2020 (Vanilla Mint, 128 GB)  (8 GB RAM)"
          rating={4}
          price={13499}
          image="https://rukminim1.flixcart.com/image/416/416/k51cpe80pkrrdj/mobile/g/d/t/oppo-a9-2020-cph1937-original-imafmhwbz8vqgqjp.jpeg?q=70"
        />
        <Product
          id={1245345}
          title="Samsung 80cm (32 inch) HD Ready LED Smart TV  (UA32T4340AKXXL)"
          rating={4}
          price={10999}
          image="https://rukminim1.flixcart.com/image/416/416/kbs9k7k0/television/c/j/3/samsung-ua32t4340akxxl-original-imaft25qdysfsq7k.jpeg?q=70"
        />
      </div>
    </div>
  );
}

export default Home;
