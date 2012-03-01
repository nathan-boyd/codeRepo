

/**
 * @author Robert Boyd Oct 5, 2010
 *         robboyd@iupui.edu
 *	  	   robert.n.boyd@gmail.com
 *
 * 		   CS 230
 */

import java.awt.*;
import java.awt.event.*;
import java.text.*;
import javax.swing.*;

// Calculates the Body mass index of a person based on their height and weight
public class Robboyd_BMICalculator implements ActionListener {
	
	//instance variables
	JFrame bmiFrame;
	//main Frame
	JPanel westPanel, eastPanel;
	//Text fields for data entry
	JTextField heightField, weightField;
	// Mixture of unchanging and dynamic labels
	JLabel heightLabel, weightLabel, BMILabel, BMICatagory;
	//button with action listener
	JButton calcBMI;
	
	public static void main(String[] args) {
		@SuppressWarnings("unused")
		Robboyd_BMICalculator calculator = new Robboyd_BMICalculator();
		//calculator gets new Robboyd_BMICalc
	}//end main

	public Robboyd_BMICalculator() {	
		// Create the frame and container.
		bmiFrame = new JFrame("Calculate your Body Mass Index");
		
		// Exit when the window is closed.
		bmiFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		//panels for data entry
		westPanel = new JPanel();
		westPanel.setBackground(Color.WHITE);
		westPanel.setLayout(new GridLayout(2,2));
	
		
		eastPanel = new JPanel();
		eastPanel.setBackground(Color.WHITE);
		eastPanel.setLayout(new GridLayout(3,1));

		// Add the Labels and TextFields.
		addLabels();
	
		// Add the panel to the frame.
		bmiFrame.getContentPane().add(westPanel, BorderLayout.WEST);
		bmiFrame.getContentPane().add(eastPanel, BorderLayout.CENTER);
		
		// Show the Frame.
		bmiFrame.setSize(350,120);
//		bmiFrame.pack();
		bmiFrame.setLocation(500,300);
		bmiFrame.setVisible(true);
	}//end constructor method

	// Create and add the Labels and Text Fields widgets for Frame.
	private void addLabels() {
		
		heightLabel = new JLabel("Height in inches: ");
		weightLabel = new JLabel("Weight in pounds: ");

		heightField = new JTextField();
		heightField.setText("72");
		
		weightField = new JTextField();
		weightField.setText("180");
		
		// Listen to events from Convert button.
		calcBMI = new JButton("Calculate BMI");
		calcBMI.setBackground(Color.green);
		calcBMI.addActionListener(this);
		
		BMILabel = new JLabel("", SwingConstants.CENTER);
		BMICatagory = new JLabel("", SwingConstants.CENTER);
		
		// Add Labels and Fields to container.
		westPanel.add(heightLabel);
		westPanel.add(heightField);
		   
		westPanel.add(weightLabel);
		westPanel.add(weightField);
		    
		eastPanel.add(calcBMI);
		eastPanel.add(BMILabel);
		eastPanel.add(BMICatagory);
	}//end method

	public void actionPerformed(ActionEvent event) {
		//gets the updated values of height and weight and calculates BMI then displays the information
		//by updating the JLabels
		
		//initializes a new float equal to the value entered in xField
		float height = (float) ((Double.parseDouble(heightField.getText())));
		float weight = (float) ((Double.parseDouble(weightField.getText())));
		
		//calculates BMI
		float BMI = (weight*703)/(height*height);
		    
		String catagory = "";
		
		//checks the BMI and compares it to the categories
			if(BMI<18.5) {
			catagory = "underweight";
				}//end if
			if(BMI>18.5) {
				if(BMI<24.9) {
					catagory = "normal";
				}//end nested if
			}//end if
			if(BMI>24.9) {
				if(BMI<30) {
					catagory = "overweight";
				}//end nested if
			}//end if
			if(BMI>30) {
			catagory = "obese";
			}//end if
	    
		//initializes a new decimal format
		DecimalFormat dec = new DecimalFormat("###.##");
		
		//updates the BMI label and formats it according to dec
		BMILabel.setText("Your BMI is "+dec.format(BMI));
		BMICatagory.setText("That is " +catagory);
	}//end method
}//end class