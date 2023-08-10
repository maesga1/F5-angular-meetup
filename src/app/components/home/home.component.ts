import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 selectedButton: string | null = null;

 changeColor(event: MouseEvent): void {
   if (this.selectedButton) {
     this.selectedButton = null;
   } else {
     const target = event.target as HTMLButtonElement;
     this.selectedButton = target.innerText;
   }
 }

 onMouseEnter(button: string): void {
   if (!this.selectedButton) {
     const buttons = ['todos', 'perros', 'gatos'];
     buttons.splice(buttons.indexOf(button), 1);
     buttons.forEach(btn => this.removeButtonClass(btn));
   }
 }

 onMouseLeave(button: string): void {
   if (!this.selectedButton) {
     this.removeButtonClass(button);
   }
 }

 private removeButtonClass(button: string): void {
   const btnElement = document.querySelector(`button:contains(${button})`);
   if (btnElement) {
     btnElement.classList.remove('btn-selected');
   }
 }
}
