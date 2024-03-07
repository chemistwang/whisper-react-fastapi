import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_API_PREFIX,
});

export const fetchAudioToText = async (audio: Blob) => {
  const formData = new FormData();

  formData.append("audio", audio);
  formData.append("timestamp", String(+new Date()));

  return service.post("/audioToText", formData);
};
