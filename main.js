const Discord = require('discord.js');
const client = new Discord.Client
const prefix = '!'
const config = require('./config.json');



client.commands = new Discord.Collection();


client.once('ready', () => {
  console.log('Fuel bot has came online!');
});





////////////////////////////////TWITTER///////////////////////////////


client.on("message", message =>{
  if (message.author.bot) return;
  if (message.channel.id === config.TWT){
  if(!message.attachments.first()){  
          message.delete();
          const exampleEmbed = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor('#277ecd')
          .setDescription("" + message.content + "")
          .setImage()
          .setFooter('Twitter', 'https://cdn.discordapp.com/attachments/800068913164714035/810141920747716628/twitter-logo-2-1.png')
          message.channel.send(exampleEmbed);
  

  }
}
  if (message.author.bot) return;
  if (message.channel.id === config.TWT){
  if(!message.content){  
          message.delete();
          const exampleEmbed2 = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor('#277ecd')
          .setImage(message.attachments.first().proxyURL)
          .setFooter('Twitter', 'https://cdn.discordapp.com/attachments/800068913164714035/810141920747716628/twitter-logo-2-1.png')
          message.channel.send(exampleEmbed2);
  

  }
}
  else if (message.author.bot) return;
  if (message.channel.id === config.TWT){
  if (message.content, message.attachments.first()){ 
          message.delete();
          const exampleEmbed3 = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor('#277ecd')
          .setDescription("" + message.content + "")
          .setImage(message.attachments.first().proxyURL)
          .setFooter('Twitter', 'https://cdn.discordapp.com/attachments/800068913164714035/810141920747716628/twitter-logo-2-1.png')
          message.channel.send(exampleEmbed3);
  

  }
}
 if(message.channel.id === config.TWT){
  let channel = message.guild.channels.cache.get(config.TWT_LOGS) 
  if(!message.attachments.first()){ 
    let twtlogs = new Discord.MessageEmbed()
    .setTitle("TWT LOGS")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `${message.content}`)
    .setColor("#277ecd")
    .setTimestamp()
    .setFooter("Twt made by Fuel#5292")
    channel.send(twtlogs);
  }

  if(!message.content){
      let channel2 = message.guild.channels.cache.get(config.TWT_LOGS) 
      let twtlogs2 = new Discord.MessageEmbed()
      .setTitle("TWT LOGS")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `NULL`)
    .setImage(message.attachments.first().proxyURL)
    .setTimestamp()
    .setColor("#277ecd")
    .setFooter("Twt made by Fuel#5292")
     channel2.send(twtlogs2)
    } 
    
    
    else if(message.content, message.attachments.first()){
      let channel3 = message.guild.channels.cache.get(config.TWT_LOGS) 
      let twtlogs3 = new Discord.MessageEmbed()
      .setTitle("DARKNET LOGS")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `${message.content}`)
    .setImage(message.attachments.first().proxyURL)
    .setTimestamp()
    .setColor("#277ecd")
    .setFooter("Twt made by Fuel#5292")
    channel3.send(twtlogs3)
    }


  
  } 

})












//////////////////////////////////////////DARKCHAT//////////////////////////////////////




client.on('message', async message => {
  if(message.author.bot) return;

if(message.channel.id === config.DARKNET){ 
  message.channel.send(message.content, message.attachments.first())
  message.delete({ timeout: 100 })
  }
  if(message.channel.id === config.DARKNET){ 
    let darkchannel = message.guild.channels.cache.get(config.DARKNET_LOGS) 
    if(!message.attachments.first()){ 
      let darkembed = new Discord.MessageEmbed()
      .setTitle("DARKNET LOGS")
      .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `${message.content}`)
    .setTimestamp()
    .setFooter("Dark net logs made by Fuel#5292")
    darkchannel.send(darkembed)
    }
    
    if(!message.content){
      let darkchannel2 = message.guild.channels.cache.get(config.DARKNET_LOGS) 
      let darkembed2 = new Discord.MessageEmbed()
      .setTitle("DARKNET LOGS")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `NULL`)
    .setImage(message.attachments.first().proxyURL)
    .setTimestamp()
    .setFooter("Dark net logs made by Fuel#5292")
    darkchannel2.send(darkembed2)
    }
    else if(message.content, message.attachments.first()){
      let darkchannel3 = message.guild.channels.cache.get(config.DARKNET_LOGS) 
      let darkembed3 = new Discord.MessageEmbed()
      .setTitle("DARKNET LOGS")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `${message.content}`)
    .setImage(message.attachments.first().proxyURL)
    .setTimestamp()
    .setFooter("Dark net logs made by Fuel#5292")
    darkchannel3.send(darkembed3)
    }
  } 
     
});



///////////////////////////////////////////////INSTAGRAM//////////////////////////////////







