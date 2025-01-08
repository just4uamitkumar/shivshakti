export type devoteeType = {
  _id?: string;
  firstName?: string | undefined;
  middleName?: string | undefined;
  lastName?: string | undefined;
  mobile?: string | undefined;
  birthDate?:string | undefined;
  email?:string | undefined;
  weight?:string | undefined;
  height?:string | undefined;
  address1?:string | undefined;
  address2?:string | undefined;
  landMark?:string | undefined;
  country?: string | undefined;
  state?: string | undefined;
  city?: string | undefined;
  zipCode?: string | undefined;
  qualification?: string | undefined;
  hobbies?: string | undefined;
  comments?: string | undefined;
};

export interface devotee {
  _id: string;
  firstName?: string | undefined;
  middleName?: string | undefined;
  lastName?: string | undefined;
  mobile?: string | undefined;
  birthDate?:string | undefined;
  email?:string | undefined;
  weight?:string | undefined;
  height?:string | undefined;
  address1?:string | undefined;
  address2?:string | undefined;
  landMark?:string | undefined;
  country?: string | undefined;
  state?: string | undefined;
  city?: string | undefined;
  zipCode?: string | undefined;
  qualification?: string | undefined;
  hobbies?: string | undefined;
  comments?: string | undefined;
};

export type countryType = {
  id?: number | undefined,
  name?: string | undefined,
  iso2?: string | undefined,
  iso3?: string | undefined,
  phonecode?: number | undefined,
  capital: string | undefined,
  currency: string | undefined,
  native: string | undefined,
  emoji: string | undefined,
}



export type place = {
  name?:string
  iso2?:string
}


const headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  "QmJPN0tPOGVMZGlFU3JSVTBXV0psQTM4SnFLbG01Z1dFWVVTUHRyRQ=="
);

export const requestOptions:RequestInit = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};





// Fetch countries on component load
  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.com/v3.1/all")
  //     .then((response) => {
  //       const countryData = response.data.map((country) => ({
  //         name: country.name.common,
  //         code: country.cca2, // ISO code
  //       }));
  //       setCountries(countryData);
  //     })
  //     .catch((error) => console.error("Error fetching countries:", error));
  // }, []);

