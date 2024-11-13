import { Component } from '@angular/core';
import {
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  TableDirective,
  TableColorDirective,
  TableActiveDirective,
  BorderDirective,
  AlignDirective
} from '@coreui/angular-pro';

@Component({
  selector: 'app-pacempresarial',
  standalone: true,
  templateUrl: './pacempresarial.component.html',
  styleUrl: './pacempresarial.component.scss',
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    TableColorDirective,
    TableActiveDirective,
    BorderDirective,
    AlignDirective,
  ]
})
export class PacempresarialComponent {

}
