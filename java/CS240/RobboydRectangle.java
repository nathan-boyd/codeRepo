

/**
 * @author Robert Boyd Oct 2, 2010
 *         robboyd@iupui.edu
 *	  	   robert.n.boyd@gmail.com
 *
 * 		   CS 230
 */

import java.awt.*;
import javax.swing.*;
import java.beans.*;
import java.text.*;

@SuppressWarnings("serial")
public class RobboydRectangle extends JPanel implements PropertyChangeListener {

	//Values for the fields
    double width;
    double height;

    //Labels for the WHA calculator
    JLabel widthLabel;
    JLabel heightLabel;
    JLabel areaLabel;

    //Strings for the labels
    String widthString = "Width: ";
    String heightString = "Height: ";
    String areaString = "Area: ";

    //Fields for data entry
    JFormattedTextField widthField;
    JFormattedTextField heightField;
    JFormattedTextField areaField;

    //Formats numbers
    NumberFormat widthFormat;
    NumberFormat heightFormat;
    NumberFormat areaFormat;
   
    public RobboydRectangle() {
    	           	
        //new double equals class Rectangle method calcArea  parameters width height
        double area = Rectangle.calcArea(width,height);

        //initialize the  W H A labels
        //WHA is width height area
        widthLabel = new JLabel(widthString);
        heightLabel = new JLabel(heightString);
        areaLabel = new JLabel(areaString);
    
        //Initialize and format text fields.
        widthField = new JFormattedTextField(widthFormat);
        widthField.setValue(new Double(width));
        widthField.setColumns(10);
        widthField.addPropertyChangeListener("value", this);

        heightField = new JFormattedTextField(heightFormat);
        heightField.setValue(new Double(height));
        heightField.setColumns(10);
        heightField.addPropertyChangeListener("value", this);

        areaField = new JFormattedTextField();
        areaField.setValue(new Integer((int) area));
        areaField.setColumns(10);
        areaField.addPropertyChangeListener("value", this);

        //Assigns a label to each field
        widthLabel.setLabelFor(widthField);
        heightLabel.setLabelFor(heightField);
        areaLabel.setLabelFor(areaField);

        //put W H A labels in a panel.
        JPanel labelPane = new JPanel(new GridLayout(0,1));
        labelPane.add(widthLabel);
        labelPane.add(heightLabel);
        labelPane.add(areaLabel);

        //Layout the calc Area text fields in a panel.
        JPanel fieldPane = new JPanel(new GridLayout(0,1));
        fieldPane.add(widthField);
        fieldPane.add(heightField);
        fieldPane.add(areaField);
  
        //adds border 
        setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        
        //add panes
        add(labelPane);
        add(fieldPane);

    }

    	
    //called when a text field's value is changed
    public void propertyChange(PropertyChangeEvent event) {
    	
    	//initializes an object called source
    	//source = the source of the change
        Object source = event.getSource();
        
        if (source == widthField) {
            width = ((Number)widthField.getValue()).doubleValue();
        } 
        else if (source == heightField) {
            height = ((Number)heightField.getValue()).doubleValue();
        } 

        double area = Rectangle.calcArea(width, height);
        areaField.setValue(new Double(area));
    }


    public static void createAndShowGUI() {
    	
        //Create and set up the window.
        JFrame areaFrame = new JFrame("Area Calculator");
        areaFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //add the contents of textField to window
        areaFrame.add(new RobboydRectangle());

        //Display the window.
        
        areaFrame.setLocation(400, 400);
        areaFrame.pack();
        areaFrame.setVisible(true);
    }

    public static void main(String[] args) {
    	
    	// *****Comented out but still works
//    	
//    	Rectangle myRec = new Rectangle();
//    	
//    	System.out.println("Values of Pre-defined Rectangles.\n");
//    	
//		myRec = new Rectangle(3d, 5d);
//		System.out.println(myRec.getValues());
//		
//		myRec = new Rectangle();
//		System.out.println(myRec.getValues());
//		
//		myRec = new Rectangle(Rectangle.SMALL());
//		System.out.println(myRec.getValues());
//		
//		myRec = new Rectangle(Rectangle.MEDIUM());
//		System.out.println(myRec.getValues());
//		
//		myRec = new Rectangle(Rectangle.LARGE());
//		System.out.println(myRec.getValues());System.out.println(Rectangle.calcPerimeter(5d, 6d));
//		System.out.println(Rectangle.calcArea(5d, 6d));
    	
    	// *****Comented out but still works

    	createAndShowGUI();
    	recWindow.createAndShowGUI();
    }//end method
}//end class

@SuppressWarnings("serial")
class recWindow extends JPanel{//makes labels 

	public recWindow(){
		
	    JLabel recLabel1;
	    JLabel recLabel2;
	    JLabel recLabel3;
	    JLabel recLabel4;
	    JLabel recLabel5;
	    
		Rectangle myRec = new Rectangle();
		
		myRec = new Rectangle(3d, 5d);
		recLabel1 = new JLabel((String)myRec.getValues());
		myRec = new Rectangle();
		recLabel2 = new JLabel((String)myRec.getValues());
		myRec = new Rectangle(Rectangle.SMALL());
		recLabel3 = new JLabel((String)myRec.getValues());
		myRec = new Rectangle(Rectangle.MEDIUM());
		recLabel4 = new JLabel((String)myRec.getValues());
		myRec = new Rectangle(Rectangle.LARGE());
		recLabel5 = new JLabel((String)myRec.getValues());
		
        JPanel recPane = new JPanel(new GridLayout(0,1));
        
        recPane.add(recLabel1);
        recPane.add(recLabel2);
        recPane.add(recLabel3);
        recPane.add(recLabel4);
        recPane.add(recLabel5);
        
        setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        add(recPane, BorderLayout.CENTER);
	}
	
    public static void createAndShowGUI() {
    	
        //Create and set up the window.
        JFrame recFrame = new JFrame("Rectangle Frame");
        recFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        recFrame.add(new recWindow());

        //Display the window.
        
        recFrame.setLocation(400, 200);
        recFrame.pack();
        recFrame.setVisible(true);
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
		//setter method
		width = i;
	}
	public void setHeight(int i) {
		//setter method
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
    	Rectangle.height = 10;
    	Rectangle.width = 5;
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


