import React, { useState } from "react";
import icon1 from "../components/images/arrow.png";

const FundRaising = () => {
  const [show, setShow] = useState();

  const [state, setState] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [company, setCompany] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");

  const changeWidth = (e) => {
    setState(1);
    console.log(state);
  };

  const showData = () => {
    // console.log(name);
    // console.log(email);
    // console.log(pass);
    // console.log(company);
    // console.log(desc);
    // console.log(url);
    if (show === undefined) {
      setShow(0);
    }
  };
  return (
    <div>
      <div className="mainFundRaisingContainer">
        <div className="headerContainerFundRaising">
          <h1 className="headingFundRaising">pitchBLACK</h1>
        </div>

        <div className="paragraphsFundRaisingConatiner">
          <div>
            <p className="fundRaisingP1">
              Start fundraising for your
              <br /> company today!
            </p>
          </div>
          <div>
            <p className="fundRaisingP2">
              We can help you go from idea to fundable <br />
              company
            </p>
          </div>
        </div>

        <div
          class="mainCardContainerFundRaising"
          style={show == 0 ? { minHeight: "923px" } : null}>
          <div className="infoToGetStart">
            <p className="paragraphInfoToGetStart">
              Enter the information we need to get <br />
              started{" "}
            </p>
            <div>
              {" "}
              <input
                className="inputNameFundRaising"
                type="text"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="line"> </div>
            <div>
              {" "}
              <input
                className="inputEmailToGetStart"
                type="text"
                placeholder="What's your email?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="line"> </div>
            <div>
              <input
                className="inputPasswordToGetStart"
                type="text"
                placeholder="What's password would you like to use?"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="line"> </div>
          </div>
          {(show === 0 || show === 1) && (
            <div className="incorporateCompany">
              <p className="incorporateParagraph">
                Are you looking to incorporate your company
                <br />
                today?
              </p>
              <div className="radioDivIncorporate">
                <input
                  type="radio"
                  value=""
                  name="radioIncorporate"
                  className="inputRadio"
                />
                <label className="labelIncorporate">
                  Yes, let's set up my company.
                </label>
              </div>
              <div className="radioDivIncorporate1">
                <input
                  type="radio"
                  name="radioIncorporate"
                  className="inputRadio"
                  onChange={changeWidth}
                  value=""
                />
                <label className="labelIncorporate">
                  I would like to use an existing company I'd like to use
                  pitchBLACK for.
                </label>
              </div>
            </div>
          )}

          {state === 1 && (
            <div className="yourCompany">
              <p className="yourCompanyParagraph">
                Can you tell us about your company?
              </p>
              <div>
                {" "}
                <input
                  className="inputCompanyName"
                  type="text"
                  placeholder="What is the name of your company?"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="line"> </div>
              <div>
                {" "}
                <input
                  className="inputComapnyDesc"
                  type="text"
                  placeholder="Give us a short description of what your company does."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="line"> </div>

              <p className="companyStateP">
                What state is your company registered in?{" "}
              </p>

              <div className="stateCompanyDiv">
                <input type="text" className="stateCompanyInput" />
              </div>

              <div>
                <input
                  className="inputUrl"
                  type="text"
                  placeholder="What is your company url?"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div className="lineEnd"> </div>

              <div>
                <p className="paragraphQuestionaire">
                  Next you will be taking a questionaire, to determine whether
                  your
                  <br /> company is ready to start fundraising on the pitchBLACK
                  platfrom.
                  <br />
                  The questionaire will take about 15-20 minutes to complete.
                </p>
              </div>
              <div>
                <p className="paragraphAreReady">
                  Are you ready to take the questionaire now?
                </p>
              </div>
              <div className="radioButton">
                <input
                  type="radio"
                  value=""
                  name="radioIncorporate"
                  className="inputRadio"
                />

                <label className="labelIncorporate">Yes, let's do it.</label>
              </div>
              <div>
                <input
                  id="inputID"
                  type="radio"
                  value=""
                  name="radioIncorporate"
                  className="inputRadio"
                />

                <label className="labelIncorporate" id="lableID">
                  No, I'll finish later.
                </label>
              </div>

              <div className="paddingDiv"></div>
            </div>
          )}
          <div className="btnMainContinue">
            <button className="btnContinue" onClick={() => showData()}>
              Continue
            </button>
            <span>
              <img className="icon-img" src={icon1} alt="" />
            </span>
          </div>
        </div>
        <div className="bottomFundRaising"></div>
      </div>
    </div>
  );
};

export default FundRaising;
