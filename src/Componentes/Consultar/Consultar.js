import React, { Component } from 'react';

import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
class Consultar extends Component {
  render() {
    return (
     <div>
 <DesktopBreakpoint>
 <div>Consultar</div>
 </DesktopBreakpoint>

<TabletBreakpoint>
 <div>Consultar</div>
 </TabletBreakpoint>

<PhoneBreakpoint>
 <div>Consultar</div>
 </PhoneBreakpoint>
 </div>
    );
  }
}

export default Consultar;
