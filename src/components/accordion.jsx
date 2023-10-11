import React, { useState } from "react";
import '../assets/scss/homepage.scss'
import accordion_img from '../assets/Images/accordionmain_img.svg'
import playbtn_com from '../assets/Images/accordion_play_btn.svg'
import watchBtn from '../assets/Images/accordion_watch_btn.svg'
const Accordion = () => {
    const [show, setShow] = useState(true);
    return (
        <>

            <div className="acc_container container mt-5 pt-5">
                <div className="accordion row mt-5">
                    <div className="row my-5">
                        <h4>THE Most recent Patterns, Conveyed Directly TO YOUR INBOX.</h4>
                    </div>
                    <div className="row qcardsrow my-5">
                        <div className="col-lg-6 col.md-6 col-sm-12 col-xs-12">
                            <img src={accordion_img} alt="" className="d-flex justify-content-center align-item-center w-100"></img>
                        </div>
                        <div className="col-lg-6 col.md-6 col-sm-12 col-xs-12 my-5 px-5">
                            <div className={`accordion-button ${show ? 'active' : ''}`}
                                type="button"
                                onClick={() => setShow(!show)}>
                                <p style={{ cursor: 'pointer' }} onClick={() => setShow(!show)} className="px-3">
                                    {show ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                        <path d="M8.9265 17.6564C8.82017 17.5528 8.3655 17.1617 7.9915 16.7974C5.63933 14.6613 1.78933 9.08898 0.614167 6.17243C0.425333 5.7295 0.0256667 4.60968 0 4.01137C0 3.43806 0.132 2.89154 0.399667 2.37003C0.773667 1.71992 1.36217 1.19841 2.057 0.912648C2.53917 0.72869 3.982 0.442929 4.00767 0.442929C5.58617 0.157168 8.151 0 10.9853 0C13.6858 0 16.1462 0.157168 17.7485 0.391135C17.7742 0.417925 19.5672 0.703686 20.1813 1.01624C21.3033 1.58954 22 2.70937 22 3.90778V4.01137C21.9725 4.79185 21.2758 6.43319 21.2502 6.43319C20.0732 9.19256 16.412 14.6363 13.9792 16.8242C13.9792 16.8242 13.354 17.4403 12.9635 17.7082C12.4025 18.1262 11.7077 18.3333 11.0128 18.3333C10.2373 18.3333 9.515 18.0994 8.9265 17.6564Z" fill="#EE642A" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                        <path d="M13.0735 1.34356C13.1798 1.44715 13.6345 1.83828 14.0085 2.20263C16.3607 4.33869 20.2107 9.91102 21.3858 12.8276C21.5747 13.2705 21.9743 14.3903 22 14.9886C22 15.5619 21.868 16.1085 21.6003 16.63C21.2263 17.2801 20.6378 17.8016 19.943 18.0874C19.4608 18.2713 18.018 18.5571 17.9923 18.5571C16.4138 18.8428 13.849 19 11.0147 19C8.31417 19 5.85383 18.8428 4.2515 18.6089C4.22583 18.5821 2.43283 18.2963 1.81867 17.9838C0.696665 17.4105 2.36861e-07 16.2906 3.41629e-07 15.0922L3.50685e-07 14.9886C0.0275006 14.2081 0.724167 12.5668 0.749835 12.5668C1.92683 9.80743 5.588 4.36369 8.02083 2.17584C8.02083 2.17584 8.646 1.55967 9.0365 1.29177C9.5975 0.873841 10.2923 0.666665 10.9872 0.666665C11.7627 0.666665 12.485 0.900632 13.0735 1.34356Z" fill="#EE642A" />
                                    </svg>}
                                </p>
                                <h3 className="QuestionsTxt">STAFF PICKS WITH ERIN THIS WEEK'S TOP PICKS</h3>
                            </div>

                            <p className="AnswersTxt px-4" style={{ maxHeight: show ? '500px' : '0' }}>
                                For the Consuming Campaign discharge, I remained up the entire evening playing and wound up leaving school 'cos I was nodding off all over. Most certainly utilized being debilitated a ton in school to mess around. Presently I simply use excursion when games I'm energized for emerge.
                            </p>

                            <div className="accordion-button"
                                type="button">
                                <p style={{ cursor: 'pointer' }} className="px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                        <path d="M13.0735 1.34356C13.1798 1.44715 13.6345 1.83828 14.0085 2.20263C16.3607 4.33869 20.2107 9.91102 21.3858 12.8276C21.5747 13.2705 21.9743 14.3903 22 14.9886C22 15.5619 21.868 16.1085 21.6003 16.63C21.2263 17.2801 20.6378 17.8016 19.943 18.0874C19.4608 18.2713 18.018 18.5571 17.9923 18.5571C16.4138 18.8428 13.849 19 11.0147 19C8.31417 19 5.85383 18.8428 4.2515 18.6089C4.22583 18.5821 2.43283 18.2963 1.81867 17.9838C0.696665 17.4105 2.36861e-07 16.2906 3.41629e-07 15.0922L3.50685e-07 14.9886C0.0275006 14.2081 0.724167 12.5668 0.749835 12.5668C1.92683 9.80743 5.588 4.36369 8.02083 2.17584C8.02083 2.17584 8.646 1.55967 9.0365 1.29177C9.5975 0.873841 10.2923 0.666665 10.9872 0.666665C11.7627 0.666665 12.485 0.900632 13.0735 1.34356Z" fill="#EE642A" />
                                    </svg>
                                </p>
                                <h3 className="QuestionsTxt">Compelling Games Is 20 Years of age!</h3>
                            </div>

                            <div className="accordion-button my-3"
                                type="button">
                                <p style={{ cursor: 'pointer' }} className="px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                                        <path d="M13.0735 1.34356C13.1798 1.44715 13.6345 1.83828 14.0085 2.20263C16.3607 4.33869 20.2107 9.91102 21.3858 12.8276C21.5747 13.2705 21.9743 14.3903 22 14.9886C22 15.5619 21.868 16.1085 21.6003 16.63C21.2263 17.2801 20.6378 17.8016 19.943 18.0874C19.4608 18.2713 18.018 18.5571 17.9923 18.5571C16.4138 18.8428 13.849 19 11.0147 19C8.31417 19 5.85383 18.8428 4.2515 18.6089C4.22583 18.5821 2.43283 18.2963 1.81867 17.9838C0.696665 17.4105 2.36861e-07 16.2906 3.41629e-07 15.0922L3.50685e-07 14.9886C0.0275006 14.2081 0.724167 12.5668 0.749835 12.5668C1.92683 9.80743 5.588 4.36369 8.02083 2.17584C8.02083 2.17584 8.646 1.55967 9.0365 1.29177C9.5975 0.873841 10.2923 0.666665 10.9872 0.666665C11.7627 0.666665 12.485 0.900632 13.0735 1.34356Z" fill="#EE642A" />
                                    </svg>
                                </p>
                                <h3 className="QuestionsTxt">Irresistible Games Merchandise Is Here</h3>
                            </div>

                            <div className="row px-1">
                                <div>
                                    <img src={playbtn_com} style={{ cursor: 'pointer' }} alt=""/>
                                    <img src={watchBtn} style={{ cursor: 'pointer' }} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion;
