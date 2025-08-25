import  { type ReactNode } from 'react';

import Footer from './Footer';
import NavBer from './NavBer';

interface IProps {
  children:ReactNode;
}
const CommonLayout = ({ children }:IProps) => {
    return (
        <div>
            <NavBer></NavBer>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default CommonLayout;