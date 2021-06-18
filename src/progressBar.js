import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ProgressBar, Colors, Paragraph} from 'react-native-paper';



function ProgressDashboard() {
  let dateNow = new Date().getSeconds();
  const [progressss1, setProgressss1] = useState(0);
  const [progressss2, setProgressss2] = useState(0);
  const [divergingTrain, setDivergingTrain] = useState();
  const [diversionOver,setDiversionOver] = useState(dateNow);

  // console.log("diversion over",diversionOver);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const vel1 = getRndInteger(80, 90);
  const vel2 = getRndInteger(80, 90);

  useEffect(() => {
    const timeOver = dateNow + 15;
    console.log("over time",timeOver);
    setDiversionOver(timeOver);
  }, []);


  useEffect(() => {
    if (vel1 > vel2) {
      // setAlarmColor(Colors.red900);
      setDivergingTrain('first');
    } else {
      // setAlarmColor(Colors.green900);
      setDivergingTrain('second');
    }
  }, []);

  useEffect(() => {
    // const interval = setInterval(() => {
      setProgressss1(vel1 / 100);
      setProgressss2(vel2 / 100);
      
      // console.log(vel1, vel2);
    // }, 1000);
    // return () => clearInterval(interval);
  }, [progressss1, progressss2, divergingTrain]);

  console.log("time now",dateNow);

  return (
    <View>
      <View style={{marginTop: 100, width: '70%', margin: 60}}>
        <Paragraph>Train 1 (SPEED={vel1}km/hr)</Paragraph>
        <ProgressBar
          progress={progressss1}
          color={divergingTrain === 'first' && diversionOver>=dateNow ? Colors.red900 : Colors.green900}
        />
      </View>
      <View style={{marginTop: -20, width: '70%', margin: 60}}>
        <Paragraph>Train 2 (SPEED={vel2}km/hr)</Paragraph>
        <ProgressBar
          progress={progressss2}
          color={divergingTrain === 'second' && diversionOver>=dateNow ? Colors.red900 : Colors.green900}
        />
      </View>
    </View>
  );
}

export default ProgressDashboard;
