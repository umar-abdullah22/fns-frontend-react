import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const baseURL = 'http://localhost:3300/api/auth';

export const GoogleLogin = async () => {
  try {
    const result = await axios.get(`${baseURL}/login`);
    console.log(result.data);
    // toast.success('Registered Successfully!');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
