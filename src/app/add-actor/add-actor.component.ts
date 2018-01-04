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
  private updateActor = null;
  constructor(private wimpService: WimpService) { }

  editActor(actor){
    this.updateActor = actor;
    console.log(actor);
  }
  
  getActors() {
    this.wimpService.getRecords("actors")
      .subscribe(actorsFromAPI => {
        this.actors = actorsFromAPI;
      })
  }


  submitActor(actorForm: NgForm) {
    if(!this.updateActor){
      this.wimpService.addRecord("actors", actorForm.value)
        .subscribe(
        actorInfo => {
          this.getActors();
        });
    }
    else{
      this.wimpService.editRecord("actors", actorForm.value, this.updateActor.id)
        .subscribe(
          actorInfo => {
            this.getActors();
          }
        )
      this.updateActor = null;
    }
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
