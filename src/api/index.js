


export const getDataPosts = async () => {
    const response = await fetch(process.env.REACT_APP_URL_API+'posts');
    const data = await response.json();
    return data;
} 

export const getDataUsers = async () => {
    const response = await fetch(process.env.REACT_APP_URL_API+'users');
    const data = await response.json();
    return data;
}

export const getAllDataPostsById = async (id) => {
    const response = await fetch(process.env.REACT_APP_URL_API+'posts?userId='+id);
    const data = await response.json();
    return data;
}