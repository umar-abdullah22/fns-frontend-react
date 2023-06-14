import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const baseURL = 'http://localhost:3300/api/hiring';

export const RegisterHiring = async (payload) => {
  try {
    const formData = new FormData();
    formData.append('userName', payload.userName);
    formData.append('phoneNumber', payload.phoneNumber);
    formData.append('email', payload.email);
    formData.append('image', payload.image);
    formData.append('position', payload.position);
    formData.append('rollNumber', payload.rollNumber);
    const result = await axios.post(`${baseURL}/register`, formData);
    console.log(result.data);
    toast.success('Registered Successfully!');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
