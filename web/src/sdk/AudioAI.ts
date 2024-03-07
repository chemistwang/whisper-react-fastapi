import { fetchAudioToText } from "../api/service";

export default class AudioAI {
  async toText(audio: Blob) {
    const response = await fetchAudioToText(audio);
    return response.data;
  }
}
