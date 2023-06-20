import React, {Component} from 'react';
import './pole.css';
import Puz from '../Puz';

export default class Pole extends Component {
    constructor(props){
        super(props)     
        this.state = {
            puzuriki : [],
            collor : []
        }
        this.onDelete = this.onDelete.bind(this)
        this.onRed = this.onRed.bind(this)
        this.reset = this.reset.bind(this)
        this.reset2 = this.reset2.bind(this)
    }
        reset2 = () =>{
            let resetPuz = [];
            for (let i = 0; i < this.props.a; i++) {
                resetPuz.push(
                    <Puz
                        className= {
                            this.state.collor[i]
                        }
                        key= {i}
                        id = {i}
                        onRed={this.onRed} 
                        onDelete={this.onDelete}
                    />
                )   
            }
            this.setState({
                puzuriki : resetPuz
            })
            
        }
        reset = () =>{
            let resetPuz = [];
            let collorStart =[]
                for (let l = 0; l< this.props.a; l++){
                    collorStart.push("puz")
                }
            for (let i = 0; i < this.props.a; i++) {
                
                resetPuz.push(
                    <Puz
                        className= {"puz"}
                        key= {i}
                        id = {i}
                        onRed={this.onRed} 
                        onDelete={this.onDelete}
                    />
                )   
            }
            this.setState({
                puzuriki : resetPuz,
                collor : collorStart
            })
            
        }

        onDelete = (e) =>{
            let collor2 = this.state.collor
            collor2[e.target.id]="puz del"
            this.setState({
                collor : collor2
            })
            this.reset2()
        }
       
        onRed = (e) =>{
            let collor2 = this.state.collor
            if (e.target.classList == 'puz') {
                collor2[e.target.id]="puz red"}
            if (e.target.classList == 'puz red') {
                collor2[e.target.id]="puz"
            } 
            this.setState({
                collor : collor2
            })
            this.reset2()
        }
          
    render() {
            return (
                <div className="pole">
                    {this.state.puzuriki} 
                    <button 
                        className='reset'
                        onClick={this.reset}
                        
                        >
                        Восстановить
                    </button> 
                </div> 
                );
    }
}

