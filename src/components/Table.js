
function Table (props){
  var myStr = props.id;
  var id = "#"+myStr;
return(
 
<>

<div className="mt-3 col-sm-3"> 
<div className="card ">
<img className="card-img-top" src={props.img} alt="Card image" style={{width:200}} />
    <div className="card-body">
      <h4 className="card-title"> {props.name}</h4>
      <p className="card-text"></p>
      <button  type="button" className="btn btn-warning stretched-link " data-toggle="modal" data-target={id}>See More</button>
    </div>
      </div>
</div>
<div class="modal" id={myStr}>
    <div class="modal-dialog">
      <div class="modal-content">
      
        
        <div className="modal-header">
          <h4 className="modal-title">{props.name}</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
    
        <div className="modal-body">
        <img src={props.img}  classname="img-fluid" style= {{height :300}}/>
        <p><b className="text-left"><u>Movie Name</u> : </b> {props.name}</p>
        <p><b className="text-left"><u>Genre</u> : </b>{props.genre}</p>
        <p><b className="text-left"><u>IMDB rating</u> : </b> {props.imdb}</p>
        <p><b className="text-left"><u>IMDB rating</u> : </b> {props.dir}</p>
        <p><b className="text-left"><u>Release Year</u> : </b>{props.year}</p>
        </div>

        <div className="modal-footer">
        <button type="button" class="btn btn-info">Buy or Rent</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
   
 </>

)

}

export default Table;