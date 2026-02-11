import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {

  suggestion: any;
  id: number = 0;

  suggestions = [
    { id: 1, title: 'Organiser une journée team building', description: 'Suggestion pour organiser une journée de team building.' },
    { id: 2, title: 'Améliorer le système de réservation', description: 'Proposition pour améliorer la gestion des réservations.' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.suggestion = this.suggestions.find(s => s.id === this.id);
  }
}
