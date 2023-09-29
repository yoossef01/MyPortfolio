import { Component } from '@angular/core';
import { Project } from 'src/app/core/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Analysis of log files - Internship at VERMEG',
      date: 'July 2023 - September 2023',
      usedTechs: ['Spring Boot', 'Angular', 'Elastic Stack'],
      description: 'We developed a solution to automate the collection, cleaning, transformation, and analysis of journal data while providing interactive reports and dashboards for informed decision-making.',
      githubLink: 'https://github.com/yoossef01/PowerBI_Intergration_Web',
      jsDoc: false,
      jsDocLink: '',
      imagePath: './assets/elasticsearch.png',
      reportUrl:'assets/Rapport_Stage_été_2.pdf'
    },
    {
      title: 'Sales portal',
      date:'January 2023 - May 2023',
      usedTechs: ['Spring Boot', 'Angular', 'MySql','Web Scraping'],
      description: "The project's objective is to develop an online sales portal to enable sellers to create their own selling space.",
      githubLink: 'https://github.com/yoossef01/Portal_Sales',
      jsDoc: false,
      jsDocLink: '',
      imagePath: 'assets/home.png',
      reportUrl:'assets/26.pdf'
    },
    {
      title: 'OrderBook Trading',
      date:'September 2022 - December 2022',
      usedTechs: ['Spring Boot', 'Angular', 'Django','Microservices','Oracle'],
      description: 'This project involves developing a simulation system for stock market operations, including the buying and selling of stocks.',
      githubLink: 'https://github.com/yoossef01/OrderBook_Trading',
      jsDoc: true,
      jsDocLink: '',
      imagePath: 'assets/orderbook.png',
      reportUrl:'' },

    {
      title: 'Driving Instructor',
      date:'March 2022 - May 2022',
      usedTechs: ['Unity', 'C#', 'Firebase','json'],
      description: "MDI is a 3D serious game aimed at modernizing and simplifying the process of obtaining a driver's license.",
      githubLink: 'https://github.com/yoossef01/My-Driver-Instructor',
      jsDoc: true,
      jsDocLink: '',
      imagePath: 'assets/My_Driving_Instructor.png',reportUrl:'assets/My_Driving_Instructor.pdf'
    }

  ];
}
