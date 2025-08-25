import  { type ReactNode } from 'react';

import Footer from './Footer';
import NavBer from './NavBer';

interface IProps {
  children:ReactNode;
}
const CommonLayout = ({ children }:IProps) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBer></NavBer>
           <div className='grow-1'>
             {children}
           </div>
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;