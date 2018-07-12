import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import { TreeSelect, Form } from 'antd'
const TreeNode = TreeSelect.TreeNode
const FormItem = Form.Item

@Form.create()
class CreateProduct extends React.Component {
  static propTypes = {
    Form: PropTypes.object.isRequired
  }
  onChange = (e) => {
    console.log(e)
  }
  render() {
    const { getFieldDecorator } = this.props.Form
    return <div  className = { styles.create }>
      <FormItem label =  "category">
        {
          getFieldDecorator('category', {
            rules:
          })
        }
      <TreeSelect
          showSearch
          style = { { width: 300 } }
          dropdownStyle = { { maxHeight: 400, overflow: 'auto' } }
          placeholder = "Please select" 
          allowClear
          treeDefaultExpandAll
          onChange = { this.onChange }
      >
        <TreeNode value = "xWDM & OADM" title = "xWDM & OADM" key = "0-1"></TreeNode>
        <TreeNode value = "Optical Transceivers" title = "Optical Transceivers" key = "random2" disabled  >
          <TreeNode value = "SFP Transceivers" title = "SFP Transceivers" key = "random3" />
          <TreeNode value = "SFP+ Transceivers" title = "SFP+ Transceivers" key = "random4" />
          <TreeNode value = "XFP Transceivers" title = "XFP Transceivers" key = "random5" />
          <TreeNode value = "25G/40G/100G Transceivers" title = "25G/40G/100G Transceivers" key = "random6" />
        </TreeNode>
        <TreeNode value = "Active Optical Cables" title = "Active Optical Cables" key = "0-1"></TreeNode>
      </TreeSelect>
      </FormItem>
    </div>
  }
}

export default CreateProduct