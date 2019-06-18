import React from 'react';
import boyDonating from './img/mainPage/boy-donating.jpg';
import lifeBelt from './img/mainPage/life-saver.jpg';
import bloodyHands from './img/mainPage/blood-hands-heart.jpg';


export default function MainMotivationalSection() {
  return (
    <div>
            <section className="container-fluid px-0">
                <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div  className="text-dark d-lg-block mt-5">
                                        <h1 className="display-4 text-left mb-3 ">
                                            What is Blood Donation?
                                            </h1>
                                            <p className="lead text-justify">                                   
                                                By <em>blood donation</em> we mean blood transfusion and, by extension, the whole organization
                                            involved in collecting, maintaining and disposing of blood. </p>   
                                            
                                            <hr/>
                                            <p className="lead text-justify">                                   

                                                In Greece, <strong><abbr title="source: bloode.org">700,000 blood units</abbr></strong> are in need annually; only <strong>35%</strong> are collected from volunteer 
                                            blood donors, while the largest percentage is collected from replacement donors, i.e relatives
                                            and friends of the patient. 
                                            </p>       
                                </div>
                            </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={boyDonating} alt="Boy donation blood" />
                </div>
                    </div>
            </section>

            <section className="container-fluid px-0 mt-5">
                <div className="row align-items-center ">
                    <div className="col-md-6 order-2 order-md-1">
                        <img src={lifeBelt} alt="life belt at sea" className="img-fluid" />
                    </div>
                    <div className="col-md-6  order-1 order-md-2">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 ">
                                <h2 className="display-4 text-right">
                                    The donated blood goes to...
                                </h2>
                                <p className="lead text-justify">
                                        Whole blood as collected in blood donation is rarely used in this form. 
                                    In the majority of cases it is divided into three main components (plasma, red and platelets) 
                                    and is transfused according to the patient's need, so <strong className="h4"><em>a unit of blood
                                    can potentially save up to <span className="text-danger ">three lives</span></em></strong>. 
                                    The first step in a donation is to check donor and receiver compatibility before transfusion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid px-0 my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-8 ">
                                <h2 className="display-4 text-left ">
                                    Can i give blood?
                                </h2>
                                <p className="lead text-left">
                                    Yes you can if:
                                </p>
                                <div className="text-justify"> 
                                    <ul>
                                        <li>
                                        You are between 18 and 65 years old. 
                                        </li>
                                        <li>
                                            Weigh over 50kg. With a weight of less than 50kg, it is usually dangerous to 
                                            become a blood donor.
                                        </li>
                                        <li>
                                            You are healthy. If you are ill or on medication treatment, your blood may have a negative 
                                            effect on the person who will receive it.
                                        </li>
                                        <li>
                                            You have a safe lifestyle. Taking substances, multiple sexual partners, tattoos or piercings 
                                            made over the last 6 months are considered high risk activities and exclude them from a donation. 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={bloodyHands} alt="hands painted with red color" className="img-fluid" />
                    </div>
                </div>
            </section>
            <hr/>

    </div>
   
  )
}
