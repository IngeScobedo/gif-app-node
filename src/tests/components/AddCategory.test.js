import {shallow} from 'enzyme'
import AddCategory from '../../components/AddCategory'


describe('Testing <AddCategory/>', ()=>{

    let setCategories = jest.fn();

    const value = 'hello world';

    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)

    })
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto', () => {
        let input = wrapper.find('input');
        input.simulate('click');
        input.simulate( 'change',{ target: {value} });
        expect(wrapper.find('p').text()).toBe(value);
    })
    test('No debe de poster la caja de texto', () => {
        let input = wrapper.find('input');
        input.simulate('click');
        wrapper.find('form').simulate('submit', {preventDefault(){ }} );
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Debe de llamar al setCategories y limpiar la caja de texto', () => {
        //1.- Simular inputChange
        let input = wrapper.find('input');
        input.simulate('click');
        input.simulate( 'change',{ target: {value} });
        expect(wrapper.find('p').text()).toBe(value);
        //2.- Simular submit
        wrapper.find('form').simulate('submit', {preventDefault(){ }} );        
        //3.- SetCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalledTimes(1);
        //4.- El valor del input debe estar vacio
        expect(input.text()).toBe('')
    })
    
} )

