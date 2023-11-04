import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiUrl = `${environment.url}ProductoInventario/`;
  constructor(private http: HttpClient) { }

  getInventory(){
    return this.http.get<any>(`${this.apiUrl}Lista`)
  }

  guardarInventario(form:any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}Guardar`, JSON.stringify(form), { headers });
  }

  editarProductoInventario(form:any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}Editar`, JSON.stringify(form), { headers });
  }

  eliminarProductoInventario(idProducto: number){
    return this.http.delete<any>(`${this.apiUrl}Eliminar/${idProducto}`);
  }

  getProductoInventarioById(idProducto: number){
    return this.http.get<any>(`${this.apiUrl}Obtener/${idProducto}`)
  }

  
}
