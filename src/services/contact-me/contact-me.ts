import axios from 'axios';


const sendEmail = async (name: string, email: string, message: string) => {

    // // api gateway url for contact me api
    const url = `https://vskztzgu5e.execute-api.us-east-1.amazonaws.com/develop/contact-me?name=${name}&email=${email}&description=${message}`;
    try {
        const response = await axios.post(url);
        console.log(response);
        return response;
    } catch(e) {
        console.log(e);
    }
}

export default sendEmail;