var navbar = document.querySelector("body");
var linknames = {};


var data = document.createElement("p");
data.innerHTML = "Code With Love By <a href='https://iamkunal9.github.io/links/' target='_blank'>iamkunal9</a>";

document.addEventListener('click', function(event) {
    var target = event.target;

    if (target.getAttribute('data-href')) {
        var url = target.getAttribute('data-href');
        window.open(url, '_blank');
    }
});



function gethtml(name, link, hrf) {
    var html = `
    <img style="position:absolute; padding-left:5px " id='logo' data-href='` + hrf + `' src='` + link + `'>
        <tr data-href='` + hrf + `'>
            
            <th style='padding:10px' data-href='` + hrf + `'>` + name + `</th>
        </tr>
    `
    return html;
};
fetch("js/info.json")
    .then(response => response.json())
    .then(d => {
        linknames = d;
        
    

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
        bgv.playsinline = true; // Add playsinline attribute
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
    
    function html(name,hrf){
    var html =  `<td id="rcorners2" data-href='`+hrf+`'>`+name+`</td>`
    return html;
    }
    
    if(Object.keys(data).length%2==0){
        var tabledata = "<tr>";
        for(var i=0;i<Object.keys(data).length;i++){
            tabledata += html(Object.keys(data)[i],Object.values(data)[i]);
            if((i+1)%2==0){
                
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


})
.catch(error => {
    console.error("Error fetching JSON data:", error);
});