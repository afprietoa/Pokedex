export const getPokemon = async (url) =>{
    let list = await axios.get(url);
    console.log(list)
    let {data} = list
    return data
}