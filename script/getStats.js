export const getStats = async (url,id) =>{
    let list = await axios.get(`${url}/${id}/`);
    console.log(list)
    let {data} = list
    return data
}