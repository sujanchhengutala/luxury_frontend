import React from "react";
import { styled } from "styled-components";

const Quotes = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>WHY LUXYRYWITHLOVE UP?</h3>
        <div className="grid grid-four-column">
          <div className="quotes">
            <h4>WE’RE PICKY ABOUT </h4>
            <h4 className="forP">QUALITY</h4>
            
            <p>
              There’s nothing more annoying than having to return your new gun
              because it wasn’t the real deal. That’s why we run a 25 point
              quality test on all airsoft weapons so you only get the most
              legit.
            </p>
          </div>
          <div className="quotes">
            <h4>ALL YOUR FAVOURITE BRANDS IN ONE SINGLE </h4>
            <h4 className="forP">PLACE</h4>
            <p>
              Let’s be honest. Scrolling through endless websites to find the
              perfect fit takes forever. So we decided to gather all those
              awesome airsoft brands you can’t stop talking about in our
              collections.
            </p>
          </div>
          <div className="quotes">
            <h4>FLASH </h4>
            <h4 className="forP">DELIVERY</h4>
            <p>
              Trust us, we know how daunting waiting for your new airsoft weapon
              to arrive is. Lucky for you, Flash is a full-time employee so your
              goodies arrive ASAP.
            </p>
          </div>
          <div className="quotes">
            
            <h4>WE STAND ON GUARD FOR </h4>
            <h4 className="forP">THEE</h4>
            <p>
              That’s right b’y. Beforehand, we’re airsoft lovers and
              enthusiasts. And as members of the airsoft community, we do the
              impossible to help you find what you need at the best pricing and
              fix any issues with a big smile on our face.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 40rem;
  background-color: ${({ theme }) => theme.colors.footer_bg};
  h3 {
    font-size: 4rem;
    font-weight: 100;
    padding: 2rem 0 2rem 0;
  }
  .quotes {
    height: 30rem;
    text-align: justify;
    padding: 2rem 0 3rem 1rem;
    h4{
        font-size: 2rem;
        font-weight: 100;
        
    }
    .forP{
        padding-bottom: 1rem;
    }
  }
`;

export default Quotes;
