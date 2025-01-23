
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

export type iso = {
  stateIso2:string | null | undefined
  countryIso2:string | null | undefined
}

export const countryApi = async () => {
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries`,
    requestOptions
  );
  const result = await response.text();
  const data = JSON.parse(result);
  return data;
};

export const stateApi = async (input:string) => {
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${input}/states`,
    requestOptions
  );
  const result = await response.text();
  const data = JSON.parse(result);
  return data;
}

export const cityApi = async (input:iso) => {
  const response = await fetch(
    `https://api.countrystatecity.in/v1/countries/${input.countryIso2}/states/${input.stateIso2}/cities`,
    requestOptions
  );
  const result = await response.text();
  const data = JSON.parse(result);
  return data;
}



  // Fetch cities when a state is selected
 // const fetchCities = (stateCode: stateType) => {
    // fetch(
    //   `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode?.iso2}/cities`,
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => {
    //     const data = JSON.parse(result);
    //     setCities(data);
    //   })
    //   .catch((error) => console.log("error", error));
 // };


