window.onload = function(){

let buses = [
    {
      name: "MTC11",
      source: "Tambaram East",
      dest: "Velachery",
      number: 111,
      passengerCapacity: 80,  
    },
  ];

  if (localStorage.getItem("buses") == null) {
    let stringbus= JSON.stringify(buses);
    localStorage.setItem("buses",stringbus);
  }

};

function display(myarray = undefined) {
  let tabledata = "";
  let bus;
  if (myarray == undefined) {
    bus = JSON.parse(localStorage.getItem("buses"));
  } else {
    bus = myarray;
  }

  buses.forEach(function (bus, index) {
    let currentrow = `<tr>
                        <td>${index + 1}</td>
                        <td>${bus.name}</td>
                        <td>${bus.source}</td>
                        <td>${bus.dest}</td>
                        <td>${bus.number}</td>
                        <td>${bus.passengerCapacity}</td>
                        </tr>`;
    tabledata += currentrow;
  });
    document.getElementById("trows").innerHTML = tabledata;
}
display();

function add(e) {
    e.preventDefault()  
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let dest = document.getElementById("dest").value;
    let numb = document.getElementById("numb").value;
    let pass = document.getElementById("pass").value;
 
   bus.name = name;
   bus.source=source;
   bus.dest=dest;
   bus.number=Number(numb);
   bus.passengerCapacity=Number(pass);

    let buses = JSON.parse(localStorage.getItem("buses"));
  buses.push(bus);
   localStorage.setItem("buses",JSON.stringify(buses));

  display(buses);

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("dest").value = "";
  document.getElementById("numb").value = "";
  document.getElementById("pass").value = "";
}

function search() {
  let searchValue = document.getElementById("search").value;
  let buses = JSON.parse(localStorage.getItem("buses"));
  let newdata = buses.filter(function (bus) {
    return (
      bus.name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
    );
  });
  display(newdata);
}
