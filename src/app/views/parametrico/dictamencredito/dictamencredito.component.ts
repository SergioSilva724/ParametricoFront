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
  selector: 'app-dictamencredito',
  standalone: true,
  templateUrl: './dictamencredito.component.html',
  styleUrl: './dictamencredito.component.scss',
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
export class DictamencreditoComponent {

}
