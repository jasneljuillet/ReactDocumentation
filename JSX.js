function Fullname(user) {
    return user.firstname+ ' '+user.lastname;  
}

const user = {
    firstname: 'Jasnel',
    lastname: 'Juillet',
};

function getInformation(user) {
  if(user.firstname && user.lastname) {
    return(
      <center>
        <h1>
          Hello, {Fullname(user)}!
        </h1>
      </center> 
    );
  } else {
    return(
      <center>
        <h1>
          Hello Stranger!
        </h1>
      </center> 
    );
  }
}

ReactDOM.render(
    getInformation(user),
    document.getElementById('root'),
);
