import getGifs from "../../helpers/getGifs";

describe('testing helper GetGifs', ()=>{
    test('Retorna un objeto con 5 elementos', async() => {
        let gifs = await getGifs('baby');
        expect(gifs.length).toBe(5)
    })
    test('No regresa nada ', async() => {
        let gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
    
} )