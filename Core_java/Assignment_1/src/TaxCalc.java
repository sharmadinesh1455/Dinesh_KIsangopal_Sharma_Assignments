import java.util.Scanner;

public class TaxCalc {
	public static void main(String[] args)
	{
		
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter your Income : ");
		double income = scan.nextDouble();
		double tax=0;
		if(income<=180000)
		{
			tax= 0;
			System.out.println("Your Tax = "+ tax);
		}
		
		else if(income<=300000)
		{
			tax= income * 0.1;
			
		}
		
		else if(income<=500000)
		{
			tax= income * 0.2;
			
		}
		else if(income<=1000000)
		{
			tax= income * 0.3;
			
		}
		else if(income<0)
		{
			System.out.println("Invalid Income");
		}
		System.out.println("Your Tax : "+ tax);
		scan.close();
	}

}
