import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Modal from 'react-modal'

class MyClass extends React.Component{

    constructor(){
        super()
        this.state={
            isActive:false
        }
    }
    toggleModal=()=>{
        this.setState({
            isActive:!this.state.isActive
        })
    }
    render(){
        return(
            <section>
                <button onClick={this.toggleModal}>Popup</button>

                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    Hello from React Modal
                    <button onClick={this.toggleModal}>Hide</button>

                </Modal>
            </section>
        )
    }
}

class Input extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            isActive:false

        }
    }
    onInputChanged=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleClick=()=>
    {
        console.log('Submit');
    }
    toggleModal=()=>{
        this.setState({
            isActive:!this.state.isActive
        })
    }
    render(){
        return(
            <section>
                <input type="text" value={this.state.name} onChange={this.onInputChanged}/>
                <button onClick={this.toggleModal} disabled={this.state.name.length?false:true} type="submit" >Submit</button>

                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div>
                        <p>{this.state.name}</p>
                    </div>
                </Modal>
            </section>
        )
    }
}

ReactDOM.render(<Input />, document.getElementById('root'));
registerServiceWorker();
