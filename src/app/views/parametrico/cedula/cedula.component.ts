import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  AlignDirective,
  FormSelectDirective,
  FormModule,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
} from '@coreui/angular-pro';

@Component({
  selector: 'app-cedula',
  standalone: true,
  templateUrl: './cedula.component.html',
  styleUrl: './cedula.component.scss',
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
    FormSelectDirective,
    FormModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormsModule,
  ]
})
export class CedulaComponent {

  cual1=0
  cual2=0
  cual3=0
  cual4=0
  cual5=0
  cual6=0
  cual7=0

  cuant1=0
  cuant2=0
  cuant3=0
  cuant4=0
  cuant5=0
  cuant6=0
  cuant7=0

}
