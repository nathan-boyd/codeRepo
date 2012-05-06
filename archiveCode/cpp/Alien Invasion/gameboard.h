#ifndef GAMEBOARD_H
#define GAMEBOARD_H

#include <QtGui>

#include <sprite.h>

class Sprite;

class GameBoard : public QGraphicsScene{ // inherits from QGraphicsScene

     Q_OBJECT //QT Macro

public:

  Sprite *ship;
  std::vector<Sprite*> AlienList;

  GameBoard();
  void paintEvent(QPaintEvent *);
  void keyPressEvent(QKeyEvent * event); 
  void RandFire();
  void EndGame(bool);

  int getScore();
  void setScore(int);
  int getLives();
  void setLives(int);
  
public slots:
  void AlienFire();
  void RemoveThis(QGraphicsItem*);

protected:
  void advance(int step);

private:
  int GameScore;
  int Lives;
  QGraphicsTextItem *scoreLabel;
  QGraphicsTextItem *lifeLabel;

};//end class def

#endif
