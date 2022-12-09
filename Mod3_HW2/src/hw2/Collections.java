package hw2;

import java.util.*;

public class Collections {
    //Copy one array list into another
    public static <A> List<A> copyList(List<A> list) {
        List<A> copy = new ArrayList<A>();
        for (A item : list) {
            copy.add(item);
        }
        return copy;
    }

    //Extract a portion of a array list
    public static <A> List<A> sliceList(List<A> list, int fromIndex) {
        List<A> slice = new ArrayList<A>();
        if (fromIndex >= list.size()){
            return slice;
        }

        for (int i=fromIndex; i<list.size(); i++) {
            slice.add(list.get(i));
        }
        return slice;
    }

    //Swap two elements in an array list
    public static <A> void swap(List<A> list, int index1, int index2) {
            A temp = list.get(index1);
            list.set(index1, list.get(index2));
            list.set(index2, temp);
    }

    //Test an array list is empty or not
    public static <A> boolean isEmpty(List<A> list) {
        return list.size() == 0;
    }

    //Replace the second element of a ArrayList with the specified element
    public static <A> void replaceSecondWith(List<A> list, A replacement) {
        if (list.size()>=2) {
            list.set(1, replacement);
        }
    }

    //Trim the capacity of an array list the current list size
    public static <A> void trimCapacity(ArrayList<A> list) {
        list.trimToSize();
    }

    //Hash set is empty or not
    public static <A> boolean isEmpty(Set<A> set) {
        return set.isEmpty();
    }

    //Number of elements in a hash set
    public static <A> int getSetSize(Set<A> set){
        return set.size();
    }

    //Iterate through all elements in a hash list
    public static <A> void printAllElements(Set<A> set) {
        for (A element: set) {
            System.out.println("set Element: "+element);
        }
    }

    //Convert a hash set to an array
    public static <A> Object[] toPrimitiveArray(Set<A> set) {
        return set.toArray();
    }

    //Compare two sets and retain elements which are same on both sets
    public static <A> Set<A> intersect(Set<A> set1, Set<A> set2) {
        Set<A> intersect = new HashSet<A>();
        for (A element : set1) {
            if (set2.contains(element)) intersect.add(element);
        }
        return intersect;
    }

}