export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=L3MtwTQPPWfAXcfTQAIXsa95C2z2M2P2&q=${ category }&limit=8`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    const gifs = data.map( (img) => {
        return (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        )
    } );
    console.log(resp);
    return gifs;
};