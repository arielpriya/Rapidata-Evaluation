import { AxiosResponse } from "axios";
import axios from "../interceptor/axiosInstance";
import { IBoundingBox } from "../models/boundingBox.model";
import { IImage } from "../models/image.model";

const baseUrl: string = `${process.env.REACT_APP_BASE_URL}`;


  const saveBoundingBox =
  async (boundingBox:IBoundingBox) => {
    const response =
      await axios<AxiosResponse>(
        {
          method:
            "POST",
          url: `${baseUrl}rapids/Locate/GetSingle`,
          data: boundingBox
        }
      );
    return response.data as IImage;
  };

export const boundingBoxService =
  {
    saveBoundingBox
  };
