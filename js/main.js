var navbar = document.querySelector("body");
import linknames from "./info.json" assert { type: "json" };
var data = document.createElement("p");
data.innerHTML = "Code With Love By <a href='https://github.com/iamkunal9' target='_blank'>iamkunal9</a>";

// $("tr").click(function(){
//     window.location = "https://google.com";
//   });

$(function(){       
    $('*[data-href]').click(function(){
        window.open($(this).data('href'));
        return false;
    });
});


function gethtml(name,link,hrf){
    
var html = `
            <tr data-href='`+hrf+`'>
                <th style='width: 0;'><img id='logo' src='`+link+`'></th>
                <th style='position: relative; right:18px;'>`+name+`</th>
              </tr>
`
return html;
};


    if(linknames['background']["video"].length == 0 && linknames['background']["image"].length > 5)
    {
       var bgimg = document.createElement('img');
       bgimg.id = "bg";
       bgimg.src = linknames['background']["image"];
       navbar.appendChild(bgimg)
    }

    else{
        var bgv = document.createElement('video');
        bgv.autoplay = true;
        bgv.muted = true;
        bgv.loop = true;
        bgv.id = "bg";
        bgv.innerHTML = "<source src='"+linknames['background']["video"]+"' type='video/mp4'>Your browser does not support HTML5 video.";
        navbar.appendChild(bgv);
    }


    var image = document.createElement('img');
    image.id = "user";
    image.src = linknames['userdetails']['userimage']
   
    var heading = document.createElement('h1');
    heading.innerHTML = linknames['userdetails']['username']
    var bio = document.createElement('p');
    bio.innerHTML = linknames['userdetails']['userbio']

    navbar.appendChild(image);
    navbar.appendChild(heading);
    navbar.appendChild(bio);



for(var i=0;i<Object.keys(linknames['links']).length;i++){
    var opt = document.createElement('table');
        opt.id = "rcorners1"
        opt.innerHTML = gethtml(Object.keys(linknames['links'])[i],Object.values(linknames['links'])[i]['src'],Object.values(linknames['links'])[i]["href"]);
        navbar.appendChild(opt);
    var br = document.createElement('br');
    navbar.appendChild(br);
}
var projectp = document.createElement("p");
projectp.id = "project";
projectp.innerHTML = "My Projects";

function procj(data){
    console.log(data.length);
    function html(name,hrf){
    var html =  `<td id="rcorners2" data-href='`+hrf+`'>`+name+`</td>`
    return html;
    }
    
    if(Object.keys(data).length%2==0){
        var tabledata = "<tr>";
        for(var i=0;i<Object.keys(data).length;i++){
            tabledata += html(Object.keys(data)[i],Object.values(data)[i]);
            if((i+1)%2==0){
                console.log("as");
                tabledata += "</tr>";
                tabledata += "<tr>";
            }

        }
        tabledata += "</tr>"
        
    }
   
    return tabledata;
            
   
}



    
var opt = document.createElement('table');
opt.id="table";
    opt.innerHTML = procj(linknames['projects']);
    if(procj(linknames['projects']).length > 10){
    navbar.appendChild(projectp);
    navbar.appendChild(opt);
    }
var footer = document.createElement("footer");
document.body.appendChild(footer);
footer.appendChild(data);


