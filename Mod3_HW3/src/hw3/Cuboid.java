package hw3;

public class Cuboid extends Rectangle{

    private double height;

    public Cuboid(double width, double length, double height) {

        super(width, length);

        if(height < 0) {
            this.height = 0;
        } else {
            this.height = height;
        }
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getVolume() {
        return height*this.getArea();
    }

    @Override
    public String toString(){
        return String.format("Cuboid:{width:%s, length:%s, height:%s}",this.getWidth(),this.getLength(),height);
    }

}
