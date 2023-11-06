import { Component } from '@angular/core';
import { PokeAPISevice } from 'src/services/poke-api.service';
import { ViaCEPService } from 'src/services/via-cep.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  areaBuscaPokemon: string = '52011210';
  areaBusca: any = {
    Bairro:'',
    localidade:'',
    logradouro:'',
    uf:
  };

  constructor(
    private pokeAPIService: PokeAPISevice,
    private viaCEPService: ViaCEPService
  ) {}

  BuscarPokemon (){
    this.viaCEPService.getViaCEPService(this.areaBuscaPokemon)
    .subscribe((value)=>{
      this.areaBusca.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.areaBusca.Bairro = ', ' +  JSON.parse(JSON.stringify(value)) ["Bairro"];
      this.areaBusca.localidade = ' - ' +  JSON.parse(JSON.stringify(value)) ['localidade'];
      this.areaBusca.uf = '-' +  JSON.parse(JSON.stringify(value)) ['uf'];
    });
    this.pokeAPIService.getPokeAPIService();
  }

}
