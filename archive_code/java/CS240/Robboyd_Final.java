import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.util.*;
import java.io.*;

import javax.swing.*;
import javax.swing.Timer;
import javax.swing.border.Border;

/**
 * @author Robert Boyd Oct 27, 2010
 *         robboyd@iupui.edu
 *	  	   robert.n.boyd@gmail.com
 *
 * 		   CS 230
 */

public class Robboyd_Final implements ActionListener, MouseListener{
	
	boolean victory = false;								// true if game is won	
	
	static int iXdim;										//X dimension of the board
	int iYdim;
	int iTime;		
	int iFlagsPlaced = 0;									// Flags placed on the board
	int iMinesOnField;										// iMines left on the field	
	int iMines;												// iMines that are / will be on the field
    int iMinesToPlace;										// iMines that have not been placed on field yet
	
	JPanel menuPanel, gamePanel, aboutPanel, typePanel, scorePanel;
			
	JButton BnewGame = new JButton("new");
	JButton Babout = new JButton("about");
	JButton Bback = new JButton("go back");
	JButton Bsmall = new JButton("small");
	JButton Bmedium = new JButton("medium");
	JButton Blarge = new JButton("large");
	JButton Bsave = new JButton("save score");
	JButton Bscore = new JButton("load scores");
	
	JLabel LminesRemaining = new JLabel("Mines Left "+iMinesOnField, JLabel.CENTER);
	JLabel LtimePassed = new JLabel(iTime + " Seconds", JLabel.CENTER);
	JLabel LnameInput = new JLabel("Enter your name", JLabel.CENTER);
	
	JEditorPane LhighScores = new JEditorPane();
	JEditorPane Linstructions = new JEditorPane();
	
	JScrollPane PscorePane = new JScrollPane(LhighScores);
	JScrollPane PinstructionPane = new JScrollPane(Linstructions);
	
	JTextField TuserName = new JTextField ();
		
	JFrame gameFrame = new JFrame("Minesweeper");
	JFrame newGameFrame  = new JFrame("New Game");
	JFrame aboutFrame = new JFrame("About");
	JFrame saveScoreFrame =  new JFrame("Save Score");
	JFrame highScoreFrame = new JFrame("Scores");
	
	Tile[][] arTile;										// array of the Tile Objects				
	JButton[][] arButton;									// array of buttons that corresponds with the tile array
	
	Timer clock;
	
	ImageIcon scaredFace, happyFace;
			
	public static void main(String[] args) {

		Robboyd_Final playingBoard = new Robboyd_Final(10,10);
	}//end method
	
	public Robboyd_Final(int dimensionX, int dimensionY){ 
		
		iXdim = dimensionX;									// X dimension of the board
		iYdim = dimensionY;									// Y dimension of the board
				
		arTile = new Tile[dimensionX][dimensionY];			//tile Objects
		arButton = new JButton[dimensionX][dimensionY];		//JButtons that correspond to Tile Objects
		
		BnewGame.addActionListener(this);
		Babout.addActionListener(this);
		Bsmall.addActionListener(this);
		Bmedium.addActionListener(this);
		Blarge.addActionListener(this);
		Bsave.addActionListener(this);
		Bback.addActionListener(this);	
		Bscore.addActionListener(this);	
		    
	    if(iXdim == 10) {									// scales iMines to appropriate board size
	    	iMinesToPlace = 5;
	    } //end if
	    
	    else if(iXdim == 15) {
	    	iMinesToPlace = 15;
	    }// end else
	    
	    else if(iXdim == 20) {
	    	iMinesToPlace = 40;
	    }// end else
	    	    
		iMinesOnField = iMinesToPlace;										
		iMines = iMinesToPlace;
		LminesRemaining.setText("Mines "+iMinesOnField);	

		for(int row = 0; row<dimensionX; row++) {			//fill tile array with tiles
			for(int col = 0; col<dimensionY; col++) {
				
				Tile tile = new Tile();						
				arTile[row][col] = tile;
			}//end for
		}//end for
			
	    Random randomGenerator = new Random();
		
	    while(iMinesToPlace > 0) { 	
	    																	//randomly assign iMines to tiles in the array field
		    int randomIntX = randomGenerator.nextInt(dimensionX);
		    int randomIntY = randomGenerator.nextInt(dimensionY);

		    if(arTile[randomIntX][randomIntY].GetMine() == false ){
		    	
		    	arTile[randomIntX][randomIntY].SetMine(true);	    
			    iMinesToPlace--;	

				for(int i = -1; i<=1; i++) {								// update the surrounding tiles prox numbers
					for(int j = -1; j<=1; j++) {							// nested for starting with -1 circles the tile
						try {
							arTile[randomIntX+i][randomIntY+j].IncProxNumber();
						}// end try											// used a try here because you could be attempting to 
																			// assign prox numbers to non-existant tiles
						catch(Exception e) {				
						}// end catch
					}//end for
				}//end for	    
		    }//end if
	    }//end while
	    
		gameFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		aboutFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		saveScoreFrame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);		
		highScoreFrame.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
		
