import React, { useEffect, useState } from "react";
import axios from "../axios";
import Navbar from "./Navbar";
import "./Dashboard.css";

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios
            .get("/auth/me", { withCredentials: true })
            .then((res) => {
                // fallback: if 'name' is missing, use email
                setUser({
                    name: res.data.name || res.data.email || "User",
                });
            })
            .catch(() => {
                setUser({ name: "User" }); // fallback
            });
    }, []);

    const handleLogout = async () => {
        await axios.post("/auth/logout", {}, { withCredentials: true });
        window.location.href = "/login";
    };

    return (
        <div>
            <Navbar onLogout={handleLogout} />
            <div className="dashboard-container">
                <h2>Welcome to Dashboard {user?.name}</h2>
            </div>
        </div>
    );
};

export default Dashboard;
