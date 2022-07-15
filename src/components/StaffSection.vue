<template>
    <div>
        <div class="row header-row">
            <h2 class="heading">We are Refactory</h2>
            <p class="intro">Refactory is training the next generation of tech talents and experts in Uganda.</p>
            <p class="intro">The program is made by and for tech companies, and teaches the skills needed to secure a career in tech.</p>
        </div>
        <div class="row header-row">
            <p class="intro intro2">Want to <a href=""><span>Join Refactory</span></a></p> 
        </div>
       <div class="container">
             

        <div class="row">
            <h2 class="heading team-head">Meet the Team</h2>
            <div class="col-4 img_col">
                <img class="img-fluid" src="@/assets/image1.jpg" alt="">
                <h3 class="name">Micheal Niyitegeka</h3>
                <h4 class="post">Program Director</h4>
            </div>
            <div class="col-4 img_col">
               <img class="img-fluid" src="@/assets/imagw2.jpg" alt="">
                <h3 class="name">Lyllian Nakasujja</h3>
                <h4 class="post">Operations Manager</h4>
            </div>
            <div class="col-4 img_col">
                <img class="img-fluid" src="@/assets/image3.jpg" alt="">
                 <h3 class="name">Joanitah Nalubega</h3>
                <h4 class="post">Program Administrative Lead</h4>
            </div>
        </div>
        <br>
        <div class="row row2">
           
            <div class="col-4 img_col">
                <img class="img-fluid" src="@/assets/image4.jpg" alt="">
                 <h3 class="name">Joanita Nassiwa Kirisa</h3>
                <h4 class="post">Marketing and Communications Lead</h4>
            </div>
            <div class="col-4 img_col">
               <img class="img-fluid" src="@/assets/image6.jpg" alt="">
                <h3 class="name">Jackson Ssenengo</h3>
                <h4 class="post">Program Technical Coach</h4>
            </div>
            <div class="col-4 img_col">
                <img class="img-fluid" src="@/assets/image7.jpg" alt="">
                 <h3 class="name">Orban Martin-Luther</h3>
                <h4 class="post">Program Technical Lead</h4>
            </div>
        </div>
       </div>
    </div>
</template>

<script>
export default {
    name : "StaffSection",
}
</script>

<style>
body{
    padding: 0px ;
    margin: 0px ;
    overflow-x: hidden;
}
.container{
    /* padding: 0px !important;
    margin: 0px !important;  */
    
}
.header-row{
    background-color: #6610f2;
   
    
}
.heading{
    font-size: 55px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: rgb(0, 204, 255);
    padding-top: -5px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif, 'Times New Roman', serif;
    padding-bottom: 20px;
    text-align: center;
}
.intro{
    font-size: 18px;
    font-weight: 600;
    color: white;
    padding: 5px;
    line-height: 0px;
    text-align: center;

}
.intro2{
    margin-top: 50px;
    font-weight: 900;
    font-size: 20px;
    

}

.intro2 a{
    text-decoration: none;
      color: rgb(0, 204, 255);
    font-size: 22px;
}
.team-head{
    font-size: 25px;
    margin-top: 20px;
    padding: 10px;
    color: #6610f2;
}

.img_col{
    text-align: center;
    
}
.img_col img{
    padding: 5px;
    height: 70%;
    width: 100%;
    /* border-radius: 10%; */
    border-radius: 50%;
    border-top: 6px solid  rgb(0, 204, 255);
   
}
.row2{
    padding-top: -10%;
    margin-top: -100px;
}
.name{
    background-color: #6610f2;
    color: white;
    font-size: 20px;
    padding: 10px;
}
.post{
    
    color: #000;
    font-size: 16px; 
}
</style>