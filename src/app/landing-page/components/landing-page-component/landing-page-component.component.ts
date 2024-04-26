import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing-page-component.component.html',
  styleUrl: './landing-page-component.component.scss'
})
export class LandingPageComponentComponent {

  userEmail!: string;
  exampleText!: string;

  constructor(private router: Router){}


  faceSnapsLink(): void{
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form: NgForm): void{
    /* Avant on récupérait l'email direct de l'objet sans passer par l'argument
       mais on peut cibler directement le form en tant qu'objet donc c est cool on a tout !!!
      console.log(this.userEmail);
    */

    console.log(form.value);
  }

}
