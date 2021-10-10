import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { KeyValuePair } from '../interfaces/key-value-pair.interface';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private db: Storage | null = null;

  constructor(
    private storage: Storage
  ) { }

  async init(): Promise<void> {
    this.db = await this.storage.create();
  }

  public async get(key: string): Promise<KeyValuePair> {
    return await this.storage.get(key);
  }

  public set(...args: KeyValuePair[]): void {
    args.forEach(arg => {
      console.log(...args);
      this.db.set(arg.key, arg.value);
    });
  }

  public remove(...args: string[]): void {
    args.forEach(arg => this.db.remove(arg));
  }
}
