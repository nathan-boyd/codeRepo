package Assignments;

import java.*;
import java.awt.Container;
import java.awt.GridLayout;
import java.awt.event.KeyEvent;
import java.beans.PropertyChangeEvent;
import java.beans.PropertyChangeListener;

import javax.swing.*;


public class Robboyd_Rectanglealt extends JFrame implements PropertyChangeListener{

	public static void main(String[] args){	
		
		windowMaker();
		
//		Rectangle myRec;
 

//		
//		myRec = new Rectangle(3d, 5d);
//		System.out.println(myRec.getValues());
//		//updates myRec to a new Rectangle Object then prints information about that object
//		
//		myRec = new Rectangle();
//		System.out.println(myRec.getValues());
//		//updates myRec to a new Rectangle Object then prints information about that object
//	
//		myRec = new Rectangle(Rectangle.SMALL());
//		System.out.println(myRec.getValues());
//		//updates myRec to a new Rectangle Object then prints information about that object
//	
//		myRec = new Rectangle(Rectangle.MEDIUM());
//		System.out.println(myRec.getValues());
//		//updates myRec to a new Rectangle Object then prints information about that object
//	
//		myRec = new Rectangle(Rectangle.LARGE());
//		System.out.println(myRec.getValues());System.out.println(Rectangle.calcPerimeter(5d, 6d));
//		//updates myRec to a new Rectangle Object then prints information about that object
//	
//		System.out.println(Rectangle.calcArea(5d, 6d));
//		//utilizes the calcArea to determine the area of a a rectangle with suppled parameters
 	}//end main
	
    private static void windowMaker() {
    	
        
//        Rectangle myRec2 = new Rectangle();
//        Rectangle myRec3 = new Rectangle(Rectangle.SMALL());
//        Rectangle myRec4 = new Rectangle(Rectangle.MEDIUM());
//        Rectangle myRec5 = new Rectangle(Rectangle.LARGE());

    	double widthInput = 0;
    	double heightInput = 0;
    	double area = 0;
    	
        JFrame frame = new JFrame("Rectangle");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        Container content = frame.getContentPane();
        content.setLayout(new GridLayout(0,1));
        
        Rectangle myRec = new Rectangle(3d, 5d);
        JLabel label1 = new JLabel((String)myRec.getValues());
        content.add(label1);
                
        myRec = new Rectangle();
        JLabel label2 = new JLabel((String)myRec.getValues());
        frame.getContentPane().add(label2);
        content.add(label2);
                
        myRec = new Rectangle(Rectangle.SMALL());
        JLabel label3 = new JLabel((String)myRec.getValues());
        content.add(label3);
                
        myRec = new Rectangle(Rectangle.MEDIUM());
        JLabel label4 = new JLabel((String)myRec.getValues());
        content.add(label4);
        
        myRec = new Rectangle(Rectangle.LARGE());
        JLabel label5 = new JLabel((String)myRec.getValues());
        content.add(label5);
        
        Container textPanel = frame.getContentPane();
        textPanel.setLayout(new GridLayout(0,1));

        JButton calc = new JButton("Calculate Area");
        textPanel.add(calc);

        frame.setSize(500,600);
        frame.setVisible(true);
    }


	@Override
	public void propertyChange(PropertyChangeEvent evt) {
		// FIXME Auto-generated method stub
		
	}

 
}


class Rectangle{
	
	private static double height;
	private static double width;

	public String getValues() {
		String value = "Width: " +width+ ", Height: "+ height +", Area: "+ calcArea(width,height)+", Perimeter: "+calcPerimeter(width, height);
		return value;
	}//Constructs a string containing the results of specific myRec instances
	
	public void setWidth(int i) {
		width = i;
	}
	public void setHeight(int i) {
		height = i;
	}
	
	public String getWidth() {
		String value = "";
		value += width;
		return value;
	}//returns width as a String value
	
	public String getHeight() {
		String value = "";
		value += height;
		return value;
	}//returns Height as a String value
	
    public Rectangle(){
    	Rectangle.height = 99;
    	Rectangle.width = 99;
    	//be sure to change when finished
    } //catches throw with no parameters

	public Rectangle(Object incObj) {
		}//catches a thrown object. this is what you didnt understand

	public static Object SMALL(){
		Rectangle myRec = new Rectangle();
    	Rectangle.height = 3;
    	Rectangle.width = 2;
    	return myRec;
	}// builds a small rectangle then returns it

  	public static Object MEDIUM() {
		Rectangle myRec = new Rectangle();
    	Rectangle.height = 10;
    	Rectangle.width = 5;
    	return myRec;
  	}// builds a medium rectangle then returns it
  	
  	public static Object LARGE() {
		Rectangle myRec = new Rectangle();
    	Rectangle.height = 15;
    	Rectangle.width = 10;
    	return myRec;
  	}// builds a large rectangle then returns it

	public  Rectangle(int height, int width){
		Rectangle.height = height;
		Rectangle.width = width;
	}//catches thrown ints

	public Rectangle(double height, double width) {
		Rectangle.height = height;
		Rectangle.width = width;
	}//catches thrown doubles
   
	public Rectangle(float height, float width){
        	Rectangle.height = height;
    		Rectangle.width = width;
        } //constructor catches thrown float

	public static double calcPerimeter(double d, double e) {
		double perimeter = (2*d) + (2*e);
		return perimeter;
	}//calculates perimeter of given object rectangle
	
	public String calcPerimeter2() {
		String perimeter ="";
		perimeter += (2*width) + (2*height);
		return perimeter;	
	}//calculates perimeter then returns it as a string value

	public static double calcArea(double d, double e) {
		double calcArea = d*e;
		return calcArea;
	}//calculates the area then returns it as string value
	
	public  String calcArea2(){
		String area = "";
		area += width * height;
		return area;
	}
}





