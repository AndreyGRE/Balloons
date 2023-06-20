import React, {Component} from 'react';
import './puz.css';


export default class Puz extends Component {

    

    render() {
        const {onDelete,onRed,id,key,className} = this.props;
            return (
            
                <p 
                    className={className}
                    onMouseOver={onRed}
                    onClick={onDelete}
                    id={id}
                    key={key}
                    
                />
                
                );
    }
}