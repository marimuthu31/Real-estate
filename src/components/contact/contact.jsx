import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'
const contact = () => {
    return (
        <section className="c-wrapper">
            <div className="padding innerWidth flexCenter c-container">
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We always ready to help by providing the best ser</span>
                    <div className="flexColStart contactModes">
                        {/* first row  */}
                        <div className="flexStart row">

                            <div className="flexColCenter mode">

                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span > 94980 18542</span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">
                                    Call Now
                                </div>
                            </div>
                            {/* {secoond mode} */}
                            <div className="flexColStart row">

                                <div className="flexColCenter mode">

                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primaryText'>Chat</span>
                                            <span > 94980 18542</span>
                                        </div>
                                    </div>
                                    <div className="flexColCenter button">
                                        Chat Now
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* second row */}
                        <div className="flexStart row">

                            <div className="flexColCenter mode">

                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>VideoCall</span>
                                        <span > 94980 18542</span>
                                    </div>
                                </div>
                                <div className="flexColCenter button">
                                    Video Call Now
                                </div>
                            </div>
                            {/* {fourth mode} */}
                            <div className="flexColStart row">

                                <div className="flexColCenter mode">

                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primaryText'>Message</span>
                                            <span > 94980 18542</span>
                                        </div>
                                    </div>
                                    <div className="flexColCenter button">
                                        Message Now
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

                {/* right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default contact