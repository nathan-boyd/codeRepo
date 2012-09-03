#include "sprite.h"
#include "gameboard.h"

#include <QtGui>

int main(int argc, char **argv){

  QApplication app(argc, argv);
  qsrand(QTime(0,0,0).secsTo(QTime::currentTime())); //seed with Qrand thread safe

  GameBoard Board;                                   //custom class inherits from QGraphics Scene
  Board.setSceneRect(-300, -300, 750, 550);
  Board.setItemIndexMethod(QGraphicsScene::NoIndex);

  QGraphicsView view(&Board); 
  view.setRenderHint(QPainter::Antialiasing);

  view.setCacheMode(QGraphicsView::CacheBackground);
  view.setViewportUpdateMode(QGraphicsView::BoundingRectViewportUpdate);
  view.setWindowTitle(QT_TRANSLATE_NOOP(QGraphicsView, "Alien Invasion"));
  view.resize(1200, 700);
  view.show();

  QTimer timer;
  QObject::connect(&timer, SIGNAL(timeout()), &Board, SLOT(advance())); //Connects time with advance slot in board /  sprite
  timer.start(1000 / 25);

  return app.exec();
}//end main
