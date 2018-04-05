import React, { Component } from 'react';

import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
class Comprar extends Component {
  render() {
    return (
<div>
 <DesktopBreakpoint>
 <div>comprar!</div>
 </DesktopBreakpoint>

<TabletBreakpoint>
 <div>Comprar</div>
 </TabletBreakpoint>

<PhoneBreakpoint>
 <div>Comprar</div>
 </PhoneBreakpoint>
 </div>


    );
  }
}



export default Comprar;

