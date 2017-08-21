import{Component,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
selector:'ai-star',
templateUrl:'app/shared/star.component.html',
styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
<<<<<<< HEAD
@Input() rating:number;
starWidth:number;

ngOnChanges():void{
this.starWidth=this.rating *86/5;
=======
@Input() rating:number=3.2;
starWidth:number;
@Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();
ngOnChanges():void{
this.starWidth=this.rating *86/5;
}
onClick(){
    this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    
>>>>>>> 88a9c67314200cda3fd140e94fdebae610eb9071
}
}