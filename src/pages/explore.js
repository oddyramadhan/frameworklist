import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "../components/cardList";
import Layout from "../components/layout";

export default function Explore() {
  const [data, setData] = useState([]);
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
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Layout pageTitle="Explore">
      <div className="max-w-5xl mx-auto h-tampilan">
        {error ? (
          <h2 className="font-bold text-xl">Unable to get data</h2>
        ) : loading ? (
          <h2 className="font-bold text-2xl">Loading...</h2>
        ) : (
          <div>
            <p className="font-bold text-3xl pl-10 m-auto">Framework List</p>
            <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 md:grid-cols-3">
              {data &&
                data.map((item) => (
                  <CardList key={item.id} data={item} button="true" />
                ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
