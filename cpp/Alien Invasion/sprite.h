#ifndef SPRITE_H
#define SPRITE_H

#include <QtGui>

class Sprite : public QObject, public QGraphicsItem   { //Sprite Inherits from QGraphicsItem and QObject

  Q_OBJECT  //runs QObject macro

public:
  Sprite();                          //Constructor
  
  QRectF boundingRect() const;       //Virtual Functions required by QT
  QPainterPath shape() const;
  void paint(QPainter *painter, const QStyleOptionGraphicsItem *option, QWidget *widget); //QT required virtual method

  void MoveShip(int);                //Called only for ship sprite

  QString getType();
  void setType(QString);             //QString is thread safe

  int getDY();
  void setDY(int);

  int getDX();
  void setDX(int);

protected:
  void advance(int step);

signals:
  void RandFire();
  void RemoveThis(QGraphicsItem*);

private:
  QString  myName;
  int dx;
  int dy;

  QPainterPath Border;
  QColor color;

};

#endif
