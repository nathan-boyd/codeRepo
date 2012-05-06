#include "gameboard.h" 		
#include "sprite.h"

#include <QtGui>

using namespace std;

GameBoard::GameBoard(){

  int SpriteCount = 48;         
  int iInitialX = -550;          
  int iInitialY = -400;          
  int iAlienCount = 1;
  
  setScore(0);
  setLives (3);

  //Populate Aliens
  for (int i = 0; i < SpriteCount; ++i) {
    if(iAlienCount % 12 == 1){                                       // Controls how many aliens are in each row
      iInitialY += 40;
      iInitialX = 0;
    }//end if

    Sprite *newSprite = new Sprite();
    connect(newSprite, SIGNAL(RandFire()), this, SLOT(AlienFire())); // Slots and Signals are QT methods that allow child objects to 
                                                                     // send signals to parent objects

    connect(newSprite, SIGNAL(RemoveThis(QGraphicsItem*)), this, SLOT(RemoveThis(QGraphicsItem*)));

    newSprite->setType("alien");            
    newSprite->setData(0, "alien");

    newSprite->setPos(iInitialX, iInitialY);
    addItem(newSprite);
    iInitialX += 50;				
    iAlienCount++;
    GameBoard::AlienList.push_back(newSprite); // adds the alien sprites to a list

  }//end for 	

  GameBoard::ship = new Sprite;                // Ship sprite
  connect(GameBoard::ship, SIGNAL(RemoveThis(QGraphicsItem*)), this, SLOT(RemoveThis(QGraphicsItem*)));
  GameBoard::ship->setData(0, "ship");
  GameBoard::ship->setType("ship");
  GameBoard::ship->setPos(0,250);
  addItem(GameBoard::ship); 

}//end method

void GameBoard::AlienFire(){                  // coneected to randfire signal in sprite

  int iAlienShooter = qrand() % 32;
  Sprite *newSprite = new Sprite;
  newSprite->setType("apro");
  newSprite->setData(0, "apro");
  QPointF cords = GameBoard::AlienList.at(iAlienShooter)->pos(); //makes the alien fire come from an alien on the list
  newSprite->setPos(cords);
  addItem(newSprite);     

}//end method

void GameBoard::RemoveThis(QGraphicsItem* item){ // takes a QGraphicsItem as a parameter

  QString myName = item->data(0).toString();

  if(myName == "alien"){
    int tempScore = getScore();
    tempScore += 100;
    setScore(tempScore);
  }// end if

  if(myName == "ship"){
    int tempLives = getLives();
    tempLives -= 1;
    setLives(tempLives);
    if (tempLives == 0){
      removeItem(item);
      EndGame(false);
    } // end if
  } // end if

  if(myName != "ship"){
    removeItem(item);
  } // end if

}//end method

void GameBoard::keyPressEvent(QKeyEvent *event){     

  if(GameBoard::ship->getType() == "ship"){

    if (event->key() == Qt::Key_Right){  
      GameBoard::ship->MoveShip(1);

    } else if (event->key() == Qt::Key_Left){  
      GameBoard::ship->MoveShip(0);      

    } else if (event->key() == Qt::Key_Space){

      int shotCount = 0;
      QGraphicsItem *item;    
      QList<QGraphicsItem *> fireControl = items();

      foreach(item, fireControl){ //Controls how many ship projectiles are on the screen
	QString myName = item->data(0).toString();
	if(myName == "spro"){
	  shotCount++;
	}//end if
      }//end foreach

      Sprite *projectile = new Sprite; //Moves the ship
      projectile->setType("spro");
      projectile->setData(0, "spro");
      projectile->setPos(GameBoard::ship->pos());
      addItem(projectile);
  
    }//end if
  }//end if
}//end method

void GameBoard::EndGame(bool win){

  removeItem(GameBoard::ship);
  QFont newFont("Courier", 50, QFont::Bold, true);
  QGraphicsTextItem *message;

  if(win){
    message = addText("You've Won");

  } else {
    message = addText("You've Lost");

  } //end else

    message->setPos(-100,-100);
    message->setFont(newFont);

}//end method


void GameBoard::setScore(int score){  //Sets score and updates the labels

  GameBoard::GameScore = score;
  QString tempScore = "Score ";
  QFont newFont("Courier", 30, QFont::Bold, true);
  tempScore.append(QString("%1").arg(score));

  if(score == 0){
    GameBoard::scoreLabel = addText(tempScore);
    scoreLabel->setPos(400, 275);
    scoreLabel->setFont(newFont);

  } else {
    GameBoard::scoreLabel->setPlainText(tempScore);
  } //end else

  if (getScore() == 4800){
    EndGame(true);
  } //end else

}//end method

int GameBoard::getScore(){
  return GameBoard::GameScore;
}//end method

void GameBoard::setLives(int lives){ //Sets lives and updates the labels

  GameBoard::Lives = lives;
  QString tempLives = "Lives ";
  QFont newFont("Courier", 30, QFont::Bold, true);
  tempLives.append(QString("%1").arg(lives));

  if(lives == 3){
    GameBoard::lifeLabel = addText(tempLives);
    lifeLabel->setPos(200, 275);
    lifeLabel->setFont(newFont);

  } else {
    GameBoard::lifeLabel->setPlainText(tempLives);
  } //end else

  if (getLives() == 0){
    EndGame(false);
  }//end else

}//end method

int GameBoard::getLives(){
  return GameBoard::Lives;
}//end method

