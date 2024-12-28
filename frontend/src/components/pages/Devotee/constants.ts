export type templeType = {
  _id?: string;
  city?: string | undefined;
  description?: string | undefined;
  imgPath?: string | undefined;
  name?: string | undefined;
  state?: string | undefined;
  location?:{
    latitude?:number | string | undefined;
  longitude?:number | string | undefined;
  }
  latitude?:number | string | undefined;
  longitude?:number | string | undefined;
};

