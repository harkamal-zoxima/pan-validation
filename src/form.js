import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput, Button, Paragraph} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function Form() {
  const [pan, setPan] = React.useState('');
  const [gst, setGst] = React.useState('');
  const [imageSource, setImageSource] = React.useState('');
  const [inputMessage, setInputMessage] = useState('');

  const message = {
    panMissing: 'Please enter PAN',
    gstMissing: 'Please enter GST number',
    isPanNumber: 'It it a PAN number',
    isMobileNumber: 'It is a Mobile number',
    validation: 'All the fields are mandatory',
    imageValidation: 'Please upload an image of PAN for KYC',
    successfull: 'KYC form submitted successfully',
  };

  const options = {
    title: 'Pick an image',
    storageOptions: {
      skipBackup: true,
      path: 'image',
    },
  };

  const openImagePicker = () => {
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setImageSource(source);
        console.log(source);
      }
    });
    // launchImageLibrary(options, response => {
    //     if (response.didCancel) {
    //       console.log('User cancelled image picker');
    //     } else if (response.error) {
    //       console.log('ImagePicker Error: ', response.error);
    //     } else if (response.customButton) {
    //       console.log('User tapped custom button: ', response.customButton);
    //     } else {
    //       const source = {uri: response.uri};
    //       setImageSource(source);
    //       console.log(source);
    //     }
    //   })
  };

  const validateField = () => {
    if (!pan) {
      alert(message.panMissing);
      return false;
    } else if (!gst) {
      alert(message.gstMissing);
      return false;
    } else if (!imageSource) {
      alert(message.imageValidation);
      return false;
    } else {
      return true;
    }
  };

  const formSubmitted = () => {
    if (validateField()) {
      alert(message.successfull);
    }
  };

  function isNumeric(num) {
    return !isNaN(num);
  }

  const setPanNumber = text => {
    if (pan.length === 4) {
      isNumeric(text)
        ? setInputMessage('It is a Mobile number')
        : setInputMessage('It is a PAN number');
      setPan(text);
    } else {
      setPan(text);
    }
  };

  console.log('length of input', pan.length);

  return (
    <View style={{marginTop: 200, width: '70%', margin: 60}}>
      {console.log(pan)}
      <Paragraph>{inputMessage}</Paragraph>
      <TextInput
        label="PAN Or Phone Number"
        value={pan}
        onChangeText={text => setPanNumber(text)}
      />

      <TextInput
        label="GST"
        value={gst}
        onChangeText={text => setGst(text)}
        style={{marginTop: 20}}
      />

      <Button
        icon="camera"
        mode="outlined"
        onPress={openImagePicker}
        style={{marginTop: 20}}>
        Upload Image
      </Button>

      <Button mode="contained" onPress={formSubmitted} style={{marginTop: 20}}>
        Submit for KYC
      </Button>
    </View>
  );
}

export default Form;
