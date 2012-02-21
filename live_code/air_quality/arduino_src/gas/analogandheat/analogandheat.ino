#include <SoftwareSerial.h>

                                // software serial #1: TX = digital pin 2, RX = digital pin 3
SoftwareSerial portOne(9, 0);   // gpsPort
SoftwareSerial portTwo(7, 0);   // gasPort
int incomingByte = 0;
int heatSwitchPin =  5;         // heat switch
int counter = 0;

void setup() {
  Serial.begin(9600);	
  pinMode(heatSwitchPin, OUTPUT);  //Make HSW (Pin7) an output
  pinMode(13, OUTPUT);     
  pinMode(11, OUTPUT);   
  portOne.begin(4800);
  portTwo.begin(9600);  
}

void loop() {
  
  while(counter < 60)
  {
    digitalWrite(heatSwitchPin, HIGH);  //Set HSW (Pin7) low (which turns on the CO heater element)
    
    if(counter <= 4 ){

      Serial.print("MEASUREMENT PHASE ");
      Serial.print(counter);
      Serial.println(" WARMUP");
    }
    else if(counter > 4){
      
      incomingByte = analogRead(5);
      Serial.print("MEASUREMENT PHASE ");
      Serial.print(counter);
      Serial.print(" CO PPM ");
      Serial.println(incomingByte, DEC);
    }
    
    digitalWrite(13, HIGH);   // set the LED on
    delay(500);  
    digitalWrite(13, LOW);   // set the LED on
    delay(500);  
    counter++;
  }
  
  counter = 0;
  
  while(counter < 90)
  {

    digitalWrite(heatSwitchPin, LOW);
    Serial.print("PURGE PHASE ");
    Serial.println(counter);
    
    digitalWrite(11, HIGH);   // set the LED on
    delay(500);  
    digitalWrite(11, LOW);   // set the LED on
    delay(500); 
    
    counter++;
  }
  
  counter = 0;
  

}

