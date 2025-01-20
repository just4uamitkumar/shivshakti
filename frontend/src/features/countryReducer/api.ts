
const headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  "QmJPN0tPOGVMZGlFU3JSVTBXV0psQTM4SnFLbG01Z1dFWVVTUHRyRQ=="
);

const requestOptions: RequestInit = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

export const getAPI = async () => {
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries`,
    requestOptions
  );
  const result = await response.text();
  const data = JSON.parse(result);
  return data;
};

