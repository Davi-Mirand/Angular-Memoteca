import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,

  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {


  pensamento: Pensamento = {

    conteudo: "",
    autoria: "",
    modelo:"modelo1"
  }

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/ListarPensamentos'])
    })
  }

  cancelar() {
    this.router.navigate(['/ListarPensamentos']);
    alert("Pensamento Cancelado com sucesso.");
  }
}
