import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skill-carousel',
  templateUrl: './skill-carousel.component.html',
  styleUrls: ['./skill-carousel.component.scss']
})
export class SkillCarouselComponent implements OnInit {
  @Output() changeActiveSkills = new EventEmitter<any>;
  skillArticles: any[] = [];
  activeIndex: number = 0;


  ngOnInit(): void {
    this.skillArticles = [
      { 
        headline: 'Programming languages',
        text: 'Erfahrung in Gruppenarbeit und Grundkenntnisse von agilen Methoden.',
        
        skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'C','C++','C#','Python']
      },
      { 
        headline: 'Frameworks',
        text: 'Umsetzung responsiver Applikationen, auch mit Hilfe von CSS-Frameworks und UI-Libraries.',
        skills: ['Angular', 'Spring Frameworks', 'Django','Elk Stack']
      },
      { 
        headline: 'Database management system',
        text: 'Einbindung von Daten z.B. aus Schnittstellen oder Datenbanken.',
        skills: ['MySql', 'Oracle', 'XAMPP', 'Firebase', 'ElasticSearch']
      },
      { 
        headline: 'Project management',
        text: 'Erstellen komplexer Applikationen unter Verwendung eines JS-Frameworks.',
        skills: ['GitHub', 'Docker', 'Jira', 'Scrum','Kubernetes']
      },
      { 
        headline: 'Software',
        text: 'Erstellen komplexer Applikationen unter Verwendung eines JS-Frameworks.',
        skills: ['Unity', 'Blender', 'Power BI', 'Talend(ETL)']
      }
      
    ]
    this.emitActiveSkills()
    
  }

  goToArticle(index: number) {
    if(index == -1) {
      this.activeIndex = this.skillArticles.length -1
    } else if (index == this.skillArticles.length) {
      this.activeIndex = 0
    } else {
      this.activeIndex = index;
    }
    this.emitActiveSkills()
  }

  emitActiveSkills()  {
    this.changeActiveSkills.emit(this.skillArticles[this.activeIndex].skills)
  }

}
