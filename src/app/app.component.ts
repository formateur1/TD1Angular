import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TD1Ex2';
  imageUrl="https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  nomClass = "rouge";
  isActif = false;
  isDetails = false;
  user:{nom:string, prenom:string, email:string, telephone:string, age:number} = {"nom":"MonNom", "prenom":"Louis", "email":"test@test.fr", "telephone":"010203", "age":19}
  nom:string = "";

  utilisateurs = [
    {"nom":"MonNom", "prenom":"Louis", "email":"test@test.fr", "telephone":"010203", "age":19},
    {"nom":"Paris", "prenom":"Christian", "email":"info@info.fr", "telephone":"456", "age":19},
    {"nom":"Paix", "prenom":"Jean", "email":"jean@test.fr", "telephone":"789", "age":19},
    {"nom":"Victoire", "prenom":"Paul", "email":"paul@test.fr", "telephone":"963", "age":19}
  ]

  onClick()
  {
    console.log("bouton cliqué");
  }

  afficher()
  {
    this.isDetails = false;
  }

  cacher()
  {
    this.isDetails = true;
  }

  ajouter()
  {
    this.user.nom = this.nom;
    this.utilisateurs.push(this.user);
  }
}
