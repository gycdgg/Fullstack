import React from 'react'
import { Menu } from '../common'
import PropTypes from 'prop-types'
/**
 * mock data
 * products list
 * use array and array in array
 * array in array. the first value is sub category
 */
const title = 'Product list'
const mockNavi = [
  [ 'xWDM & OADM', 'CWDM Mux/Demuxs', 'CWDM OADMs', 'DWDM Mux/Demuxs', 'DWDM OADMs', 'AAWG', 'CCWDM Modules', 'LAN WDM' ],
  [ 'Optical Transceivers', [ 'SFP Transceivers', '1000BASE SFP', 'Copper SFP', 'BiDi SFP', 'CWDM SFP', 'DWDM SFP' ], 
  [ 'SFP+ Transceivers', '10G SFP+', 'BiDi SFP+', 'CWDM SFP+', 'DWDM SFP+' ], [ 'XFP Transceivers', '10G XFP', 'BiDi XFP', 'CWDM XFP', 'DWDM XFP' ], 
  [ '25G/40G/100G Transceivers', '25G SFP28', '40G QSFP+', '100G QSFP28', 'CFP/CFP2/CFP4/CXP' ]],
  [ 'Active Optical Cables', '10G SFP+ AOC', '25G SFP28 AOC', '40G QSFP+ AOC', '56G QSFP+  AOC', '100G QSFP28 AOC' ],
  [ 'Direct Attach Cables', '10G SFP+  DAC', '25G SFP28 DAC', '40G QSFP+  DAC', '56G QSFP+  DAC', '100G QSFP28 DAC' ],
  [ 'MTP/MPO Fiber Cables', 'MPO Cables', 'MTP Cables', 'MTP/MPO Patch Panel', 'MTP/MPO Cassettes', 'MTP/MPO Loopbacks' ],
  [	'Fiber Patch Cables',	'Fiber Patch Cord', 'Pre-Terminated Patch Cords',	'Fiber Optic Pigtail', 'Fiber Optic Adapter',	'Fiber Optic Connector',	 'Fast Connector', 'OTDR Launch Cable'	],
  [ 'Passive Components', 'PLC Splitter', 'FBT Coupler', 'Attenuators', 'Optical Switches', 'WDM Filters' ],
  [ 'Optical Amplifiers', 'DWDM EDFA', 'Fixed Gain EDFA', 'CATV EDFA', 'Raman Amplifier', 'Dispersion Compensation' ]
]
class ProductWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  constructor(props) {
    super(props)
  }

  render() {
    return <Menu navi = { mockNavi } { ...this.props } title = { title } >
      { this.props.children }
    </Menu>
  }
}

export default ProductWrapper