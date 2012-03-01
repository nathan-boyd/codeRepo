


import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class SwingButton {
  public static void main(String args[]) {
    JFrame frame = new JFrame("Title");
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    final JButton button = new JButton("Press Here");
    ActionListener action = new ActionListener() {
      Runnable changer = new Runnable() {
        public void run() {
          String label = button.getText();
          button.setText(label + "0");
        }
      };
      Runnable sleeper = new Runnable() {
        public void run() {
          try {
            Thread.sleep(3000);
            EventQueue.invokeLater(changer);
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
        }
      };
      public void actionPerformed(ActionEvent e) {
        System.out.println("Clicked");
        new Thread(sleeper).start();
      }
    };
    button.addActionListener(action);
    frame.add(button, BorderLayout.CENTER);
    frame.setSize(200, 200);
    frame.setVisible(true);
  }
}
