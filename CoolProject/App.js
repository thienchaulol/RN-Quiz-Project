import React, { Component } from 'react';
import { NativeModules, StyleSheet, 
  TouchableOpacity, Text, View, Image} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon'; //Custom library - https://www.npmjs.com/package/react-native-confetti-cannon

let handleSomeKindOfEvent = () => {
  this.explosion && this.explosion.start();
};

const randomNumber = Math.floor(Math.random() * 7); //0 to 6
const buttonNames = ["J-Hope","Jin", "Jungkook","Park Ji-min","RM", "Suga","V"];

const YourApp = () => {
  return (
    <View style={styles.myViewStyle}>
      <ConfettiCannon
          count={200}
          origin={{x: 100, y: 100}}
          autoStart={false}
          ref={ref => (this.explosion = ref)}
      />
      <Text style={styles.coolText}>
        GUESS THE BTS MEMBER.
      </Text>
      <Image source={dynamicImage()} style={styles.myImages} />
        <View style={styles.controlSpace}>
          {createSevenButtonsFam()}
        </View>
      <Text style={styles.coolText}>🙌😳💯🎉😃☀️🕺</Text>
    </View>
  );
}

const dynamicImage = () => {
  switch (randomNumber) {
    case 0:
      return require("./images/J-Hope.jpeg")
    case 1:
      return require("./images/Jin.jpeg")
    case 2:
      return require("./images/Jungkook.jpeg")
    case 3:
      return require("./images/Park Ji-min.jpeg")
    case 4:
      return require("./images/RM.jpeg")
    case 5:
      return require("./images/Suga.jpeg")
    case 6:
      return require("./images/V.jpeg")
  }
}

//randomizes names of BTS members
const createSevenButtonsFam = () => {
  const views = [];
  var arrayList = []; //
  while(arrayList.length != 7){
    const rand = Math.floor(Math.random() * 7); //0 to 6
    if(arrayList.indexOf(rand) != -1) continue; //if random num is present, reroll
    arrayList.push(rand); //else push and add element to arrayList
    views.push(
      <TouchableOpacity
        style={styles.myCoolButton}
        onPress={()=>{checkPicture(rand)}}
      >
        <Text>{buttonNames[rand]}</Text>
      </TouchableOpacity>
      );
  } // % buttons are created. 
  return views;
}

const checkPicture = (num) =>{
  if(num == randomNumber){
    handleSomeKindOfEvent();
    setTimeout(function(){
      NativeModules.DevSettings.reload();
    }, 5000);
  } else {
    //..do sad face fading
  }
}

const styles = StyleSheet.create({
  myViewStyle: { backgroundColor: "#42b6f5", flex: 1, justifyContent: "center", alignItems: "center" },
  myCoolButton:{
    alignItems: "center",
    backgroundColor: "#a173c7",
    padding: 10, //new
    width:'40%', 
    marginBottom: 20,
    marginTop:20,
    marginRight: 12,
    marginLeft: 12,
    borderRadius: 10
  },
  controlSpace: { //new
    justifyContent: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5F5F5',
    marginLeft:20,
    marginRight: 20,
  },
  myImages:{ //new
    width: "25%",
    height: "25%",
    marginBottom: 20,
    borderRadius: 10
  },
  coolText:{ //new
    fontSize:36,
    fontWeight:"bold",
    marginBottom: 20,
  }
});

export default YourApp;

