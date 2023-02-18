import { APIPlace } from './types';

export class Api {
  static instance = new Api();

  private readonly endpoint = 'https://api.iky.su';
  private readonly types: any = {
    cinema: 'Кино',
    concerthall: 'Концер',
    theatre: 'Театр',
    museum: 'Музей',
    gallery: 'Галлерея',
    showRoom: 'А?',
    restaurant: 'Ресторан',
    other: 'Другое',
  };

  private constructor() {}

  private async request<T>(url: string): Promise<T> {
    return fetch(this.endpoint + url).then((res) => res.json());
  }

  async getList(): Promise<APIPlace[]> {
    const listResponse = await this.request<APIPlace[]>('/list');
    return listResponse;
  }

  getType(id: string): { id: string; label: string } {
    return {
      id,
      label: this.types[id] ?? 'Другое',
    };
  }
}

/// @ts-ignore
window.api = Api.instance;
