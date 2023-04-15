import React from 'react';
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";
import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={s.sideBar}>
            <Navbar />
            <Search />
            <div className={s.chatsName}>
                <Chats/>
            </div>
        </div>
    );
};

export default Sidebar;