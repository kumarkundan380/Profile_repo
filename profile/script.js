function passValue()
{
    var firstname=document.getElementById('first_name').value;
    localStorage.setItem('first_name',firstname);
    var lastname=document.getElementById('last_name').value;
    localStorage.setItem('last_name',lastname);
    var designation=document.getElementById('designation').value;
    localStorage.setItem('designation',designation);
    var email=document.getElementById('email').value;
    localStorage.setItem('email',email);
    var mobile=document.getElementById('mobile').value;
    localStorage.setItem('mobile',mobile);
    var dob=document.getElementById('dob').value;
    localStorage.setItem('dob',dob);
    var skills=document.getElementById('skills').value;
    localStorage.setItem('skills',skills);
    var hobbies=document.getElementById("hobbies").value;
    localStorage.setItem('hobbies',hobbies);
    var sscboard=document.getElementById('sscboard').value;
    localStorage.setItem('sscboard',sscboard);
    var sscper=document.getElementById('sscper').value;
    localStorage.setItem('sscper',sscper);
    var sscyear=document.getElementById('sscyear').value;
    localStorage.setItem('sscyear',sscyear);
    var hscboard=document.getElementById('hscboard').value;
    localStorage.setItem('hscboard',hscboard);
    var hscper=document.getElementById('hscper').value;
    localStorage.setItem('hscper',hscper);
    var hscyear=document.getElementById('hscyear').value;
    localStorage.setItem('hscyear',hscyear);
    var bscboard=document.getElementById('bscboard').value;
    localStorage.setItem('bscboard',bscboard);
    var bscper=document.getElementById('bscper').value;
    localStorage.setItem('bscper',bscper);
    var bscyear=document.getElementById('bscyear').value;
    localStorage.setItem('bscyear',bscyear);
    var pgboard=document.getElementById('pgboard').value;
    localStorage.setItem('pgboard',pgboard);
    var pgper=document.getElementById('pgper').value;
    localStorage.setItem('pgper',pgper);
    var pgyear=document.getElementById('pgyear').value;
    localStorage.setItem('pgyear',pgyear);
    var otherboard=document.getElementById('otherboard').value;
    localStorage.setItem('otherboard',otherboard);
    var otherper=document.getElementById('otherper').value;
    localStorage.setItem('otherper',otherper);
    var otheryear=document.getElementById('otheryear').value;
    localStorage.setItem('otheryear',otheryear);
    var bio=document.getElementById('bio').value;
    localStorage.setItem('bio',bio);
    return false;
}
function readURL(input)
{
    if(input.files && input.files[0])
    {
        var reader=new FileReader();
        reader.onload=function(e)
        {
            $('#profilepic')
                .attr('src',e.target.result);
                //console.log(e.target.result);
                localStorage.img=e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
       


    }
}  
function setValue()
{
    fname=localStorage.getItem('fname');
    lName=localStorage.getItem('desination');
    document.getElementById('name').innerHTML=fname +" "+ lname;
    document.getElementById('degination').innerHTML=getItem('designation');
    document.getElementById('pgcollege').innerHTML=getItem('pgboard');
    document.getElementById('bsccollege').innerHTML=getItem('bscboard');
    document.getElementById('intercollege').innerHTML=getItem('hscboard');
    document.getElementById('matriccollege').innerHTML=getItem('sscboard');

    
}  