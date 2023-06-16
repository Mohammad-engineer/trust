import { useQuery, useMutation } from "@tanstack/react-query";
const fetchComments = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    if(!res.ok){
        throw new Error('failed to fetch comments');
    }
    return res.json();
}
