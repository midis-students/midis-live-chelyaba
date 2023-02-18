export type APIPlace = {
  logo: string;
  phones: Array<string>;
  address: string;
  geoPoint: [number, number];
  type:
    | 'cinema'
    | 'concerthall'
    | 'theatre'
    | 'museum'
    | 'gallery'
    | 'showRoom'
    | 'restaurant'
    | 'other'; // lowercase plz
  name: string;
  price: number;
};
