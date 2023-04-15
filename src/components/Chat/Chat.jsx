import React, {useContext} from 'react';
import s from './Chat.module.css'
import Cam from '../../Images/cam.png'
import Add from '../../Images/add.png'
import More from '../../Images/more.png'
import Messages from "../Messages/Messages";
import InputPanel from "../InputPanel/InputPanel";
import {ChatContext} from "../../context/ChatContext";

const Chat = () => {
    const {data} = useContext(ChatContext)


    return (
        <div className={s.chat}>

                <div className={s.chatInfo}>
                    <span>{data.user?.displayName}</span>
                    <div className={s.chatIcons}>
                        <img src={Cam} alt=""/>
                        <img src={Add} alt=""/>
                        <img src={More} alt=""/>
                    </div>
                </div>

                <div className={s.messagesWrapper}>
                    <Messages/>
                </div>


            <div >
                <InputPanel/>
            </div>
        </div>
    );
};

export default Chat;