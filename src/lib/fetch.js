import { getToken, clearToken } from "./auth";
import { history } from "../routers/AppRouter";

const baseHeaders = {
  "Content-Type": "application/json",
};

const getAuthHeaders = () => {
  const token = getToken();

  return { ...baseHeaders, Authorization: `Bearer ${token}` };
};

const parseResponse = async (response) => {
  if (response.status >= 200 && response.status < 300) {
    const contentType = response.headers.get("Content-Type");

    if (contentType.includes("application/json")) {
      return await response.json();
    } else if (contentType.includes("image/")) {
      return await response.blob();
    } else {
      throw new Error("Unable to parse response");
    }
  } else if (response.status === 401) {
    clearToken();
    history.push("/");
  }
  const error = new Error(response.statusText);
  error.response = await response.text();
  throw error;
};

const get = async (url, secured = true) => {
  const response = await fetch(url, {
    method: "GET",
    headers: secured ? getAuthHeaders() : baseHeaders,
  });

  return await parseResponse(response);
};

const post = async (url, body, secured = true) => {
  const response = await fetch(url, {
    method: "POST",
    headers: secured ? getAuthHeaders() : baseHeaders,
    body: body ? JSON.stringify(body) : "",
  });

  return await parseResponse(response);
};

const put = async (url, body, secured = true) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: secured ? getAuthHeaders() : baseHeaders,
    body: JSON.stringify(body),
  });

  return await parseResponse(response);
};

const del = async (url, body, secured = true) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: secured ? getAuthHeaders() : baseHeaders,
    body: JSON.stringify(body),
  });

  return await parseResponse(response);
};

export { get, post, put, del };
