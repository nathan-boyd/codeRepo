#include "sprite.h"

#include <QtGui>

using namespace std;

Sprite::Sprite() : color(qrand() % 256, qrand() % 256, qrand() % 256) { // set the color constant
 
  setDX(-3);  //X movement per step
  setDY(0);   //Y movement per step

  QString myName = data(0).toString(); //Gather "demographics"
  setType(myName);

}//end method

QRectF Sprite::boundingRect() const { //QT required virtural method, allows for redrawing specific 
  return QRectF(-18,-10,50,50);       //regions as opposed to the entire screen
}//end method

QPainterPath Sprite::shape() const{ // QT required virtural method, allows for collision detection
  QPainterPath path;
  path.addRect(-10, -20, 20, 40);
  return path;
}//end method

void Sprite::paint(QPainter *painter, const QStyleOptionGraphicsItem *, QWidget *){ //Virtural function draws this

  QString myName = Sprite::myName;

  if(myName == "alien"){          // paint alien
    painter->setBrush(color);
    painter->drawRect(0,0,10,10);    
    painter->drawRect(20,0,10,10);   
    painter->drawRect(10,10,10,10);  
    painter->drawRect(10,-10,10,10);

  } else if(myName == "ship"){    // paint ship
    painter->setBrush(Qt::blue);
    painter->drawRect(0,0,10,20); 
    painter->drawRect(10,20,10,10);
    painter->drawRect(-10,20,10,10);

  } else if(myName == "spro"){    // paint ship projectile
    painter->setBrush(Qt::black);
    painter->drawEllipse(0,0,5,5);
  
  } else if(myName == "apro"){    // paint alien projectile
    painter->setBrush(Qt::red);
    painter->drawEllipse(0,0,5,5);

  }
}//end method

void Sprite::advance(int step){ // called by parent timer see main

  if(step != 1){
    return;
  }

  int rand = qrand() % 400;    // randoml 1 in 400 chance of firing
  if(rand == 1){               // qrand is a QT thread safe method
    emit RandFire();
  }
 
  QString myName = data(0).toString(); //Gather "demographics"
  QPointF myPos = pos();
  int x = myPos.x();
  int y = myPos.y();

  if ( y > 400 || y < -400){ //clean up sprites that get outside the bounds

    emit RemoveThis(this);

  }//end if

  if(myName == "alien" || myName == "ship"){

    if(collidesWithItem(this)){

      QList<QGraphicsItem *> list = collidingItems() ; //gets a list of colliding items on scene
      QGraphicsItem *item;    
      
      foreach(item, list){
	QString name = item->data(0).toString();
	
	if(myName == "alien" && name == "spro"){
	  emit RemoveThis(this);
	  emit RemoveThis(item);
	  return;
	
	} else if(myName == "ship" && name == "apro"){
	  emit RemoveThis(this);
	  emit RemoveThis(item);
	  return;

	}//end if
      }//end foreach
    }//end if
  }//end if 
 
  if(getType() == "alien"){  // Bounce off edges
    if (x < -500 || x > 600){
      int currentX = getDX();
      int currentY = getDY();

      currentX *= (-1); //change x
      currentY *= (-1);

      setDX(currentX);
      setDY(currentY);

      setPos(mapToParent(getDX(), getDY())); //place on scene references parent coords not local  
      return;
    }
  }//end if

  if(!step || getType() == "ship"){
    return;                                                   
  } else if(getType() == "alien"){
    setPos(mapToParent(getDX(), getDY()));  
  } else if(getType() == "spro"){
    setPos(mapToParent(0,-5));
  } else if(getType() == "apro"){
    setPos(mapToParent(0,+5));
  }

}//end method


void Sprite::MoveShip(int dir){

  if(Sprite::myName == "ship"){
    if(dir == 1){
       setPos(mapToParent(+7, 0));  
    } else if (dir == 0){
       setPos(mapToParent(-7, 0));  
    }//end else
  }//end if
}//end method


QString Sprite::getType(){
  return Sprite::myName;
}//end method

void Sprite::setType(QString type){
  Sprite::myName = type;
}//end method

int Sprite::getDX(){
  return dx;
}//end method

void Sprite::setDX(int temp){
  Sprite::dx = temp;
}//end method

int Sprite::getDY(){
  return dy;
}//end method

void Sprite::setDY(int temp){
  Sprite::dy = temp;
}//end method
