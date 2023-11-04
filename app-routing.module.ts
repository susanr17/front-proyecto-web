import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { LoginComponent } from './authentication/login/login.component';
import { InventoryComponent } from './dashboard/dashboard-components/inventary/inventory.component';
import { FormulasComponent } from './dashboard/dashboard-components/formulas/formulas.component';
import { CrearFormulaComponent } from './dashboard/dashboard-components/formulas/crear-formula/crear-formula.component';
import { VisualizarFormulaComponent } from './dashboard/dashboard-components/formulas/visualizar-formula/visualizar-formula.component';
import { AccesoGuard } from './guards/acceso.guard';
import { RolGuard } from './guards/rol.guard';
import { UsuariosComponent } from './dashboard/usuarios/usuarios.component';
import { ListaProduccionComponent } from './dashboard/dashboard-components/lista-produccion/lista-produccion.component';

const routes: Routes = [
  {
    path: "",
    component: BlankComponent,
    children: [
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
    ],
  },
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/home", pathMatch: "full" },
      { path: "home", component: DashboardComponent, canActivate: [AccesoGuard] },
      { path: "usuarios", component: UsuariosComponent, canActivate: [AccesoGuard, RolGuard]  },
      { path: "ingresarProduccion", component: ProductComponent, canActivate: [AccesoGuard]  },
      { path: "produccion", component: ListaProduccionComponent, canActivate: [AccesoGuard]  },
      { path: "formulas", component: FormulasComponent, canActivate: [AccesoGuard, RolGuard] },
      { path: "crearformula", component: CrearFormulaComponent, canActivate: [AccesoGuard, RolGuard]  },
      { path: "visualizarformula/:id", component: VisualizarFormulaComponent, canActivate: [AccesoGuard, RolGuard]  },
      { path: "inventario", component: InventoryComponent, canActivate: [AccesoGuard, RolGuard]  },
    ]

  },
  { path: "", redirectTo: "/login", pathMatch: "blank" },
  { path: "**",redirectTo: "/login", pathMatch: "blank" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
