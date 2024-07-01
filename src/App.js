import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QRCodeList from "./QRCodeList";
import CertificatePage from "./CertificatePage";

const certificates = [
  {
    id: "1",
    url: "https://example.com/certificate/1",
    name: "John Doe",
    details: "Certificate of Achievement",
    imageitem: "Certificate_1.png",
  },
  {
    id: "2",
    url: "https://example.com/certificate/2",
    name: "Jane Doe",
    details: "Certificate of Excellence",
    imageitem: "Certificate_2.png",
  },
  {
    id: "3",
    url: "https://example.com/certificate/3",
    name: "Jim Doe",
    details: "Certificate of Participation",
    imageitem: "Certificate_3.png",
  },
  {
    id: "4",
    url: "https://example.com/certificate/4",
    name: "Emily Smith",
    details: "Certificate of Excellence",
    imageitem: "Certificate_4.png",
  },
  {
    id: "5",
    url: "https://example.com/certificate/5",
    name: "Alex Johnson",
    details: "Certificate of Achievement",
    imageitem: "Certificate_5.png",
  },
  {
    id: "6",
    url: "https://example.com/certificate/6",
    name: "Sarah Wilson",
    details: "Certificate of Participation",
    imageitem: "Certificate_6.png",
  },
  {
    id: "7",
    url: "https://example.com/certificate/7",
    name: "Michael Brown",
    details: "Certificate of Excellence",
    imageitem: "Certificate_7.png",
  },
  {
    id: "8",
    url: "https://example.com/certificate/8",
    name: "David Lee",
    details: "Certificate of Achievement",
    imageitem: "Certificate_8.png",
  },
  {
    id: "9",
    url: "https://example.com/certificate/9",
    name: "Jennifer Davis",
    details: "Certificate of Excellence",
    imageitem: "Certificate_9.png",
  },
  {
    id: "10",
    url: "https://example.com/certificate/10",
    name: "Linda Martinez",
    details: "Certificate of Participation",
    imageitem: "Certificate_10.png",
  },
  {
    id: "11",
    url: "https://example.com/certificate/11",
    name: "William Miller",
    details: "Certificate of Excellence",
    imageitem: "Certificate_11.png",
  },
  {
    id: "12",
    url: "https://example.com/certificate/12",
    name: "Susan Wilson",
    details: "Certificate of Achievement",
    imageitem: "Certificate_12.png",
  },
  {
    id: "13",
    url: "https://example.com/certificate/13",
    name: "James Taylor",
    details: "Certificate of Excellence",
    imageitem: "Certificate_13.png",
  },
  {
    id: "14",
    url: "https://example.com/certificate/14",
    name: "Robert Anderson",
    details: "Certificate of Participation",
    imageitem: "Certificate_14.png",
  },
  {
    id: "15",
    url: "https://example.com/certificate/15",
    name: "Patricia Thomas",
    details: "Certificate of Excellence",
    imageitem: "Certificate_15.png",
  },
  {
    id: "16",
    url: "https://example.com/certificate/16",
    name: "Barbara Jackson",
    details: "Certificate of Achievement",
    imageitem: "Certificate_16.png",
  },
  {
    id: "17",
    url: "https://example.com/certificate/17",
    name: "Daniel White",
    details: "Certificate of Excellence",
    imageitem: "Certificate_17.png",
  },
  {
    id: "18",
    url: "https://example.com/certificate/18",
    name: "Elizabeth Harris",
    details: "Certificate of Participation",
    imageitem: "Certificate_18.png",
  },
  {
    id: "19",
    url: "https://example.com/certificate/19",
    name: "Jeffrey Thompson",
    details: "Certificate of Excellence",
    imageitem: "Certificate_19.png",
  },
  {
    id: "20",
    url: "https://example.com/certificate/20",
    name: "Lisa Martin",
    details: "Certificate of Achievement",
    imageitem: "Certificate_20.png",
  },
  {
    id: "21",
    url: "https://example.com/certificate/21",
    name: "Steven Garcia",
    details: "Certificate of Excellence",
    imageitem: "Certificate_21.png",
  },
  {
    id: "22",
    url: "https://example.com/certificate/22",
    name: "Sharon Martinez",
    details: "Certificate of Participation",
    imageitem: "Certificate_22.png",
  },
  {
    id: "23",
    url: "https://example.com/certificate/23",
    name: "Mark Robinson",
    details: "Certificate of Excellence",
    imageitem: "Certificate_23.png",
  },
  {
    id: "24",
    url: "https://example.com/certificate/24",
    name: "Mary Nelson",
    details: "Certificate of Achievement",
    imageitem: "Certificate_24.png",
  },
  {
    id: "25",
    url: "https://example.com/certificate/25",
    name: "Paul Clark",
    details: "Certificate of Excellence",
    imageitem: "Certificate_25.png",
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodeList certificates={certificates} />} />
        <Route
          path="/certificate/:id"
          element={<CertificatePage certificates={certificates} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
