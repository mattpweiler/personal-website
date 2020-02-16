import axios from 'axios';


const sendEmail = async (name: string, email: string, message: string) => {

    // // api gateway url for contact me api
    const url = `https://vskztzgu5e.execute-api.us-east-1.amazonaws.com/develop/contact-me?name=${name}&email=${email}&description=${message}`;
    const config = {
        headers: {
            "Access-Control-Allow-Origin": "https://www.weilersworld.com/",
        }
    }
    try {
        const response = await axios.post(url, config);
        console.log(response);
        return response;
    } catch(e) {
        return e;
    }
}

export default sendEmail;