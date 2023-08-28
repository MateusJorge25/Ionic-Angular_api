import { Component, OnInit } from '@angular/core';
import { CEPService } from '../services/cep.service';
import { AlertController } from '@ionic/angular';

import {
  FormControl,
  Validators,
  FormGroup
} from "@angular/forms";

interface BuscaCepFORM {
  cep: FormControl<string>;
  estado: FormControl<string>;
  cidade: FormControl<string>;
  bairro?: FormControl<string>;
  rua: FormControl<string>;
}

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.page.html',
  styleUrls: ['./busca-cep.page.scss'],
})


export class BuscaCepPage implements OnInit {

  adressForm: FormGroup<BuscaCepFORM>;
  alert: HTMLIonAlertElement | undefined;

  constructor(private cepService: CEPService, private alertCtrl: AlertController) {
    this.adressForm = new FormGroup<BuscaCepFORM>({
      cep: new FormControl<string>("", {
        validators: [Validators.required],
        nonNullable: true
      }),
      bairro: new FormControl<string>("", {
        nonNullable: true
      }),
      cidade: new FormControl<string>("", {
        validators: [Validators.required],
        nonNullable: true
      }),
      estado: new FormControl<string>("", {
        validators: [Validators.required],
        nonNullable: true
      }),
      rua: new FormControl<string>("", {
        validators: [Validators.required],
        nonNullable: true
      }),
    });
  }

  // cep: any;
  ngOnInit() {
  }

  async buscaCEP() {
    this.cepService.getCEP(this.adressForm.controls['cep'].value).subscribe(
      (res) => {
        this.adressForm.setValue({
          cep: res.cep,
          estado: res.state,
          cidade: res.city,
          bairro: res.neighborhood,
          rua: res.street
        })
      },
      (err) => {
        this.presentAlert();
        console.error(err);
      });
  }

  async presentAlert() {
    this.alert = await this.alertCtrl.create({
      header: 'Erro',
      subHeader: 'Erro ao buscar CEP',
      message:"CEP não encontrado",
      buttons: ['OK']
    });

    await this.alert.present();
  }
}
