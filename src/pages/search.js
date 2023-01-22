import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/layout";
import CardList from "../components/cardList";

export default function Search() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setTimeout(() => setError(false), 4000);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  //fungsi untuk menampilkan data sesuai dengan inputan
  const searchData = async () => {
    setError(false);
    setLoading(true);

    try {
      const results = await axios(
        "https://6389fd1dc5356b25a20e871a.mockapi.io/framework?search=" + name
      );
      setData(results.data);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
    setLoading(false);
  };

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <Layout pageTitle="Search Framework">
      <div className="max-w-5xl mx-auto w-full h-tampilan">
        <div className="flex flex-col justify-between items-center m-8 mb-0 sm:flex-row">
          <p className="font-bold text-3xl sm:pl-8">Find Framework</p>
          <div class="flex justify-end">
            <div class="relative max-w-lg">
              <input
                className="w-full input rounded-full border-gray-500 border-2 p-4 pr-32 text-sm font-medium"
                type="text"
                placeholder="Laravel"
                onChange={(e) => setName(e.target.value)}
              />

              <button
                className="absolute top-1/2 right-0.5 -translate-y-1/2 rounded-full bg-gray-400 px-5 py-3 text-sm font-medium text-white transition"
                type="submit"
                onClick={searchData}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {error ? (
          <h2 className="font-bold text-xl">Unable to get data</h2>
        ) : loading ? (
          <h2 className="font-bold text-2xl text-center">Loading...</h2>
        ) : (
          <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 md:grid-cols-3">
            {data.length > 0 ? (
              data.map((item) => (
                <CardList key={item.id} data={item} button="true" />
              ))
            ) : (
              <h2 className="font-bold text-xl text-center col-span-3">
                Data not found
              </h2>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
