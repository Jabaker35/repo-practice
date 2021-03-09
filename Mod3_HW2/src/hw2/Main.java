package hw2;

import java.util.ArrayList;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        List<String> stringList = new ArrayList<String>(
                List.of("New","to","array","functions"));

        System.out.println("copied: "+ Collections.copyList(stringList));
        System.out.println("sliced (2,3): "+ Collections.sliceList(stringList, 2,3));
        Collections.swap(stringList, 1,4);
        System.out.println("swapped (1,4): "+ stringList);
        System.out.println("is stringList empty? "+ Collections.isEmpty(stringList));

        List<Integer> fibList = Arrays.asList(1, 1, 3, 5, 8);
        Collections.replaceSecondWith(fibList, 100);
        System.out.println("replaced second element: "+fibList);

        Set<Double> harmonic = new HashSet<Double>();
        System.out.println("is set empty? "+ Collections.getSetSize(harmonic));

        harmonic.addAll(List.of(1.0, 0.5, 0.33, 0.25, 0.2, 0.1667));
        System.out.println("set is of size: "+ Collections.getSetSize(harmonic));
        System.out.println("printing out set...");
        Collections.printAllElements(harmonic);

        Set<Double> halvingFromTwo = new HashSet<Double>();
        halvingFromTwo.addAll(List.of(2.0, 1.0, 0.5, 0.25, 0.125));

        System.out.println("harmonic intersect halvingFromTwo: "+
                Collections.intersect(harmonic, halvingFromTwo));

    }

}
