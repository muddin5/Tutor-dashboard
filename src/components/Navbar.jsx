import React, { useEffect, useState } from 'react';
import  { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft} from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavBar = () => {
const { activeMenu, setActivemenu } = useStateContext();


  return (
  <div>
    NavBar
  </div>
  )
}

export default NavBar