* ===========================
   FINISH CRAFT STUDIO
   Premium Luxury Theme
=========================== */

/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap');

/* Reset */

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{

font-family:'Poppins',sans-serif;
background:#0F1115;
color:#fff;
overflow-x:hidden;

}

img{

max-width:100%;
display:block;

}

a{

text-decoration:none;

}

ul{

list-style:none;

}

/* Colors */

:root{

--gold:#C7A04A;
--black:#0F1115;
--dark:#181B20;
--card:#1F232B;
--white:#ffffff;
--text:#CFCFCF;

}

/* ===========================
 NAVBAR
=========================== */

.navbar{

position:fixed;

top:25px;

left:50%;

transform:translateX(-50%);

width:92%;

max-width:1400px;

display:flex;

justify-content:space-between;

align-items:center;

padding:16px 35px;

background:rgba(20,20,20,.45);

backdrop-filter:blur(18px);

border:1px solid rgba(255,255,255,.08);

border-radius:70px;

z-index:999;

transition:.4s;

}

.logo{

display:flex;

align-items:center;

gap:14px;

}

.logo img{

width:55px;

height:55px;

border-radius:50%;

object-fit:cover;

}

.logo span{

font-family:'Playfair Display',serif;

font-size:24px;

font-weight:700;

}

.navbar ul{

display:flex;

gap:38px;

}

.navbar ul a{

color:white;

font-weight:500;

transition:.3s;

}

.navbar ul a:hover{

color:var(--gold);

}

.quote-btn{

background:var(--gold);

color:#111;

padding:14px 28px;

border-radius:40px;

font-weight:600;

transition:.35s;

}

.quote-btn:hover{

transform:translateY(-5px);

box-shadow:0 15px 35px rgba(199,160,74,.35);

}

/* ===========================
 HERO
=========================== */

.hero{

height:100vh;

background:url(hero.jpg) center/cover no-repeat;

display:flex;

justify-content:center;

align-items:center;

position:relative;

}

.overlay{

position:absolute;

inset:0;

background:linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.75));

}

.hero-content{

position:relative;

z-index:2;

max-width:900px;

text-align:center;

padding:20px;

}

.hero-content h3{

color:var(--gold);

letter-spacing:4px;

margin-bottom:15px;

font-size:18px;

}

.hero-content h1{

font-family:'Playfair Display',serif;

font-size:82px;

line-height:1.05;

margin-bottom:25px;

}

.hero-content span{

color:var(--gold);

}

.hero-content p{

font-size:20px;

line-height:1.9;

color:var(--text);

margin-bottom:45px;

}

.buttons{

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

}

.primary{

background:var(--gold);

color:#111;

padding:18px 42px;

border-radius:50px;

font-weight:600;

transition:.35s;

}

.secondary{

border:2px solid white;

color:white;

padding:18px 42px;

border-radius:50px;

transition:.35s;

}

.primary:hover,
.secondary:hover{

transform:translateY(-5px);

}

.secondary:hover{

background:white;

color:#111;

}

/* Section */

section{

padding:110px 8%;

}

.section-heading{

text-align:center;

margin-bottom:70px;

}

.section-heading h4{

color:var(--gold);

letter-spacing:3px;

margin-bottom:12px;

}

.section-heading h2{

font-size:48px;

font-family:'Playfair Display',serif;

margin-bottom:20px;

}

.section-heading p{

max-width:720px;

margin:auto;

color:var(--text);

line-height:1.8;

}

/* Mobile */

@media(max-width:900px){

.navbar ul{

display:none;

}

.logo span{

display:none;

}

.hero-content h1{

font-size:52px;

}

.hero-content p{

font-size:17px;

}

}
/* ===========================
   ABOUT SECTION
=========================== */

.about{

display:grid;

grid-template-columns:1fr 1fr;

gap:70px;

align-items:center;

}

.about-image{

position:relative;

}

.about-image img{

width:100%;

height:550px;

object-fit:cover;

border-radius:20px;

}

.about-image::after{

content:"";

position:absolute;

width:150px;

height:150px;

border:2px solid var(--gold);

right:-25px;

bottom:-25px;

border-radius:20px;

z-index:-1;

}


.about-content h3{

font-family:'Playfair Display',serif;

font-size:42px;

margin-bottom:25px;

}

.about-content p{

color:var(--text);

line-height:1.9;

margin-bottom:25px;

}


.about-list li{

margin-bottom:15px;

color:#ddd;

}

.about-list li::before{

content:"✓";

color:var(--gold);

margin-right:12px;

font-weight:bold;

}


/* ===========================
 SERVICES SECTION
=========================== */

.services{

background:var(--dark);

}


.service-container{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

}


.service-card{

background:var(--card);

padding:45px 35px;

border-radius:20px;

transition:.4s;

border:1px solid rgba(255,255,255,.05);

}


