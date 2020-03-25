import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArquivosService } from 'src/app/services/arquivos.service';

@Component({
  selector: 'app-arquivo-list',
  templateUrl: './arquivo-list.component.html',
  styleUrls: ['./arquivo-list.component.css']
})
export class ArquivoListComponent implements OnInit {
  currentUser;
  params: any;
  name;
 username;
  email;
  arquivos;
  constructor(
    public authService: AuthService,
    private route: ActivatedRoute, //allow you to get params
    private router: Router,
    private arquivoService: ArquivosService
  ) {
   
    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username; // Set username
      this.email = profile.user.email; // Set e-mail
      console.log(profile)
    
    })
    this.route.params.subscribe((params: Params) => this.params= params); 
    this.arquivoService.getArquivos().subscribe(data=>{
      this.arquivos = data;
      console.log(data);
    })
   }

  ngOnInit() {
  }

}
