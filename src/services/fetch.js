import axios from "axios";

const API_KEY = "atd6cpvbzP3Hi7gIx3SGTWQCGLcsQ45dmDIEdajI";
const URL = "https://api.nasa.gov/planetary/apod";

export const getPod = async () => {
  try {
    const response = await axios.get(`${URL}?api_key=${API_KEY}`);
    const data = await response.data;
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch (error) {
    console.error;
    return error.message;
  }
};

export const getPicsLastFiveDays = async (startDate, endDate) => {
  try {
    const response = await axios.get(
        `${URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`
      );
    const data = await response.data;
    if (response.status !== 200) {
        throw new Error("Failed to fetch data");
        }
        return data;
  } catch (error) {
    console.error;
    return error.message;
  }
};
