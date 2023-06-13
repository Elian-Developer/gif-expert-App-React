export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8Vjv6M7AHew5xpCHGb5KARaQi6sPr1bf&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        image: img.images.downsized_medium.url
    }))

   /*  console.log(gifs) */

    return gifs;

}