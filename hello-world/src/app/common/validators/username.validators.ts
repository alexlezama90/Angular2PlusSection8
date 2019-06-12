import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) //|| != -1
            return { cannotContainSpace: true };

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log('ok');
                if (control.value === 'alexlezama90')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 5000);
        });
    }
}