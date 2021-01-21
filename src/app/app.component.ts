import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  useProfileTemplate = true;
  useCustomSelection = false;
  
  selectedProfile: string;
  profileOptions: string[] = ['UserProfileTemplate', 'UseCustomSelection'];
  customProfileId:number;

  ngOnInit()
  {
    this.customProfileId = undefined;

    if(this.customProfileId == -1 || this.customProfileId == undefined)
    {
      this.selectedProfile = 'UseCustomSelection';
    }
    else
    {
      this.selectedProfile = 'UserProfileTemplate';
    }
    this.pt(this.selectedProfile);
    
  }

  pt(event){
    if(event == this.profileOptions[1])
    {
      console.log(event + " followed");
    }
    else
    {
      console.log(event + " followed");
    }
  }
}
