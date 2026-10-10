import React from "react";

function MemberCard({data}) {
  return (
    <div className="memberCard">
      <div className="memberImg">
        <img
          src={data.image}
          alt={data.name}
          width={387}
          height={448}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="memberDetails">
        <div className="memberContent">
          <h4>{data.name}</h4>
          <h5>{data.position}</h5>
          <div className="followers">
            <img
              src="./instagram.webp"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
            />
            <h6>{data.followers} followers</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
