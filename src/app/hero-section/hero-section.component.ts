import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent {
  @Input() prop1 !: string;
  @Input() prop2 !: string;
}