		PscorePane.setBackground(Color.WHITE);

		scorePanel = new JPanel();										// Record User name and Display time completed
		scorePanel.setBackground(Color.WHITE);
		scorePanel.setLayout(new GridLayout(1,0));
		scorePanel.add(LnameInput);
		scorePanel.add(TuserName);
		scorePanel.add(Bsave);
		
		menuPanel = new JPanel();										//Control Panel
		menuPanel.setBackground(Color.WHITE);
		menuPanel.setLayout(new GridLayout(0,4));
		menuPanel.add(BnewGame);
		menuPanel.add(LminesRemaining);
		menuPanel.add(LtimePassed);
		menuPanel.add(Babout);
		
		typePanel = new JPanel();										// panel for hanging board sizes on
		typePanel.setBackground(Color.WHITE);
		typePanel.setLayout(new GridLayout(0,3));
		typePanel.add(Bsmall);
		typePanel.add(Bmedium);
		typePanel.add(Blarge);
		
		aboutPanel = new JPanel();										// panel for about items
		aboutPanel.setBackground(Color.white);
		aboutPanel.setLayout(new FlowLayout());
		aboutPanel.add(Bback);
		aboutPanel.add(Bscore);
		aboutPanel.add(Linstructions);
	
		gamePanel = new JPanel();										// panel for the buttons / tiles
		gamePanel.setBackground(Color.WHITE);
		gamePanel.setLayout(new GridLayout(iXdim, iYdim));
		
		for(int row = 0;row<dimensionX; row++) {                        //populate the button array with buttons
			for(int col = 0;col<dimensionY; col++) {
				
				arButton[row][col] = new JButton(" ");					// new button
				
				String name = (Integer.toString(row)+" "+Integer.toString(col)); // make row and col into strings
				
				arButton[row][col].setName(name);						// set the name to a string of row and col
				
				Font font = new Font("SansSerif", Font.CENTER_BASELINE, 12);
				arButton[row][col].setFont(font);
				arButton[row][col].setBackground (Color.GRAY);			//IMPORTANT TO STREES THESE ARE BUTTONS NOT
																		// TILE OBJECTS
				if(arTile[row][col].GetProxNumber() == 1) {
					arButton[row][col].setForeground(Color.blue);
				}// end if
				else if(arTile[row][col].GetProxNumber() == 2) {
					arButton[row][col].setForeground(Color.magenta);	// associate button proximity with a color
				}// end else
				else{
					arButton[row][col].setForeground(Color.red);
				}//end else

				arButton[row][col].addActionListener(this);         
				arButton[row][col].addMouseListener(this);
				
				Border raisedbevel = BorderFactory.createRaisedBevelBorder();      // might be new to people
				arButton[row][col].setBorder(raisedbevel);						   // just makes a pretty boarder
																				   // part of JAVAX.swing
				gamePanel.add(arButton[row][col]);					
			}//end for
		}//end for
		
		if(Robboyd_Final.GetDimensionX() == 10) {				// custom sizes for each board
			gameFrame.setSize(350,380);							// automatic sizing made for ugly boards
			gameFrame.setLocation(400,200);
		}// end if

		if(Robboyd_Final.GetDimensionX() == 15) {
			gameFrame.setSize(600,600);
			gameFrame.setLocation(400,100);
		}// end if
		
		if(Robboyd_Final.GetDimensionX() == 20) {				// Frequently used X dimension as a delimeter
			gameFrame.setSize(700,700);
			gameFrame.setLocation(400,50);
		}// end if
		
		gameFrame.getContentPane().add(menuPanel, BorderLayout.NORTH);
		gameFrame.getContentPane().add(gamePanel, BorderLayout.CENTER);
		gameFrame.setVisible(true);

