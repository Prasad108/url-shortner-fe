import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShortnerService } from './Service/shortner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url-shortner-fe';
  showForm=true;
  showResult=false;
  shortUrl="";
  longUrl="";
  longUrlForm = new FormGroup({
      longUrl : new FormControl('')
  });

  constructor(private apiService:ShortnerService) {}

  ngOnInit() {
 }

  shortenUrl(url:string){
    this.shortUrl="";

    console.log(url);
    this.apiService.shortenUlr(url).subscribe((response)=>{
      console.log(response);
      this.shortUrl=response.shortUrl;
      this.toggleView();
    })
  }

  onSubmit(){
    let url=this.longUrlForm.controls['longUrl'].value;
    this.longUrl = url;
    console.log(url);
    this.shortenUrl(url);
  }

  toggleView(){
    this.showForm=!this.showForm;
    this.showResult=!this.showResult;
  }

  resetApp(){
    this.shortUrl="";
    this.longUrl="";
    this.longUrlForm.reset();

  }
}
