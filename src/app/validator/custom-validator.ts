import { AbstractControl } from "@angular/forms";

export class CustomValidator {
  static contemEspacos(control: AbstractControl){
    if(!control.value){
      return null;
    }
    let resultado = control.value.indexOf(' ') != -1;

    if (resultado){
      control.setErrors({ contemEspacos: true});
      return { contemEspacos: true};
    }
    else{
      control.setErrors(null);
      return null;
    }
  }

}
