import {Component} from 'react'

import './index.css'

class EditAndSave extends Component {
  state = {
    inputValue: '',
    editMode: false,
  }

  changeEditMode = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode,
    }))
  }

  onChangeValue = input => {
    this.setState({
      inputValue: input.target.value,
    })
  }

  render() {
    const {editMode, inputValue} = this.state
    const buttonText = editMode ? 'Edit' : 'Save'

    return (
      <div>
        <h1>Editable Text Input</h1>
        {editMode ? (
          <p>{inputValue}</p>
        ) : (
          <input type="text" onChange={this.onChangeValue} value={inputValue} />
        )}
        <button type="button" onClick={this.changeEditMode}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default EditAndSave
