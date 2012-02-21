#include <SoftwareSerial.h>
#include <TinyGPS.h>                 

TinyGPS gps;
SoftwareSerial gpsPort(9, 255);            // GPS RX wire to pin 6
int heatSwitchPin = 5;                     // heat switch

int red = 11;
int green = 13;

void setup() {
  Serial.begin(9600);
  gpsPort.begin(4800);
  
  pinMode(heatSwitchPin, OUTPUT);  //Make HSW (Pin7) an output
  pinMode(13, OUTPUT);     
  pinMode(11, OUTPUT); 

}

void blinkAndWait(int port, int duration){
  digitalWrite(port, HIGH);   // set the LED on
  delay(duration / 2);  
  digitalWrite(port, LOW);   // set the LED off
  delay(duration / 2);   
}

int getGas(){
  int inByte = analogRead(0);
  return inByte;
}

void gpsInit(){    
  bool newdata = false;
  unsigned long start = millis();

  // Update every 1 seconds
  while (millis() - start < 1000) {
    if (feedgps()) {
      newdata = true;
    }//end if
  }
  if (newdata) {
    gpsdump(gps);
  } 
  else {
   Serial.print("GPS Fail ");
  }//end else
}//end function

// Get and process GPS data
void gpsdump(TinyGPS &gps) 
{
  float lat, lon;
  unsigned long fixAge, time, date;
  gps.f_get_position(&lat, &lon, &fixAge);
  gps.get_datetime(&date, &time, &fixAge);
  Serial.print(time);
  Serial.print(", ");
  Serial.print(date);
  Serial.print(", ");
  Serial.print(lat, 4); 
  Serial.print(", "); 
  Serial.print(lon, 4);
  Serial.print(", "); 
}//end function

// Feed data as it becomes available 
bool feedgps() {
  while (gpsPort.available()) {
    if (gps.encode(gpsPort.read())){
      return true;
    }//end if
  }//end while
  return false;
}//end function

void loop()
{
  
  int counter = 0;
  
  while(counter < 60)
  {
    
    digitalWrite(green, HIGH);   // set the LED on   
    digitalWrite(heatSwitchPin, HIGH);  //Set HSW (which turns on the CO heater element
    
    gpsInit();
    
    if(counter <= 4 ){

      Serial.print(counter);
      Serial.println("/150, WARMUP");
      
    }//end if
    
    else if(counter >= 5){
      Serial.print(counter);      
      Serial.print("/150, MEASUREMENT,");
      Serial.println(getGas());
       
    }//end else if    
   
    counter ++;
    
  }//end while
  
  digitalWrite(green, LOW);   // set the LED on  
  digitalWrite(red, HIGH);   // set the LED on
  
  while(counter >= 60 && counter < 150)
  {
    digitalWrite(red, HIGH);   // set the LED on   
    digitalWrite(heatSwitchPin, LOW);
    
    gpsInit();

    Serial.print(counter);
    Serial.println("/150, PURGE");
  
    counter++;
    
  }//end while
  
  digitalWrite(red, LOW);   // set the LED on   
  
}//end loop

  

  
  


