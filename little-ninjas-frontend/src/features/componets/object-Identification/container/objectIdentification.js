import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import HttpService from "../../../../shared/services/http.service";
import { API_CONFIG } from "../../../../shared/constants/api";
import "../../../../assets/styles/common/responsive.scss";
import "../../../../assets/styles/common/common.scss";
import RightPopupData from "shared/components/popupcomponets/popup";
import NextLevel from "shared/components/popupcomponets/nextLevel";
import WrongPopup from "shared/components/popupcomponets/wrongPopup";
import { questions } from "../ImagesData";
import Home from "../../../../assets/images/Home.png";
import close from "../../../../assets/images/Close.png";
import identifyimg from "../../../../assets/images/identify.png";

const IdentifyObject = () => {
    const [details, setDetails] = useState("");
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] = useState("");
    const [popup, setPopup] = useState({ isPopUp: false, text: "", img: "" });
    const [count, setCount] = useState(0);
    const [wrongpopup, setWrongPopup] = useState({ isPopUp: false, text: "" });
    const [nextlevel, setNextlevel] = useState({ islevel: false, text: "" });

    useEffect(() => {
        getObject();
    }, []);

    const getObject = () => {
        HttpService.get(API_CONFIG.path.identifyObject).then((response) => {
            setDetails(response.data[0]);
            setOptions(response.data[0].options);
        });
    };

    const handleMatchData = (data) => {
        let params = {
            id: details.id,
            options: data,
        };
        HttpService.post(API_CONFIG.path.postObjectData, params).then(
            (response) => {}
        );
        if (count >= 9) {
            setPopup({
                isPopUp: false,
                text: "",
            });

            setTimeout(() => {
                setNextlevel({
                    islevel: true,
                    text: "next level",
                    btntext: "Counting",
                });
            }, 5000);
        }

        if (details.question === data) {
            setCount(count + 1);
            setPopup({
                isPopUp: true,
                text: "Good Job!!",
                img: questions[details.question],
            });
            setTimeout(() => {
                getObject();
                setAnswer("");
                setPopup({
                    isPopUp: false,
                    text: "",
                });
            }, 2000);
            setAnswer(data);
        } else {
            setWrongPopup({
                isPopUp: true,
                text: "",
                img: questions[details.question],
            });
            setAnswer(details.question);
            setTimeout(() => {
                setAnswer("");
                setWrongPopup({
                    isPopUp: false,
                    text: "",
                });
            }, 2000);
        }
    };

    return (
        <>
            <div className="position--absolute mt--30 ml--100">
                <NavLink to="/homepage">
                    <img className=" width--50 " src={Home} />
                </NavLink>
            </div>
            <div className="position--absolute postion-right-40 postion-top--35">
                <NavLink to="/homepage">
                    <img className="width--50 " src={close}></img>
                </NavLink>
            </div>
            <div className="position--absolute postion-right-40 postion-top--35">
                <button className="user-btn  position--absolute  postion-right--60">
                    <p className="uservalue text--capitalize">
                        {sessionStorage.getItem("user")}
                    </p>
                </button>
            </div>
            <div className="module-container bg full-viewport-height overflow--hidden-y flex justify__content--center  align__items--center">
                <div className="flex mt--25  align__items--center flex--column justify__content--between ">
                    <img
                        className="position--relative postion--top-55 width--200 responsive--identify"
                        src={identifyimg}
                    />
                    <div className="text--center line-height--28 font-size--18">
                        What do you see?
                    </div>

                    <div className="flex">
                        <div className=" text--black  height--80 flex justify__content--center align__items--center width--80 b-radius--lg pointer no--border mr--20">
                            <img
                                className="images width--80-per heigt--80-per que-animation"
                                src={questions[details.question]}
                            />
                        </div>
                    </div>
                    <div className="text--center line-height--28 text--black opacity mt--20 mb--20">
                        Select your answer from the options below
                    </div>
                    <div className="flex flex justify__content--start  margin-top">
                        {options.length > 0 &&
                            options.map((optionsdata, i) => (
                                <Fragment key={i}>
                                    {}
                                    <div
                                        key={i}
                                        onClick={() =>
                                            handleMatchData(optionsdata)
                                        }
                                        className="box module-btn-bg-color text--black height--80 flex justify__content--center align__items--center width--80 b-radius--lg pointer margin-left20 margin-top margin-left20 ml--20 animation"
                                    >
                                        <img
                                            className="images width--80-per heigt--80-per hover--effect"
                                            src={questions[options[i]]}
                                            value={optionsdata}
                                        ></img>
                                    </div>
                                </Fragment>
                            ))}
                    </div>
                </div>

                {popup.isPopUp && (
                    <RightPopupData
                        answer={answer}
                        msg={popup.text}
                        img={popup.img}
                        closePopup={() =>
                            setPopup({ isPopUp: false, text: "" })
                        }
                    />
                )}

                {wrongpopup.isPopUp && (
                    <WrongPopup
                        answer={answer}
                        msg={wrongpopup.text}
                        img={wrongpopup.img}
                        closePopup={() =>
                            setPopup({ isPopUp: false, text: "" })
                        }
                    />
                )}

                {nextlevel.islevel && (
                    <NextLevel
                        btntext={nextlevel.btntext}
                        closePopup={() =>
                            setNextlevel({ islevel: false, text: "" })
                        }
                    />
                )}
            </div>
        </>
    );
};
export default withRouter(IdentifyObject);
