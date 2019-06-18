import React, { Component } from 'react';
        import { withRouter } from "react-router-dom";
        import { Accordion, AccordionItem } from 'react-light-accordion';
        class Faq extends Component {

// scroll page on top 
        componentDidMount() {
        window.scrollTo(0, 0);
        }

        render() {
        return(
            <div className="container content" style={{paddingBottom: '10px', paddingTop: '160px'}}>
                <div>
                    <h2 className="display-4">Frequenty Asked Questions</h2>
                    <h3 className="display-6" style={{padding: '18px' }}> Blood Donation Process</h3>

                    <Accordion atomic={true}>

                        <AccordionItem title="How does the blood donation process work?">
                            <p style={{padding: '18px' }}>
                            <p>Donating blood is a simple thing to do, but can make a big difference in the lives of others. The donation process from
                                the time you arrive until the time you leave takes about an hour. The donation itself is only about 8-10 minutes on average.
                                The steps in the process are:</p>

                            <h3>Registration</h3>
                            <ol>
                                <li>You will complete donor registration, which includes information such as your name, address, phone number, and donor identification number (if you have one).</li>
                                <li>You will be asked to show a donor card, driver’s license or two other forms of ID.</li>
                            </ol>

                            <h3>Health History and Mini Physical </h3>
                            <ol>
                                <li>You will answer some questions during a private and confidential interview about your health history and the places you have traveled.</li>
                                <li>You will have your temperature, hemoglobin, blood pressure and pulse checked.</li>
                            </ol>
                            </p>
                        </AccordionItem>

                        <AccordionItem title="What should I do after donating blood?">
                            <p style={{padding: '18px' }}>
                            <ul>
                                <li>Drink an extra four glasses (eight ounces each) of non-alcoholic liquids.</li>
                                <li>Keep your bandage on and dry for the next five hours, and do not do heavy exercising or lifting.</li>
                                <li>If the needle site starts to bleed, raise your arm straight up and press on the site until the bleeding stops.</li>
                                <li>Because you could experience dizziness or loss of strength, use caution if you plan to do anything that could put you or others at risk of harm. 
                                    For any hazardous occupation or hobby, follow applicable safety recommendations regarding your return to these activities following a blood donation.</li>
                                <li>Eat healthy meals and consider adding iron-rich foods to your regular diet, or discuss taking an iron supplement with your health care provider, 
                                    to replace the iron lost with blood donation.</li>
                            </ul>
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Will it hurt when you insert the needle?">
                            <p style={{padding: '18px' }}>
                                Only for a moment. Pinch the fleshy, soft underside of your arm. That pinch is similar to what you will feel when the needle is inserted.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="How long does a blood donation take?">
                            <p style={{padding: '18px' }}>
                                The entire process takes about one hour and 15 minutes; the actual donation of a pint of
                                whole blood unit takes eight to 10 minutes. However, the time varies slightly with each
                                person depending on several factors including the donor’s health history and attendance 
                                at the blood drive.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="How long will it take to replenish the pint of blood I donate?">
                            <p style={{padding: '18px' }}>
                                The plasma from your donation is replaced within about 24 hours. Red cells need about four to six 
                                weeks for complete replacement. That’s why at least eight weeks are required between whole blood donations.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="How often can I donate blood?">
                            <p style={{padding: '18px' }}>
                                You must wait at least eight weeks (56 days) between donations of whole blood and 16 weeks (112 days) between Power Red donations.
                                Platelet apheresis donors may give every 7 days up to 24 times per year. Regulations are different for those giving blood 
                                for themselves (autologous donors).
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Who can donate blood?">
                            <p style={{padding: '18px' }}>
                                In most states, donors must be age 17 or older. Some states allow donation by 16-year-olds with a signed parental consent form. 
                                Donors must weigh at least 110 pounds and be in good health. Additional eligibility criteria apply
                            </p>
                        </AccordionItem>                            

                    </Accordion>

                    <h3 className="display-6" style={{padding: '18px' }}> Platelet Donations</h3>

                    <Accordion atomic={true}>

                        <AccordionItem title="What is apheresis?">
                            <p style={{padding: '18px' }}>
                                Apheresis is the process by which platelets and other specific blood components (red cells or plasma) are collected from a donor. 
                                The word “apheresis” is derived from the Greek word aphaeresis meaning “to take away.” 
                                This process is accomplished by using a machine called a cell separator. 
                                Blood is drawn from the donor and the platelets, or another blood component, are collected by the cell separator and the remaining components 
                                of the blood are returned to the donor during the donation. Each apheresis donation procedure takes about one-and-one-half to two hours. 
                                Donors can watch movies or relax during the donation.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="What are platelets and how are they used?">
                            <p style={{padding: '18px' }}>
                                Platelets are tiny, colorless, disc-shaped particles circulating in the blood, and they are essential for normal blood clotting. 
                                Platelets are critically important to the survival of many patients with clotting problems (aplastic anemia, leukemia) or cancer, 
                                and patients who will undergo organ transplants or major surgeries like heart bypass grafts. Platelets can only be stored for five 
                                days after being collected. Maintaining an adequate supply of this lifesaving, perishable product is an ongoing challenge.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="How often can I give platelets?">
                            <p style={{padding: '18px' }}>
                                Every 7 days up to 24 apheresis donations can be made in a year. Some apheresis donations can generate two or 
                                three adult-sized platelet transfusion doses from one donation!
                            </p>
                        </AccordionItem>

                    </Accordion>

                    <h3 className="display-6" style={{padding: '18px' }}> Medications and Vaccinations</h3>

                    <Accordion atomic={true}>

                        <AccordionItem title="Aspirin">
                            <p style={{padding: '18px' }}>
                                Aspirin, no waiting period for donating whole blood. However you must wait 2 full days after taking aspirin or any 
                                medication containing aspirin before donating platelets by apheresis. For example, if you take aspirin products on Monday, 
                                the soonest you may donate platelets is Thursday.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Antibiotics">
                            <p style={{padding: '18px' }}>
                                A donor with an acute infection should not donate. The reason for antibiotic use must be evaluated to determine if the 
                                donor has a bacterial infection that could be transmissible by blood. <br/> Acceptable after finishing oral antibiotics 
                                for an infection (bacterial or viral). May have taken last pill on the date of donation. Antibiotic by injection for an 
                                infection acceptable 10 days after last injection. Acceptable if you are taking antibiotics to prevent an infection for 
                                the following reasons: acne, chronic prostatitis, peptic ulcer disease, periodontal disease, pre-dental work, rosacea, 
                                ulcerative colitis, after a splenectomy, or valvular heart disease. If you have a temperature above 99.5 F / 37.5 C , you may not donate.

                            </p>
                        </AccordionItem>

                        <AccordionItem title="Birth Control">
                            <p style={{padding: '18px' }}>
                                Women on oral contraceptives or using other forms of birth control are eligible to donate.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Immunization, Vaccination">
                            <p style={{padding: '18px' }}>
                            <li>Acceptable if you were vaccinated for influenza, tetanus or meningitis, providing you are symptom-free and fever-free. 
                                Includes the Tdap vaccine.</li>
                            <li>Acceptable if you received an HPV Vaccine (example, Gardasil).</li>
                            <li>Acceptable if you were vaccinated with SHINGRIX (shingles vaccine) providing you are symptom-free and fever-free. 
                                SHINGRIX vaccine is administered in 2 doses (shots). The second shot is administered 2-6 months after the first shot. 
                                This distinguishes it from Zostavax, the live shingles vaccine, which is given as a single dose (shot) and requires a 
                                4-week deferral.</li>
                            <li>Wait 4 weeks after immunizations for German Measles (Rubella), MMR (Measles, Mumps and Rubella), Chicken Pox and Zostavax, 
                                the live shingles vaccine.</li>
                            <li>Wait 2 weeks after immunizations for Red Measles (Rubeola), Mumps, Polio (by mouth), and Yellow Fever vaccine.</li>
                            <li>Wait 21 days after immunization for hepatitis B as long as you are not given the immunization for exposure to hepatitis B.</li>
                            <li><strong>Smallpox vaccination and did not develop complication.</strong> <br/>
                                Wait 8 weeks (56 days) from the date of having a smallpox vaccination as long as you have had no complications. 
                                Complications may include skin reactions beyond the vaccination site or general illness related to the vaccination.</li>
                            <li><strong>Smallpox vaccination and developed complications.</strong> <br/>
                                Wait 14 days after all vaccine complications have resolved or 8 weeks (56 days) from the date of having had the smallpox 
                                vaccination whichever is the longer period of time. You should discuss your particular situation with the health historian 
                                at the time of donation. Complications may include skin reactions beyond the vaccination site or general illness related to 
                                the vaccination.</li>
                            <li><strong>Smallpox vaccination – close contact with someone who has had the smallpox vaccine in the last eight weeks and you did 
                                    not develop any skin lesions or other symptoms.</strong><br/>
                                Eligible to donate.</li>
                            <li><strong>Smallpox vaccination – close contact with someone who has had the vaccine in the last eight weeks and you have since developed 
                                    skin lesions or symptoms.</strong><br/>
                                Wait 8 weeks (56 days) from the date of the first skin lesion or sore. You should discuss your particular situation with the 
                                health historian at the time of donation. Complications may include skin reactions or general illness related to the exposure.</li>
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Insulin (Bovine)">
                            <p style={{padding: '18px' }}>
                                Donors with diabetes who since 1980, ever used bovine (beef) insulin made from cattle from the United Kingdom are not eligible to donate. 
                                This requirement is related to concerns about variant CJD, or 'mad cow' disease. 
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Medications">
                            <p style={{padding: '18px' }}>
                                In almost all cases, medications will not disqualify you as a blood donor. Your eligibility will be based on the reason that the medication was prescribed. 
                                As long as the condition is under control and you are healthy, blood donation is usually permitted. <br/>
                                Over-the-counter oral homeopathic medications, herbal remedies, and nutritional supplements are acceptable. 
                                There are a handful of drugs that are of special significance in blood donation. 
                                Persons on these drugs have waiting periods following their last dose before they can donate blood:
                            <li>Accutane, Amnesteem, Absorica, Claravis, Myorisan, Sotret or Zenatane (isotretinoin), 
                                Proscar (finasteride), and Propecia (finasteride) - wait 1 month from the last dose.</li>
                            <li>Avodart ή Jalyn (dutasteride) - περιμένετε 6 μήνες από την τελευταία δόση.</li>
                            <li>Aspirin, no waiting period for donating whole blood. However you must wait 2 full days after taking aspirin or any 
                                medication containing aspirin before donating platelets by apheresis. For example, if you take aspirin products on Monday, 
                                the soonest you may donate platelets is Thursday.</li>
                            <li>Effient (prasugrel)  and Brilinta (ticagrelor)- no waiting period for donating whole blood. However you must wait 7 days 
                                after taking this medication before donating platelets by apheresis.</li>
                            <li>Feldene (piroxicam), no waiting period for donating whole blood. However you must wait 2 days after taking Feldene (piroxicam) 
                                before donating platelets by apheresis.</li>
                            <li>Arixtra (fondaparinux), Coumadin, Warfilone, Jantoven (warfarin) and Heparin, are prescription blood thinners- you should not donate since your blood will not clot normally. 
                                If your doctor discontinues your treatment with blood thinners, wait 7 days before returning to donate.</li>
                            <li>Fragmin (dalteparin), Eliquis (apixaban), Pradaxa (dabigatran),Savaysa (edoxaban), Xarelto (rivaroxaban),and Lovenox (enoxaparin) 
                                are also prescription blood thinners- you should not donate since your blood will not clot normally. 
                                If your doctor discontinues your treatment with these blood thinners, wait 2 days before returning to donate.</li>
                            <li>Other prescription blood thinners not listed, call 866-236-3276 to speak with an eligibility specialist about your individual situation.</li>
                            <li>Hepatitis B Immune Globulin – given for exposure to hepatitis, wait 12 months after exposure to hepatitis.</li>
                            <li>Human pituitary-derived growth hormone at any time - you are not eligible to donate blood.</li>
                            <li>Plavix (clopidogrel), Ticlid (ticlopidine) and Zontivity (vorapaxar) - no waiting period for donating whole blood. 
                                However you must wait 14 days after taking this medication before donating platelets by apheresis.</li>
                            <li>Soriatane (acitretin) – wait 3 years.</li>
                            <li>Tegison (etretinate) at any time – you are not eligible to donate blood.</li>
                            <li>Erivedge (vismodegib) and Odomzo (sonidegib)– wait 2 years.</li>
                            <li>Aubagio (teriflunomide) – wait 2 years.</li>
                            <strong> Unable to Give Blood? </strong> <br/>
                            Consider volunteering or hosting a blood drive through the coBlood. You can also help people facing emergencies by making a financial donation to 
                            support the coBlood’s greatest needs. Your gift enables the coBlood to ensure an ongoing blood supply, provide humanitarian support to families in need 
                            and prepare communities by teaching lifesaving skills.
                            </p>
                        </AccordionItem>

                    </Accordion>

                    <h3 className="display-6" style={{padding: '18px' }}> General Health Considerations</h3>

                    <Accordion atomic={true}>

                        <AccordionItem title="Cold, Flu">
                            <p style={{padding: '18px' }}>
                            <li>Wait if you have a fever or a productive cough (bringing up phlegm)</li>
                            <li>Wait if you do not feel well on the day of donation.</li>
                            <li>Wait until you have completed antibiotic treatment for sinus, throat or lung infection.</li>
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Weight and Height">
                            <p style={{padding: '18px' }}>
                                You must weigh at least 110 lbs to be eligible for blood donation for your own safety. Students who donate at high school drives and donors 
                                18 years of age or younger must also meet additional height and weight requirements for whole blood donation.<br/><br/>
                                Blood volume is determined by body weight and height. Individuals with low blood volumes may not tolerate the removal of the required volume 
                                of blood given with whole blood donation. There is no upper weight limit as long as your weight is not higher than the weight limit of the donor 
                                bed/lounge you are using. You can discuss any upper weight limitations of beds and lounges with your local health historian. <br/><br/>
                                <strong>Unable to Give Blood?</strong><br/>
                                Consider volunteering or hosting a blood drive through the coBlood. You can also help people facing emergencies by making a financial donation to 
                                support the coBlood’s greatest needs. Your gift enables the coBlood to ensure an ongoing blood supply, provide humanitarian support to families in need 
                                and prepare communities by teaching lifesaving skills.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Allergy, Stuffy Nose, Itchy Eyes, Dry Cough">
                            <p style={{padding: '18px' }}>
                                Acceptable as long as you feel well, have no fever, and have no problems breathing through your mouth. 
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Donation Intervals">
                            <p style={{padding: '18px' }}>
                            <li>Wait at least 8 weeks between whole blood (standard) donations.</li>
                            <li>Wait at least 7 days between platelet (pheresis) donations.</li>
                            <li>Wait at least 16 weeks between Power Red (automated) donations.</li> 
                            </p>
                        </AccordionItem>

                    </Accordion>

                    <h3 className="display-6" style={{padding: '18px' }}> Medical Conditions that Affect Eligibility</h3>

                    <Accordion atomic={true}>

                        <AccordionItem title="Allergies">
                            <p style={{padding: '18px' }}>
                                Acceptable as long as you feel well, have no fever, and have no problems breathing through your mouth.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Asthma">
                            <p style={{padding: '18px' }}>
                                Acceptable as long as you do not have any limitations on daily activities and are not having difficulty breathing at 
                                the time of donation and you otherwise feel well. Medications for asthma do not disqualify you from donating.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Bleeding Condition">
                            <p style={{padding: '18px' }}>
                                If you have a history of bleeding problems, you will be asked additional questions. If your blood does not clot normally, 
                                you should not donate since you may have excessive bleeding where the needle was placed. For the same reason, you should 
                                not donate if you are taking any "blood thinner" such as: <br/>
                            <li>Atrixa </li>
                            <li>Coumadin </li>
                            <li>Eliquis </li>
                            <li>Fragmin </li>
                            <li>Heparin</li>
                            <li>Jantoven </li>
                            <li>Lovenox </li>
                            <li>Pradaxa </li>
                            <li>Savaysa </li>
                            <li>Warfilone </li>
                            <li>Xarelto </li><br/>
                            If you are on aspirin, it is OK to donate whole blood. However, you must be off of aspirin for at least 2 full days in order 
                            to donate platelets by apheresis.  For example, if you take aspirin products on Monday, the soonest you may donate platelets 
                            is Thursday. Donors with clotting disorder from Factor V who are not on anticoagulants are eligible to donate; however, all 
                            others must be evaluated by the health historian at the collection center.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Blood Pressure (High or Low)">
                            <p style={{padding: '18px' }}>
                                <strong>High Blood Pressure</strong> - Acceptable as long as your blood pressure is below 180 systolic (first number) and below 
                                100 diastolic (second number) at the time of donation. Medications for high blood pressure do not disqualify you from donating.<br/><br/>
                                <strong>Low Blood Pressure</strong> - Acceptable as long as you feel well when you come to donate, and your blood pressure is at 
                                least 90/50 (systolic/diastolic).
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Cancer">
                            <p style={{padding: '18px' }}>
                                Eligibility depends on the type of cancer and treatment history. If you had leukemia or lymphoma, including Hodgkin’s Disease and 
                                other cancers of the blood, you are not eligible to donate. Other types of cancer are acceptable if the cancer has been treated 
                                successfully and it has been more than 12 months since treatment was completed and there has been no cancer recurrence in this time. 
                                Lower risk in-situ cancers including squamous or basal cell cancers of the skin that have been completely removed do not require a 12 
                                month waiting period.<br/><br/>
                                Precancerous conditions of the uterine cervix do not disqualify you from donation if the abnormality has been treated successfully. 
                                You should discuss your particular situation with the health historian at the time of donation
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Chronic Illnesses">
                            <p style={{padding: '18px' }}>
                                Most chronic illnesses are acceptable as long as you feel well, the condition is under control, and you meet all other eligibility requirements.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="CJD, vCJD, Mad Cow Disease">
                            <p style={{padding: '18px' }}>
                                <strong>Creutzfeldt-Jakob Disease (CJD)</strong><br/> If you ever received a dura mater (brain covering) transplant or human pituitary growth hormone, 
                                you are not eligible to donate. Those who have a blood relative who had Creutzfeldt-Jakob disease are also not eligible to donate.<br/><br/>
                                <strong>Creutzfeldt-Jakob Disease, Variant (vCJD); "Mad Cow Disease"</strong><br/> All blood donations are tested for hepatitis B and hepatitis C with 
                                several different tests. But because these tests are not perfect, it is still important for people who may be infected with hepatitis viruses to not 
                                donate blood. In some cases, all that is required is a waiting period after some particular event, such as an exposure to a patient with hepatitis, 
                                to be sure the person was not infected. In other cases, the likelihood of hepatitis is high enough that the person is not eligible to donate regardless 
                                of how much time has gone by.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Diabetes">
                            <p style={{padding: '18px' }}>
                                Diabetics who are well controlled on insulin or oral medications are eligible to donate.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Heart Disease">
                            <p style={{padding: '18px' }}>
                                In general, acceptable as long as you have been medically evaluated and treated, have no current (within the last 6 months) heart related symptoms 
                                such as chest pain and have no limitations or restrictions on your normal daily activities. <br/><br/>
                                Wait at least 6 months following an episode of angina.<br/><br/>Wait at least 6 months following a heart attack. <br/><br/>
                                Wait at least 6 months after bypass surgery or angioplasty. <br/><br/>Wait at least 6 months after a change in your heart 
                                condition that resulted in a change to your medications.<br/><br/>If you have a pacemaker, you may donate as long as your pulse is between 50 and 
                                100 beats per minute and you meet the other heart disease criteria. You should discuss your particular situation with your personal healthcare provider 
                                and the health historian at the time of donation.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Heart Murmur, Heart Valve Disorder">
                            <p style={{padding: '18px' }}>
                                Acceptable if you have a heart murmur as long as you have been medically evaluated and treated and have not had symptoms in the last 6 months, and have no 
                                restrictions on your normal daily activities.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Hemochromatosis (Hereditary)">
                            <p style={{padding: '18px' }}>
                                American Red Cross does not accept individuals with hemochromatosis as blood donors.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Hemoglobin, Hematocrit, Blood Count">
                            <p style={{padding: '18px' }}>
                                In order to donate blood, a woman must have a hemoglobin level of at least 12.5 g/dL, and a man must have a hemoglobin level of at least 13.0 g/dL. 
                                For all donors, the hemoglobin level can be no greater than 20 g/dL.<br/><br/>Separate requirements for hemoglobin level apply for Power Red.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Hepatitis, Jaundice">
                            <p style={{padding: '18px' }}>
                                If you have signs or symptoms of hepatitis (inflammation of the liver) caused by a virus, or unexplained jaundice (yellow discoloration of the skin), 
                                you are not eligible to donate blood. If you ever tested positive for hepatitis B or hepatitis C, at any age, you are not eligible to donate, even 
                                if you were never sick or jaundiced from the infection.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Hepatitis Exposure">
                            <p style={{padding: '18px' }}>
                                If you live with or have had sexual contact with a person who has hepatitis, you must wait 12 months after the last contact.
                                <br/><br/> Persons who have been detained or incarcerated in a facility (juvenile detention, lockup, jail, or prison) for more than 72 consecutive hours 
                                (3 days) are deferred for 12 months from the date of last occurrence. This includes work release programs and weekend incarceration. These persons are at 
                                higher risk for exposure to infectious diseases. <br/><br/> Wait 12 months after receiving a blood transfusion (unless it was your own "autologous" blood), 
                                non-sterile needle stick or exposure to someone else's blood.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="HIV, AIDS">
                            <p style={{padding: '18px' }}>
                                You should not give blood if you have AIDS or have ever had a positive HIV test, or if you have done something that puts you at risk for becoming infected with HIV. <br/><br/>
                                You are at risk for getting infected if you:<br/>
                            <li>have ever used needles to take any drugs, steroids, or anything not prescribed by your doctor</li>
                            <li>are a male who has had sexual contact with another male, in the last 12 months</li>
                            <li>have ever taken money, drugs or other payment for sex</li>
                            <li>have had sexual contact in the past 12 months with anyone described above</li> <br/>
                            You should not give blood if you have any of the following conditions that can be signs or symptoms of HIV/AIDS: <br/><br/>
                            <li>Fever</li>
                            <li>Enlarged lymph glands</li>
                            <li>Sore throat</li>
                            <li>Rash</li>
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Infections">
                            <p style={{padding: '18px' }}>
                                If you have a fever or an active infection, wait until the infection has resolved completely before donating blood. <br/><br/>
                                Wait until finished taking antibiotics for an infection (bacterial or viral). Wait 10 days after the last antibiotic injection 
                                for an infection.<br/><br/>Those who have had infections with Chagas Disease, Babesiosis or Leishmaniasis are not eligible to donate.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Malaria">
                            <p style={{padding: '18px' }}>
                                Malaria is transmitted by the bite of mosquitoes found in certain countries and may be transmitted to patients through blood transfusion. 
                                Blood donations are not tested for malaria because there is no sensitive blood test available for malaria.<br/><br/>If you have traveled 
                                or lived in a malaria-risk country, we may require a waiting period before you can donate blood:<br/><br/>
                            <li>Wait 3 years after completing treatment for malaria.</li>
                            <li>Wait 12 months after returning from a trip to an area where malaria is found.</li>
                            <li>Wait 3 years after living more than 5 years in a country or countries where malaria is found. An additional waiting period of 3 years 
                                may be required if you have traveled to an are where malaria is found if you have not lived a consecutive 3 years in a country or countries 
                                where malaria is not found.</li>
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Sickle Cell">
                            <p style={{padding: '18px' }}>
                                Acceptable if you have sickle cell trait. Those with sickle cell disease are not eligible to donate.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Skin Disease, Rash, Acne">
                            <p style={{padding: '18px' }}>
                                Acceptable as long as the skin over the vein to be used to collect blood is not affected. If the skin disease has become infected, wait 
                                until the infection has cleared before donating. Taking antibiotics to control acne does not disqualify you from donating.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Tuberculosis">
                            <p style={{padding: '18px' }}>
                                If you have active tuberculosis or are being treated for active tuberculosis you should not donate. Acceptable if you have a positive skin 
                                test or blood test, but no active tuberculosis and are NOT taking antibiotics.  If you are receiving antibiotics for a positive TB skin test 
                                or blood test only or if  you are being treated for a tuberculosis infection, wait until treatment is successfully completed before donating.
                            </p>
                        </AccordionItem>

                        <AccordionItem title="Measles Exposure">
                            <p style={{padding: '18px' }}>
                                Acceptable if you are healthy and well and have been vaccinated for measles more than 4 weeks ago or were born before 1956. If you have not 
                                been vaccinated or it has been less than 4 weeks since being vaccinated, wait 4 weeks from the date of the vaccination or exposure before donating.
                            </p>
                        </AccordionItem>

                    </Accordion>    
                    <br/><br/>
                </div>    
            </div>
        );
    }
}

export default withRouter(Faq);

