import React from 'react';
import calendar from '../../resources/navImages/calendar.svg';
import events from '../../resources/navImages/events.svg';
import generalView from '../../resources/navImages/generalView.svg';
import news from '../../resources/navImages/news.svg';
import support from '../../resources/navImages/support.svg';
import stats from '../../resources/navImages/stats.svg';
import calendar2 from '../../resources/navImages/calendar2.svg';
import events2 from '../../resources/navImages/events2.svg';
import generalView2 from '../../resources/navImages/generalView2.svg';
import news2 from '../../resources/navImages/news2.svg';
import support2 from '../../resources/navImages/support2.svg';
import stats2 from '../../resources/navImages/stats2.svg';

export const SidebarData = [
  {
    title: 'Vista General',
    path: '/',
    icon: generalView,  
    icon2: generalView2,
    cName: 'nav-text',
    estate: false,
  },
  {
    title: 'Analiticas',
    path: '/analiticas',
    icon: stats,
    icon2: stats2,
    cName: 'nav-text',
    estate: false,

  },
  {
    title: 'Calendario',
    path: '/calendario',
    icon: calendar,
    icon2: calendar2,
    cName: 'nav-text',
    estate: false,
  },
  {
    title: 'Gestión de eventos',
    path: '/eventos',
    icon: events,
    icon2: events2,
    cName: 'nav-text',
    estate: false,
  },
  {
    title: 'Gestión de noticias',
    path: '/noticias',
    icon: news,
    icon2: news2,
    cName: 'nav-text',
    estate: false,
  },
  {
    title: 'Soporte',
    path: '/soporte',
    icon: support,
    icon2: support2,
    cName: 'nav-text',
    estate: false,
  }
];