client.on("message", message =>{
  if (message.author.bot) return;
  if (message.channel.id === config.INSTA){
  if(!message.attachments.first()){  
          message.delete();
          const InstagramexampleEmbed = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor('#fc0066')
          .setDescription("" + message.content + "")
          .setImage()
          .setFooter('Instagram', 'https://cdn.discordapp.com/attachments/790844941525319710/813125111367991296/283-2831746_insta-icon-instagram.png')
          message.channel.send(InstagramexampleEmbed);
  

  }
}
  if (message.author.bot) return;
  if (message.channel.id === config.INSTA){
  if(!message.content){  
          message.delete();
          const InstagramexampleEmbed2 = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor('#fc0066')
          .setImage(message.attachments.first().proxyURL)
          .setFooter('Instagram', 'https://cdn.discordapp.com/attachments/790844941525319710/813125111367991296/283-2831746_insta-icon-instagram.png')
          message.channel.send(InstagramexampleEmbed2);
  

  }
}
  else if (message.author.bot) return;
  if (message.channel.id === config.INSTA){
  if (message.content, message.attachments.first()){ 
          message.delete();
          const InstagramexampleEmbed3 = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor('#fc0066s')
          .setDescription("" + message.content + "")
          .setImage(message.attachments.first().proxyURL)
          .setFooter('Instagram', 'https://cdn.discordapp.com/attachments/790844941525319710/813125111367991296/283-2831746_insta-icon-instagram.png')
          message.channel.send(InstagramexampleEmbed3);
  

  }
}
 if(message.channel.id === config.INSTA){
  let Instagramchannel = message.guild.channels.cache.get(config.INSTA_LOGS) 
  if(!message.attachments.first()){ 
    let Instagramlogs = new Discord.MessageEmbed()
    .setTitle("INSTAGRAM LOGS")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `${message.content}`)
    .setColor("#fc0066")
    .setTimestamp()
    .setFooter("Instagram made by Fuel#5292")
    Instagramchannel.send(Instagramlogs);
  }

  if(!message.content){
      let Instagramchannel2 = message.guild.channels.cache.get(config.INSTA_LOGS) 
      let Instagramlogs2 = new Discord.MessageEmbed()
      .setTitle("INSTAGRAM LOGS")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `NULL`)
    .setImage(message.attachments.first().proxyURL)
    .setTimestamp()
    .setColor("#fc0066")
    .setFooter("Instagram made by Fuel#5292")
    Instagramchannel2.send(Instagramlogs2)
    } 
    
    
    else if(message.content, message.attachments.first()){
      let Instagramchannel3 = message.guild.channels.cache.get(config.INSTA_LOGS) 
      let Instagramlogs3 = new Discord.MessageEmbed()
      .setTitle("INSTAGRAM LOGS")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `${message.content}`)
    .setImage(message.attachments.first().proxyURL)
    .setTimestamp()
    .setColor("#fc0066")
    .setFooter("Instagram made by Fuel#5292")
    Instagramchannel3.send(Instagramlogs3)
    }


  
  } 

})

///////////////////////// Car.gr ///////////////////////
client.on("message", message =>{
  if (message.author.bot) return;
  if (message.channel.id === config.cargr){
  if(!message.attachments.first()){  
          message.delete();
          const exampleEmbed = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor('#004e95')
          .setDescription("" + message.content + "")
          .setImage()
          .setFooter('CAR.GR', 'https://cdn.discordapp.com/attachments/898283813652811777/930845781018173490/Car.gr-discord.png')
          message.channel.send(exampleEmbed);
  

  }
}
  if (message.author.bot) return;
  if (message.channel.id === config.cargr){
  if(!message.content){  
          message.delete();
          const exampleEmbed2 = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor('#004e95')
          .setImage(message.attachments.first().proxyURL)
          .setFooter('CAR.GR', 'https://cdn.discordapp.com/attachments/898283813652811777/930845781018173490/Car.gr-discord.png')
          message.channel.send(exampleEmbed2);
  

  }
}
  else if (message.author.bot) return;
  if (message.channel.id === config.cargr){
  if (message.content, message.attachments.first()){ 
          message.delete();
          const exampleEmbed3 = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setColor('#004e95')
          .setDescription("" + message.content + "")
          .setImage(message.attachments.first().proxyURL)
          .setFooter('CAR.GR', 'https://cdn.discordapp.com/attachments/898283813652811777/930845781018173490/Car.gr-discord.png')
          message.channel.send(exampleEmbed3);
  

  }
}
 if(message.channel.id === config.cargr){ 
  let channel = message.guild.channels.cache.get(config.cargr_logs) 
  if(!message.attachments.first()){ 
    let cargrlogs = new Discord.MessageEmbed()
    .setTitle("car.gr logs")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `${message.content}`)
    .setColor("#004e95")
    .setTimestamp()
    .setFooter("car.gr logs")
    channel.send(cargrlogs);
  }

  if(!message.content){
      let channel2 = message.guild.channels.cache.get(config.cargr_logs) 
      let cargrlogs = new Discord.MessageEmbed()
      .setTitle("car.gr logs")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `NULL`)
    .setImage(message.attachments.first().proxyURL)
    .setTimestamp()
    .setColor("#004e95")
    .setFooter("car.gr logs")
     channel2.send(cargrlogs2)
    } 
    
    
    else if(message.content, message.attachments.first()){
      let channel3 = message.guild.channels.cache.get(config.cargr_logs)
      let cargrlogs3 = new Discord.MessageEmbed()
      .setTitle("DARKNET LOGS")
    .addField("Author:", `${message.author.tag}`)
    .addField("Message:", `${message.content}`)
    .setImage(message.attachments.first().proxyURL)
    .setTimestamp()
    .setColor("#004e95")
    .setFooter("car.gr logs")
    channel3.send(cargrlogs3)
    }


  
  } 

})








client.login(config.BOT_TOKEN);