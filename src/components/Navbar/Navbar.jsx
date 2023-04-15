import React, {useContext} from 'react';
import s from './Navbar.module.css'
import {signOut} from 'firebase/auth'
import {auth} from "../../firebase";
import {AuthContext} from "../../context/AuthContext";

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <div className={s.navbar}>
            <span className={s.logo}>ChatMe</span>
            <div className={s.user}>
                <img src={currentUser.photoURL} alt=""/>
                <span>{currentUser.displayName}</span>
                <button onClick={()=> signOut(auth)}>logout</button>
            </div>
        </div>
    );
};

export default Navbar;