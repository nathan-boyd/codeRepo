//Constants and static members

public class CircDemo8 {
  public static void main(String args[]){
      System.out.println(Circle8.getCircumference(1f));
      Circle8 myCirc = new Circle8(Circle8.LARGE);
      System.out.println(myCirc.getRadiusString());
      System.out.println(myCirc.getCircumference());
  }  // end main 
} // end class def

class Circle8 extends Circle7 {
    private final float PI = 3.14159f;
    public static final float LARGE = 10f;
    public static final float MEDIUM = 6f;
    public static final float SMALL = 3f;
    
    public Circle8(float radius){
        super(radius);
    } // end constructor
    
    public float getCircumference(){
        return 2 * this.PI * this.getRadius(); 
    } // end getCircumference
    
    public static double getCircumference(float radius){
        return 2 * Math.PI * radius;
    } // end getCircumference static version
} // end Circle8
