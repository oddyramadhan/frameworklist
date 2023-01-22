import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import CardDetail from "../components/cardDetail";

export default function Detail() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // mengambil data dari API
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const results = await axios(
          "https://6389fd1dc5356b25a20e871a.mockapi.io/framework/" + id
        );
        setData(results.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <Layout pageTitle={data?.name}>
      <div className="max-w-5xl h-tampilan mx-auto">
        {error ? (
          <h2 className="font-bold text-xl">Unable to get data</h2>
        ) : loading ? (
          <h2 className="font-bold text-2xl">Loading...</h2>
        ) : (
          <div>
            <p className="p-4 text-2xl font-bold">Framework Information</p>
            <div className="px-6 pb-4">
              <CardDetail data={data} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