		aboutFrame.getContentPane().add(aboutPanel, BorderLayout.CENTER);
		aboutFrame.setSize(600,75);
		aboutFrame.setLocation(400,100);
		aboutFrame.setVisible(false);
		
		newGameFrame.getContentPane().add(typePanel, BorderLayout.SOUTH);
		newGameFrame.setSize(350,60);
		newGameFrame.setLocation(800,200);
		newGameFrame.setVisible(false);
		
		saveScoreFrame.getContentPane().add(scorePanel, BorderLayout.NORTH);
		saveScoreFrame.setLocation(300,600);
		saveScoreFrame.setVisible(false);
		
		highScoreFrame.getContentPane().add(PscorePane);
		highScoreFrame.setSize(250, 400);
		highScoreFrame.setLocation(100,200);
		highScoreFrame.setVisible(false);
	
	    clock = new Timer(1000, this);
		clock.start();										// Start the clock this will be the mechinisim to record
	}//end constructor										// scoring				

	public static int GetDimensionX() {						// some getters
		return iXdim;
	}//end method
	
	public int GetDimensionY() {
		return iYdim;
	}//end method
	
	public void actionPerformed(ActionEvent event) {
		
		if (event.getSource() == clock) {						// placed clock at the top to save cycles
																// does this work as intended?
			iTime++;
			LtimePassed.setText(iTime + " Seconds");
			
			String name = ("You completed the board in " + iTime + " Seconds");         // would like to make this not hit unless the game is won
			LnameInput.setText(name);													//update SaveFrame Name Label
			saveScoreFrame.pack();
		}// end if
		
		else if (event.getSource() == Bscore){
			LoadScore();
		}// else if
		  
		else if (event.getSource() == Bsave){
			saveScoreFrame.setVisible(false); 
			String name = TuserName.getText();
			SaveScore(name);
		}//end else
		
		else if (event.getSource() == BnewGame){
			NewGame();
		}//end if
		
		else if(event.getSource() == Babout){
			gameFrame.setVisible(false);
			aboutFrame.setVisible(true);
		}//end else
		
		else if(event.getSource() == Bback) {
			aboutFrame.setVisible(false);
			gameFrame.setVisible(true);
		}//end else
		
		else if(event.getSource() == Bsmall) {
			gameFrame.setVisible(false);
			newGameFrame.setVisible(false);
			Robboyd_Final playingBoard = new Robboyd_Final(10,10);
		}//end else
		
		else if(event.getSource() == Bmedium) {
			gameFrame.setVisible(false);
			newGameFrame.setVisible(false);
			Robboyd_Final playingBoard = new Robboyd_Final(15,15);
		}//end else
		
		else if(event.getSource() == Blarge) {
			gameFrame.setVisible(false);
			newGameFrame.setVisible(false);
			Robboyd_Final playingBoard = new Robboyd_Final(20,20);
		}//end else
		
		else {

			JButton source = (JButton) event.getSource();  					 // BLEGH this is ugly
																			 // casting the event to a button
			String buttonName = (source.getName());
			
			int location = buttonName.indexOf(" ");                         // determine where the  " " is in the name string
			int length = buttonName.length();
			
			String xString = buttonName.substring(0, location);				//cut the source string into x and y cords
			String yString = buttonName.substring(location, length);
			int ySpace = yString.indexOf(" ");
			int yLength = yString.length();
			yString = yString.substring(ySpace+1, yLength);
						
			int x = Integer.parseInt(xString);
			int y = Integer.parseInt(yString);
						
			if(arTile[x][y].GetMine()) {									// clicked a mine
				EndGame();
			}//end if
			
			else if(arTile[x][y].GetProxNumber() > 0) {
				int proxInt = arTile[x][y].GetProxNumber();
				String proxString = Integer.toString(proxInt);
				arButton[x][y].setBackground(Color.white);
				arButton[x][y].setLabel(proxString);
			}//end if
			
			else {
				
				ScanLine(x,y);

				for(int i = 0; i < iXdim / 3; i++) {						// check the borders for neighboring gray tiles
																			// non recursive border scan kind of weak still...		
					for(int j = 0; j<iXdim; j++) {							// and repeating the process 10 is effective but rude
						
						for(int k = 0; k<iXdim; k++) {
							
							if(arButton[k][j].getBackground() == Color.WHITE) {
								ScanLine(k,j);
							}//end if
						}// end for
					}// end for
				}// end for
			}//end else
		}// end else
	}//end method
	
