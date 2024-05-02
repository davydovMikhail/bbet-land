import { useState, useEffect } from "react";
import copy from 'copy-to-clipboard';
import Timeout from 'await-timeout';
import BigLogo from "../img/biglogo.svg";
import x from "../img/x.svg";
import tg from "../img/tg.svg";
import girl from "../img/girl.png";
import wallet from "../img/wallet.svg";
import smile from "../img/smile.svg";
import prize from "../img/prize.svg";
import copyPic from "../img/copy.svg";
const CA: string = "0x3f70bA81FC103A9dcC7119B50528947D6D1E5760";

const Intro = () => {
    
    useEffect(() => {
        if(CA) {
            setAddress(  
                `${CA.slice(0, 4)}....${CA.slice(-4)}`
            );
        } else {    
            setAddress("TBA");
        }
    }, []);

    const [address, setAddress] = useState(""); 

    async function copyToClipboard() {
        if(CA) {
            copy(CA);
            setAddress("Copied");
            await Timeout.set(1000);
            setAddress(
                `${CA.slice(0, 4)}....${CA.slice(-4)}`
            );
        } else {
            copy("contract to be announced");
            setAddress("Copied");
            await Timeout.set(1000);
            setAddress(
                "TBA"
            );
        }
    }

    return (
        <>
            <a id="intro" className="anchor" href=""></a>
        <div className="intro">
            <div className="banner">
                <img src={BigLogo} className="banner__logo" />
                <div className="banner__text">
                    Base Bets is a gambling platform that operates on a revenue-share model, creating an ecosystem in which holders become partial owners of the casino and benefit from the generated revenue. The casino is powered by <span className='banner__text_span'>$BBET</span>.
                </div>
                {/* <div className="banner__text">
                    CA: 
                </div> */}
                <div className="links">
                    <a target="_blank" href="#" style={{marginRight: "8px"}}>
                        <img src={x} alt="x"/>
                    </a>
                    <a target="_blank" href="#">
                        <img src={tg} alt="tg"/>
                    </a>
                    <div
                        onClick={() => {
                            copyToClipboard()
                        }}
                        className="links__address">
                        <div className="address__text">
                            {address}
                        </div>
                        <img src={copyPic} alt="" />
                    </div>
                </div>
            </div>
            <div className="girl">
                <div className="badge badge__bal">
                    <img className="badge__icon" src={wallet} alt="" />
                    <div className="badge__text">
                        balance: 100.00 <span className="badge__text_span">$BBET</span>
                    </div>
                </div>
                <div className="badge badge__won">
                    <img className="badge__icon" src={smile} alt="" />
                    <div className="badge__text">
                        You won 194.11 <span className="badge__text_span">$BBET</span>
                    </div>
                </div>
                <div className="badge badge__split">
                    <img className="badge__icon" src={prize} alt="" />
                    <div className="badge__text">
                        play!
                    </div>
                </div>
                <img  src={girl} className="girl__pic" />
                <div className="girl__trybuy">
                    <div className="girl__predict">
                        — Predict the winning range of numbers, earn <span className='girl__predict_span'>$BBET</span> and enjoy instant withdrawals.
                    </div>
                    <div className="girl__metamask">
                        — With <span className='girl__metamask_span'>Metamask</span> integration, our platform ensures seamless and secure gameplay.
                    </div>
                    <a href='#' target="_blank" className="girl__try">
                        start dapp
                    </a>
                    <a href='#' target="_blank" className="girl__buy">
                        buy tokens
                    </a>
                </div>
            </div>
        </div>
        </>
    );
  };
  
export default Intro;