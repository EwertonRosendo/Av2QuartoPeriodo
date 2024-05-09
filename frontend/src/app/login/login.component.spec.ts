import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importe o HttpClientTestingModule
import { RouterTestingModule } from '@angular/router/testing'; // Importe o RouterTestingModule
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>; // Declara uma variável para manipular o componente durante os testes
  let componentInstance: LoginComponent;  // Declara uma variável para acessar as propriedades e métodos do componente durante os testes

  beforeEach(waitForAsync(() => { // Configura o ambiente de teste antes de executar cada teste
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule], // Adicione módulos necessários para o teste
      declarations: [LoginComponent], // Declare o componente a ser testado
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent); // Crie uma instância do LoginComponent
      componentInstance = fixture.componentInstance;  // Atribua a instância do LoginComponent a componentInstance
    });
  })); 

  it("verifica se o campo do email está vazio", () => {
    let emailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
    emailElement.value = ''; // Definir o campo de e-mail como vazio
    emailElement.dispatchEvent(new Event('input')); // Emitir um evento de input
    console.log(emailElement.value)
    
      

    expect(emailElement.value).toEqual(''); // Verificar se o campo de e-mail está vazio
  });
  
});
