import React from 'react';

class Home extends React.Component {
    render(){
        return(
        <div>
            
<nav class="navbar">

    <a href="assets/about.html"> <i class="fas fa-user"></i> <span>about</span> </a>
    <a href="assets/portfolio.html"> <i class="fas fa-briefcase"></i> <span>portfolio</span> </a>
    <a href="assets/contact.html"> <i class="fas fa-address-book"></i> <span>contact</span> </a>
</nav>
<section class="home">

    <div class="image">
        <img src="assets/img/user.jpg" alt=""/>
    </div>

    <div class="content">
        <h3>hi, i am Lavanya SG</h3>
        <span>front-end developer</span>
        <p>Mentnee at Spotknack
            Currently student at Sri Ramakrishna Institute Of Technology</p>
        <a href="https://resume-a09.netlify.app/" class="btn"> Resume <i class="fas fa-user"></i> </a>
    </div>

</section>
        </div>
        );
    }
}

export default Home;