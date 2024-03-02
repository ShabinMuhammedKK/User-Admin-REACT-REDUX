import React, { useEffect, useState } from "react";
import "./DashAdmin.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const DashAdmin = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/admin/listUsers"
        );
        if (response) {
          setUsers(response.data.Users);
        } else {
          console.log("response not found");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [users]);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/admin/deleteUser/${userId}`);
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleEdit = () => {};

  return (
    <>
      <div className="parent-container pc">
        <div className="child-container only-admin">
          <section className="heading h-1">
            <h1>Dashboard</h1>
            <div className="searchBar">
              <input
                className="search"
                type="text"
                name=""
                id=""
                value={searchQuery}
                placeholder="Search by users"
                onChange={handleSearchChange}
              />
              <FaSearch className="btn-search" />
            </div>
          </section>
          <section className="content">
            {users && users.length > 0 ? (
              <div className="user-data-container head">
                <div className="user-data">Name</div>
                <div className="user-data">Email</div>
                <div className="user-data"></div>
                <div className="user-data"></div>
              </div>
            ) : (
              <h4 className="no-found">No users found</h4>
            )}

            <ul>
              {filteredUsers && filteredUsers.length > 0
                ? filteredUsers.map((filteredUser) => (
                    <li key={filteredUser._id}>
                      <div className="user-data-container">
                        <div className="user-data">{filteredUser.name}</div>{" "}
                        <div className="user-data">{filteredUser.email}</div>{" "}
                        <div className="user-data">
                          <button
                            className="btndash btn-b"
                            onClick={() => handleEdit(filteredUser)}
                          >
                            Edit
                          </button>
                        </div>
                        <div className="user-data">
                          <button
                            className="btndash btn-r"
                            onClick={() => handleDelete(filteredUser._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                : users.map((user) => (
                    <li key={user._id}>
                      <div className="user-data-container">
                        <div className="user-data">{user.name}</div>{" "}
                        <div className="user-data">{user.email}</div>{" "}
                        <div className="user-data">
                          <button
                            className="btndash btn-b"
                            onClick={() => handleEdit(user)}
                          >
                            Edit
                          </button>
                        </div>
                        <div className="user-data">
                          <button
                            className="btndash btn-r"
                            onClick={() => handleDelete(user._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default DashAdmin;