private void ScanLine(int x, int y) {											// Scan line Flood Fill I would rather call it FLOOD FILL because it sounds cooler but would be inaccurate
	
	int x1 = x;
	int y1 = y;

	while(Clicked(x1,y1)) {														
		while(Clicked(x1,y1)) {
			
			x1--;
		}//end while
		
		x1=x;
		y1++;	
	}//end while
	
	x1 = x;
	y1 = y;
	
	while(Clicked(x1,y1)) {														
		while(Clicked(x1,y1)) {
			
			y1--;
		}//end while
		
		y1=y;
		x1++;
	}//end while
	
	x1 = x;
	y1 = y;
	
	while(Clicked(x1,y1)) {														
		while(Clicked(x1,y1)) {
			
			x1++;	
			
		}//end while
		x1=x;
		y1++;
		
	}//end while
	
	x1 = x;
	y1 = y;
	
	while(Clicked(x1,y1)) {														
		while(Clicked(x1,y1)) {
			
			y1--;	
		}//end while
		
		y1=y;
		x1--;	
		
	}//end while
}//end method

	public boolean Clicked(int x, int y) {											// uncover the JButton
																					// I think this method is significant because it returns a boolean which is very helpful in my scanline (Flood) Worker
		if(x > iXdim  || y > iYdim) {
			return false;
		}// end if
		
		boolean clear = false;
		
		try {
			
			if(arTile[x][y].GetProxNumber() > 0 && arTile[x][y].GetMine() == false) {
				int proxInt = arTile[x][y].GetProxNumber();
				String proxString = Integer.toString(proxInt);
				arButton[x][y].setBackground(Color.white);
				arButton[x][y].setText(proxString);
						
				clear = false;
			}//end if	
			
			else if (arTile[x][y].GetMine() == false
					&& arTile[x][y].GetFlag() == false
						&& arTile[x][y].GetProxNumber() == 0){
				
				arButton[x][y].setBackground (Color.white);
				arButton[x][y].setText(" ");
				
				clear = true;
			}// end else if
		}//end try
		
		catch(Exception e){
			return false;
		}//end catch

		return clear;
	}//end method
	
	public void NewGame() {
		newGameFrame.setVisible(true);
	}//end method
	
	public void mouseClicked (MouseEvent event){
		
		JButton source = (JButton) event.getSource(); 
			
		String buttonName = (source.getName());
			
		int location = buttonName.indexOf(" ");
		int length = buttonName.length();
		
		String xString = buttonName.substring(0, location);						//cuts the string into the integer cords
		String yString = buttonName.substring(location, length);				// same code as found in the action listner need to implement a new method to do this for this handlers
		int ySpace = yString.indexOf(" ");
		int yLength = yString.length();
		yString = yString.substring(ySpace+1, yLength);
					
		int x = Integer.parseInt(xString);
		int y = Integer.parseInt(yString);
					
		if (event.getButton () == event.BUTTON3) {	
										
			if (arTile[x][y].GetFlag()){ // if the tile is flagged then remove the flag
				arButton[x][y].setLabel(" ");
				arButton[x][y].setForeground(Color.black);
				arButton[x][y].setBackground(Color.gray);	
				arTile[x][y].SetFlag(false);
				iMinesOnField++;
				iFlagsPlaced--;
				LminesRemaining.setText("Mines Left "+iMinesOnField);
			}// end if
			
			else if(arTile[x][y].GetFlag() ==false && arButton[x][y].getBackground() != Color.white){ // if the tile is not flagged then place a flag
				arButton[x][y].setLabel("|>");
				arButton[x][y].setForeground(Color.red);						
				arTile[x][y].SetFlag(true);
				iMinesOnField--;
				iFlagsPlaced++;
				LminesRemaining.setText("Mines Left "+iMinesOnField);	
				
				int winCount = 0;
				
				for(int row = 0;row<iXdim;row++) {							// checks to determine if mined tiles are flagged
					for(int col = 0;col<iXdim;col++) {
						if(arTile[row][col].GetFlag() == true && arTile[row][col].GetMine() == true) {
							winCount++;
							if(winCount == iMines) {
								victory = true;
								EndGame();
							}//end if
						}// end if
					}// end for
				}//end for
			}// end else
		}//end if
    }// end method
	
    public void mouseEntered (MouseEvent e){						// need these to get MouseEvent to function w/o error
    }// end method

    public void mouseExited (MouseEvent e){
    }// end method

    public void mousePressed (MouseEvent e){
    }// end method

    public void mouseReleased (MouseEvent e){
    }// end method
    
    public void SaveScore(String TuserName){
    	
    	String sBoardSize = "";
    	
    	if(Robboyd_Final.GetDimensionX() == 10) {
    		
    		sBoardSize = "Small Board ";
    	}// end if
    	else if(Robboyd_Final.GetDimensionX() == 15) {
    		
    		sBoardSize = "Medium Board ";
    	}//end else
    	else if(Robboyd_Final.GetDimensionX() == 20) {
    		
    		sBoardSize = "Large Board ";	
    	} // end else

    	try {
    	    FileWriter outFile = new FileWriter("HighScore.txt", true);
    	    PrintWriter output = new PrintWriter(outFile);
    		    
    	    output.println(TuserName + " " + sBoardSize + iTime + " Seconds" );
    	    output.close();
    	} // end try
    	
    	catch (IOException e) {} // end try
    	
    	LoadScore();
    }// end method
    
    public void LoadScore(){
    	
    	String Scores = "";
    	
    	try {
    		File theFile = new File("HighScore.txt");
    		Scanner input = new Scanner (theFile);
    		while(input.hasNext()) {
    			Scores += input.nextLine() + "\n";
    		}//end while		
    	}// end try
    	
    	catch(Exception e) {
    		
    		Scores = "No high scores are available";	
    	}// end catch
    	    	
    	LhighScores.setText(Scores);
    	highScoreFrame.setVisible(true);
    }// end method
	
	public void EndGame() {
		
		Animation endGame = new Animation(victory);
		
		clock.stop();
		
		if (victory) {
			
			saveScoreFrame.setVisible(true);
			
		}// end if
		
		else {
			for(int x = 0;x<iXdim;x++) {
				for(int y = 0;y<iXdim;y++) {
					
					if(arTile[x][y].GetMine()) {									// uncover mine
						arButton[x][y].setBackground(Color.red);
					}//end if
					
					Clicked(x,y);

				}//end for
			}//end for	
		}//end else
		
		NewGame();
	}//end method
}//end class

