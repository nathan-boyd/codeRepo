int incomingByte = 0;

void setup() {
  Serial.begin(4800);	
}

void loop() {
  if (Serial.available() > 0) {
    incomingByte = Serial.read();
    Serial.write(incomingByte);
  }
}

