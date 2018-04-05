import React, { Component } from 'react';
import '../estilos/Body.css';
import PropTypes from 'prop-types';
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';


/* <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1> */

class Body extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  }

  render() {
    const { body } = this.props;
    return (
<div>
<PhoneBreakpoint>
      <div>
        {body}
      </div>
      </PhoneBreakpoint>
      

      
<DesktopBreakpoint>
      <div>
        {body}
      </div>
      </DesktopBreakpoint>
      

<TabletBreakpoint>
      <div>
        {body}
      </div>
      </TabletBreakpoint>
      </div>

    );
  }
}


export default Body;