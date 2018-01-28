import React from 'react';

class QuestionsSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }
  toggleClick = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };


  render() {
    let DropdawnText;
    if (this.state.isOpened) {
      DropdawnText = <p>{this.props.dataFAQ.answer}</p>
    }

    return (
        <li onClick={this.toggleClick}>
          <h4 className="title title-cards title-dark margin-bottom-10">
              {this.props.dataFAQ.title}
          </h4>
          {DropdawnText}
        </li>
    )
  };
}

export default QuestionsSection;