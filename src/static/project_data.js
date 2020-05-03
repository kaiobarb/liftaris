import React from 'react'

/////////////////
// DESCRIPTION // a short-ish description of what the project is. 
const getDescription = function(id) { 
  if(id == 'mystical') {
    return (
      <div> 
        Mystical grove is a vfx demo I made with three other people in school. There are four crystals with magical properties in the scene, each with a custom shader showcasing a specific effect.
        <br/>
      </div> 
    )
  }
  if(id == 'window') {
    return (
      <div> 
       Window Pane is a game I worked on with a team during my last two quarters of school; The game is Virtual Reality puzzle game that takes place in the 1960's during an MKUltra-esque experiment. You are an unknowing test subject in this experiment, and the ominous events that unfold before you are clues into the true nature of what is happening to you.<br/><br/>

Find clues, follow instructions, and immerse yourself in doubt.<br/><br/>

The game has elements of psychedelia, surrealism, and escape-the-room puzzles
      </div> 
    )
  }
  if(id == 'wts') {
    return (
      <div> 
       <a href='https://liftaris.itch.io/walk-the-shadow'>Walk the Shadow</a> is a top down horror themed game about a sleepy boy named Cleido. Use your trusty candle to keep the the shadows away.
      <br/>The candle is all you have to protect yourself, serving both as your health bar and your weapon. Each time you get hit your flame and light radius diminuish.
      </div> 
    )
  }
  if(id == 'solar') {
    return (
      <div> 
        Solar Escape is a machine learning project that teaches a "satelite" (the learning agent) to escape the gravitational pull of a "planet" (the environment). The satelite learns to escape by repeatedly replaying the same scenario with different inputs, and applying a function that determines whether each input is considered optimal or not. Over many iterations, the learning agent aquires an understanding of the environment it is in.
      </div> 
    )
  }
  if(id == 'photography') {
    return(
      <div>
        A few photographs that I've taken and liked :)
      </div>
    )
  }
  if(id == 'pixel') {
    return(
      <div>
        A hobby of mine.
      </div>
    )
  }

}

//////////
// INFO // additional information about how the project was made, my role in it, and miscalanea.
const getInfo = function(id) { 
  if(id == 'mystical') {
    return (
      <div> 
        I was the project lead for this environment and was responsible for creating documents and concept art to communicate the idea to the team. I mainly worked on creating the water/reflectance shader, the terrain, and setting up the volumetric fog. You can see this project's Github page <a href='https://github.com/kaiobarb/mystical-grove'>here</a>. 
      </div> 
    )
  }
  if(id == 'window') {
    return (
      <div> 
        I was primarily a programmer for Window Pane, living and breathing the Unity game engine and writing C# scripts.
I started out designing and implementing world-space dialogue bubbles that popped open when objects were interacted with.
<br/><br/>
My proudest contribution is the trip effects that I implemented through a combination of Unity's post processing stack and custom shaders. I created textures from scratch and also had a hand in creating some of the 3D models using blender.
      </div> 
    )
  }
  if(id == 'wts') {
    return (
      <div> 
      Walk the Shadow is a game I made in a week for the <a href='https://itch.io/jam/scream-jam-2019'>2019 Scream Jam</a>. It is a top-down 2D prototype of a cautious action game. In it's current state, it is pretty rough around the edges, but it is a good proof of concept for a larger game that I may keep working on one day.
      </div> 
    )
  }
  if(id == 'solar') {
    return (
      <div> 
        This was the final project for my Artificial Intelligence And Machine Learning class in college. The result of this project was presented at the end of the academic quarter and was one of my favorite classes that I took in at university. <br/>You can see this project's source code <a target='blank' href='https://github.com/kaiobarb/solarescape'>here</a>. 
      </div> 
    )
  }
}

