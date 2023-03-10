import { AxiosResponse } from "axios";
import axios from "../interceptor/axiosInstance";
import { IImage } from "../models/image.model";

const baseUrl: string = `${process.env.REACT_APP_BASE_URL}`;

const getImage =
  async () => {
    const response =
      await axios<AxiosResponse>(
        {
          method:
            "GET",
          url: `${baseUrl}rapids/Locate/GetSingle`,
        }
      );
    return response.data as IImage;
  };

export const imageService =
  {
    getImage,
  };
