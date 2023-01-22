import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/layout";
import Card from "../components/card";
import axios from "axios";
import ButtonLink from "../components/buttonLink";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const settings1 = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    // mengambil data dari API
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const results = await axios(
          "https://6389fd1dc5356b25a20e871a.mockapi.io/framework"
        );
        setData(results.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Layout pageTitle="Home">
      <section className="max-w-5xl h-auto mx-auto overflow-hidden bg-parrent sm:grid sm:grid-cols-2 px-2">
        <div className="p-8 md:p-10 lg:px-18 lg:py-20">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold md:text-3xl">
              Find the best framework for your project
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Framework is a tool that helps you build your project faster and
              more efficiently. It is a collection of libraries and tools that
              help you build your project faster and more efficiently.
            </p>

            <div className="mt-4 md:mt-8">
              <Link to="/frameworks">
                <ButtonLink buttonText={"Explore Frameworks"} />
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://yukcoding.id/wp-content/uploads/2021/11/JavaScript-Frameworks.jpg"
          className="m-auto object-cover rounded-2xl border-amber-700 border-2"
        />
      </section>
      {error ? (
        <h2 className="h-48 max-w-5xl m-auto font-bold text-xl ">
          Unable to get data
        </h2>
      ) : loading ? (
        <h2 className="h-56 max-w-5xl m-auto font-bold text-2xl sm:h-96 md:h-64 lg:h-48">
          Loading...
        </h2>
      ) : (
        <div>
          <div className="px-4 pb-4">
            <div className="flex flex-col items-center max-w-5xl mx-auto text-left px-4">
              <div className="mx-2">
                <h2 className="text-2xl font-bold sm:text-3xl py-4">
                  Favorite Frameworks
                </h2>
              </div>
              <div className="w-full">
                <Slider {...settings1}>
                  {data
                    .filter((item) => item.like > 50)
                    .map((item) => (
                      <div className="p-4" key={item.id}>
                        <Card data={item} />
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
