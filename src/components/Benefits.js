import React from "react"

const Benefits = () => (
  <div
    style={{
      maxWidth: `90%`,
      //backgroundColor: `#FFE7D5`,
      padding: `10px`,
      marginBottom: `1.45rem`,
      display: "grid",
      textAlign: `center`,
      marginLeft: `auto`,
      marginRight: `auto`,
      gridTemplateAreas: `
          "pic-1 pic-2 pic-3"
          "text-1 text-2 text-3"
          "desc-1 desc-2 desc-3"
          ". action ."
          `,
    }}
  >
    <div
      style={{
        maxWidth: "50%",
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <img src={require("../img/medal.svg")} alt="medal award" />
    </div>
    <div
      style={{
        maxWidth: "50%",
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <img src={require("../img/money.svg")} alt="profit"  />
    </div>
    <div
      style={{
        maxWidth: "50%",
        height: `auto`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <img src={require("../img/24-hours.svg")} alt="24 hours"  />
    </div>
    <h3>Add instant credibility</h3>
    <h3>Attract new customers</h3>
    <h3>Control your brand</h3>
    <p
      style={{
        fontSize: `0.9rem`,
        fontFamily: `Arial, Helvetica, sans-serif`,
      }}
    >
      Over 50% of people won’t trust a business without a website.
      Having a crafted website instantly boosts your credibility as a valuable
      business.
    </p>
    <p
      style={{
        fontSize: `0.9rem`,
        fontFamily: `Arial, Helvetica, sans-serif`,
      }}
    >
      Almost all people research a business online before to making a
      purchase. If you don’t have a website, you have little chance at
      capturing a share of the market.
    </p>
    <p
      style={{
        fontSize: `0.9rem`,
        fontFamily: `Arial, Helvetica, sans-serif`,
      }}
    >
      Having a website shapes the online perception of your business in ways that your
      social media cannot.
    </p>
    
  </div>
)

export default Benefits
