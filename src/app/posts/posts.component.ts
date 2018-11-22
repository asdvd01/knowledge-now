import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit , OnChanges{
  posts$: Object;
  @Input() searchText = "";
  constructor(private data:DataService) { 
    
  }
  updateList(){
    this.data.search(this.searchText).subscribe(
      data => this.posts$ = data["result"]["results"]
    )
  }

  ngOnInit() {
    this.updateList();
    
  }
  ngOnChanges(changes: SimpleChanges) {
    const name: SimpleChange = changes.name;
    console.log('prev value: ', name.previousValue);
    console.log('got name: ', name.currentValue);
    this.updateList();
  }

}