class Tile{ 
	
	boolean mine = false;
	boolean flag;
	int proxNumber;

	public void SetMine(boolean mineL) {				//setters getters and incrementers
		mine = mineL;
	}//end method
	
	public void SetFlag(boolean flagL) {
		flag = flagL;
	}//end method
	
	public void IncProxNumber() {
		proxNumber++;
	}//end method
	
	public boolean GetMine() {
		return mine;
	}//end method
	
	public boolean GetFlag() {
		return flag;
	}//end method
	
	public int GetProxNumber() {
		return proxNumber;
	}//end method
}//end class

@SuppressWarnings("serial")
class Animation extends JFrame implements ActionListener{
	boolean Victory;
	ImageIcon lose, win;
    Timer clock = new Timer(50, this);
        
    int x = 2;
    int y = 25;
    int Dy = 3;
    int Dx = 3;
    
    int Xdim = 725;
    int Ydim = 500;

	public Animation(boolean victory){
		
		super();
		
		if(victory == true) {
			Victory  = true;									// update Global var
		}
		
		else{
			Victory = false;
		}
		
		try {
			win = new ImageIcon("win.jpg");
			lose = new ImageIcon("lose.jpg");
		}
		catch (Exception e) {
			System.out.println("File not found");
		}

		this.setSize(Xdim, Ydim);
		this.setVisible(true);
		this.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
		
		clock.start();
	} // end constructor
	
	public void actionPerformed(ActionEvent event) {
		
		if(x > 150 || x < 2) {
			Dx*=-1;
		}
		if(y > 150 || y < 25) {
			Dy*=-1;
		}// end else
		
		x+=Dx;
		y+=Dy;
		repaint();
	}// end method
  
	public void paint(Graphics g) {
		
		super.paint(g);
		
		if (Victory) {
			g.drawImage(win.getImage(), x, y, null);
		}// end else
		else {
			g.drawImage(lose.getImage(), x, y, null);
		}// end else
	} // end method
}// end class