////////////
// SKILLS // things used and skills learned for this project
const getSkills = function(id) { 
  if(id == 'mystical') {
    return (
      <ul style={{listStyleType:'square'}}> 
        <li>Unity</li>
        <li>HLSL</li>
        <li>C#</li>
        <li>Blender</li>
      </ul> 
    )
  }
  if(id == 'window') {
    return (
      <ul style={{listStyleType:'square'}}> 
        <li>Unity</li>
        <li>HLSL</li>
        <li>C#</li>
        <li>Blender</li>
        <li>Oculus VR</li>
      </ul> 
    )
  }
  if(id == 'wts') {
    return (
      <ul style={{listStyleType:'square'}}> 
        <li>Godot</li>
        <li>GDscript (Similar to Python)</li>
        <li>Pixel art made in Aseprite</li>
      </ul> 
    )
  }
  if(id == 'solar') {
    return (
      <ul style={{listStyleType:'square'}}> 
        <li>Python</li>
        <li>PyGame</li>
        <li>PyTorch</li>
        <li>Deep Q-Network</li>
      </ul> 
    )
  }
}

const windowPaneVideo = function() {
 return (
  <iframe width='100%' height='500' src="https://www.youtube.com/embed/92ma43ZWkwI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 )
}

export const PROJECTS = [
  { title:'Mystical Grove',
    subtitle:'3D Environment.',
    images:['https://raw.githubusercontent.com/kaiobarb/mystical-grove/master/Screenshot.PNG'],
    video:'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/mystical_grove.webm',
    url:'/mystical-grove',
    description: getDescription('mystical'),
    info: getInfo('mystical'),
    skills: getSkills('mystical') 
  },
 { title:'Window Pane',
   subtitle:'VR experience.',
   images:['https://cdn.discordapp.com/attachments/544402126592278528/585684796823306290/unknown.png','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/windowpane2.png'],
   video: windowPaneVideo(),
   url:'/window-pane',
   description: getDescription('window'),
   info: getInfo('window'),
   skills: getSkills('window') 
 },
 { title:'Walk the Shadow', subtitle:'Game jam game.',
   images:['https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/walk_the_shadow_gameplay.png', 'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/WtS_cover.png', 
     'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/WtS_devlog02.png', 'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/shadow.gif'],
   video:<iframe width="100%" height="500" src="https://www.youtube.com/embed/6GatCY8SfWs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
   url:'/game-jam', 
   description: getDescription('wts'), 
   info: getInfo('wts'), 
   skills: getSkills('wts') 
 },
 { title:'Photography',
   subtitle:'Pixelated Photons',
   images:['https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0613.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0035.JPG',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0149.JPG',
   'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0163.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0164.JPG',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0169.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0192.JPG',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0194.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0275.JPG',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0285.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0298.JPG',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0306.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0317.JPG',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0332.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0335b&w.JPG',
     'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0361.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0369.JPG',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0374.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0376.JPG',
     'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0388.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0409.JPG',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0617.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0627.JPG',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0630.JPG','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/photos/DSC_0713.JPG'], 
   video:'',
    gallery:true,
   description: getDescription('photography'),
   url:'/photography' 
 },
 { title:'Pixel Art',
   subtitle:'Pixelated Pixels',
   images:['https://pbs.twimg.com/media/EIqoYbDXYAEJALS?format=png&name=small','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/10_dragon.gif',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/256.gif','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/13_jorogumo.png',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/17_oni.png','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/23_golem.png',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/20_chupacabra.png','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/25_kappa.png',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/26_basilisk.png','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/28_foo_dog.png',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/29_baba_yaga.gif','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/piggy.png',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/27_garuda.png','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/figurante.png',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/16_naga.png','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/14_wraith.gif',
    'https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/09_jinn.png','https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/pixels/21_cockatrice.png'],
   video: '',
   gallery:true,
   description: getDescription('pixel'),
   url:'/pixel' 
 },/*
 { title:'Shaders', 
   subtitle:'GLSL Shaders written for practice and fun.', 
   images:'',
   video:'',
   url:'/shaders' 
 },*/
 { title:'Solar Escape', 
   subtitle:'Machine Learning Project, Python.', 
   images:['https://s3-us-west-1.amazonaws.com/kaiobarbosa.com/ml.png'],
   video:'',
   url:'/solar-escape', 
   description: getDescription('solar'), 
   info: getInfo('solar'), 
   skills: getSkills('solar') 
 },/*
 { title:'Web Development', 
   subtitle:'Collection of my web work', 
   images:[],
   video:'',
   url:'/web-dev', 
   description: getDescription('web'), 
   info: getInfo('web'), 
   skills: getSkills('web') 
 },*/
]

