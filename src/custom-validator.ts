import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

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

  static mesmasSenhas(senha: string, confirmaSenha: string){
    return (formGroup: AbstractControl): ValidationErrors | null =>{
      const senhaControl = formGroup.get(senha);
      const confirmaSenhaControl = formGroup.get(confirmaSenha);

      if (!senhaControl || !confirmaSenhaControl){
        return null;
      }

      if (senhaControl.value !== confirmaSenhaControl.value){
        confirmaSenhaControl.setErrors({ senhasDiferentes: true});
        return { senhasDiferentes: true};
      }
      else{
        confirmaSenhaControl.setErrors(null);
        return null;
      }
    }
  }
}
