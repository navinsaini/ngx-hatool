import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  code = '';
  style = '';
  script = '';
  selected = 'script';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://raw.githubusercontent.com/navinsaini/hatool/master/projects/ngx-hatool-tester/src/app/chatbox/chatbox.component.ts',
                  {responseType: 'text'})
        .subscribe((content) => {
          this.code = content;
        });
    this.http.get('https://raw.githubusercontent.com/navinsaini/hatool/master/projects/ngx-hatool-tester/src/theme.less',
                  {responseType: 'text'})
        .subscribe((content) => {
          this.style = content;
        });
    this.http.get('https://raw.githubusercontent.com/navinsaini/hatool/master/projects/ngx-hatool-tester/src/assets/script.yaml',
                  {responseType: 'text'})
        .subscribe((content) => {
          this.script = content;
        });
  }

}
