import {MatButtonModule ,MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
    imports:[MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule],
    exports:[MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule],
})
export class MaterialModule { }
