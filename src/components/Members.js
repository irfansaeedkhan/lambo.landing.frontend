import React from "react";
import "../styles/Members.css";
import MemberCard from "./MemberCard";
const Members = () => {
  const memberData = [
    {
      name: "Riner Chima",
      position: "Chief Executive Officer",
      followers: "7.3k",
      id: 1,
      image: "./member1.webp",
    },
    {
      name: "John micekl",
      position: "Chief Information Officer",
      followers: "12.3k",
      id: 2,
      image: "./member2.webp",
    },
    {
      name: "Tanya minson",
      position: "Chief Technical Officer",
      followers: "11.4k",
      id: 3,
      image: "./member3.webp",
    },
    {
      name: "Noyan chawn",
      position: "Chief Marketing Officer",
      followers: "17.3k",
      id: 4,
      image: "./member4.webp",
    },
    {
      name: "Mobins flip",
      position: "Chief Financial Officer",
      followers: "22.3k",
      id: 5,
      image: "./member5.webp",
    },
    {
      name: "Barbosa mic",
      position: "Chief Risk Officer",
      followers: "12.3k",
      id: 6,
      image: "./member6.webp",
    },
  ];
  return (
    <div className="members-container">
      <div className="members MaxWidth">
        <div className="secondary-heading-white">Core Members</div>
        <p className="section-para">
          A project is strong if its Core Team is strong. You can have the best
          Token in the world but if you don't know how to communicate it to the
          market you will still fail! That's who the Avangers of NFT Lambo Club
          are!
        </p>
        <div className="members-img">
          {memberData.map((data) => {
            return <MemberCard data={data} key={data.id}/>;
          })}
        </div>
      </div>
      <img className="mblur-1" src="./member-blur1.webp" alt=""  loading="lazy" decoding="async" />
      <img className="mblur-2" src="./member-blur2.webp" alt=""  loading="lazy" decoding="async" />
    </div>
  );
};

export default Members;