.service-card:hover{

transform:translateY(-12px);

border-color:var(--gold);

}


.service-card i{

font-size:40px;

color:var(--gold);

margin-bottom:25px;

}


.service-card h3{

font-family:'Playfair Display',serif;

font-size:28px;

margin-bottom:15px;

}


.service-card p{

color:var(--text);

line-height:1.8;

}



/* ===========================
 RESPONSIVE ABOUT & SERVICES
=========================== */


@media(max-width:900px){

.about{

grid-template-columns:1fr;

}


.about-image img{

height:400px;

}


.service-container{

grid-template-columns:1fr;

}

}
/* ===========================
   PROJECTS SECTION
=========================== */

.projects{

background:var(--black);

}


.project-grid{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

}


.project-card{

position:relative;

height:420px;

overflow:hidden;

border-radius:20px;

cursor:pointer;

}


.project-card img{

width:100%;

height:100%;

object-fit:cover;

transition:.6s;

}


.project-overlay{

position:absolute;

inset:0;

background:linear-gradient(
transparent,
rgba(0,0,0,.85)
);

display:flex;

flex-direction:column;

justify-content:flex-end;

padding:35px;

opacity:0;

transition:.4s;

}


.project-card:hover img{

transform:scale(1.1);

}


.project-card:hover .project-overlay{

opacity:1;

}


.project-overlay h3{

font-family:'Playfair Display',serif;

font-size:30px;

margin-bottom:10px;

}


.project-overlay p{

color:var(--text);

}


/* ===========================
   STATS SECTION
=========================== */

.stats{

background:var(--dark);

display:grid;

grid-template-columns:repeat(4,1fr);

gap:30px;

text-align:center;

}


.stat-box h2{

font-family:'Playfair Display',serif;

font-size:55px;

color:var(--gold);

margin-bottom:10px;

}


.stat-box p{

color:var(--text);

font-size:18px;

}



/* ===========================
   PROJECTS RESPONSIVE
=========================== */

@media(max-width:900px){

.project-grid{

grid-template-columns:1fr;

}


.project-card{

height:350px;

}


.stats{

grid-template-columns:repeat(2,1fr);

}


}


@media(max-width:500px){

.stats{

grid-template-columns:1fr;

}

}
/* ===========================
   TESTIMONIAL SECTION
=========================== */

.testimonials{

background:var(--dark);

}


.testimonial-grid{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

}


.testimonial-card{

background:var(--card);

padding:40px 30px;

border-radius:20px;

border:1px solid rgba(255,255,255,.05);

transition:.4s;

}


.testimonial-card:hover{

transform:translateY(-10px);

border-color:var(--gold);

}


.testimonial-card p{

color:var(--text);

line-height:1.8;

font-style:italic;

margin-bottom:25px;

}


.client{

display:flex;

align-items:center;

gap:15px;

}


.client img{

width:55px;

height:55px;

border-radius:50%;

object-fit:cover;

}


.client h4{

font-size:18px;

}


.client span{

color:var(--gold);

font-size:14px;

}



/* ===========================
   CONTACT SECTION
=========================== */

.contact{

background:var(--black);

}


.contact-container{

display:grid;

grid-template-columns:1fr 1fr;

gap:60px;

align-items:center;

}


.contact-info h2{

font-family:'Playfair Display',serif;

font-size:45px;

margin-bottom:20px;

}


.contact-info p{

color:var(--text);

line-height:1.8;

margin-bottom:25px;

}


.contact-details li{

margin-bottom:15px;

color:#ddd;

}


.contact-details li span{

color:var(--gold);

margin-right:10px;

}



.contact-form input,
.contact-form textarea{

width:100%;

padding:18px;

margin-bottom:20px;

background:var(--card);

border:none;

outline:none;

color:white;

border-radius:10px;

font-family:'Poppins',sans-serif;

}


.contact-form textarea{

height:150px;

resize:none;

}


.contact-form button{

border:none;

cursor:pointer;

}



/* ===========================
   FOOTER
=========================== */

footer{

background:#090A0D;

padding:40px 8%;

text-align:center;

}


footer .logo{

justify-content:center;

margin-bottom:20px;

}


footer p{

color:var(--text);

font-size:14px;

}


.socials{

display:flex;

justify-content:center;

gap:20px;

margin:25px 0;

}


.socials a{

width:45px;

height:45px;

border-radius:50%;

background:var(--card);

display:flex;

align-items:center;

justify-content:center;

color:white;

transition:.3s;

}


.socials a:hover{

background:var(--gold);

color:#111;

}



/* ===========================
   CONTACT RESPONSIVE
=========================== */

@media(max-width:900px){

.testimonial-grid{

grid-template-columns:1fr;

}


.contact-container{

grid-template-columns:1fr;

}


.contact-info h2{

font-size:36px;

}

}