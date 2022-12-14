import { Asset } from './../components/interfaces/asset-dto';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

const URL = environment.URL;
@Injectable({
  providedIn: 'root',
})
export class AssetService {
  constructor(private http: HttpClient) {}

  upload(formData: FormData, id: number): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(URL + 'asset/' + id, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
  getAllasset(): Observable<Asset[]> {
    return this.http.get<Asset[]>(URL + 'asset');
  }
  addAssetToOrganization(id: Number, formdata: FormData) {
    return this.http.post(URL + 'asset/' + id, formdata);
  }
  deleteAsset(id: number): Observable<Asset> {
    return this.http.delete<Asset>(URL + 'asset/' + id);
  }
}
