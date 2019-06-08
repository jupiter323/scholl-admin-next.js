import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  red: { position: 'relative', color: '#fff', borderColor: '#fff', border: '1px solid', backgroundColor: '#db1d41', height: '19px', width: '19px', borderRadius: '50%' },
  greenFilled: { position: 'relative', color: '#fff', borderColor: '#32955c', border: '1px solid', backgroundColor: '#32955c', height: '19px', width: '19px', borderRadius: '50%' },
  greenBorderOnly: { position: 'relative', color: '#32955c', borderColor: '#32955c', border: '1px solid', backgroundColor: '#fff', height: '19px', width: '19px', borderRadius: '50%' },
  plain: { position: 'relative', color: '#a6a8ab', border: '1px solid', borderColor: '#a6a8ab', height: '19px', width: '19px', borderRadius: '50%' },
}

class BubbleGroup extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      selected: this.props.question.studentChoice,
      correct: null,
    }
  }

  componentDidMount = () => {
    const { question: {studentChoice } }= this.props
    this.setState({selected: studentChoice}, () => this.checkIfCorrect(this.state.selected));
  }

  onHandleBubbleChange = (event, letter) => {
    if (this.props.question.studentChoice === ""){
      this.setState({selected: event.target.value},
       () => this.checkIfCorrect(letter))
    }
  }

// clears state when selected button is clicked again, unless it was studentChoice from props
  onSelectedBubbleClick = (event) => {
    const { selected } = this.state;
    if (this.props.question.studentChoice === ""){
      if (selected === event.target.value){
        this.setState({selected: ""})
      }
    }
  }

  checkIfCorrect = (letter) => {
    const { question } = this.props;
    if(letter === question.answer) {
      this.setState({correct: true});
    }else{
      this.setState({correct: false})
    }
  }

  mapEmptyBubbles = (id) => {
    const letters = ["A", "B", "C", "D"];
    return letters.map(letter => (
      <li key={letter}>
        <form>
          <input
            type="radio"
            id={`${id}${letter}`}
            name="letter"
            value={letter}
            checked={this.state.selected === letter}
            onChange={(event) => this.onHandleBubbleChange(event, letter)}
            onClick={(event)=> this.onSelectedBubbleClick(event)}
            />
          <label
            htmlFor={`${id}${letter}`}
            style={this.state.selected ? this.renderBubbleStyle(letter) : styles.plain}
            >
          <span style={{ display: 'block', marginTop: '2px', paddingLeft: "4.5px" }}>{letter}</span>
          </label>
        </form>
      </li>
    ))
  }

  renderBubbleStyle = ( letter ) => {
    const { correct, selected } = this.state;
    const { question: { answer } } = this.props;
    if (selected === letter && correct) {
      return styles.greenFilled
    }
    if (selected === letter && !correct) {
      return styles.red
    }
    if (letter !== selected && letter === !answer) {
      return styles.plain
    }if(letter !== selected && letter === answer){
      return styles.greenBorderOnly
    }
    return styles.plain
  }


  render() {
    const { question: { id } } = this.props
      return (
        <React.Fragment>
          {this.mapEmptyBubbles(id)}
        </React.Fragment>
      )
  }
}

BubbleGroup.propTypes = {
  question: PropTypes.object.isRequired,
}

export default BubbleGroup;
