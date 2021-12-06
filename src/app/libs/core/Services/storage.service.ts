import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
 // private storage: Storage | null = null;

  // @ts-ignore
  constructor(private storage: Storage) {
    // this.init();
  }

  async init(): Promise<Storage> {
     const storage = await this.storage.create();
    return await storage;
  }

  public async set(key: string, value: any) {
    this.storage = await this.init();
    this.storage.set(key, value);
  }

  public async get(key: string): Promise<any> {
    this.storage = await this.init();
    return await this.storage.get(key);
  }
}
