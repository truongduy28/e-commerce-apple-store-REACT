import React from "react";
import { Header, Footer } from "../components/Layout";

const AboutPage = () => {
  const certificates = [
    {
      name: "Apple Certified Associate - Mac Integration",
      issuer: "Apple Inc.",
      date: "June 2019",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.      ",
      img: "https://cfsm-center.fr/wp-content/uploads/2020/08/Certification-Final-Cut-Pro-X-Lyon-CFSM-Center-1024x696.png",
    },
    {
      name: "Apple Certified Support Professional 10.14",
      issuer: "Apple Inc.",
      date: "March 2020",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).      ",
    },
    {
      name: "Apple Certified Support Professional 11",
      issuer: "Apple Inc.",
      date: "November 2021",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.     ",
    },
  ];

  return (
    <div className="page-holder">
      <Header />
      <div className="container text-center">
        <h2 className="text-uppercase">Apple Certificates</h2>
        <ul className="w-75 mx-auto">
          {certificates.map((certificate, index) => (
            <li key={index} className="list-unstyled mt-5">
              <strong>{certificate.name}</strong>
              <p className="mb-0">Issuer: {certificate.issuer}</p>
              <p className="mb-0">Date: {certificate.date}</p>
              <p>{certificate.desc}</p>
              {certificate.img && <img src={certificate.img} />}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
