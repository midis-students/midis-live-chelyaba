export type APIPlace = {
  id: string;
  logo: string;
  phones: Array<string>;
  address: string;
  geoPoint: [number, number];
  time: string;
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
