class AddChar{
  private ecscra : string;
  private star : string;
  constructor(public add_target_element: string){
    this.ecscra = "!";
    this.star = "☆";
  }
  public addekusucra(): void{
    document.getElementById(this.add_target_element).innerHTML += this.ecscra;
  }
  public addstar(): void{
    document.getElementById(this.add_target_element).innerHTML += this.star;
  }
}
var addchar = new AddChar("hello");
