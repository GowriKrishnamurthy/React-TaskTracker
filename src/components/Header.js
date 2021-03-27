import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <div className='header'>
            <h1 style ={headingStyle}>{title}</h1> 
            <Button 
            color = {showAdd? 'red':'green'} 
            text = {showAdd? 'Close':'Add'} 
            onClick={onAdd} />
        </div> 
    )
}
Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
const headingStyle= {
    color:'blue', backgroundColor:'lightblue'
}

export default Header
