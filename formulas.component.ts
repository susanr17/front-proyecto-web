import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CuadroCalcularComponent } from 'src/app/components/cuadro-calcular/cuadro-calcular.component';
import { CuadroDialogoComponent } from 'src/app/components/cuadro-dialogo/cuadro-dialogo.component';
import { FormulaService } from 'src/app/services/formula.service';

export interface Formula {
  id: number;
  name: string;
  date: string; 
}

@Component({
  selector: 'app-formulas',
  templateUrl: './formulas.component.html',
  styleUrls: ['./formulas.component.scss']
})
export class FormulasComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'date','action', 'utilidad'];
  
 
  form!: FormGroup;
  idProduct?: number;

  dataSource=  new MatTableDataSource<Formula[]>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  constructor(
    private formulaService: FormulaService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  
    this.getFormulas();
  }

  getFormulas(){
    this.formulaService.getFormulas().subscribe((response) => {
    this.dataSource = new MatTableDataSource(response.response);
    this.dataSource.paginator = this.paginator;

    });
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  eliminar(idFormula: any){
    
    const msg = '¿Desea eliminar la fórmula?';
    const cuadro = this.dialog.open(CuadroDialogoComponent, {
      data: { msg }
    });


    cuadro.afterClosed().subscribe((result) => {
      if (result === 'true') {
       this.formulaService.eliminarFormula(parseInt(idFormula)).subscribe((response) => {
        this.snackBar.open(response.mensaje, 'Cerrar', {
          duration: 2000,
        });
        this.getFormulas();
      });
      }
    });

  }
  editar(idProducto: number) {
      this.router.navigate(['/visualizarformula', idProducto]);
  }
  

  calcular(id: number){
    const msg = 'Ingresa los campos para calcular utilidad';
    const cuadro = this.dialog.open(CuadroCalcularComponent, {
      data: { msg,  idFormula: id }
    });


    cuadro.afterClosed().subscribe((result) => {
    });
  }

}
