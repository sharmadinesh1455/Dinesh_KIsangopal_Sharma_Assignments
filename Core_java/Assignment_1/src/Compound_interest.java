import java.util.Scanner;

public class Compound_interest {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		System.out.println("enter the Principle Amount: ");
		int p= scan.nextInt();
		
		System.out.println("enter the Time: ");
		int t= scan.nextInt();
		System.out.println("enter the Rate: ");
		double r= scan.nextDouble();
		System.out.println("enter the Number of Times f interest: ");
		int n= scan.nextInt();
		
		double amount= compound(p, t, r, n);
		System.out.println("Compound Interest Amound : " + amount);
		double Cinterest = amount - p;
		System.out.println("Compound Interest: " + Cinterest);
		scan.close();
	}

	public static double compound(int p, int t, double r, int n) 
	{
		return  p * Math.pow(1 + (r / n), n * t);
		
	}
	
}