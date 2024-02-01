import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { AppBar, Container, Toolbar, Grid } from "@mui/material";

const Main = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [color, setColor] = useState('Green')
  const [ancho, setAncho] = useState('100px');
  const [alto, setAlto] = useState('100px');
  const moveSphere = (direction, pixeles) => {
    switch (direction) {
      case 'UP':
        setPosition({ ...position, top: position.top - pixeles });
        console.log("arriba");
        break;
      case 'DOWN':
        setPosition({ ...position, top: position.top + pixeles });
        console.log("abajo");
        break;
      case 'LEFT':
        setPosition({ ...position, left: position.left - pixeles });
        console.log("izquierda");
        break;
      case 'RIGHT':
        setPosition({ ...position, left: position.left + pixeles });
        console.log("derecha");
        break;
      default:
        break;
    }
  };
  const commands = [
    {
      command: 'Cyan.',
      callback: () => {
        setColor('cyan')
      }
    },
    {
      command: 'Aqua.',
      callback: () => {
        setColor('aqua')
      }
    },
    {
      command: 'Purple.',
      callback: () => {
        setColor('purple')
      }
    },
    {
      command: 'Blue.',
      callback: () => {
        setColor('blue')
      }
    },
    {
      command: 'Invisible.',
      callback: () => {
        setColor('white')
      }
    },
    {
      command: 'Big.',
      callback: () => {
        setAncho('200px')
        setAlto('200px');
      }
    },
    {
      command: 'Small.',
      callback: () => {
        setAncho('50px')
        setAlto('50px');
      }
    },
    {
      command: 'Medium.',
      callback: () => {
        setAncho('100px')
        setAlto('100px');
      }
    },
    {
      command: 'Big.',
      callback: () => {
        setAncho('200px')
        setAlto('200px');
      }
    },
    {
      command: 'Reset.',
      callback: () => {
        setPosition({ top: 0, left: 0 });
        setColor('green');
        setAncho('100px');
        setAlto('100px');
      }
    },
    {
      command: 'Enlarge.',
      callback: () => {
        setAncho('150px');
        setAlto('150px');
      }
    },
    {
      command: 'Shrink.',
      callback: () => {
        setAncho('75px');
        setAlto('75px');
      }
    },
    {
      command: 'Move up.',
      callback: () => {
        moveSphere('UP', 30);
      }
    },
    {
      command: 'Move down.',
      callback: () => {
        moveSphere('DOWN', 30);
      }
    },
    {
      command: 'Move left.',
      callback: () => {
        moveSphere('LEFT', 30);
      }
    },
    {
      command: 'Move right.',
      callback: () => {
        moveSphere('RIGHT', 30);
      }
    },
  ];



  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={8} md={8} lg={8}>
                </Grid>
                <Grid item xs={4} md={4} lg={4}>
                  <h3 style={{ textAlign: 'right' }}>El proyecto del nene</h3>
                </Grid>
                <Grid item xs={2} md={2} lg={1}>
                  <h5 style={{ textAlign: 'right' }}>Comandos:</h5>
                </Grid>
                <Grid item xs={12} md={4} lg={12}>
                  <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <button onClick={SpeechRecognition.stopListening}>Stop</button>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div
          style={{
            width: ancho,
            height: alto,
            backgroundColor: color,
            borderRadius: '50%',
            position: 'relative',
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        />
      </div>
    </>
  );
};

export default Main;