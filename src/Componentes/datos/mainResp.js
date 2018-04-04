import ResponsiveMenu from 'react-responsive-html-menu';
import React, { Component } from 'react';
import menu from 'menu';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';


class mainResp extends Component {
  render() {
    return (
    	<ResponsiveMenu
    list={datos}   // Required Array of Objects - List of links 
    className="menuPhone" 
    className="menuTablet"
    className="menuDesk"
    
    
    />  
 )
}
}
export default mainResp;
