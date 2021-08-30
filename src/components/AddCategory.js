import  {useState} from 'react'
import PropTypes from 'prop-types';
import './AddCategory.css'

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('Search...')
    let handleInputChange = (e) => {

        let nValue = e.target.value
        setInputValue(nValue)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //setCategories((categories) => [...categories, nValue])
        setCategories(category =>[inputValue, ...category ])
        resetInput()
    }
    const resetInput = () => {
        setInputValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            onClick={resetInput}
          />
        </form>
    )
}
AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired,
}
export default AddCategory
