//this is file just has a hanful of react examples
import React, {Component, PropTypes} from 'react';

export default class Comp extends Component {

	//constructor
	constructor(props) {
		super(props);
		//this is where we create our states!
		this.state = {
			open: true
		};
	}

	//function to demonstrate toggling a state
	openToggle() {
		//toggling the state between true and false
		this.setState({
			open: !this.state.open
		});
	}

	//You can create functions in the react class too!...
	myAlert() {
		alert('this is your alert');
	}

	saveText() {
		//how to access a ref
		var myText = this.refs.newText.value;
		console.log(myText);
	}

	renderFalse() {

return (
      //You must return only ONE parent
      <div>
        {/* This is a JSX comment :) */}

        {/* How to access passed props */}
        <h2 className="compppp">{this.props.someText}</h2>
        {/* How to access props */}
        <h3>My name is {this.props.name}</h3>
        {/* How to call an internal function */}
        <button onClick={this.myAlert}>ALERT</button>
        {/* JSX does not allow self closing tags :/ */}
        <br></br>
        {/* How to bind a function*/}
        <button onClick= {this.openToggle.bind(this)}>toggle state</button>
        <br></br>
        <br></br>
        <h4>This is your text</h4>
        <textarea ref="newText" defaultValue={this.props.myTextArea}></textarea>
        <br></br>
        <button onClick= {this.saveText.bind(this)}>save text</button>
      </div>
    );

  }

  renderTrue(){

    return (
      //You must return only ONE parent
      <div>
        {/* This is a JSX comment :) */}

        {/* How to access passed props */}
        <h2 className="compppp">{this.props.someText}</h2>
        {/* How to access props */}
        <h3>My name is {this.props.name}</h3>
        {/* How to call an internal function */}
        <button onClick={this.myAlert}>ALERT</button>
        {/* JSX does not allow self closing tags :/ */}
        <br></br>
        {/* How to bind a function*/}
        <button onClick= {this.openToggle.bind(this)}>toggle state</button>
        <br></br>
        {/* How we use refs*/}
        {/*This line is rendered when the state is false*/}
        <h1> NOW YOU SEE ME </h1>
        <br></br>
        <br></br>
        <h4>This is your text</h4>
        <textarea type="text" ref="newText" defaultValue={this.props.myTextArea}></textarea>
        <br></br>
        <button onClick= {this.saveText.bind(this)}>save text</button>
      </div>
    );
  }

  //How we renders these objects
  render() {
    // Play with it...
    if(this.state.open){
      //functions require this.function_name()
      return(this.renderTrue());
    }else{
      console.log("Now you don't ;)");
      return(this.renderFalse());
    }
  }

}

//set prop types
Comp.propTypes = {
  name: PropTypes.string.isRequired,
  myTextArea: PropTypes.string.isRequired,
};

//set default prop values
Comp.defaultProps = {
  name: 'Zachary',
  myTextArea: 'default text',
};
