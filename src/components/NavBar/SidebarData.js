import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Vista General',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Analiticas',
    path: '/analiticas',
    icon: <FaIcons.FaChartLine />,
    cName: 'nav-text'
  },
  {
    title: 'Gestión de noticias',
    path: '/noticias',
    icon: <BsIcons.BsNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Gestión de eventos',
    path: '/eventos',
    icon: <FaIcons.FaTrophy />,
    cName: 'nav-text'
  },
  {
    title: 'Calendario',
    path: '/calendario',
    icon: <FaIcons.FaRegCalendarAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Soporte',
    path: '/soporte',
    icon: <BiIcons.BiSupport />,
    cName: 'nav-text'
  }
];
