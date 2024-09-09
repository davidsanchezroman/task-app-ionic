import { AbstractControl } from "@angular/forms";


export class CustomValidators{

static matchValues(toCompere: AbstractControl){

    return (control: AbstractControl) => {
        
      if(control.value !== toCompere.value)  return { noMatch: true}
      return null
}
}

}