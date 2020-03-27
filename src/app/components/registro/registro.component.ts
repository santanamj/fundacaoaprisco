import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';
import { AuthService } from '../services/auth.service';
import { RegistroService } from '../services/registro.service';
import { CepService } from '../services/cep.service';
import { FormValidations } from '../services/form-validations';
import { VendedorService } from '../services/vendedor.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  messageClass;
  message;
  processing = false;
  form;
  Listgrupos;
  vendedores;
  sexo;
  Vendedor;
  endereco;
  status;
  numerotitulo;
  public mask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskcel = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public maskcpf = [  /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
};

// Initialized to specific date (09.10.2018).
public model: any = { date: { year: 2018, month: 10, day: 9 } };
  constructor(
   private formBuild: FormBuilder,
   private router: Router,
   private authService: AuthService,
   private registroService: RegistroService,
   private cepService: CepService,
   private vendedorService: VendedorService
  ) {
    this.createForm();
    this.grupos();
    this.vendedor();
    this.form = this.formBuild.group({
      nome: [''],
      email: [''],
      telefone:[''],
      celular:[''],
      celular1:[''],
      CPF:[''],
      RG: [''],
      titulo:[''],
      codgru:[''],   
      sexo:[''],
      datnsc: [''],
      dtaquisicao:[''],
      privenc:[''],
      registroProfissional:[''],
      codvnd:[''],
      status: [''],
      observacao: [''],
      
      endereco: this.formBuild.group({
        cep: ['', [Validators.required, FormValidations.cepValidator]],
        numero: ['' ],
        complemento: [''],
        rua: [''],
        bairro: [''],
        cidade: [''],
        estado: [''],
       
      })          
})
   }
   
   createForm(){
     
   }
   registroSubmit(){
     const registerSocio = this.form.value;
     const numerotitulo = {
      _id: this.numerotitulo[0]._id,
      numerotitulo: parseInt(this.numerotitulo[0].valor) + 1
    }
     console.log(registerSocio)
     this.registroService.newAssociado(registerSocio).subscribe(data =>{
      if (!data) {
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data; // Return error message
        this.processing = false; // Enable submit button       
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.message = data; // Return success message     
        // Clear form data after two seconds
        setTimeout(() => {        
          this.processing = false; // Enable submit button
          this.message = false; // Erase error/success message
          this.form.reset(); // Reset all form fields          
        }, 2000);
      }
     })
   } 
   consultaCEP(value) {
    const cep = this.form.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados) {
    // this.form.setValue({});

    this.form.patchValue({
      numerotitulo: this.numerotitulo[0].valor,
      endereco: {
        rua: dados.logradouro,
        //cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      },
     
    });
}
  grupos(){
    this.registroService.grupos().subscribe(data=>{
      this.Listgrupos = data;
      console.log(this.Listgrupos)
    })
  }
  vendedor(){
    this.vendedorService.getAllVendedores().subscribe(data=>{
      this.vendedores = data;
      console.log(this.vendedores)
    })
  }
  getNumerotitulo(){
    this.registroService.numerotitulo().subscribe(data=>{
      this.numerotitulo = data;
      console.log(this.numerotitulo)
    })
  }
  ngOnInit() {
   this.getNumerotitulo();
  }

  
}
