import React, { useEffect, useState } from "react";
import Axios from "axios";
import Auth from '../middlewares/Auth';

function Users() {
  const [users, setUsers] = useState({ data: [] });
  useEffect(() => {
    async function fetchData() {
      const { data } = await Axios.get("/api/users");
      setUsers(data);
    }
    fetchData();
  }, []);

  const [form, setform] = useState({ first_name: "", job: "", email: "" })
  const [isLoading, setisLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    let body = {
      name: form.first_name,
      job: form.job
    }
    Axios.post("/api/users", body)
      .then((res) => {
        console.log(res.data);
        setform({ first_name: "", job: "", email: "" });
        setUsers({ ...users, data: [...users.data, form] })
      })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        setisLoading(false);
      });
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex justify-around">
      <div className="flex-initial w-1/2">
        {users.data !== [] ? users.data.map((user, index) => (
          <section key={index}>
            <div className="border-solid border-2 border-gray-300 my-2 p-3 rounded">
              <p className="mx-2 "><i className="fas fa-user"></i> &nbsp; {user.first_name}</p>
              <p className="mx-2 "><i className="far fa-envelope"></i> &nbsp; {user.email}</p>
            </div>
          </section>
        )) : 'Loading'}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <input
            type="text"
            name="first_name"
            placeholder="Enter name"
            className="p-2 border border-gray-800 w-64"
            value={form.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="my-5 flex justify-center">
          <input
            type="text"
            name="job"
            placeholder="Enter job"
            className="p-2 border border-gray-800 my-4 w-64"
            onChange={handleChange}
            value={form.job}
          />
        </div>
        <div className="my-5 flex justify-center">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="p-2 border border-gray-800 my-4 w-64"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <button
          className={`w-64 text-white p-2 my-5 ${
            isLoading ? "bg-blue-500" : "bg-blue-700"
            }`}
          disabled={isLoading}
        >
          {isLoading ? "Adding. Please Wait" : "Add Person"}
        </button>
      </form>
    </div>
  );
}

export default Auth(Users);