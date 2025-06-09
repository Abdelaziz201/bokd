import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [tickets] = useState([
    { id: 1, name: 'Music Concert', path: '/tickets' },
    { id: 2, name: 'Outdoors Movie Night', path: '/tickets' },
    { id: 2, name: 'Gaming/Cosplay Concert', path: '/tickets' },

  ]);

  const [venues] = useState([
    { id: 1, name: 'Conference Venues', path: '/venues/conference' },
    { id: 2, name: 'Wedding Venues', path: '/venues/wedding' },
    { id: 2, name: 'Birthday Venues', path: '/venues/birthday' },
    { id: 2, name: 'Concert Venues', path: '/venues/concert' },
    { id: 2, name: 'Graduation Parties', path: '/venues/Graduation' },
    { id: 2, name: 'Retirement Party', path: '/venues/Retirement' },
    { id: 2, name: 'Workshops', path: '/venues/Workshops' },
    { id: 2, name: 'Private Parties', path: '/venues/Private' },
    { id: 2, name: 'Seminars', path: '/venues/Seminars' },
    


  ]);

  return (
    <DataContext.Provider value={{ tickets, venues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
