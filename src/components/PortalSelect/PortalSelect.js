import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import "./PortalSelect.css"


const PortalSelect = (props) => {

    // const { title, options, optionsKey, handleSelection } = props;

    // const onSelection = (e) => {
    //     handleSelection(e.target.value);
    // }

    // return (
    //     <div className="c-portal-select">

    //         <Form.Group>
    //             {title ? <Form.Label>{title}</Form.Label> : null}
    //             <Form.Control as="select" onChange={onSelection} value={optionsKey ? optionsKey : -1}>
    //                 {!optionsKey ? <option key={"-1"} value={-1}>{title}</option> : null}
    //                 {options.map(option => <option key={option.key} value={option.key}>{option.value}</option>)}
    //             </Form.Control>
    //         </Form.Group>
    //     </div>
    // );

    //-------------------------------------------------------------------

    const { options,handleSelection } = props

    const onSelection = (e) => {
        handleSelection(e.target.value);
   
    }

    return (
        <div className="c-portal-select">

            {options.map(option => (option.key===1) ?
                 <button onClick={onSelection} key={option.key} value={option.key} autoFocus >{option.value}</button>
                 :
                 <button onClick={onSelection} key={option.key} value={option.key}>{option.value}</button>
                        )
            }    
    
            
        </div>

    )
};


// PortalSelect.propTypes = {
//     title: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.object),
//     optionsKey: PropTypes.string.isRequired,
//     handleSelection: PropTypes.func
// };

PortalSelect.propTypes = {    
    options: PropTypes.arrayOf(PropTypes.object),    
    handleSelection: PropTypes.func
};


export default PortalSelect;
