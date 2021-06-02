import React from 'react';
import Back from '../images/btn-Back.png';
import Snake from '../images/characters/Snake.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ViviPic from "../images/characters/Vivi.png"
import ArdashPic from "../images/characters/Ardash.png"
import CorneliaPic from "../images/characters/Cornelia.png"
import GroupImg from "../images/OnlineStoreImage/Group.png"


export const OnlineStore = () => {
  return (
    <div className="OnlineStore-Background-Container">
      <HelmetProvider><Helmet>
        <title>Store Preview</title>
      </Helmet></HelmetProvider>
      <div className="OnlineStore-Container">
                <input className = "InputStyle" type="checkbox" id = "c1"/>
                <input className = "InputStyle" type="checkbox" id = "c2"/>
                <input className = "InputStyle" type="checkbox" id = "c3"/>                
                <div id = "bookCover">
                  <div className = "imgPageCoverContainer">
                    <img className = "BookCoverImg" src = {ViviPic} alt = "Vivi"/>
                  </div>
                </div>
                <div className = "pageContainer">

                  <div className = "page" id = "p1">
                    <div className = "backPageContainer">
                      <div className = "backPage">
                        <img className = "BookImg" src = {ArdashPic} alt = "Ardash"/>
                      </div>
                      <label htmlFor = "c1"><div className="backBtn"/></label>
                    </div>
                    <div className = "frontPageContainer">
                      <div className = "frontPage">
                        <div className = "bookTxt">
                        Vivi’s foot landed on something squelchy that released the all too familiar Bio-goo smell. Like a mix of toe cheese, truck oil soap scum from a bath plug and the worst tasting old cheese rind. ‘Yuck,’ she muttered, trying not to gag. She’d wash it off as soon as she could, before it burnt through the sole of a shoe, but she needed to keep her spot if she was going to find what she was looking for: something particular and rare for her latest invention. 
                        There was always something Vivi needed to invent, or build, or fix. Like the rest of Slum-lane’s residents, she’d had to build their shack from all sorts of bits and bobs from there fuse piles. She’d built so many shacks with her father, it was one of the reasons why she was so good at fixing things. 
                        ‘My do-a-lot girl,’ her father insisted on calling her.
                        Maybe if she was a better inventor or builder her father might not make them move quite so often. But he insisted on moving every year. There was always some new incident befalling him – like losing yet another newspaper delivery job – but Vivi knew it was because of the dog, it always found him.
                        </div>
                      </div>
                      <label htmlFor = "c1"><div className="nextBtn"/></label>
                    </div>
                  </div>

                  <div className = "page" id = "p2">
                    <div className = "backPageContainer">
                      <div className = "backPage">
                        <img className = "BookImg" src = {CorneliaPic} alt = "Cornelia"/>
                      </div>
                      <label htmlFor = "c2"><div className="backBtn"/></label>
                    </div>
                    <div className = "frontPageContainer">
                      <div className = "frontPage">
                        <div className = "bookTxt">
                        Ardash closed the file, satisfied with his preliminary hypothesis. He loved planning detailed experiments, and if they didn't succeed, there were always lessons to be learned from failure. 
                        Mufti licked his hand. 
                        ‘Do you ever wonder what it would be like to be imperfect?’Ardash asked. Mufti remained dis-interested, but Ardash went on. ‘If I could just find and catch a disease, that’d be something. Maybe an infection, or a cold –even a snuffle would do.’He’d read his ‘modification certificate’ over and over. He’d been genetically modified for super-accurate eyesight, and not to catch any disease. But no modification could make him immune to being fascinated by bacteria. He’d even asked his mother, Prudence, for some petri dishes for his birthday.
                        ‘They’re for experiments,’he’d wailed. But Prudence had already caught him trying to scrape the mould from a SEEDCORP corncob he'd covered in damp bio-cotton and hidden in the kitchen.
                        She'd thrown everything down the rubbish shoot.
                        </div>
                      </div>
                      <label htmlFor = "c2"><div className="nextBtn"/></label>
                    </div>
                  </div>

                  <div className = "page" id = "p3">
                    <div className = "backPageContainer">
                    <div className = "backPage">
                      <div className = "OnlineTxt">
                        YOU CAN ORDER THESE BOOKS <br/>ONLINE HERE
                      </div>
                        <div className="OnlineStore-Button" onClick={() => 
                          { console.log('Redirecting to Dr Egg Adventures Online Store Page!'); 
                          window.open("https://dreggadventures.com/shop/?v=6cc98ba2045f", "_blank"); }}
                        />
                        <img className = "OnlineGroupImg" src = {GroupImg} alt = "Vivi, Ardash, Cornelia"/>
                    </div>
                      <label htmlFor = "c3"><div className="backBtn"/></label>
                    </div>
                    <div className = "frontPageContainer">
                      <div className = "frontPage">
                      <div className = "bookTxt">
                        Cornelia looked up. The clouds were gathering, but there wasn’t much rain in them. She adored rain drops on her face, the freshness she felt as it fell on her, like she was a plant that grew a little taller every time it rained. 
                        Perhaps today would be the day the other farms in the district finally got some rain. Then they’d be able to grow corn and their animals wouldn’t starve. 
                        Cornelia felt a tickle on her ear. I hadn’t forgotten you, Carlin. I was day dreaming again! She thought as Carlin, her small grey pet mouse nibbled at her lobe. 
                        She never needed to say anything out loud to Carlin. They’d always been able to read each other’s thoughts.
                        I want to help them too, thought Carlin. But we have something special to do this morning! 
                        Cornelia hadn’t forgotten. Today was her thirteenth birthday. She had done everything she could to try and convince her parents to cancel the party.
                        How could they even dream of having a celebration, Cornelia thought. When everyone else in the district is struggling?
                      </div>
                      </div>
                      <label htmlFor = "c3"><div className="nextBtn"/></label>
                    </div>
                  </div>

                </div>
              </div>
              <a href="/chatbot">
                  <img className="StoreSnake" src={Snake} alt="Snake"/>  
              </a>
              <a href = "/Map">
                <div className="StoreBack" src={Back} alt="Back"/>
              </a>
            </div>
  )
}
export default OnlineStore

