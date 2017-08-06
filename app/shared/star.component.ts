import{Component,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
selector:'ai-star',
templateUrl:'app/shared/star.component.html',
styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
@Input() rating:number;
startWidth:number;

ngOnChanges():void{
this.startWidth=this.rating *86/5;
}
}