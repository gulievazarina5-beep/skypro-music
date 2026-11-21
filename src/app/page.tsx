import React from "react";
import Nav from "../components/Nav/Nav";
import Centerblock from "../components/Centerblock/Centerblock";
import Sidebar from "../components/Sidebar/Sidebar";
import Bar from "../components/Bar/Bar";
import { data } from "../data";
import "./page.css";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Nav />
          <Centerblock tracks={data} />
          <Sidebar />
        </main>
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}
