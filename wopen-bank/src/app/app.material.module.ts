import { ProviderAst } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";

const materialModules= [MatDialogModule]

@NgModule({
    declarations: [

    ],

    imports: [
        materialModules
    ],
    exports: [
        materialModules
    ],
    providers: [

    ],
    bootstrap: [],
    entryComponents: [
        
    ]
})
export class MaterialModules{}