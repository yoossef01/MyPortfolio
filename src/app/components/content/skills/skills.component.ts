import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  highlightedSkills: string[] = []

  skills: Skill[] = [
    { name: 'Angular', fileName: 'angular.png', highlight: false },
    { name: 'TypeScript', fileName: 'typescript.png', highlight: false },
    { name: 'JavaScript', fileName: 'javascript.png', highlight: false },
    { name: 'HTML', fileName: 'html.png', highlight: false },
    { name: 'Firebase', fileName: 'firebase.png', highlight: false },
    { name: 'CSS', fileName: 'css.png', highlight: false },
    { name: 'Scrum', fileName: 'scrum.png', highlight: false },
        { name: 'C#', fileName: 'csharp.png', highlight: false },
    { name: 'C', fileName: 'c.png', highlight: false },
    { name: 'C++', fileName: 'c++.png', highlight: false },
    { name: 'Python', fileName: 'pyhton.png', highlight: false },
    { name: 'Java', fileName: 'java.png', highlight: false },
    { name: 'Blender', fileName: 'blender.png', highlight: false },
    { name: 'C#', fileName: 'csharp.png', highlight: false },
    { name: 'Docker', fileName: 'docker.png', highlight: false },
    { name: 'Elk Stack', fileName: 'elk.png', highlight: false },
    { name: 'C#', fileName: 'csharp.png', highlight: false },
    { name: 'Jira', fileName: 'jira.png', highlight: false },
    { name: 'Oracle', fileName: 'oracle.png', highlight: false },
    { name: 'MySql', fileName: 'mysql.png', highlight: false },
    { name: 'Spring Frameworks', fileName: 'spring.png', highlight: false },
    { name: 'Talend(ETL)', fileName: 'talend.png', highlight: false },
    { name: 'Unity', fileName: 'unity.png', highlight: false },
    { name: 'C#', fileName: 'csharp.png', highlight: false },
    { name: 'Django', fileName: 'dj.png', highlight: false },
    { name: 'GitHub', fileName: 'github.png', highlight: false },
    { name: 'Kubernetes', fileName: 'kub.png', highlight: false },






  ]

  ngOnInit(): void {

  }

  setHighlightedSkills(emitValue: any) {
    this.highlightedSkills = emitValue;
    this.skills.forEach(skill => {
      skill.highlight = false
    })

    this.highlightedSkills.forEach(skillName => {
      this.skills.map(skill => {
        if (skill.name == skillName) {
          skill.highlight = true;
        }
      })
    })  
  }

}

