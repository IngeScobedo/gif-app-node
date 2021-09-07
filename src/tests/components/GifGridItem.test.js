import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Testing - <GifGridItem/> ", () => {
    let title = 'GifMeme';
    let url = 'https://media2.giphy.com/media/liBsVeLILcyaY/giphy.gif?cid=e2157891xehcho4qeilo5iaijtazd6hkv6ooyrzxaxl2j88h&rid=giphy.gif&ct=g'
  const wrapper = shallow(<GifGridItem 
      title={title}
      url={url}
      />);

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe Tener un parrafo con el titulo', () => {
      const p = wrapper.find('p').text();
      expect(p).toBe(title)
  })
  
  test('Debe tener la imagen desde la url enviada y el alt como el titulo', () => {
      let img = wrapper.find('img');
      expect(img.prop('src')).toBe(url);
      expect(img.prop('alt')).toBe(title);
  })
  
  test('Debe tener 3 clases en total', () => {
      let classExp = 'animate__backInDown';
      let div = wrapper.find('div').prop('className');
      expect(div.includes(classExp)).toBe(true)
    })
  
});
