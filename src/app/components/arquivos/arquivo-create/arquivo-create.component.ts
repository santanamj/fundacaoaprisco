import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArquivosService } from 'src/app/services/arquivos.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-arquivo-create',
  templateUrl: './arquivo-create.component.html',
  styleUrls: ['./arquivo-create.component.css']
})
export class ArquivoCreateComponent implements OnInit {
  form;
  load = false;
  message;
  constructor(
    private formBuilder: FormBuilder,
    private arquivoService: ArquivosService,
    private auth: AuthService
    ) {
      this.createArquivo();
     }
     createArquivo(){
      
       this.form = this.formBuilder.group({
        title:['', Validators.required],
        dataArquivo: ['', Validators.required],
        files:[null, Validators.required]
       })
     }
     fileChangeEvent(event: any) {

      if(event.target.files.length > 0) {
          let files = event.target.files[0];
          this.form.get('files').setValue(files);
          console.log(files);
        }
      }
      arquivoSubmit(){
        this.load =true;
      const formData = new FormData();
      formData.append('files[]', this.form.get('files').value);
      formData.append('title', this.form.get('title').value);
      formData.append('dataArquivo', this.form.get('dataArquivo').value); 
      
      this.arquivoService.addArquivo(formData).subscribe((data)=>{
        
       if(data.success == true){  
         console.log(data.success)
        this.form.reset();
        this.load =false; 
       }
         
      })
    }

  ngOnInit() {
  }

}
