const getGifs = async ( category ) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?api_key=iA39iJnWzk5bUHe4cgfuJC9ZT6RniYOf&q=${encodeURI(category)}&limit=5&rating=r`;
    let res = await fetch(url);
    let { data } = await res.json();
    let gifs = data.map(({ id, title, images }) => {
      let titleN = title.indexOf(' ')
      let newTitle = title.substring(0, titleN)
      console.log(newTitle);
      return {
        id,
        title: newTitle,
        url: images?.downsized_medium.url,
      };
    });
    return gifs
  };

  export default getGifs