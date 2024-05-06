import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importe o HttpClientTestingModule
import { RouterTestingModule } from '@angular/router/testing'; // Importe o RouterTestingModule
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let componentInstance: LoginComponent;  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule], // Adicione o HttpClientTestingModule e o RouterTestingModule aos imports
      declarations: [LoginComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent); // Crie uma instância do LoginComponent
    componentInstance = fixture.componentInstance;  // Atribua a instância do LoginComponent a componentInstance
  }); 

  it("it email or password is in required state", () => {
    fixture.detectChanges(); // Detecte as mudanças no componente
    fixture.whenStable().then(() =>{ // Aguarde até que o estado do componente seja estável
      const emailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email'); // Encontre o elemento de entrada de e-mail no DOM
      emailElement.value = 'lucas_pereira.99@hotmail.com'; // Defina o valor do campo de e-mail
      emailElement.dispatchEvent(new Event('input')); // Simule um evento de entrada para refletir a mudança de valor do campo de e-mail

      const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password'); // Encontre o elemento de entrada de senha no DOM
      passwordElement.value = '123456'; // Defina o valor do campo de senha
      passwordElement.dispatchEvent(new Event('input')); // Simule um evento de entrada para refletir a mudança de valor do campo de senha

      fixture.detectChanges(); // Detecte as mudanças no componente após as alterações
      fixture.whenStable().then(() => { // Aguarde até que o estado do componente seja estável após as alterações
        const btnElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#button'); // Encontre o elemento do botão no DOM
        expect(btnElement.disabled).toBeFalsy(); // Verifique se o botão não está desativado
        expect(componentInstance.formUser.get('email')?.value).toEqual('lucas_pereira.99@hotmail.com'); // Verifique se o valor do campo de e-mail no formulário é igual ao valor esperado
      });
    });
  });
});
