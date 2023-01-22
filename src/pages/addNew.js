import axios from "axios";
import React, { useState } from "react";
import { Alert } from "../components/alert";
import ButtonLink from "../components/buttonLink";
import Layout from "../components/layout";

export default function AddNew() {
  const [data, setData] = useState({
    name: "",
    description: "",
    github: "",
    doc: "",
    image: "",
  });

  const changeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("https://6389fd1dc5356b25a20e871a.mockapi.io/framework", data)
      .then((res) => {
        Alert("Success", "Framework has been added", "success");
        setData({
          name: "",
          description: "",
          github: "",
          doc: "",
          image: "",
        });
      })
      .catch((err) => {
        Alert("Error", "Something went wrong", "error");
      });
  };

  return (
    <Layout pageTitle="New Framework">
      <div className="max-w-4xl mx-auto w-4/5 h-tampilan">
        <div className="rounded-lg border-2 p-6 pt-0 m-4 shadow-lg lg:col-span-3 lg:p-6">
          <p className="p-4 pt-0 text-2xl font-bold">Add New Framework</p>
          <form onSubmit={submitData} className="space-y-4">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="w-full input rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Framework Name"
                onChange={changeData}
                value={data.name}
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="textarea w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Description"
                rows="8"
                onChange={changeData}
                value={data.description}
              ></textarea>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="doc">
                  Doc
                </label>
                <input
                  id="doc"
                  type="text"
                  name="doc"
                  className="input w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Link Doc"
                  onChange={changeData}
                  value={data.doc}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="git">
                  Github
                </label>
                <input
                  id="git"
                  type="text"
                  name="github"
                  className="input w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Link Github"
                  onChange={changeData}
                  value={data.github}
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="image">
                Image
              </label>
              <input
                id="image"
                type="text"
                name="image"
                className="input w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Image Link"
                onChange={changeData}
                value={data.image}
              />
            </div>
            <div className="mt-4">
              <button type="submit">
                <ButtonLink buttonText="Add New" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
