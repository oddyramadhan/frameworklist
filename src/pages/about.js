import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout pageTitle="About">
      <div className="max-w-5xl h-tampilan m-auto">
        <div className="hero bg-parrent">
          <div className="hero-content flex-col text-center">
            <h1 className="text-5xl font-bold p-4">Framework App</h1>
            <div className="flex flex-col items-center md:flex-row">
              <img
                alt="Student"
                src="https://yukcoding.id/wp-content/uploads/2021/11/JavaScript-Frameworks.jpg"
                className="md:w-1/2 mb-4 object-cover rounded-2xl border-amber-700 border-2"
              />
              <div className="md:w-1/2 p-4">
                <p className="text-justify">
                  Frameworks are a set of libraries that are used to build web
                  applications. Frameworks are used to make the development
                  process easier and faster. Frameworks are also used to make
                  the code more readable and easier to maintain. This
                  application is made by.
                </p>
                <ul className="text-left py-2">
                  <li>kelompok 4:</li>
                  <li>Lukman Ernandi 21120119130049</li>
                  <li>Haickal Fattih Pratama 21120119140131</li>
                  <li>Peggy Raihannisa Zakiyyahannas 21120119130111</li>
                  <li>Hilmi Ahmad Dhiya`ulhaq 21120119130048</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
