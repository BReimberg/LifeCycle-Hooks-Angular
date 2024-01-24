import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
						DoCheck,
						AfterContentChecked,
						AfterContentInit,
						AfterViewChecked,
						AfterViewInit,
						OnDestroy
{

	quantidade:number = 0

  constructor() { }

	adicionar(){
		this.quantidade += 1
	}

	decrementar() {
		this.quantidade -= 1
	}

	/*Sempre que acontece uma alteração havera uma verificiação no componente novamente no caso checked;
	Cheked verifica: content e depois a view. Irá trabalhar internamente os valores para depois visualizar;
	*/

	ngOnInit(): void {
		console.log("ngOnInit")
  }

	ngDoCheck(): void {
		console.log("ngDoCheck")
	}

	//Quando o primeiro conteúdo é iniciado;
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit")
	}

	//Depois da inicialização da view;
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit")
	}

	//Após alguma alteração, verifica o conteúdo;
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked")
	}

	//Após alguma alteração, verifica a view;
	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked")
	}

	ngOnDestroy(): void {
		console.log("goodbye my friend")
	}
}
