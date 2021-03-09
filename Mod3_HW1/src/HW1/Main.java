package HW1;

public class Main {
    public static void main(String[] args) throws Exception{
        System.out.println(getUp(true, 12));

        System.out.println(getUp(true, 4));
    }

    public static boolean getUp(boolean squawking, int currentHour) throws Exception{
        if(currentHour < 0 || currentHour > 23) {
            throw new Exception("Not a valid hour of the day");
        }

        if(squawking && currentHour < 6){
            return true;
        } else if (squawking && currentHour > 22) {
            return true;
        } else {
            return false;
        }
    }

}
