import axios from 'axios';

export default async () => {
    try{
        let { data } = await axios.get('https://api.adviceslip.com/advice');
        return data.slip.advice;
    }
    catch (error){
        return error;
    }
}