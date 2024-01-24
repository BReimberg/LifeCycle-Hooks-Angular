import { Component, Input, OnChanges, OnInit } from '@angular/core';

//OnInit = interface;

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

	@Input() nome:string = ''

  constructor() {
		console.log(`Construtor ${this.nome}`)
	}

	ngOnChanges(): void {
		console.log(`OneChanges ${this.nome}`)
	}

	//Evento disparado quando o component for iniciado
	ngOnInit(): void {
		this.nome = this.nome + "X"
		console.log(`OnInit ${this.nome}`)
	}

}
