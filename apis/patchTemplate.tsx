import axios from "axios";
import API_URL, { API_VERSION } from "../config/server";
import {
  ColorProfiles,
  FontProfile,
  ResumeInputsArray,
  ResumeLayoutObject,
} from "../store/types";
import getHeaders from "../utils/headers";

//Base URL for the API server.
const baseUrl = `${API_URL}/${API_VERSION}`;

const patchTemplate =
  <T extends unknown>(key: string) =>
  async (
    token: string = null,
    resumeId: string,
    body: { [key: string]: T }
  ) => {
    const res = await axios.patch(
      `${baseUrl}/resume/template/${key}/${resumeId}`,
      body,
      {
        headers: getHeaders(token),
      }
    );

    return res.data;
  };

export const patchInput = patchTemplate<ResumeInputsArray>("layout");
export const patchLayout = patchTemplate<ResumeLayoutObject>("layout");
export const patchFont = patchTemplate<FontProfile>("font");
export const patchColor = patchTemplate<ColorProfiles>("color");
export const patchSpacing = patchTemplate<number>("spacing");
