import { Component, OnInit } from '@angular/core';
import { WimpService } from '../wimp.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  private actors;
  constructor(private wimpService: WimpService) { }
  getActors() {
    this.wimpService.getRecords("actors")
      .subscribe(actorsFromAPI => {
        this.actors = actorsFromAPI;
      })
  }


  submitActor(actorForm: NgForm) {
    console.log(actorForm.value);
    this.wimpService.addRecord("actors", actorForm.value)
      .subscribe(
      actorInfo => {
        this.actors.push(actorInfo);
      });
    actorForm.resetForm();
  }


  deleteActor(actorId) {
    this.wimpService.deleteRecord("actors", actorId)
      .subscribe(
      actorInfo => {
        this.getActors();
      }
      )
  }
  ngOnInit() {
    this.getActors();
  }

}
