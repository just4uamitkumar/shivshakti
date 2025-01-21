export type devoteeType = {
  _id?: string;
  firstName?: string | undefined;
  middleName?: string | undefined;
  lastName?: string | undefined;
  mobile?: string | undefined;
  birthDate?: string | undefined;
  email?: string | undefined;
  weight?: string | undefined;
  height?: string | undefined;
  address1?: string | undefined;
  address2?: string | undefined;
  landMark?: string | undefined;
  country?: countryType | undefined;
  state?: stateType | undefined;
  city?: cityType | undefined;
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
  birthDate?: string | undefined;
  email?: string | undefined;
  weight?: string | undefined;
  height?: string | undefined;
  address1?: string | undefined;
  address2?: string | undefined;
  landMark?: string | undefined;
  country?: countryType | undefined;
  state?: string | undefined;
  city?: string | undefined;
  zipCode?: string | undefined;
  qualification?: string | undefined;
  hobbies?: string | undefined;
  comments?: string | undefined;
}

export type countryType = {
  id?: number | null | undefined;
  name?: string | null | undefined;
  iso2?: string | null | undefined;
  iso3?: string | null | undefined;
  phonecode?: number | null | undefined;
  capital: string | null | undefined;
  currency: string | null | undefined;
  native: string | null | undefined;
  emoji: string | null | undefined;
};

export type stateType = {
  id?: number | null | undefined;
  iso2?: string | null | undefined;
  name?: string | null | undefined;
};

export type cityType = {
  id?: number | null | undefined;
  latitude?: string | null | undefined;
  longitude?: string | null | undefined;
  name?: string | null | undefined;
};

const headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  "QmJPN0tPOGVMZGlFU3JSVTBXV0psQTM4SnFLbG01Z1dFWVVTUHRyRQ=="
);

export const requestOptions: RequestInit = {
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
