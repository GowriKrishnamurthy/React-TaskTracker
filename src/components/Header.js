import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e) => {
        console.log(e)
    }
    return (
        <div className='header'>
            <h1 style ={headingStyle}>{title}</h1> 
            <Button color='green' text='Hello from Green' onClick={onClick} />
            <Button color='red' text='Hello from Red' onClick={onClick} />
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
